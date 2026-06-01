import { useState } from 'react';

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqItems = [
    {
      question: "Jak umówić wizytę?", 
      answer: "Skontaktuj się przez formularz kontaktowy lub telefonicznie." 
    },
    {
      question: "Czy potrzebne jest skierowanie?", 
      answer: "Nie, w większości przypadków nie jest wymagane skierowanie." 
    },
    {
      question: "Ile kosztuje wizyta?", 
      answer: "Cena zależy od specjalisty i rodzaju konsultacji." 
    },
    {
      question: "Jak szybko mogę dostać termin?", 
      answer: "Oferujemy szybkie terminy wizyt, często nawet w ciągu kilku dni." 
    }
  ];

  return (
    <section id="faq-section" className="scroll-mt-20 px-6 py-16 bg-white">
      <div className="max-w-xl mx-auto text-center mb-10">
        <h2 className="text-3xl font-black text-brand-dark tracking-tight mb-2">
          Najczęściej zadawane pytania 
        </h2>
        <p className="text-sm font-semibold text-brand-muted">
          Znajdź odpowiedzi na najczęstsze pytania dotyczące wizyt 
        </p>
      </div>

      <div className="flex flex-col gap-3.5 max-w-xl mx-auto">
        {faqItems.map((item, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div key={idx} className="border border-slate-100 rounded-2xl overflow-hidden transition-all">
              <button
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                className="w-full flex justify-between items-center p-5 text-left font-bold text-brand-dark hover:text-brand-blue transition-colors text-sm"
              >
                <span>{item.question}</span>
                <span className={`text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-brand-blue' : ''}`}>
                  ▼
                </span>
              </button>
              <div className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-40 border-t border-slate-100 bg-white' : 'max-h-0'}`}>
                <p className="p-5 text-sm font-medium text-brand-muted leading-relaxed">{item.answer}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}