const ITEMS = [
  'VIBE & BLOOM',
  'SIN CÓDIGO',
  'PARA CREATIVAS',
  'BUILD YOUR OWN TOOLS',
  'MAYO 9 2026',
  'CLAUDE + GITHUB + VERCEL + SUPABASE',
]

export default function Marquee() {
  const text = ITEMS.map((item, i) => (
    <span key={i} className="inline-flex items-center gap-8">
      <span className="text-cream">{item}</span>
      <span className="text-purple">✦</span>
    </span>
  ))

  return (
    <div className="bg-dark overflow-hidden py-[10px]">
      <div className="marquee-track">
        <span className="font-bebas text-[17.6px] tracking-[2.64px] flex gap-8 pr-8">
          {text}
        </span>
        {/* Duplicate for seamless loop */}
        <span className="font-bebas text-[17.6px] tracking-[2.64px] flex gap-8 pr-8" aria-hidden>
          {text}
        </span>
      </div>
    </div>
  )
}
