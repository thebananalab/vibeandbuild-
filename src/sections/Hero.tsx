export default function Hero() {
  return (
    <section className="bg-cream border-b border-[rgba(28,28,28,0.1)] overflow-hidden relative" style={{ minHeight: '855px' }}>
      {/* Nav */}
      <nav className="flex items-center justify-between px-10 py-6">
        <span className="font-bebas text-dark tracking-widest text-lg">VIBE & BLOOM</span>
        <a
          href="#pricing"
          className="bg-dark text-cream font-dm font-medium text-[11px] tracking-[1.1px] uppercase px-5 py-3 rounded-full hover:bg-[#826dee] transition-colors"
        >
          Reservar lugar →
        </a>
      </nav>

      {/* Large type */}
      <div className="px-10 pt-16 select-none">
        <p className="font-bebas text-dark leading-[0.88] tracking-[5.5px]" style={{ fontSize: 'clamp(160px, 19vw, 275px)' }}>
          VIBE
        </p>
        <p className="font-bebas leading-[0.88] tracking-[5.5px]" style={{ fontSize: 'clamp(160px, 19vw, 275px)' }}>
          <span className="text-dark">&amp; </span>
          <span className="text-purple">BLOOM</span>
        </p>
      </div>

      {/* Subtitle */}
      <p className="px-10 mt-8 text-dark font-dm font-normal text-base leading-[1.435] max-w-3xl">
        Tu idea, tu app, tu vibe. Aprende a construir sin código aunque nunca hayas programado en tu vida.
      </p>

      {/* Generative rotating line */}
      <div
        className="absolute pointer-events-none"
        style={{ right: '9%', top: '42.5%', width: '150px', height: '150px' }}
      >
        <div className="rotate-slow relative size-full flex items-center justify-center">
          <div
            className="absolute bg-dark"
            style={{ width: '180px', height: '2px', borderRadius: '999px' }}
          />
        </div>
      </div>

      {/* Spark decoration */}
      <div className="absolute" style={{ right: '9.5%', top: '42.7%' }}>
        <span className="text-purple font-bebas text-3xl">✦</span>
      </div>
    </section>
  )
}
