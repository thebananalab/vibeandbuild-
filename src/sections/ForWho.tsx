const CARDS = [
  {
    img: '/assets/idea_7407528.png',
    iconBg: 'bg-[rgba(130,109,238,0.12)]',
    title: 'Tienes una idea y no sabes por dónde empezar',
    body: 'Sabes lo que necesitas pero no sabes cómo construirlo. Este workshop es exactamente eso.',
  },
  {
    img: '/assets/golf_5697220.png',
    iconBg: 'bg-[rgba(216,243,130,0.4)]',
    title: 'Creativxs que necesitan tools para escalar',
    body: 'Tienes el negocio. Solo te faltan las herramientas que lo hagan crecer sin que tú tengas que estar en todo.',
  },
  {
    img: '/assets/rocket_9186247.png',
    iconBg: 'bg-[rgba(255,153,220,0.25)]',
    title: 'Freelancers que necesitan gestionar y automatizar',
    body: 'Propuestas, pricing, seguimiento. Todo puede funcionar solo. Literalmente.',
  },
  {
    img: '/assets/compass_4464523.png',
    iconBg: 'bg-[rgba(130,109,238,0.12)]',
    title: 'Agencias boutique que quieren entender mejor a su cliente',
    body: 'Briefings automáticos, diagnósticos de marca, dashboards. Hechos a tu medida no adaptados de algo genérico.',
  },
]

export default function ForWho() {
  return (
    <section className="bg-cream py-24 px-[77px]">
      <p className="font-dm font-medium text-[11.52px] tracking-[1.38px] uppercase text-[#8a8a8a] mb-8">
        ¿Para quién?
      </p>
      <h2 className="font-bebas text-dark leading-[0.92] tracking-[1.47px] mb-16" style={{ fontSize: '73px' }}>
        ESTE WORKSHOP<br />
        ES PARA{' '}
        <span className="text-purple">TI.</span>
      </h2>

      <div className="grid grid-cols-4 border border-[rgba(28,28,28,0.08)] rounded-sm overflow-hidden">
        {CARDS.map((card, i) => (
          <div key={i} className="bg-cream p-6 border-r border-[rgba(28,28,28,0.08)] last:border-r-0">
            <div className={`${card.iconBg} size-9 rounded-[18px] flex items-center justify-center mb-6`}>
              <img src={card.img} alt="" className="size-6 object-contain" />
            </div>
            <h3 className="font-bebas text-dark text-[22.4px] tracking-[0.9px] leading-[1.1] mb-3">
              {card.title}
            </h3>
            <p className="font-dm font-light text-[#8a8a8a] text-[13px] leading-[21.6px]">
              {card.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
