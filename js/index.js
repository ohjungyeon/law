document.addEventListener("DOMContentLoaded", function () {
  let panelItems = document.querySelectorAll(".panel li");
  let naviItems = document.querySelectorAll(".navi li");
  let totalSlides = panelItems.length;
  let currentSlide = 0;
  let timer;

  startSlideshow();

  function startSlideshow() {
    showSlide(currentSlide);
    timer = setInterval(function () {
      currentSlide = (currentSlide + 1) % totalSlides;
      showSlide(currentSlide);
    }, 14000);
  }

  function showSlide(index) {
    panelItems.forEach(function (item) {
      item.style.display = "none";
    });

    panelItems[index].style.display = "block";

    naviItems.forEach(function (item) {
      item.classList.remove("on");
    });
    naviItems[index].classList.add("on");

    // 텍스트 애니메이션 처리
    let textItems = panelItems[index].querySelectorAll(".text h1, .text h4");
    textItems.forEach(function (textItem) {
      textItem.classList.remove("visible");
    });
    setTimeout(function () {
      textItems.forEach(function (textItem) {
        textItem.classList.add("visible");
      });
    }, 100); // 약간의 지연을 추가하여 애니메이션이 자연스럽게 보이도록 합니다.
  }

  naviItems.forEach(function (item, index) {
    item.addEventListener("click", function () {
      clearInterval(timer);
      currentSlide = index;
      showSlide(currentSlide);
      startSlideshow();
    });
  });
});
