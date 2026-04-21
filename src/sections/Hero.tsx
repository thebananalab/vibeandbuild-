export default function Hero() {
  return (
    <section
      className="bg-cream border-b border-[rgba(28,28,28,0.1)] relative overflow-hidden"
      style={{ width: '1454px', height: '855px' }}
    >
      {/* ── Nav ── */}
      <nav className="absolute top-0 left-0 right-0 flex items-center justify-between px-10 py-5 z-10">
        <span className="font-bebas text-dark tracking-widest text-xl">VIBE & BLOOM</span>
        <a
          href="https://luma.com/ign5s37r"
          className="bg-dark text-cream font-dm font-medium text-[11px] tracking-[1.1px] uppercase px-5 py-3 rounded-full hover:bg-purple transition-colors"
        >
          Reservar lugar →
        </a>
      </nav>

      {/* ── Large type (inner container y=72) ── */}
      {/* VIBE: left=40, top=72+100=172 */}
      <div
        className="absolute font-bebas leading-[0] left-[40px] whitespace-nowrap select-none"
        style={{ top: '172px', fontSize: '275px', letterSpacing: '5.5px' }}
      >
        <p className="text-dark mb-0" style={{ lineHeight: '242px' }}>VIBE</p>
        <p className="text-purple" style={{ lineHeight: '242px' }}>&amp; BLOOM</p>
      </div>

      {/* Subtitle: left=40, top=72+584=656 */}
      <p
        className="absolute font-dm font-normal text-dark left-[40px]"
        style={{ top: '656px', fontSize: '16px', lineHeight: '22.96px', width: '755px' }}
      >
        Tu idea, tu app, tu vibe. Aprende a construir sin código aunque nunca hayas programado en tu vida.
      </p>

      {/* ── Sticker images (exact Figma positions) ── */}

      {/* Heart — 40:1326 — left=1065, top=72+127=199, w=117, h=108 */}
      <img
        src="/assets/heart.svg"
        alt=""
        className="absolute pointer-events-none"
        style={{ left: '1065px', top: '199px', width: '117px', height: '108px' }}
      />

      {/* Bolt — 40:1325 — left=925, top=290, w=125, h=164 */}
      <img
        src="/assets/bolt.svg"
        alt=""
        className="absolute pointer-events-none"
        style={{ left: '925px', top: '290px', width: '125px', height: '164px' }}
      />

      {/* Star — 40:1320 — left=1208, top=72+258=330, w=141, h=141 */}
      <img
        src="/assets/star.svg"
        alt=""
        className="absolute pointer-events-none"
        style={{ left: '1208px', top: '330px', width: '141px', height: '141px' }}
      />

      {/* Spark_2 — 40:1327 — left=956, top=72+466=538, w=136, h=135 */}
      <img
        src="/assets/Spark_2.svg"
        alt=""
        className="absolute pointer-events-none"
        style={{ left: '956px', top: '538px', width: '136px', height: '135px' }}
      />

      {/* ── Pill badges ── */}

      {/* SIN CÓDIGO — left=917, top=72+120=192, w=107, h=32 */}
      <div
        className="absolute bg-lime border-[1.5px] border-black rounded-full flex items-center justify-center"
        style={{ left: '917px', top: '192px', width: '107px', height: '32px' }}
      >
        <span className="font-dm font-bold text-black text-[10.88px] tracking-[0.87px] uppercase">
          SIN código
        </span>
      </div>

      {/* FREELANCERS — center at left=754, top=72+373=445, w=98, h=63, rotate 20.64deg */}
      <div
        className="absolute flex items-center justify-center"
        style={{ left: '754px', top: '445px', width: '98px', height: '63px' }}
      >
        <div style={{ transform: 'rotate(20.64deg)' }}>
          <div
            className="bg-pink border-[1.5px] border-black rounded-full flex items-center justify-center px-4"
            style={{ height: '32px', whiteSpace: 'nowrap' }}
          >
            <span className="font-dm font-bold text-black text-[10.88px] tracking-[0.87px] uppercase">
              freelancers
            </span>
          </div>
        </div>
      </div>

      {/* PARA CREATIVAS — left=1158, top=72+575=647, w=106, h=32 */}
      <div
        className="absolute bg-purple border-[1.5px] border-dark rounded-full flex items-center justify-center"
        style={{ left: '1158px', top: '647px', width: '137px', height: '32px' }}
      >
        <span className="font-dm font-bold text-lime text-[10.88px] tracking-[0.87px] uppercase">
          PARA CREATIVAS
        </span>
      </div>

      {/* AGENCIAS — left=7, top=235, w=89, h=57, rotate -16.21deg */}
      <div
        className="absolute flex items-center justify-center"
        style={{ left: '7px', top: '235px', width: '89px', height: '57px' }}
      >
        <div style={{ transform: 'rotate(-16.21deg)' }}>
          <div
            className="bg-lime border-[2.5px] border-dark rounded-full flex items-center justify-center"
            style={{ height: '36px', width: '82px' }}
          >
            <span className="font-bebas text-dark text-[14.4px]">AGENCIAS</span>
          </div>
        </div>
      </div>

      {/* 3.5 HORAS badge — left=1323, top=208, w=143, h=143, rotate 13.65deg */}
      <div
        className="absolute flex items-center justify-center"
        style={{ left: '1323px', top: '208px', width: '143px', height: '143px' }}
      >
        <div className="relative" style={{ transform: 'rotate(13.65deg)', width: '118px', height: '118px' }}>
          <div className="absolute inset-0 bg-purple border-[10px] border-white rounded-[90px]" />
          <div className="absolute inset-[5px] bg-pink border-4 border-dark rounded-[75px] flex items-center justify-center">
            <div className="font-bebas text-dark text-center" style={{ fontSize: '28.9px', lineHeight: '1.1', letterSpacing: '0.58px' }}>
              <div>3.5</div>
              <div>HORAS</div>
            </div>
          </div>
        </div>
      </div>

      {/* ── CTAs — top=718, left=40 ── */}
      <div className="absolute flex items-center gap-4" style={{ top: '718px', left: '40px' }}>
        <a
          href="https://luma.com/ign5s37r"
          className="bg-purple font-dm font-medium text-white text-[12.48px] tracking-[1.25px] uppercase rounded-full flex items-center px-7 hover:opacity-90 transition-opacity"
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

      {/* ── Bottom info bar — top=811 ── */}
      <div
        className="absolute bg-dark left-0 right-0 flex items-center"
        style={{ top: '811px', height: '44px' }}
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
            {i < 3 && <span className="text-purple text-base ml-10">✦</span>}
          </span>
        ))}
      </div>
    </section>
  )
}
