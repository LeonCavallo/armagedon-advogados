const menuButton = document.getElementById("menuButton");
const menu = document.getElementById("menu");
const year = document.getElementById("year");
const backToTop = document.getElementById("backToTop");
const whatsappForm = document.getElementById("whatsappForm");

year.textContent = new Date().getFullYear();

menuButton.addEventListener("click", () => {
    menu.classList.toggle("open");
});

document.querySelectorAll("#menu a").forEach((link) => {
    link.addEventListener("click", () => {
        menu.classList.remove("open");
    });
});

backToTop.addEventListener("click", (event) => {
    event.preventDefault();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

whatsappForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const telefone = document.getElementById("telefone").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();

    const texto = `Olá, gostaria de atendimento jurídico.

Nome: ${nome}
Telefone: ${telefone}
E-mail: ${email}

Mensagem:
${mensagem}`;

    const numeroWhatsapp = "5511993287213";
    const linkWhatsapp = `https://wa.me/${numeroWhatsapp}?text=${encodeURIComponent(texto)}`;

    window.open(linkWhatsapp, "_blank");
});