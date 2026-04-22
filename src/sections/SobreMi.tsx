const EXPERTISE = [
  { label: 'Dirección de Arte + IA', color: 'bg-purple text-white' },
  { label: 'Vibe Coding', color: 'bg-lime text-dark border border-dark' },
  { label: 'Identidad Visual', color: 'bg-pink text-dark' },
  { label: 'Midjourney · 2+ años · 50+ proyectos', color: 'bg-[rgba(130,109,238,0.25)] text-purple border border-purple' },
  { label: 'Adobe Firefly', color: 'bg-[rgba(255,153,220,0.3)] text-pink border border-pink' },
  { label: 'Sora · Runway', color: 'bg-lime text-dark' },
  { label: 'Brand Strategy', color: 'bg-purple text-white' },
  { label: 'Liderazgo Creativo', color: 'bg-[rgba(216,243,130,0.25)] text-lime border border-lime' },
  { label: 'Scalable Production 10×', color: 'bg-pink text-dark' },
  { label: 'Pipelines de IA', color: 'bg-[rgba(130,109,238,0.25)] text-purple border border-purple' },
]

const BADGES = [
  { name: 'Fermat.app', role: 'Ambassador', bg: 'bg-purple', text: 'text-lime' },
  { name: 'Flora Fauna AI', role: 'Ambassador', bg: 'bg-lime', text: 'text-dark' },
  { name: 'House of Prompt', role: '1st Place · Fantasy', bg: 'bg-pink', text: 'text-dark' },
  { name: 'AIMA 2026', role: 'Official Selection · Fashion', bg: 'bg-[rgba(130,109,238,0.25)] border border-purple', text: 'text-white' },
  { name: 'CreAtiva AI Art Book', role: 'Selected Artist · Vol.9', bg: 'bg-[rgba(216,243,130,0.15)] border border-lime', text: 'text-lime' },
]

export default function SobreMi() {
  return (
    <section className="bg-dark py-16 px-5 sm:px-8 lg:px-[77px] overflow-hidden">
      <p className="font-dm font-medium text-[11.52px] tracking-[1.38px] uppercase text-[rgba(255,255,255,0.35)] mb-8">
        Sobre mí
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-20 items-start">

        {/* Left */}
        <div>
          {/* Photo */}
          <div className="mb-8">
            <div className="relative inline-block">
              <img
                src="/assets/RoseDays.jpg"
                alt="Laura Rosa Díaz Cañas"
                className="w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] rounded-[24px] object-cover object-top"
              />
              <div className="absolute -bottom-3 -right-3 bg-lime border-[2px] border-dark rounded-full px-3 py-1">
                <span className="font-bebas text-dark text-[13px] tracking-[0.5px]">Rose Days</span>
              </div>
            </div>
          </div>

          {/* Name block */}
          <div className="mb-8">
            <h2
              className="font-bebas leading-[0.88] text-white mb-3"
              style={{ fontSize: 'clamp(52px, 9vw, 96px)', letterSpacing: '0.02em' }}
            >
              LAURA ROSA<br />
              <span className="text-purple">DÍAZ CAÑAS</span>
            </h2>
            <div className="flex items-center gap-3 flex-wrap">
              <span className="font-dm font-light text-[rgba(255,255,255,0.5)] text-sm">
                Creative AI Specialist &amp; Brand Leader
              </span>
            </div>
          </div>

          {/* Bio */}
          <p className="font-dm font-light text-[rgba(255,255,255,0.7)] text-[15px] leading-[26px] mb-8 max-w-lg">
            10+ años construyendo marcas y liderando equipos creativos en Europa y Latinoamérica.
            Ahora especializada en dirección de arte dentro de flujos y herramientas con IA.
          </p>

          {/* Expertise pills */}
          <p className="font-dm font-medium text-[10.4px] tracking-[1.25px] uppercase text-[rgba(255,255,255,0.3)] mb-4">
            Expertise
          </p>
          <div className="flex flex-wrap gap-2 mb-10">
            {EXPERTISE.map((e) => (
              <span
                key={e.label}
                className={`font-dm font-medium text-[11px] tracking-[0.7px] uppercase px-4 py-[6px] rounded-full ${e.color}`}
              >
                {e.label}
              </span>
            ))}
          </div>

          {/* Stat row */}
          <div className="flex gap-8 flex-wrap">
            {[
              { num: '10+', label: 'años en branding' },
              { num: '50+', label: 'proyectos con IA' },
              { num: '10×', label: 'producción más rápida' },
            ].map((s) => (
              <div key={s.label}>
                <p className="font-bebas text-purple text-[42px] leading-[1]">{s.num}</p>
                <p className="font-dm font-light text-[rgba(255,255,255,0.4)] text-[11px] tracking-[0.8px] uppercase mt-1">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right */}
        <div className="flex flex-col gap-6">

          {/* Reconocimientos */}
          <div>
            <p className="font-dm font-medium text-[10.4px] tracking-[1.25px] uppercase text-[rgba(255,255,255,0.3)] mb-4">
              Reconocimientos & Partnerships IA
            </p>
            <div className="flex flex-col gap-2">
              {BADGES.map((b) => (
                <div
                  key={b.name}
                  className={`${b.bg} rounded-2xl flex items-center justify-between px-5 py-4`}
                >
                  <span className={`font-bebas text-[18px] tracking-[0.5px] ${b.text}`}>
                    {b.name}
                  </span>
                  <span className={`font-dm font-medium text-[10.4px] tracking-[0.8px] uppercase opacity-70 ${b.text}`}>
                    {b.role}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Formación */}
          <div className="bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.06)] rounded-2xl p-6">
            <p className="font-dm font-medium text-[10.4px] tracking-[1.25px] uppercase text-[rgba(255,255,255,0.3)] mb-4">
              Formación
            </p>
            <ul className="space-y-3">
              {[
                { title: 'Executive Máster Brand Management', school: 'ESADE · Barcelona, 2023' },
                { title: 'Master in Branding', school: 'ELISAVA · Barcelona, 2014' },
                { title: 'Postgrado Digital Creative Strategist', school: 'UAB · Barcelona, 2019' },
                { title: 'Fashion & Graphic Design (5 años)', school: 'UPB · Medellín, 2011' },
              ].map((e) => (
                <li key={e.title} className="flex items-start gap-3">
                  <span className="mt-[7px] size-[5px] bg-purple rounded-full shrink-0" />
                  <div>
                    <p className="font-dm font-medium text-white text-[13px] leading-[1.3]">{e.title}</p>
                    <p className="font-dm font-light text-[rgba(255,255,255,0.35)] text-[11px] tracking-[0.5px] uppercase">{e.school}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
