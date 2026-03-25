export function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  const alignmentClass = align === 'center' ? 'mx-auto text-center' : ''

  return (
    <div className={`max-w-3xl ${alignmentClass}`}>
      <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-mechanicCopper">{eyebrow}</p>
      <h2 className="mt-3 text-4xl font-black tracking-tight text-mechanicBlack sm:text-5xl">{title}</h2>
      <p className="mt-4 text-base leading-8 text-zinc-700 sm:text-lg">{description}</p>
    </div>
  )
}
