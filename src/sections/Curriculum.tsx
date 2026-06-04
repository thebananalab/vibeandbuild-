const MODULES = [
  {
    num: '01',
    title: 'Concepto en Midjourney',
    desc: 'Cómo usar la herramienta y los estilos que propone para crear imágenes de campaña, de referencia y moodboards.',
    tags: ['Midjourney', 'Estilos', 'Moodboard', 'Imágenes de campaña'],
    duration: '45 min',
    isBreak: false,
    isExtra: false,
  },
  {
    num: '02',
    title: 'Flujos creativos coherentes con la marca',
    desc: 'En qué consisten los flujos creativos, qué tipos de herramientas podemos usar y espacio para crear tu propio flujo.',
    tags: ['Flujos creativos', 'Brand', 'Magnific', 'Flora', 'Pletor'],
    duration: '60 min',
    isBreak: false,
    isExtra: false,
  },
  {
    num: '★',
    title: 'Extra: Cómo hacer mockups',
    desc: 'Técnicas para crear mockups de producto y campaña con IA. De la imagen al contexto de marca.',
    tags: ['Mockups', 'Producto', 'IA'],
    duration: '30 min',
    isBreak: false,
    isExtra: true,
  },
  {
    num: '04',
    title: 'Cierre + Q&A',
    desc: 'Resumen del workshop, recursos para seguir explorando y espacio para todas tus preguntas.',
    tags: [],
    duration: '15 min',
    isBreak: false,
    isExtra: false,
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
              mod.isBreak ? 'bg-[rgba(216,243,130,0.04)]' : mod.isExtra ? 'bg-[rgba(130,109,238,0.06)]' : ''
            }`}
          >
            {/* Number */}
            <div className="w-14 shrink-0">
              <span className={`font-bebas ${mod.isBreak ? 'text-2xl' : 'text-[35px]'} leading-[1] ${mod.isExtra ? 'text-lime' : 'text-purple'}`}>
                {mod.num}
              </span>
            </div>

            {/* Content */}
            <div className="flex-1">
              <p className={`font-dm font-medium text-[14.7px] mb-1.5 ${mod.isBreak ? 'text-lime' : mod.isExtra ? 'text-lime' : 'text-white'}`}>
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
                mod.isBreak ? 'text-[rgba(216,243,130,0.4)]' : mod.isExtra ? 'text-[rgba(216,243,130,0.6)]' : 'text-[rgba(255,255,255,0.5)]'
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
