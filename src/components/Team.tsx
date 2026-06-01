import doctor1 from '../assets/doctor1.webp';
import doctor2 from '../assets/doctor2.webp';
import doctor3 from '../assets/doctor3.webp';

export function Team() {
  const doctors = [
    {
      name: 'dr Marek Kowalski',
      specialty: 'Kardiolog',
      desc: 'Specjalista chorób serca, wieloletnie doświadczenie kliniczne',
      webp: doctor1,
    },
    {
      name: 'dr Anna Kowalska',
      specialty: 'Dermatolog',
      desc: 'Leczenie chorób skóry i konsultacje dermatologiczne',
      webp: doctor2,
    },
    {
      name: 'dr Michał Nowak',
      specialty: 'Internista',
      desc: 'Diagnostyka i leczenie chorób wewnętrznych',
      webp: doctor3,
    },
  ];

  return (
    <section id="team-section" className="scroll-mt-20 px-6 py-16 bg-white">
      <div className="max-w-xl mx-auto mb-10 text-center">
        <h2 className="text-3xl font-black text-brand-dark tracking-tight">
          Nasz zespół
        </h2>

        <p className="text-sm font-medium text-brand-muted mt-2">
          Poznaj naszych doświadczonych specjalistów
        </p>
      </div>

      <div className="max-w-xl mx-auto flex flex-col gap-5">
        {doctors.map((doc, idx) => (
          <div
            key={idx}
            className="border border-slate-100 p-6 rounded-2xl bg-white transition-all duration-300 hover:bg-white hover:shadow-xl hover:shadow-sky-900/5 hover:-translate-y-0.5 text-center"
          >
            <div className="flex justify-center mb-4">
              <div className="bg-slate-50 w-24 h-24 rounded-full overflow-hidden border border-slate-300">
                <img
                  src={doc.webp}
                  alt={doc.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <h3 className="text-xl font-bold text-brand-dark mb-1">
              {doc.name}
            </h3>

            <p className="text-sm font-semibold text-brand-blue uppercase tracking-wide mb-3">
              {doc.specialty}
            </p>

            <p className="text-sm text-brand-muted leading-relaxed">
              {doc.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}