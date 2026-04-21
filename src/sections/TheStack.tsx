/* SVG logos inlined to avoid external asset dependencies */

const ClaudeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="size-6" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z" fill="#D97757"/>
    <path d="M8.5 15.5l3.5-7 3.5 7M9.5 13.5h5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="size-6 text-dark">
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.071 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.03-2.682-.104-.253-.447-1.27.098-2.645 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.376.202 2.394.1 2.647.64.699 1.026 1.591 1.026 2.682 0 3.841-2.337 4.687-4.565 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.741 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
  </svg>
)

const VercelIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="size-6 text-dark">
    <path d="M24 22.525H0l12-21.05 12 21.05z"/>
  </svg>
)

const SupabaseIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="size-6" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.9 1.036c-.015-.986-1.26-1.41-1.874-.637L.764 12.05C.106 12.887.712 14.1 1.77 14.1H12.1V22.9c.015.987 1.262 1.41 1.876.638l9.166-11.653c.658-.833.054-2.048-1.006-2.048H11.9V1.036z" fill="#3ECF8E"/>
  </svg>
)

const STACK = [
  {
    Icon: ClaudeIcon,
    iconBg: 'bg-[rgba(235,66,19,0.1)]',
    name: 'CLAUDE',
    badge: 'CONSTRUYES AQUÍ',
    badgeBg: 'bg-[rgba(235,66,19,0.1)]',
    badgeColor: 'text-purple',
    body: 'Le hablas en español. Construye el código. Tu punto de entrada para todo.',
  },
  {
    Icon: GithubIcon,
    iconBg: 'bg-[rgba(28,28,28,0.06)]',
    name: 'GITHUB',
    badge: 'GUARDAS AQUÍ',
    badgeBg: 'bg-[rgba(28,28,28,0.06)]',
    badgeColor: 'text-dark',
    body: 'Como Google Drive para tu código. Guarda versiones, nunca pierdes nada. Gratis.',
  },
  {
    Icon: VercelIcon,
    iconBg: 'bg-[rgba(130,109,238,0.12)]',
    name: 'VERCEL',
    badge: 'PUBLICAS AQUÍ',
    badgeBg: 'bg-[rgba(130,109,238,0.12)]',
    badgeColor: 'text-purple',
    body: 'Link real en 2 min. Sin servidores. Sin configurar nada. Gratis.',
  },
  {
    Icon: SupabaseIcon,
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
    <section className="bg-cream py-24 px-[77px]">
      <p className="font-dm font-medium text-[11.52px] tracking-[1.38px] uppercase text-[#8a8a8a] mb-8">
        El stack
      </p>
      <h2 className="font-bebas text-dark leading-[0.92] tracking-[1.47px] mb-16" style={{ fontSize: '73px' }}>
        4 TOOLS.<br />
        TODO LO QUE{' '}
        <span className="text-purple">NECESITAS.</span>
      </h2>

      <div className="grid grid-cols-4 gap-4">
        {STACK.map((item) => (
          <div key={item.name} className="bg-white border border-[rgba(28,28,28,0.06)] rounded-2xl p-6">
            <div className={`${item.iconBg} size-11 rounded-[12px] flex items-center justify-center mb-6`}>
              <item.Icon />
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
