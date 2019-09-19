$sliderMain = $(".slideshow .slick");

let settings = {
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 1000,
  dots: true,
  infinite: true,
  responsive: [{ breakpoint: 572, settings: "unslick" }],
};

let sliderShow = () => {
  $sliderMain.not(".slick-initialized").slick(settings);
};

let update = () => {
  if ($(window).width() > 572) {
    document.querySelector(".ham-menu").removeAttribute("style");
    document.querySelector(".menu-toggler i").className = "fas fa-bars";
    sliderShow();
  }
};

let toggler = () => {
  let x = document.querySelector(".ham-menu");
  if (x.style.opacity === "1") {
    x.style.opacity = "0";
  } else {
    x.style.opacity = "1";
  }
  let y = document.querySelector(".menu-toggler i");
  if (y.className === "fas fa-times") {
    y.className = "fas fa-bars";
  } else {
    y.className = "fas fa-times";
  }
};

$(document).ready(() => {
  sliderShow();
});

window.addEventListener("resize", update);
