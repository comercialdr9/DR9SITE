const Trust = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24 text-center">
      <h2 className="text-4xl font-extrabold mb-6">Por que confiar na DR9 AI?</h2>
      <p className="text-slate-400 mb-14 max-w-2xl mx-auto">
        Frases curtas que passam confiança em até 5 segundos.
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-slate-900/60 p-8 rounded-2xl border border-slate-800">
          <h3 className="text-xl font-bold mb-3">Usado por Empreendedores</h3>
          <p className="text-slate-400">
            Centenas de negócios digitais já confiam em nossas soluções para escalar operações.
          </p>
        </div>
        <div className="bg-slate-900/60 p-8 rounded-2xl border border-slate-800">
          <h3 className="text-xl font-bold mb-3">Atendimento Profissional</h3>
          <p className="text-slate-400">
            Suporte técnico especializado e consultoria personalizada para seu projeto.
          </p>
        </div>
        <div className="bg-slate-900/60 p-8 rounded-2xl border border-slate-800">
          <h3 className="text-xl font-bold mb-3">Resultados Comprovados</h3>
          <p className="text-slate-400">
            Aumento médio de 300% na eficiência operacional dos nossos clientes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Trust;