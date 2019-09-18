$(document).ready(() => {
  $(".slideshow .slick").slick({
    autoplay: true,
    autoplaySpeed: 1000,
    speed: 1000,
  });
});

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

let reset = () => {
  if (window.innerWidth > 572) {
    document.querySelector(".ham-menu").removeAttribute("style");
    document.querySelector(".menu-toggler i").className = "fas fa-bars";
  }
};

window.addEventListener("resize", reset);
