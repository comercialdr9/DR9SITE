const Why = () => {
  return (
    <section id="sobre" className="bg-slate-950/60 border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl font-extrabold mb-6">Sobre a DR9 AI</h2>
          <p className="text-slate-400 leading-relaxed">
            A DR9 AI nasceu com o propósito de transformar negócios através da inteligência artificial. Desenvolvemos soluções modernas, seguras e escaláveis, focadas em resultado real.
          </p>
        </div>
        <div className="bg-gradient-to-br from-drblue/20 to-transparent rounded-3xl p-10">
          <ul className="space-y-4 text-slate-300">
            <li>✔ Atendimento automatizado 24/7</li>
            <li>✔ Integração com APIs modernas</li>
            <li>✔ Foco em conversão e performance</li>
            <li>✔ Arquitetura profissional</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Why;