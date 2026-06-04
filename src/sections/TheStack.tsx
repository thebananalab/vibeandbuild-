const STACK = [
  {
    initial: 'MJ',
    iconBg: 'bg-[rgba(130,109,238,0.15)]',
    initialColor: 'text-purple',
    name: 'MIDJOURNEY',
    badge: 'GENERAS AQUÍ',
    badgeBg: 'bg-[rgba(130,109,238,0.12)]',
    badgeColor: 'text-purple',
    body: 'Le das texto, devuelve imágenes. El núcleo del workshop. Genera campaña, moodboard y referencia.',
  },
  {
    initial: 'MA',
    iconBg: 'bg-[rgba(235,66,19,0.1)]',
    initialColor: 'text-[#eb4213]',
    name: 'MAGNIFIC',
    badge: 'ANTES FREEPIK',
    badgeBg: 'bg-[rgba(235,66,19,0.08)]',
    badgeColor: 'text-[#eb4213]',
    body: 'Upscale e intensifica tus imágenes. Más detalle, más textura, más editorial.',
  },
  {
    initial: 'FL',
    iconBg: 'bg-[rgba(216,243,130,0.4)]',
    initialColor: 'text-[#5a7a00]',
    name: 'FLORA',
    badge: 'FLUJOS AQUÍ',
    badgeBg: 'bg-[rgba(216,243,130,0.4)]',
    badgeColor: 'text-[#5a7a00]',
    body: 'Crea pipelines de imagen con IA. Tu flujo visual coherente y automatizado.',
  },
  {
    initial: 'PL',
    iconBg: 'bg-[rgba(255,153,220,0.25)]',
    initialColor: 'text-pink',
    name: 'PLETOR',
    badge: 'MOCKUPS AQUÍ',
    badgeBg: 'bg-[rgba(255,153,220,0.2)]',
    badgeColor: 'text-[#c0068a]',
    body: 'Mockups de producto con IA. De la imagen al contexto de marca en segundos.',
  },
]

export default function TheStack() {
  return (
    <section className="bg-cream py-16 px-5 sm:px-8 lg:px-[77px]">
      <p className="font-dm font-medium text-[11.52px] tracking-[1.38px] uppercase text-[#8a8a8a] mb-8">
        El stack
      </p>
      <h2 className="font-bebas text-dark leading-[0.92] tracking-[1.47px] mb-16" style={{ fontSize: 'clamp(42px, 8vw, 73px)' }}>
        4 TOOLS.<br />
        TODO LO QUE{' '}
        <span className="text-purple">NECESITAS.</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {STACK.map((item) => (
          <div key={item.name} className="bg-white border border-[rgba(28,28,28,0.06)] rounded-2xl p-6">
            <div className={`${item.iconBg} size-11 rounded-[12px] flex items-center justify-center mb-6`}>
              <span className={`font-bebas text-[13px] tracking-[0.5px] ${item.initialColor}`}>{item.initial}</span>
            </div>
            <h3 className="font-bebas text-dark text-2xl tracking-[1.2px] mb-3">
              {item.name}
            </h3>
            <span className={`inline-block font-dm font-medium text-[9.6px] tracking-[0.96px] uppercase ${item.badgeColor} ${item.badgeBg} px-[10px] py-[3.5px] rounded-full mb-3`}>
              {item.badge}
            </span>
            <p className="font-dm font-light text-[#8a8a8a] text-[12.5px] leading-[20px]">
              {item.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
