document.addEventListener("DOMContentLoaded", function() {
    var swiper = new Swiper('.swiper-container', {
        loop: true, // Não permite loop
        pagination: { 
            el: '.swiper-pagination', 
            clickable: true 
        },
        navigation: { 
            nextEl: '.swiper-button-next', 
            prevEl: '.swiper-button-prev' 
        },
        autoplay: false // Desabilita o autoplay completamente
    });
})

/* comprar.js */
var swiper = new Swiper('.swiper-container', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

// Seleciona todas as imagens do carrossel e da galeria
const images = document.querySelectorAll(".swiper-slide img, .multi-image img");
const overlay = document.querySelector(".image-overlay");
const overlayImage = document.querySelector(".image-overlay img");
const closeButton = document.querySelector(".close-btn");
const prevButton = document.querySelector(".prev-btn");
const nextButton = document.querySelector(".next-btn");

let currentIndex = 0; // Índice da imagem atual

// Função para abrir a imagem em tela cheia
function openImage(index) {
    currentIndex = index;

    // 🔥 Corrige a largura da tela antes de exibir a imagem
    document.documentElement.style.setProperty('overflow', 'hidden', 'important');
    document.body.style.setProperty('overflow', 'hidden', 'important');

    // Garante que a imagem seja carregada corretamente
    overlayImage.src = images[currentIndex].src;

    setTimeout(() => {
        overlayImage.style.maxWidth = "90vw";
        overlayImage.style.maxHeight = "90vh";
        overlayImage.style.objectFit = "contain";
        overlay.classList.add("active");
    }, 50); // Pequeno delay para evitar conflitos de redimensionamento
}

// Adiciona evento de clique para cada imagem
images.forEach((img, index) => {
    img.addEventListener("click", () => openImage(index));
});

// Fecha a imagem ao clicar no botão
closeButton.addEventListener("click", () => {
    overlay.classList.remove("active");

    // 🔧 Libera a rolagem da página ao fechar a imagem
    document.documentElement.style.removeProperty('overflow');
    document.body.style.removeProperty('overflow');
});

// Fecha ao clicar fora da imagem ampliada
overlay.addEventListener("click", (e) => {
    if (e.target === overlay) {
        overlay.classList.remove("active");
    }
});

// Função para navegar para a imagem anterior
prevButton.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    overlayImage.src = images[currentIndex].src;
});

// Função para navegar para a próxima imagem
nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    overlayImage.src = images[currentIndex].src;
});

