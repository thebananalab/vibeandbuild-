const MODULES = [
  {
    num: '01',
    title: '¿Qué es vibecoding y qué puedes crear?',
    desc: 'Ves ejemplos reales para creativas y agencias. Defines lo que vas a construir hoy.',
    tags: ['Conceptos', 'Ejemplos reales', 'Define tu tool'],
    duration: '25 min',
    isBreak: false,
  },
  {
    num: '02',
    title: 'El ecosistema: Claude, GitHub, Vercel, Firebase/Supabase',
    desc: 'Para qué sirve cada herramienta y cómo se conectan entre sí.',
    tags: ['Claude', 'GitHub', 'Vercel', 'Supabase'],
    duration: '20 min',
    isBreak: false,
  },
  {
    num: '03',
    title: 'Manos a la obra — construimos juntas',
    desc: 'Sigues mi pantalla. Construyes tu tool paso a paso y aprendes a iterar.',
    tags: ['Prompting', 'Build en vivo', 'Iteración'],
    duration: '60 min',
    isBreak: false,
  },
  {
    num: '🍕',
    title: 'Break — comer, conversar, respirar',
    desc: '20 minutos para recargar. El cerebro necesita pausa.',
    tags: [],
    duration: '20 min',
    isBreak: true,
  },
  {
    num: '04',
    title: 'GitHub + Vercel — tu tool en internet',
    desc: 'Al final tienes un link real que puedes mandar por WhatsApp ahora mismo.',
    tags: ['GitHub', 'Deploy', 'Link real'],
    duration: '40 min',
    isBreak: false,
  },
  {
    num: '05',
    title: 'Otras Tools que te hacen la vida más fácil',
    desc: 'Conoce plataformas como Lovable, Replit, entre otras.',
    tags: ['Tools', 'Sin tecnicismos', 'En vivo'],
    duration: '30 min',
    isBreak: false,
  },
  {
    num: '06',
    title: 'Cómo no gastar de más',
    desc: 'Tokens, modelos, free tiers. Sin sorpresas en la tarjeta.',
    tags: ['Tokens', 'Free tiers', 'Tips'],
    duration: '15 min',
    isBreak: false,
  },
]

export default function Curriculum() {
  return (
    <section className="bg-light-bg py-16 px-5 sm:px-8 lg:px-[77px]">
      <p className="font-dm font-medium text-[11.52px] tracking-[1.38px] uppercase text-[#8a8a8a] mb-8">
        Contenido
      </p>
      <h2 className="font-bebas text-dark leading-[0.92] tracking-[1.47px] mb-16" style={{ fontSize: 'clamp(42px, 8vw, 73px)' }}>
        3.5 HORAS.<br />
        <span className="text-purple">TODO</span>
        {' '}LO QUE NECESITAS.
      </h2>

      <div className="bg-dark rounded-3xl overflow-hidden">
        {MODULES.map((mod, i) => (
          <div
            key={i}
            className={`flex items-start gap-3 sm:gap-6 px-4 sm:px-8 py-6 border-b border-[rgba(255,255,255,0.06)] last:border-b-0 ${
              mod.isBreak ? 'bg-[rgba(216,243,130,0.04)]' : ''
            }`}
          >
            {/* Number */}
            <div className="w-14 shrink-0">
              <span className={`font-bebas ${mod.isBreak ? 'text-2xl' : 'text-[35px]'} leading-[1] text-purple`}>
                {mod.num}
              </span>
            </div>

            {/* Content */}
            <div className="flex-1">
              <p className={`font-dm font-medium text-[14.7px] mb-1.5 ${mod.isBreak ? 'text-lime' : 'text-white'}`}>
                {mod.title}
              </p>
              <p className="font-dm font-light text-[rgba(255,255,255,0.4)] text-[12.5px] leading-[20px] mb-2">
                {mod.desc}
              </p>
              {mod.tags.length > 0 && (
                <div className="flex gap-2">
                  {mod.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-[rgba(255,255,255,0.07)] font-dm font-medium text-[9.6px] tracking-[0.58px] uppercase text-[rgba(255,255,255,0.5)] px-[8.8px] py-[3px] rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Duration */}
            <div className="shrink-0 text-right">
              <span className={`font-dm font-medium text-[10.9px] tracking-[0.87px] uppercase ${
                mod.isBreak ? 'text-[rgba(216,243,130,0.4)]' : 'text-[rgba(255,255,255,0.25)]'
              }`}>
                {mod.duration}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
