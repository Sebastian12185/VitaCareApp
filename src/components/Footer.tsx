import logo from '../assets/logo.webp';

export function Footer() {
  return (
    <footer className="bg-brand-dark border-t border-slate-800 px-6 md:px-0">
      <div className="max-w-6xl mx-auto flex flex-row items-center justify-between gap-4">
        
        <div className="shrink-0 flex items-center">
          <img
            src={logo}
            alt="VitaCare logo"
            width="112"
            height="112"
            className="h-14 sm:h-20 md:h-28 w-auto object-contain"
          />
        </div>

        <p className="text-slate-400 text-xs sm:text-sm md:text-lg font-medium tracking-wide text-right whitespace-nowrap">
          © Copyright 2026. VitaCare
        </p>
        
      </div>
    </footer>
  );
}