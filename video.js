var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2, /* Define quantos vídeos aparecem por vez */
    spaceBetween: 20, /* Espaço entre os vídeos */
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        }
    }
});

var swiper = new Swiper(".swiper", {
    loop: true, // 🔄 Ativa o loop
    loopAdditionalSlides: 1, // 🔁 Faz o botão direito não parar
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    spaceBetween: 20, // Espaçamento entre os vídeos
    slidesPerView: 1, // Mostra um vídeo por vez
    centeredSlides: true, // Mantém o vídeo centralizado
});

document.addEventListener("DOMContentLoaded", function () {
    const videos = document.querySelectorAll("video");

    videos.forEach((video) => {
      video.addEventListener("click", function (event) {
        event.preventDefault(); // Evita qualquer comportamento inesperado
        if (video.paused) {
          video.play();
        } else {
          video.pause();
        }
      });

      // Permite dar play ao tocar na tela (em dispositivos móveis)
      video.addEventListener("touchstart", function (event) {
        event.preventDefault();
        if (video.paused) {
          video.play();
        } else {
          video.pause();
        }
      });
    });
  });