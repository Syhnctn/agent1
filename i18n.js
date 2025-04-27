// Basit i18n desteği
const translations = {
  tr: {
    'nav.features': 'Özellikler',
    'nav.pricing': 'Fiyatlandırma',
    'nav.catalog': 'Katalog',
    'nav.testimonials': 'Müşteri Yorumları',
    'nav.login': 'Giriş Yap',
    'nav.getStarted': 'Hemen Başla',
    'hero.title': 'İşletmenizi <span class="text-blue-600">Yapay Zeka Ajanları</span> ile Güçlendirin',
    'hero.description': 'AgentI, görevleri otomatikleştiren, üretkenliği artıran ve iş akışınızı dönüştüren özel yapay zeka ajanları sunar.',
    'hero.browseAgents': 'Ajanları Keşfet',
    'features.title': 'Neden AgentI?',
    'features.description': 'Yapay zeka ajanlarımız, karmaşık görevleri insan benzeri hassasiyet ve verimlilikle gerçekleştirmek için tasarlanmıştır.',
    'features.lightningFast.title': 'Şimşek Hızında',
    'features.lightningFast.description': 'Ajanlarımız bilgileri saniyeler içinde işler ve görevleri tamamlar, size değerli zaman kazandırır.',
    'features.continuousLearning.title': 'Sürekli Öğrenme',
    'features.continuousLearning.description': 'Ajanlar zamanla gelişir, özel ihtiyaçlarınıza ve tercihlerinize uyum sağlar.',
    'features.enterpriseSecurity.title': 'Kurumsal Güvenlik',
    'features.enterpriseSecurity.description': 'Askeri düzeyde şifreleme, verilerinizin gizli ve güvenli kalmasını sağlar.',
    'pricing.title': 'Basit, Şeffaf Fiyatlandırma',
    'pricing.description': 'İhtiyaçlarınıza uygun planı seçin. Gizli ücret yoktur.',
    'catalog.loadMore': 'Daha Fazla Ajan Göster',
    'testimonials.title': 'Müşterilerimiz Ne Diyor?',
    'testimonials.description': 'Sadece bizim sözümüze güvenmeyin. İşte müşterilerimizin söyledikleri.',
    'chatbot.title': 'AgentI Asistanı',
    'chatbot.welcome': 'Merhaba! Ben AgentI asistanınızım. Size nasıl yardımcı olabilirim?',
    'chatbot.placeholder': 'Mesajınızı yazın...'
  },
  en: {
    'nav.features': 'Features',
    'nav.pricing': 'Pricing',
    'nav.catalog': 'Catalog',
    'nav.testimonials': 'Testimonials',
    'nav.login': 'Login',
    'nav.getStarted': 'Get Started',
    'hero.title': 'Empower Your Business with <span class="text-blue-600">AI Agents</span>',
    'hero.description': 'AgentI offers custom AI agents that automate tasks, boost productivity, and transform your workflow.',
    'hero.browseAgents': 'Browse Agents',
    'features.title': 'Why AgentI?',
    'features.description': 'Our AI agents are designed to perform complex tasks with human-like precision and efficiency.',
    'features.lightningFast.title': 'Lightning Fast',
    'features.lightningFast.description': 'Our agents process information in seconds and complete tasks, saving you valuable time.',
    'features.continuousLearning.title': 'Continuous Learning',
    'features.continuousLearning.description': 'Agents improve over time, adapting to your unique needs and preferences.',
    'features.enterpriseSecurity.title': 'Enterprise Security',
    'features.enterpriseSecurity.description': 'Military-grade encryption keeps your data confidential and secure.',
    'pricing.title': 'Simple, Transparent Pricing',
    'pricing.description': 'Choose the plan that fits your needs. No hidden fees.',
    'catalog.loadMore': 'Show More Agents',
    'testimonials.title': 'What Do Our Customers Say?',
    'testimonials.description': 'Don\'t just take our word for it. Here\'s what our customers say.',
    'chatbot.title': 'AgentI Assistant',
    'chatbot.welcome': 'Hello! I am your AgentI assistant. How can I help you?',
    'chatbot.placeholder': 'Type your message...'
  }
};

function applyTranslations() {
  const lang = localStorage.getItem('lang') || 'tr';
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (translations[lang] && translations[lang][key]) {
      el.setAttribute('placeholder', translations[lang][key]);
    }
  });
  // Set selector value
  const selector = document.getElementById('language-selector');
  if (selector) selector.value = lang;
}

document.addEventListener('DOMContentLoaded', applyTranslations); 