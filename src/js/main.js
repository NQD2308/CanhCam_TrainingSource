import AOS from "aos";
import lozad from "lozad";
import {
  setBackgroundElement,
  detectCloseElement,
  buttonToTop,
  clickScrollToDiv,
  appendCaptchaASP,
} from "./helper";
import { header } from "./header";
import { swiperInit } from "./swiper";
import Swiper from "swiper";
$(document).ready(function () {
  setBackgroundElement();
  try {
    const cardHover = $(".card-option");

    cardHover.on("click", function () {
      $(".card-option").removeClass("active");
      $(this).toggleClass("active");
    });

    // Home/Home-1
    var swiper = new Swiper(".mySwiperBanner", {
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });

    // Home/Home-4
    var swiper = new Swiper(".mySwiperFlexCard", {
      spaceBetween: 10,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });

    // Home/Home-6
    var swiper = new Swiper(".wrapper", {
      loop: true,
      spaceBetween: 40,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
        },
        480: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1200: {
          slidesPerView: 4,
        },
      },
    });

    // Modal search
    const openModalBtn = document.getElementById("openModalBtn");
    const closeModalBtn = document.getElementById("closeModalBtn");
    const modal = document.getElementById("modal");
    const modalContent = document.getElementById("modalContent");

    // Mở modal
    openModalBtn.addEventListener("click", () => {
      modal.classList.remove("hidden");
      modal.classList.add("flex");
    });

    // Đóng modal khi bấm nút close
    closeModalBtn.addEventListener("click", () => {
      modal.classList.add("hidden");
      modal.classList.remove("flex");
    });

    // Đóng modal khi nhấn ra ngoài khung nội dung
    modal.addEventListener("click", (e) => {
      if (!modalContent.contains(e.target)) {
        modal.classList.add("hidden");
        modal.classList.remove("flex");
      }
    });

    document
      .querySelector(".btn-go-top")
      ?.addEventListener("click", function (e) {
        e.preventDefault();
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      });

    header.init();
    swiperInit();
  } catch (error) {
    console.log(error);
  }
});

/*==================== Aos Init ====================*/
AOS.init({
  offset: 100,
});
/*==================== Lazyload JS ====================*/
const observer = lozad(); // lazy loads elements with default selector as '.lozad'
observer.observe();
