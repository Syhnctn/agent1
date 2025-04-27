// Modal functions
function openModal(id) {
    document.getElementById(id).classList.add('show');
}
function closeModal(id) {
    document.getElementById(id).classList.remove('show');
}

// Chatbot toggle
function toggleChatbot() {
    const container = document.getElementById('chatbot-container');
    container.classList.toggle('show');
}

// Chatbot send message (dummy)
function sendMessage() {
    const input = document.getElementById('chat-input');
    const chat = document.getElementById('chat-messages');
    if (!input.value.trim()) return;
    const userMsg = document.createElement('div');
    userMsg.className = 'mb-4 text-right';
    userMsg.innerHTML = `<div class="bg-blue-600 text-white p-3 rounded-lg inline-block max-w-xs">${input.value}</div>`;
    chat.appendChild(userMsg);
    chat.scrollTop = chat.scrollHeight;
    input.value = '';
    // Simulate bot reply
    setTimeout(() => {
        const botMsg = document.createElement('div');
        botMsg.className = 'mb-4';
        botMsg.innerHTML = `<div class="bg-blue-100 text-gray-800 p-3 rounded-lg max-w-xs">AgentI asistanı: Size yardımcı olabilmem için lütfen daha fazla ayrıntı verin.</div>`;
        chat.appendChild(botMsg);
        chat.scrollTop = chat.scrollHeight;
    }, 800);
}

// Responsive mobile menu (optional, if you want to implement)
// const mobileMenuBtn = document.querySelector('.md\:hidden');
// const nav = document.querySelector('nav');
// if (mobileMenuBtn && nav) {
//     mobileMenuBtn.addEventListener('click', () => {
//         nav.classList.toggle('hidden');
//     });
// }

// Language selector (basic reload, i18n handled in i18n.js)
document.getElementById('language-selector').addEventListener('change', function() {
    const lang = this.value;
    localStorage.setItem('lang', lang);
    location.reload();
}); 