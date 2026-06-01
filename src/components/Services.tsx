import service1 from '../assets/service1.webp';
import service2 from '../assets/service2.webp';
import service3 from '../assets/service3.webp';

export function Services() {
  const servicesList = [
    {
      title: 'Konsultacje specjalistyczne',
      desc: 'Opieka doświadczonych lekarzy wielu specjalizacji',
      webp: service1,
    },
    {
      title: 'Diagnostyka medyczna',
      desc: 'Nowoczesne badania i szybkie wyniki',
      webp: service2,
    },
    {
      title: 'Pakiety zdrowotne',
      desc: 'Kompleksowa profilaktyka i opieka',
      webp: service3,
    },
  ];

  return (
    <section id="services-section" className="scroll-mt-24 px-6 py-16 bg-white border-y border-slate-100">
      <div className="max-w-xl mx-auto mb-10">
        <h2 className="text-3xl font-black text-brand-dark tracking-tight text-center">
          Nasze usługi
        </h2>
      </div>

      <div className="max-w-xl mx-auto flex flex-col gap-5">
        {servicesList.map((service, idx) => (
          <div
            key={idx}
            className="border border-slate-100 p-6 rounded-2xl transition-all duration-300 hover:bg-white hover:shadow-xl hover:shadow-sky-900/5 hover:-translate-y-0.5"
          >
            <div className="rounded-xl flex items-center justify-center mb-4 ">
              <img
                src={service.webp}
                alt={service.title}
              />
            </div>

            <h3 className="text-xl font-bold text-brand-dark mb-1.5 tracking-tight text-center">
              {service.title}
            </h3>

            <p className="text-sm font-medium text-brand-muted leading-relaxed mb-4 text-center">
              {service.desc}
            </p>

            <a 
              href="#contact-section"
              className="text-brand-blue font-bold text-sm hover:text-brand-dark transition-colors flex items-center gap-1 group mx-auto w-fit"
            >
              Dowiedz się więcej
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}