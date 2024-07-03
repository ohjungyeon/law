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
    }, 100);
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

$(document).ready(function () {
  let total = $(".slides li").length;
  let i = 0;
  let wid = 300;
  let timer;
  // 슬라이드 리스트의 첫 번째 요소를 리스트 끝에 추가
  $(".slides li").clone().appendTo(".slides");
  // 슬라이드 리스트의 마지막 요소를 리스트 앞에 추가
  $(".slides li:last-child").clone().prependTo(".slides");

  total += 2; // 추가된 두 개의 슬라이드 요소를 포함하도록 전체 개수를 증가시킴

  $(".slides").css("left", -wid); // 첫 번째 슬라이드로 이동

  function Navi() {
    $(".navi2 li").removeClass("on");
    $(".navi2 li").eq(i).addClass("on");
  }

  function start() {
    timer = setInterval(function () {
      i++;
      $(".slides")
        .stop()
        .animate({ left: -wid * (i + 1) }, 500, function () {
          if (i >= total - 2) {
            // 마지막 슬라이드 이후에 처음으로 돌아가야 함
            i = 0;
            $(".slides").css("left", -wid);
          }
          Navi();
        });
    }, 2000);
  }
  // $(".slides li:nth-child(" + (total - 1) + ")")
  //   .clone()
  //   .prependTo(".slides");

  // total += 1;

  // $(".slides").css("left", -wid);

  // function Navi() {
  //   $(".navi2 li").removeClass("on");
  //   $(".navi2 li").eq(i).addClass("on");
  // }

  // function start() {
  //   timer = setInterval(function () {
  //     i++;
  //     $(".slides")
  //       .stop()
  //       .animate({ left: -wid * (i + 1) }, 500, function () {
  //         if (i == total - 1) {
  //           i = 0;
  //           $(".slides").css("left", -wid);
  //         }
  //         Navi();
  //       });
  //   }, 2000);
  // }

  $(".navi2 li").on("click", function (event) {
    event.preventDefault();
    clearInterval(timer);

    let clickedIndex = $(this).index();
    i = clickedIndex;

    $(".slides")
      .stop()
      .animate({ left: -wid * (i + 1) }, 500, function () {
        Navi();
      });

    $(".navi2 li").removeClass("on");
    $(this).addClass("on");

    start();
  });

  $(".left").on("click", function () {
    clearInterval(timer);
    i++;
    if (i == total - 1) {
      $(".slides")
        .stop()
        .css({ left: -wid })
        .animate({ left: -wid * (i + 1) }, 500, function () {
          Navi();
        });
      i = 0;
    } else {
      $(".slides")
        .stop()
        .animate({ left: -wid * (i + 1) }, 500, function () {
          Navi();
        });
    }
    start();
  });

  $(".right").on("click", function () {
    clearInterval(timer);
    i--;
    if (i < 0) {
      $(".slides")
        .stop()
        .css({ left: -wid * (total - 1) })
        .animate({ left: -wid * i }, 500, function () {
          Navi();
        });
      i = total - 2;
    } else {
      $(".slides")
        .stop()
        .animate({ left: -wid * (i + 1) }, 500, function () {
          Navi();
        });
    }
    start();
  });

  Navi();
  start();
});

$(function () {
  let count1 = 3400;
  let count2 = 2500;
  let count3 = 0;
  let count4 = 0;
  let stop;

  let $a1 = $(".a1");
  let $a2 = $(".a2");
  let $a3 = $(".a3");
  let $a4 = $(".a4");

  function updateCount() {
    count1++;
    count2++;
    count3++;
    count4++;

    if (count1 >= 3400 && count1 <= 3500) {
      $a1.text(count1);
    }
    if (count2 >= 2500 && count2 <= 2534) {
      $a2.text(count2);
    }
    if (count3 <= 12) {
      $a3.text(count3);
    }
    if (count4 <= 89) {
      $a4.text(count4);
    }
  }

  function startCounting() {
    stop = setInterval(updateCount, 30);
  }

  $(window).scroll(function () {
    let scroll = $(this).scrollTop();
    let windowHeight = $(this).height();
    let con1 = $("#consultation").offset().top;
    let con2 = $("#contaitar").offset().top;
    let con3 = $("#press").offset().top;
    let con4 = $("#defense").offset().top;
    let con5 = $("#service").offset().top;
    let con6 = $("#Lawfirm").offset().top;

    if (scroll >= con1 && scroll < con2) {
      if (!stop) {
        startCounting();
        $("#contaitar").addClass("on");
      } else "#contaitar".removeClass("on");
    }
    if (scroll >= con2 && scroll < con3) {
      $("#press").addClass("on");

      $(".swiper-slide").each(function (index) {
        let delay = index * 300;
        $(this)
          .delay(delay)
          .queue(function () {
            $(this).addClass("visible").dequeue();
          });
      });
    }

    if (scroll >= con3 && scroll < con4) {
      $("#defense").addClass("on");
      $(".text3 h1").addClass("on");
      $(".text31").addClass("on");
    }
    if (scroll >= con4 && scroll < con5) {
      $("#service").addClass("on");
    }
    if (scroll >= con5 && scroll < con6) {
      $("#Lawfirm").addClass("on");
    }
  });

  $(window).trigger("scroll");
  $(".a1, .a2, .a3, .a4").css("transition", "text 0.3s ease");
});

$(function () {
  $(".xe").on("click", function (e) {
    e.preventDefault();

    $(".overlay").toggleClass("off");
    $(this).toggleClass("active");
    $("body").toggleClass("overlay-active");
  });

  $(".hamburger").on("click", function () {
    $("body").toggleClass("overlay-active");
  });
});
