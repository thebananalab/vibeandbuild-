const FEATURES = [
  '3 horas de workshop en vivo',
  'Construyes tu propia tool ese mismo día',
  'Tu tool publicada con link real',
  'Atención personalizada por WhatsApp durante 1 mes',
]

export default function Pricing() {
  return (
    <section id="pricing" className="bg-cream py-24 px-[77px]">
      <p className="font-dm font-medium text-[11.52px] tracking-[1.38px] uppercase text-[#8a8a8a] mb-8">
        Precio
      </p>
      <h2 className="font-bebas text-dark leading-[0.92] tracking-[1.47px] mb-16" style={{ fontSize: '73px' }}>
        UN LUGAR.<br />
        UN{' '}
        <span className="text-purple">PRECIO.</span>
      </h2>

      <div className="grid grid-cols-2 gap-4 mb-4">
        {/* Early Bird */}
        <div className="bg-purple rounded-2xl p-10 relative overflow-hidden">
          <div className="absolute top-[22px] right-[22px] bg-lime px-3 py-1 rounded-full">
            <span className="font-dm font-bold text-dark text-[10.4px] tracking-[1.04px] uppercase">
              20% descuento
            </span>
          </div>

          <div className="bg-[rgba(255,255,255,0.15)] inline-block px-[14px] py-1 rounded-full mb-4">
            <span className="font-dm font-medium text-white text-[10.4px] tracking-[1.25px] uppercase">
              Early Bird
            </span>
          </div>

          <div className="flex items-end gap-3 mb-2">
            <span className="font-bebas text-white" style={{ fontSize: '88px', lineHeight: '1' }}>€55</span>
            <span className="font-bebas text-[rgba(255,255,255,0.35)] text-[32px] leading-[1] mb-3 line-through">€69</span>
          </div>

          <p className="font-dm font-light text-[rgba(255,255,255,0.55)] text-[12px] tracking-[1.2px] uppercase mb-8">
            Primeros 10 días desde el lanzamiento
          </p>

          <ul className="space-y-3 mb-10">
            {FEATURES.map((f) => (
              <li key={f} className="flex items-start gap-3">
                <span className="mt-[6px] size-[7px] bg-lime rounded-[3.5px] shrink-0" />
                <span className="font-dm font-light text-[rgba(255,255,255,0.8)] text-[13.6px] leading-[20.4px]">
                  {f}
                </span>
              </li>
            ))}
          </ul>

          <a
            href="https://luma.com/ign5s37r"
            className="bg-lime flex items-center justify-between px-6 h-[56px] rounded-full hover:opacity-90 transition-opacity"
          >
            <span className="font-dm font-bold text-dark text-[12px] tracking-[1.2px] uppercase">
              Reservar precio Early Bird
            </span>
            <span className="bg-dark size-[30px] rounded-[15px] flex items-center justify-center text-lime font-bold text-sm">
              →
            </span>
          </a>
        </div>

        {/* Regular */}
        <div className="bg-white border border-[rgba(28,28,28,0.08)] rounded-2xl p-10 flex flex-col justify-between">
          <div>
            <div className="bg-light-bg inline-block px-[14px] py-1 rounded-full mb-4">
              <span className="font-dm font-medium text-[#8a8a8a] text-[10.4px] tracking-[1.25px] uppercase">
                Precio completo
              </span>
            </div>

            <div className="mb-2">
              <span className="font-bebas text-dark" style={{ fontSize: '88px', lineHeight: '1' }}>€69</span>
            </div>

            <p className="font-dm font-light text-[#8a8a8a] text-[12px] tracking-[1.2px] uppercase mb-8">
              Después del período Early Bird
            </p>

            <ul className="space-y-3 mb-10">
              {FEATURES.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <span className="mt-[6px] size-[7px] bg-purple rounded-[3.5px] shrink-0 opacity-70" />
                  <span className="font-dm font-light text-dark text-[13.6px] leading-[20.4px] opacity-70">
                    {f}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <a
            href="https://luma.com/ign5s37r"
            className="bg-dark flex items-center justify-between px-6 h-[56px] rounded-full hover:bg-purple transition-colors"
          >
            <span className="font-dm font-bold text-white text-[12px] tracking-[1.2px] uppercase">
              Reservar mi lugar
            </span>
            <span className="bg-purple size-[30px] rounded-[15px] flex items-center justify-center text-white font-bold text-sm">
              →
            </span>
          </a>
        </div>
      </div>

      {/* Early Bird note */}
      <div className="bg-light-bg rounded-xl flex items-center gap-4 px-6 py-4">
        <div className="bg-lime px-3 py-1 rounded-full shrink-0">
          <span className="font-dm font-bold text-dark text-[10.4px] tracking-[1.04px] uppercase">
            Early Bird
          </span>
        </div>
        <p className="font-dm font-light text-[#8a8a8a] text-[12.5px] leading-[18.7px]">
          El precio de{' '}
          <span className="font-normal text-dark">€55</span>
          {' '}está disponible durante los primeros{' '}
          <span className="font-normal text-dark">10 días</span>
          {' '}desde el lanzamiento. Pasado ese período, el precio pasa a{' '}
          <span className="font-normal text-dark">€69</span>
          . Ambos incluyen exactamente lo mismo.
        </p>
      </div>
    </section>
  )
}
