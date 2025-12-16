import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Solutions from './sections/Solutions';
import Why from './sections/Why';
import Trust from './sections/Trust';
import Contact from './sections/Contact';

function App() {
  return (
    <div className="bg-drdark text-slate-200 font-[Inter] min-h-screen">
      <Navbar />
      <Hero />
      <Solutions />
      <Why />
      <Trust />
      <Contact />

      {/* Footer */}
      <footer className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="text-slate-500">© 2025 DR9 AI. Todos os direitos reservados.</span>
          <span className="text-slate-500">Suporte oficial: <a href="https://t.me/DR9AI_Support" target="_blank" rel="noopener noreferrer" className="text-drblue hover:underline">Telegram</a></span>
        </div>
      </footer>
    </div>
  );
}

export default App;