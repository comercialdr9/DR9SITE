import TelegramButton from '../components/TelegramButton';

const Contact = () => {
  return (
    <section id="contato" className="max-w-7xl mx-auto px-6 py-24 text-center">
      <h2 className="text-4xl font-extrabold mb-6">Vamos construir algo grande?</h2>
      <p className="text-slate-400 mb-10">
        Entre em contato e descubra como a DR9 AI pode transformar seu projeto.
      </p>
      <TelegramButton className="text-lg px-10 py-5" />
    </section>
  );
};

export default Contact;