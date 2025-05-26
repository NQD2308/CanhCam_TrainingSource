// Đảm bảo SwiperJS đã được import trước đó (qua CDN hoặc import module)
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
