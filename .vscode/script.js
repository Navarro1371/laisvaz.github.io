const langBtn = document.querySelector('.lang-toggle'); // botão EN/PT
const form = document.querySelector('form'); // supondo que exista o formulário
let currentLang = 'pt';

if (langBtn) {
  langBtn.addEventListener('click', () => {
    currentLang = currentLang === 'pt' ? 'en' : 'pt';
    langBtn.textContent = currentLang.toUpperCase();
    translateSite(currentLang);
  });
}

function translateSite(lang) {
  const title = document.querySelector('h2');
  const paragraph = document.querySelector('p');

  if (lang === 'en') {
    title.textContent = 'Creative, functional design for businesses and content creators.';
    paragraph.textContent = 'Canva and visual design: banners, carousels, logos, and marketing assets.';
  } else {
    title.textContent = 'Design criativo e funcional para empresas e criadores de conteúdo.';
    paragraph.textContent = 'Design visual no Canva: banners, carrosséis, logotipos e materiais de marketing.';
  }
}

// Envio de mensagem via e-mail abrindo o app de e-mail do usuário
form?.addEventListener('submit', (e) => {
  e.preventDefault();

  const nome = document.querySelector('#name').value;
  const data = document.querySelector('#date').value;
  const hora = document.querySelector('#time').value;
  const servico = document.querySelector('#service').value;
  const mensagem = document.querySelector('#message').value;

  let dateFormatted = data;

  if (currentLang === 'pt') {
    const [ano, mes, dia] = data.split('-');
    dateFormatted = `${dia}/${mes}/${ano}`;
  }

  const subject = currentLang === 'pt'
    ? `Agendamento — ${nome}`
    : `Booking — ${nome}`;

  const body = currentLang === 'pt'
    ? `Olá Laís! Gostaria de agendar um horário para falar sobre ${servico} no dia ${dateFormatted} às ${hora}.\n\nBriefing: ${mensagem}`
    : `Hi Laís! I'd like to schedule a meeting about ${servico} on ${dateFormatted} at ${hora}.\n\nBriefing: ${mensagem}`;

  const mailtoLink = `mailto:laisvazgoncalves18@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.location.href = mailtoLink;
});
