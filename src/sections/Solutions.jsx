const Solutions = () => {
  return (
    <section id="solucoes" className="max-w-7xl mx-auto px-6 py-24">
      <h2 className="text-4xl font-extrabold mb-4 text-center">Soluções DR9 AI</h2>
      <p className="text-slate-400 mb-14 max-w-2xl mx-auto text-center">
        Tecnologia aplicada para escalar atendimento, vendas e operações com inteligência artificial.
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-slate-900/60 p-8 rounded-2xl border border-slate-800 hover:border-drblue transition">
          <h3 className="text-xl font-bold mb-3">🤖 Bots Inteligentes</h3>
          <p className="text-slate-400">
            Chatbots com IA para WhatsApp, Telegram e sites, integrados com vendas e atendimento humano.
          </p>
        </div>
        <div className="bg-slate-900/60 p-8 rounded-2xl border border-slate-800 hover:border-drblue transition">
          <h3 className="text-xl font-bold mb-3">⚙️ Automação</h3>
          <p className="text-slate-400">
            Fluxos automáticos para respostas, pagamentos, suporte e processos internos.
          </p>
        </div>
        <div className="bg-slate-900/60 p-8 rounded-2xl border border-slate-800 hover:border-drblue transition">
          <h3 className="text-xl font-bold mb-3">📊 IA para Negócios</h3>
          <p className="text-slate-400">
            Análise de dados, decisões inteligentes e personalização em escala.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Solutions;