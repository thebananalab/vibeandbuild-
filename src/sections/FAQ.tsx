const FAQS = [
  {
    q: '¿Necesito saber programar?',
    a: 'Para nada. La IA escribe el código. Tú decides qué construir y cómo debe funcionar.',
  },
  {
    q: '¿Qué necesito para el taller?',
    a: 'Computadora con internet y ganas de construir. Las cuentas que usamos son todas gratuitas — te explicamos cómo crearlas en el mismo taller.',
  },
  {
    q: '¿Voy a terminar con algo funcional ese mismo día?',
    a: 'Sí. Una tool publicada con su propio link. Básica, pero real y tuya. A partir de ahí la sigues iterando.',
  },
  {
    q: '¿Hay que pagar por las herramientas?',
    a: 'No para empezar. Claude, GitHub, Vercel y Supabase tienen planes gratuitos que aguantan perfectamente para el taller y las primeras semanas.',
  },
  {
    q: '¿Por qué solo 10–15 personas?',
    a: 'Porque el formato pequeño permite atención real. No es una masterclass pasiva — todas construyen y todas reciben ayuda cuando la necesitan.',
  },
  {
    q: '¿Qué pasa después del taller?',
    a: 'Tienes atención personalizada por WhatsApp durante 1 mes para resolver cualquier duda mientras sigues construyendo.',
  },
]

export default function FAQ() {
  return (
    <section className="bg-light-bg py-16 px-5 sm:px-8 lg:px-[77px]">
      <div className="grid grid-cols-1 lg:grid-cols-[412px_1fr] gap-12 lg:gap-24">
        {/* Left */}
        <div>
          <p className="font-dm font-medium text-[11.52px] tracking-[1.38px] uppercase text-[#8a8a8a] mb-6">
            FAQ
          </p>
          <h2 className="font-bebas text-dark leading-[0.92] tracking-[1.12px] mb-6" style={{ fontSize: '56px' }}>
            ¿TIENES<br />
            <span className="text-purple">DUDAS?</span>
          </h2>
          <p className="font-dm font-light text-[#8a8a8a] text-[13.6px] leading-[23px] mb-8 max-w-[260px]">
            Si no encuentras lo que buscas, escríbenos directamente.
          </p>
          <a
            href="https://luma.com/ign5s37r"
            className="inline-block bg-dark text-cream font-dm font-medium text-[11.5px] tracking-[1.15px] uppercase px-5 py-[11px] rounded-full hover:bg-purple transition-colors"
          >
            Ya estoy lista →
          </a>
        </div>

        {/* Right */}
        <div className="divide-y divide-[rgba(28,28,28,0.08)] border-t border-[rgba(28,28,28,0.08)]">
          {FAQS.map((item) => (
            <div key={item.q} className="py-6">
              <h3 className="font-bebas text-dark text-[19.2px] tracking-[0.58px] mb-2">
                {item.q}
              </h3>
              <p className="font-dm font-light text-[#8a8a8a] text-[13px] leading-[22.3px]">
                {item.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
