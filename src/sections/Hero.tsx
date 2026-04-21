export default function Hero() {
  return (
    <section
      className="bg-cream border-b border-[rgba(28,28,28,0.1)] relative overflow-hidden"
      style={{ width: '1454px', height: '855px' }}
    >
      {/* Nav */}
      <nav className="absolute top-0 left-0 right-0 flex items-center justify-between px-10 py-5 z-10">
        <span className="font-bebas text-dark tracking-widest text-xl">VIBE & BLOOM</span>
        <a
          href="https://luma.com/ign5s37r"
          className="bg-dark text-cream font-dm font-medium text-[11px] tracking-[1.1px] uppercase px-5 py-3 rounded-full hover:bg-purple transition-colors"
        >
          Reservar lugar →
        </a>
      </nav>

      {/* Inner container starts at y=72 */}
      <div className="absolute" style={{ top: '72px', left: 0, width: '1454px', height: '607px' }}>
        {/* VIBE & BLOOM large text */}
        <div
          className="absolute font-bebas leading-[0] left-[40px] top-[100px] tracking-[5.5px] whitespace-nowrap select-none"
          style={{ fontSize: '275px' }}
        >
          <p className="text-dark" style={{ lineHeight: '242px', marginBottom: 0 }}>VIBE</p>
          <p className="text-purple" style={{ lineHeight: '242px' }}>&amp; BLOOM</p>
        </div>

        {/* Subtitle */}
        <p
          className="absolute font-dm font-normal text-dark left-[40px] leading-[22.96px]"
          style={{ top: '584px', fontSize: '16px', width: '755px' }}
        >
          Tu idea, tu app, tu vibe. Aprende a construir sin código aunque nunca hayas programado en tu vida.
        </p>

        {/* Rotating bar 1 — Objeto generativo (top-right quadrant) */}
        <div
          className="absolute flex items-center justify-center"
          style={{ top: '258px', right: '131px', bottom: '208px', left: '1182px' }}
        >
          <div
            className="rotate-slow bg-dark rounded-full"
            style={{ width: '180px', height: '2.5px', transform: 'rotate(12.8deg)' }}
          />
        </div>

        {/* Rotating bar 2 */}
        <div
          className="absolute flex items-center justify-center"
          style={{ top: '290px', left: '894px', right: '435px', bottom: '280px' }}
        >
          <div
            className="rotate-slow-reverse bg-dark rounded-full"
            style={{ width: '160px', height: '2.5px', transform: 'rotate(12.19deg)' }}
          />
        </div>

        {/* Heart sticker */}
        <div
          className="absolute"
          style={{ top: '127px', left: '1065px', width: '117px', height: '117px' }}
        >
          <img src="/assets/heart.svg" alt="" className="size-full object-contain" />
        </div>

        {/* Spark / starburst */}
        <div
          className="absolute"
          style={{ top: '370px', left: '688px', width: '130px', height: '130px' }}
        >
          <img src="/assets/sticker_4381115.png" alt="" className="size-full object-contain" />
        </div>

        {/* Lightning bolt */}
        <div
          className="absolute"
          style={{ top: '210px', left: '830px', width: '95px', height: '130px' }}
        >
          <img src="/assets/bolt.svg" alt="" className="size-full object-contain" />
        </div>

        {/* Star */}
        <div
          className="absolute"
          style={{ top: '250px', left: '1060px', width: '100px', height: '100px' }}
        >
          <img src="/assets/star.svg" alt="" className="size-full object-contain" />
        </div>

        {/* Spark_2 decoration */}
        <div className="absolute" style={{ top: '466px', left: '956px', width: '135px', height: '135px' }}>
          <img src="/assets/Spark_2.svg" alt="" className="size-full object-contain" />
        </div>

        {/* SIN CÓDIGO pill */}
        <div
          className="absolute bg-lime border-[1.5px] border-black rounded-full flex items-center justify-center"
          style={{ top: '120px', left: '917px', width: '107px', height: '32px' }}
        >
          <span className="font-dm font-bold text-black text-[10.88px] tracking-[0.87px] uppercase">
            SIn código
          </span>
        </div>

        {/* FREELANCERS pill — rotated */}
        <div
          className="absolute flex items-center justify-center"
          style={{ top: '373px', left: '743px', width: '124px', height: '72px' }}
        >
          <div style={{ transform: 'rotate(20.64deg)' }}>
            <div className="bg-pink border-[1.5px] border-black rounded-full flex items-center justify-center" style={{ width: '120px', height: '32px' }}>
              <span className="font-dm font-bold text-black text-[10.88px] tracking-[0.87px] uppercase">
                freelancers
              </span>
            </div>
          </div>
        </div>

        {/* PARA CREATIVAS pill */}
        <div
          className="absolute bg-purple border-[1.5px] border-dark rounded-full flex items-center justify-center"
          style={{ top: '575px', left: '1158px', width: '137px', height: '32px' }}
        >
          <span className="font-dm font-bold text-lime text-[10.88px] tracking-[0.87px] uppercase">
            PARA CREATIVAS
          </span>
        </div>
      </div>

      {/* 3.5 HORAS badge — absolute from section */}
      <div
        className="absolute flex items-center justify-center"
        style={{ top: '208px', left: '1295px', width: '143px', height: '143px' }}
      >
        <div style={{ transform: 'rotate(13.65deg)' }} className="relative">
          <div className="bg-purple border-[10px] border-white rounded-[90px]" style={{ width: '118px', height: '118px' }} />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-pink border-4 border-dark rounded-[90px] flex items-center justify-center" style={{ width: '108px', height: '108px' }}>
              <div className="font-bebas text-dark text-center leading-tight" style={{ fontSize: '28.9px', letterSpacing: '0.58px' }}>
                <div>3.5</div>
                <div>HORAS</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* AGENCIAS pill — rotated, top-left corner of sticker area */}
      <div
        className="absolute"
        style={{ top: '212px', left: '7px' }}
      >
        <div style={{ transform: 'rotate(-16.21deg)' }}>
          <div className="bg-lime border-[2.5px] border-dark rounded-full flex items-center justify-center px-4" style={{ height: '36px', width: '82px' }}>
            <span className="font-bebas text-dark text-[14.4px]">AGENCIAS</span>
          </div>
        </div>
      </div>

      {/* CTAs */}
      <div className="absolute" style={{ top: '718px', left: '40px', display: 'flex', gap: '16px', alignItems: 'center' }}>
        <a
          href="https://luma.com/ign5s37r"
          className="bg-purple font-dm font-medium text-white text-[12.48px] tracking-[1.25px] uppercase rounded-full flex items-center px-7"
          style={{ height: '44px' }}
        >
          Reservar mi lugar →
        </a>
        <div
          className="bg-lime border-[1.5px] border-dark rounded-full flex items-center px-4"
          style={{ height: '32px' }}
        >
          <span className="font-dm font-bold text-dark text-[10.88px] tracking-[0.87px] uppercase whitespace-nowrap">
            SOLO 10–15 LUGARES ✦ MAYO 9 2026
          </span>
        </div>
      </div>

      {/* Bottom info bar */}
      <div
        className="absolute bg-dark flex items-center left-0 right-0"
        style={{ top: '810px', height: '44px' }}
      >
        {[
          'Workshop virtual en vivo',
          '3.5 horas',
          'Claude + GitHub + Vercel + Firebase',
          'Sin código',
        ].map((item, i) => (
          <span key={i} className="flex items-center">
            <span className="font-dm font-medium text-lime text-[10.88px] tracking-[1.09px] uppercase ml-10">
              {item}
            </span>
            {i < 3 && (
              <span className="text-purple text-base ml-10">✦</span>
            )}
          </span>
        ))}
      </div>
    </section>
  )
}
