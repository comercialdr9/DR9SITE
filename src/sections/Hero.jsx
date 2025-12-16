import Plasma from '../components/Plasma';
import TelegramButton from '../components/TelegramButton';

const Hero = () => {
  return (
    <section id="inicio" className="relative overflow-hidden" style={{ height: '100vh' }}>
      <div className="absolute inset-0">
        <Plasma
          color="#ff6b35"
          speed={0.6}
          direction="forward"
          scale={1.1}
          opacity={0.6}
          mouseInteractive={true}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-drblue/10 via-transparent to-transparent"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-28 flex items-center justify-center min-h-full">
        <div className="text-center">
          <span className="inline-block mb-4 px-4 py-1 rounded-full bg-drblue/10 text-drblue text-sm font-semibold">
            Inteligência Artificial de Nova Geração
          </span>
          <h1 className="text-5xl md:text-7xl font-black leading-tight max-w-4xl mb-6">
            Automação, IA e Performance para Negócios Digitais
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-10">
            A DR9 AI cria soluções inteligentes para atendimento, vendas, automação e análise de dados, elevando sua operação a outro nível.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#solucoes" className="bg-drblue text-black px-8 py-4 rounded-2xl font-bold hover:opacity-90 transition">
              Conhecer Soluções
            </a>
            <TelegramButton />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;