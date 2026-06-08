import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Team } from './components/Team';
import { Faq } from './components/Faq';
import { Reviews } from './components/Reviews';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-blue-100 selection:text-blue-800 antialiased">
      <Header />  
      <main>
        <Hero />
        <Services />
        <Team />
        <Faq />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;