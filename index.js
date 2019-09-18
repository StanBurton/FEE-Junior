let toggler = () => {
  let x = document.querySelector(".ham-menu");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
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
