// Adiciona um listener para o envio do formulário de contato
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Validação simples para garantir que todos os campos foram preenchidos
    if (!name || !email || !message) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    const whatsappNumber = "5547991301434";

    // Monta o texto da mensagem, codificando caracteres especiais para URL
    const text = `Nome: ${name}%0AEmail: ${email}%0AMensagem: ${encodeURIComponent(message)}`;
    
    // Abre a api do Whatsapp com a mensagem pronta para o meu contato
    const whatsappURL = ` https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${text}`;

    window.open(whatsappURL, "_blank");
});

const contactSections = document.querySelectorAll(".contact-container");
contactSections.forEach(section => {
    observer.observe(section);
});