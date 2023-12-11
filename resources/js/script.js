$(document).ready(function () {
  $(".js-nav-icon").click(function () {
    var nav = $(".js-nav");
    var icon = $(".js-nav-icon i");

    nav.slideToggle(200);
    if (icon.hasClass("fa-solid fa-bars")) {
      icon.removeClass("fa-solid fa-bars");
      icon.addClass("fa-solid fa-xmark");
    } else {
      icon.removeClass("fa-solid fa-xmark");
      icon.addClass("fa-solid fa-bars");
    }
  });

  const boxes = document.querySelectorAll(".ani");
  window.addEventListener("scroll", checkBoxes);
  checkBoxes();

  function checkBoxes() {
    const triggerBottom = (window.innerHeight / 5) * 4;
    boxes.forEach((ani) => {
      const boxTop = ani.getBoundingClientRect().top;
      if (boxTop < triggerBottom) {
        ani.classList.add("animate__animated");
      } else {
        ani.classList.remove("animate__animated");
      }
    });
  }
});
