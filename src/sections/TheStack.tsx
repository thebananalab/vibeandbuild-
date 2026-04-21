const STACK = [
  {
    icon: '/assets/claude-color.svg',
    iconBg: 'bg-[rgba(235,66,19,0.1)]',
    name: 'CLAUDE',
    badge: 'CONSTRUYES AQUÍ',
    badgeBg: 'bg-[rgba(235,66,19,0.1)]',
    badgeColor: 'text-purple',
    body: 'Le hablas en español. Construye el código. Tu punto de entrada para todo.',
  },
  {
    icon: '/assets/github.svg',
    iconBg: 'bg-[rgba(28,28,28,0.06)]',
    name: 'GITHUB',
    badge: 'GUARDAS AQUÍ',
    badgeBg: 'bg-[rgba(28,28,28,0.06)]',
    badgeColor: 'text-dark',
    body: 'Como Google Drive para tu código. Guarda versiones, nunca pierdes nada. Gratis.',
  },
  {
    icon: '/assets/vercel.svg',
    iconBg: 'bg-[rgba(130,109,238,0.12)]',
    name: 'VERCEL',
    badge: 'PUBLICAS AQUÍ',
    badgeBg: 'bg-[rgba(130,109,238,0.12)]',
    badgeColor: 'text-purple',
    body: 'Link real en 2 min. Sin servidores. Sin configurar nada. Gratis.',
  },
  {
    icon: '/assets/Primary_Vertical_Lockup_Full_Color_Inverted.svg',
    iconBg: 'bg-[rgba(216,243,130,0.4)]',
    name: 'FIREBASE/SUPABASE',
    badge: 'GUARDAS DATOS',
    badgeBg: 'bg-[rgba(216,243,130,0.4)]',
    badgeColor: 'text-[#5a7a00]',
    body: 'Para que tu tool recuerde todo. Sin esto, olvida al cerrar la pestaña.',
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
              <img src={item.icon} alt={item.name} className="size-6 object-contain" />
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
