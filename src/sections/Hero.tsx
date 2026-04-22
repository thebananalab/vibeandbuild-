export default function Hero() {
  return (
    <section className="bg-cream border-b border-[rgba(28,28,28,0.1)] relative overflow-hidden">

      {/* ── Nav ── */}
      <nav className="flex items-center justify-between px-5 sm:px-10 py-5 relative z-10">
        <span className="font-bebas text-dark tracking-widest text-[28px]">VIBE & BLOOM</span>
        <a
          href="https://luma.com/ign5s37r"
          className="bg-dark text-cream font-dm font-medium text-[11px] tracking-[1.1px] uppercase px-5 py-3 rounded-full hover:bg-purple transition-colors"
        >
          Reservar lugar →
        </a>
      </nav>

      {/* ── Body ── */}
      <div className="flex flex-col md:flex-row md:items-stretch md:min-h-[640px]">

        {/* Text column */}
        <div className="relative md:w-[52%] flex flex-col gap-6 md:gap-0 md:justify-between px-5 sm:px-10 pt-6 md:pt-16 pb-10 md:pb-16">

          {/* AGENCIAS badge — desktop only */}
          <div
            className="hidden md:block absolute z-10"
            style={{ top: '60px', left: '7px', transform: 'rotate(-16.21deg)' }}
          >
            <div className="bg-lime border-[2.5px] border-dark rounded-full flex items-center justify-center"
              style={{ height: '36px', width: '82px' }}>
              <span className="font-bebas text-dark text-[14.4px]">AGENCIAS</span>
            </div>
          </div>

          {/* Heading */}
          <div
            className="font-bebas leading-[0.88] select-none"
            style={{ fontSize: 'clamp(72px, 11vw, 210px)', letterSpacing: '0.02em' }}
          >
            <p className="text-dark mb-0">VIBE</p>
            <p className="text-purple">&amp; BLOOM</p>
          </div>

          {/* Mobile sticker strip — hidden on desktop */}
          <div className="flex md:hidden items-center gap-2 flex-wrap">
            <div className="bg-lime border-[1.5px] border-dark rounded-full flex items-center px-4" style={{ height: '30px' }}>
              <span className="font-dm font-bold text-dark text-[10.88px] tracking-[0.87px] uppercase whitespace-nowrap">SIN código</span>
            </div>
            <div className="bg-purple rounded-full flex items-center px-4" style={{ height: '30px' }}>
              <span className="font-dm font-bold text-white text-[10.88px] tracking-[0.87px] uppercase whitespace-nowrap">3.5 HORAS</span>
            </div>
            <div className="bg-pink border-[1.5px] border-dark rounded-full flex items-center px-4" style={{ height: '30px' }}>
              <span className="font-dm font-bold text-dark text-[10.88px] tracking-[0.87px] uppercase whitespace-nowrap">MAYO 9 · 2026</span>
            </div>
            <div className="bg-dark rounded-full flex items-center px-4" style={{ height: '30px' }}>
              <span className="font-dm font-bold text-lime text-[10.88px] tracking-[0.87px] uppercase whitespace-nowrap">10–15 LUGARES</span>
            </div>
          </div>

          {/* Subtitle + CTAs */}
          <div className="space-y-4">
            <p className="font-dm font-normal text-dark text-base leading-[1.44] max-w-xl">
              Tu idea, tu app, tu vibe. Aprende a construir sin código aunque nunca hayas programado en tu vida.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="https://luma.com/ign5s37r"
                className="bg-purple font-dm font-medium text-white text-[12.5px] tracking-[1.25px] uppercase rounded-full flex items-center px-7 hover:opacity-90 transition-opacity"
                style={{ height: '44px' }}
              >
                Reservar mi lugar →
              </a>
              <div className="bg-lime border-[1.5px] border-dark rounded-full flex items-center px-4" style={{ height: '32px' }}>
                <span className="font-dm font-bold text-dark text-[10.88px] tracking-[0.87px] uppercase whitespace-nowrap">
                  SOLO 10–15 LUGARES ✦ MAYO 9 2026
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right: sticker field — desktop only */}
        <div className="hidden md:block flex-1 relative" style={{ minHeight: '560px' }}>

          {/* SIN CÓDIGO — 33% / 19% */}
          <div
            className="absolute bg-lime border-[1.5px] border-black rounded-full flex items-center justify-center"
            style={{ left: '33%', top: '19%', width: '14%', height: '5%', minHeight: '28px', minWidth: '95px' }}
          >
            <span className="font-dm font-bold text-black text-[10.88px] tracking-[0.87px] uppercase whitespace-nowrap">
              SIN código
            </span>
          </div>

          {/* Heart — 52% / 20% — w=14.6% */}
          <img
            src="/assets/heart.svg"
            alt=""
            className="absolute pointer-events-none"
            style={{ left: '52%', top: '20%', width: '14.6%' }}
          />

          {/* 3.5 HORAS badge — right=0% / 21% — w=17.8% */}
          <div
            className="absolute flex items-center justify-center"
            style={{ right: '0%', top: '21%', width: '17.8%', aspectRatio: '1' }}
          >
            <div className="relative size-full" style={{ transform: 'rotate(13.65deg)' }}>
              <div className="absolute inset-0 bg-purple border-[8px] border-white rounded-[30%]" />
              <div className="absolute inset-[6%] bg-pink border-[3px] border-dark rounded-[30%] flex items-center justify-center">
                <div className="font-bebas text-dark text-center leading-tight" style={{ fontSize: 'clamp(14px, 2.2vw, 28px)', letterSpacing: '0.58px' }}>
                  <div>3.5</div>
                  <div>HORAS</div>
                </div>
              </div>
            </div>
          </div>

          {/* Bolt — 34% / 34% — w=15.5% */}
          <img
            src="/assets/bolt.svg"
            alt=""
            className="absolute pointer-events-none"
            style={{ left: '34%', top: '34%', width: '15.5%' }}
          />

          {/* Star — 69% / 40% — w=17.5% */}
          <img
            src="/assets/star.svg"
            alt=""
            className="absolute pointer-events-none"
            style={{ left: '69%', top: '40%', width: '17.5%' }}
          />

          {/* FREELANCERS pill — 13% / 58% */}
          <div
            className="absolute flex items-center justify-center"
            style={{ left: '13%', top: '58%' }}
          >
            <div style={{ transform: 'rotate(20.64deg)' }}>
              <div className="bg-pink border-[1.5px] border-black rounded-full flex items-center justify-center px-4" style={{ height: '32px', whiteSpace: 'nowrap' }}>
                <span className="font-dm font-bold text-black text-[10.88px] tracking-[0.87px] uppercase">
                  freelancers
                </span>
              </div>
            </div>
          </div>

          {/* Spark_2 — 38% / 72% — w=16.9% */}
          <img
            src="/assets/Spark_2.svg"
            alt=""
            className="absolute pointer-events-none"
            style={{ left: '38%', top: '72%', width: '16.9%' }}
          />

          {/* PARA CREATIVAS — 63% / 87% */}
          <div
            className="absolute bg-purple border-[1.5px] border-dark rounded-full flex items-center justify-center"
            style={{ left: '63%', top: '87%', width: '18%', height: '5%', minHeight: '28px', minWidth: '130px' }}
          >
            <span className="font-dm font-bold text-lime text-[10.88px] tracking-[0.87px] uppercase whitespace-nowrap">
              PARA CREATIVAS
            </span>
          </div>
        </div>
      </div>

      {/* ── Bottom info bar ── */}
      <div className="bg-dark flex items-center overflow-x-auto" style={{ height: '44px' }}>
        {['Workshop virtual en vivo', '3.5 horas', 'Claude + GitHub + Vercel + Firebase', 'Sin código'].map((item, i) => (
          <span key={i} className="flex items-center shrink-0">
            <span className="font-dm font-medium text-lime text-[10.88px] tracking-[1.09px] uppercase ml-10 whitespace-nowrap">
              {item}
            </span>
            {i < 3 && <span className="text-purple text-base ml-10">✦</span>}
          </span>
        ))}
      </div>
    </section>
  )
}
