import checkIcon from "../assets/checkIcon.webp";

export function Hero() {
  const bulletPoints = [
    "Doświadczeni specjaliści", 
    "Nowoczesny sprzęt", 
    "Krótkie terminy wizyt" 
  ];

  return (
    <section id="hero-section" className="scroll-mt-20 px-6 py-16 overflow-hidden">
      <div className="max-w-xl mx-auto flex flex-col gap-6">

        <h1 className="text-5xl font-black text-brand-dark leading-[1.15] tracking-tight">
          Profesjonalna opieka <br />
          <span className="bg-gradient-to-r from-brand-blue to-emerald-500 bg-clip-text text-transparent">
            medyczna w VitaCare
          </span>
        </h1>
        
        <p className="text-base text-brand-muted leading-relaxed font-medium">
          Konsultacje specjalistyczne i nowoczesna diagnostyka. <br />
          Szybkie terminy i doświadczony zespół lekarzy.
        </p>

        <a 
          href="#contact-section"
          className="bg-brand-dark text-white py-4 px-8 rounded-2xl font-bold text-center shadow-lg shadow-slate-900/10 hover:bg-brand-blue active:scale-[0.98] transition-all duration-300 block"
        >
          Umów wizytę 
        </a>

        <ul className="flex flex-col gap-3.5 mt-4 border-t border-slate-100 pt-6">
          {bulletPoints.map((item, idx) => (
            <li key={idx} className="flex items-center gap-3 text-brand-dark font-semibold text-sm">
              <div className="w-6 h-6 flex items-center justify-center shrink-0">
                <img src={checkIcon} alt="Check" className="w-6 h-6" />
              </div>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}