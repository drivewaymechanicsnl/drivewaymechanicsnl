const express = require('express')
const cors = require('cors')
const fs = require('fs/promises')
const path = require('path')

const app = express()
const PORT = process.env.PORT || 4000
const DATA_FILE = path.join(__dirname, '..', 'data', 'data.json')
const ADMIN_USERNAME = 'admin'
const ADMIN_PASSWORD = 'admin123'

app.use(cors())
app.use(express.json())

const requiredServiceKeys = ['basic', 'brakes', 'suspension', 'cooling', 'diagnostics', 'emergency']

async function readData() {
  const fileContent = await fs.readFile(DATA_FILE, 'utf8')
  return JSON.parse(fileContent)
}

async function writeData(data) {
  await fs.writeFile(DATA_FILE, JSON.stringify(data, null, 2), 'utf8')
}

function isAdminValid(username, password) {
  return username === ADMIN_USERNAME && password === ADMIN_PASSWORD
}

function validateSiteDataShape(data) {
  if (!data || typeof data !== 'object') return false
  if (!data.services || typeof data.services !== 'object') return false
  if (!data.contact || typeof data.contact !== 'object') return false
  if (!Array.isArray(data.inquiries) || !Array.isArray(data.images)) return false
  if (typeof data.about !== 'string') return false
  if (typeof data.contact.phone !== 'string' || typeof data.contact.hours !== 'string') return false

  return requiredServiceKeys.every((key) => Array.isArray(data.services[key]))
}

app.get('/api/data', async (_, response) => {
  try {
    const data = await readData()
    response.json(data)
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

    const data = await readData()
    const newInquiry = {
      id: `inq_${Date.now()}`,
      name: String(name).trim(),
      phone: String(phone).trim(),
      location: String(location).trim(),
      service: service ? String(service).trim() : '',
      issue: String(issue).trim(),
      timestamp: new Date().toISOString(),
    }

    data.inquiries.push(newInquiry)
    await writeData(data)

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

    await writeData(data)
    response.json({ success: true, data })
  } catch (error) {
    console.error('Failed to update site data:', error)
    response.status(500).json({ error: 'Unable to save admin updates.' })
  }
})

app.listen(PORT, () => {
  console.log(`Driveway Mechanics NL API running on http://localhost:${PORT}`)
})
