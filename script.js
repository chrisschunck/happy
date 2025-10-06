const container = document.getElementById("container");
const formulario = document.getElementById("formulario");

function animacaoButton(event) {
    event.preventDefault();

    const mensagem = document.getElementById("mensagem");
    mensagem.classList.remove("hidden");

    const foto = document.getElementById("foto");
  foto.classList.remove("hidden");
  foto.classList.add("animate-fade-in");
} 