const express = require('express')
const cors = require('cors')
const fs = require('fs/promises')
const path = require('path')

const app = express()
const PORT = process.env.PORT || 4000
const DATA_FILE = path.join(__dirname, '..', 'data', 'data.json')
const INQUIRIES_FILE = path.join(__dirname, '..', 'data', 'inquiries.local.json')
const ADMIN_USERNAME = 'admin'
const ADMIN_PASSWORD = 'admin123'

app.use(cors())
app.use(express.json())

const requiredServiceKeys = ['basic', 'brakes', 'suspension', 'cooling', 'diagnostics', 'emergency']

async function readJsonFile(filePath, fallbackValue) {
  try {
    const fileContent = await fs.readFile(filePath, 'utf8')
    return JSON.parse(fileContent)
  } catch (error) {
    if (error.code === 'ENOENT') {
      return fallbackValue
    }

    throw error
  }
}

async function writeJsonFile(filePath, data) {
  await fs.writeFile(filePath, `${JSON.stringify(data, null, 2)}\n`, 'utf8')
}

async function readData() {
  const data = await readJsonFile(DATA_FILE, null)

  if (!data) {
    throw new Error('Site data file is missing.')
  }

  return {
    ...data,
    inquiries: Array.isArray(data.inquiries) ? data.inquiries : [],
  }
}

async function writeData(data) {
  await writeJsonFile(DATA_FILE, {
    ...data,
    inquiries: [],
  })
}

async function readInquiries() {
  return readJsonFile(INQUIRIES_FILE, [])
}

async function writeInquiries(inquiries) {
  await writeJsonFile(INQUIRIES_FILE, inquiries)
}

function isAdminValid(username, password) {
  return username === ADMIN_USERNAME && password === ADMIN_PASSWORD
}

function validateSiteDataShape(data) {
  if (!data || typeof data !== 'object') return false
  if (!data.services || typeof data.services !== 'object') return false
  if (!data.contact || typeof data.contact !== 'object') return false
  if (!Array.isArray(data.images)) return false
  if (typeof data.about !== 'string') return false
  if (typeof data.contact.phone !== 'string' || typeof data.contact.hours !== 'string') return false

  return requiredServiceKeys.every((key) => Array.isArray(data.services[key]))
}

app.get('/api/data', async (_, response) => {
  try {
    const data = await readData()
    response.json({
      ...data,
      inquiries: [],
    })
  } catch (error) {
    console.error('Failed to load data.json:', error)
    response.status(500).json({ error: 'Unable to load data.' })
  }
})

app.post('/api/inquiry', async (request, response) => {
  try {
    const { name, phone, location, service, issue } = request.body

    if (!name || !phone || !location || !issue) {
      return response.status(400).json({ error: 'All fields are required.' })
    }

    const inquiries = await readInquiries()
    const newInquiry = {
      id: `inq_${Date.now()}`,
      name: String(name).trim(),
      phone: String(phone).trim(),
      location: String(location).trim(),
      service: service ? String(service).trim() : '',
      issue: String(issue).trim(),
      timestamp: new Date().toISOString(),
    }

    inquiries.push(newInquiry)
    await writeInquiries(inquiries)

    console.log('NEW INQUIRY:')
    console.log(`Name: ${newInquiry.name}`)
    console.log(`Phone: ${newInquiry.phone}`)
    console.log(`Location: ${newInquiry.location}`)
    console.log(`Service: ${newInquiry.service || 'Not specified'}`)
    console.log(`Issue: ${newInquiry.issue}`)

    response.status(201).json({ success: true, message: 'Inquiry submitted successfully.' })
  } catch (error) {
    console.error('Failed to save inquiry:', error)
    response.status(500).json({ error: 'Unable to submit inquiry right now.' })
  }
})

app.post('/api/admin/login', (request, response) => {
  const { username, password } = request.body

  if (!isAdminValid(username, password)) {
    return response.status(401).json({ error: 'Invalid username or password.' })
  }

  response.json({ success: true })
})

app.put('/api/admin/update', async (request, response) => {
  try {
    const { username, password, data } = request.body

    if (!isAdminValid(username, password)) {
      return response.status(401).json({ error: 'Unauthorized admin update attempt.' })
    }

    if (!validateSiteDataShape(data)) {
      return response.status(400).json({ error: 'Invalid data format.' })
    }

    const nextData = {
      ...data,
      inquiries: [],
    }

    await writeData(nextData)
    response.json({ success: true, data: nextData })
  } catch (error) {
    console.error('Failed to update site data:', error)
    response.status(500).json({ error: 'Unable to save admin updates.' })
  }
})

app.listen(PORT, () => {
  console.log(`Driveway Mechanics NL API running on http://localhost:${PORT}`)
})
