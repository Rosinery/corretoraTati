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
    overlayImage.src = images[currentIndex].src;
    overlay.classList.add("active");
}

// Adiciona evento de clique para cada imagem
images.forEach((img, index) => {
    img.addEventListener("click", () => openImage(index));
});

// Fecha a imagem ao clicar no botão
closeButton.addEventListener("click", () => {
    overlay.classList.remove("active");
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

