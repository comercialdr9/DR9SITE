const TelegramButton = ({ className = '', children = 'Fale Conosco' }) => {
  return (
    <a
      href="https://t.me/DR9AI_Support?start=site"
      target="_blank"
      rel="noopener noreferrer"
      className={`bg-sky-500 text-black px-8 py-4 rounded-2xl font-bold hover:opacity-90 transition ${className}`}
    >
      {children}
    </a>
  );
};

export default TelegramButton;