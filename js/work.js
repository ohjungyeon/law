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
  $(function () {
    function clivil() {
      $(".seciton").hide();
      $("#civil").show();
    }

    function detective() {
      $(".seciton").hide();
      $("#detective").show();
    }

    function individaual() {
      $(".seciton").hide();
      $("#individual").show();
    }
    function enterprise() {
      $(".seciton").hide();
      $("#enterprise").show();
    }

    $("#showcivil").on("click", function () {
      clivil();
    });
    $("#showdetective").on("click", function () {
      detective();
    });

    $("#showindividual").on("click", function () {
      individaual();
    });

    $("#showenterprise").on("click", function () {
      enterprise();
    });
  });
});
