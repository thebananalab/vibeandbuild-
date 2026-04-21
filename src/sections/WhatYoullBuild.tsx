const TOOLS = [
  {
    num: '01',
    tag: 'Agencias · Freelance',
    tagColor: 'text-purple',
    tagBg: 'bg-[rgba(235,66,19,0.1)]',
    title: 'Generador de propuestas',
    body: 'Ingresas cliente + tipo de proyecto. Genera la propuesta lista con tu branding. De 2 horas a 30 segundos.',
    accent: 'bg-purple',
  },
  {
    num: '02',
    tag: 'Freelance',
    tagColor: 'text-purple',
    tagBg: 'bg-[rgba(130,109,238,0.12)]',
    title: 'Calculadora de pricing',
    body: 'Horas + tipo + revisiones. Precio con tu margen. Nunca más undercharge por miedo a que "se vea mucho".',
    accent: 'bg-purple',
  },
  {
    num: '03',
    tag: 'Agencias',
    tagColor: 'text-[#c0068a]',
    tagBg: 'bg-[rgba(255,153,220,0.2)]',
    title: 'Dashboard de proyectos',
    body: 'Estado de cada cliente en tiempo real. Sin el Google Sheet que nadie actualiza.',
    accent: 'bg-pink',
  },
  {
    num: '04',
    tag: 'Agencias',
    tagColor: 'text-[#5a7a00]',
    tagBg: 'bg-[rgba(216,243,130,0.4)]',
    title: 'Generador de reportes',
    body: 'Ingresas los números del mes. Genera el reporte listo para enviar. El que tardabas 3h en Canva.',
    accent: 'bg-lime',
  },
  {
    num: '05',
    tag: 'Content · Social',
    tagColor: 'text-purple',
    tagBg: 'bg-[rgba(235,66,19,0.1)]',
    title: 'Planificador de contenido',
    body: 'Describes de qué quieres hablar. Genera ideas de posts en tu tono específico. Tu voz, no la de la IA.',
    accent: 'bg-purple',
  },
  {
    num: '06',
    tag: 'Agencias',
    tagColor: 'text-purple',
    tagBg: 'bg-[rgba(130,109,238,0.12)]',
    title: 'Diagnóstico de marca automático',
    body: 'El cliente llena el form. La tool analiza y genera el diagnóstico inicial. Ahorra la primera reunión.',
    accent: 'bg-purple',
  },
]

export default function WhatYoullBuild() {
  return (
    <section className="bg-light-bg py-24 px-[77px]">
      <p className="font-dm font-medium text-[11.52px] tracking-[1.38px] uppercase text-[#8a8a8a] mb-8">
        Lo que construirás
      </p>
      <h2 className="font-bebas text-dark leading-[0.92] tracking-[1.47px] mb-16" style={{ fontSize: '73px' }}>
        TOOLS QUE EXISTEN<br />
        PORQUE{' '}
        <span className="text-purple">TÚ</span>
        {' '}LAS HACES.
      </h2>

      <div className="grid grid-cols-3 gap-4">
        {TOOLS.map((tool) => (
          <div key={tool.num} className="bg-white border border-[rgba(28,28,28,0.06)] rounded-2xl overflow-hidden relative flex flex-col justify-between pt-7 px-7 pb-0" style={{ minHeight: '228px' }}>
            <div>
              <p className="font-bebas text-[56px] leading-[1] text-[rgba(28,28,28,0.06)] mb-3">
                {tool.num}
              </p>
              <span className={`inline-block font-dm font-medium text-[9.9px] tracking-[0.99px] uppercase ${tool.tagColor} ${tool.tagBg} px-3 py-[3px] rounded-full mb-3`}>
                {tool.tag}
              </span>
              <h3 className="font-bebas text-dark text-[20.8px] tracking-[0.83px] leading-[1.2] mb-2">
                {tool.title}
              </h3>
              <p className="font-dm font-light text-[#8a8a8a] text-[12.8px] leading-[20.5px] mb-6">
                {tool.body}
              </p>
            </div>
            <div className={`h-[3px] w-full ${tool.accent}`} />
          </div>
        ))}
      </div>
    </section>
  )
}
