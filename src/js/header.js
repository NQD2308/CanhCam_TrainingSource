// import { headerSearch } from "../../plugins/ComponentsUi/HeaderSearch/HeaderSearch";
// import { detectCloseElement } from "./helper";
/*==================== Header ====================*/
/**
 * @param header
 */
const vw = $(window).width();
export const header = {
  scrollActive: function () {
    let height = $("header").height();
    if ($(window).scrollTop() > height) {
      $("header").addClass("active");
    } else {
      $("header").removeClass("active");
    }
  },
  mobile: function () {
    $(".header-hambuger").on("click", function () {
      $(this).toggleClass("active");
      $("body").toggleClass("isOpenMenu");
    });
  },
  initVariable: function () {
    const height = $("header").height();
    document.documentElement.style.setProperty(
      "--header-height",
      `${height}px`
    );
  },
  init: function () {
    // headerSearch();
    header.scrollActive();
    header.mobile();
    header.initVariable();
    this.burgerMenu();
  },
  burgerMenu: function () {
    const $burgerBtn = $('[data-collapse-toggle="mobile-menu-2"]');
    const $mobileMenu = $("#mobile-menu-2");
    const $menuItems = $mobileMenu.find("a");

    // Toggle menu khi click vào burger button
    $burgerBtn.on("click", function () {
      $mobileMenu.slideToggle(300);
      $(this).toggleClass("active");
    });

    // Đóng menu khi click vào menu item
    $menuItems.on("click", function () {
      if (window.innerWidth < 1024) {
        $mobileMenu.slideUp(300);
        $burgerBtn.removeClass("active");
      }
    });

    // Đóng menu khi click ra ngoài
    $(document).on("click", function (e) {
      if (
        !$(e.target).closest(
          '#mobile-menu-2, [data-collapse-toggle="mobile-menu-2"]'
        ).length
      ) {
        if (window.innerWidth < 1024) {
          $mobileMenu.slideUp(300);
          $burgerBtn.removeClass("active");
        }
      }
    });

    // Xử lý resize window
    $(window).on("resize", function () {
      if (window.innerWidth >= 1024) {
        $mobileMenu.removeAttr("style");
        $burgerBtn.removeClass("active");
      }
    });
  },
};

document.addEventListener(
  "scroll",
  function (e) {
    header.scrollActive();
  },
  true
);
