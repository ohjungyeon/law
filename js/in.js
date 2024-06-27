$(function(){
  let total = $(".panel>li").length;
  console.log(total)
  let i = 0;
  let wid = 500;

  start();

  function start(){
      timer =   setInterval(function(){
          i++;
          if(i == total-1) {
              $(".panel").stop().animate({"left":-i*wid}, function(){
                  $(".panel").css({"left":0})
              })
             
              i = 0;
          } else {
              $(".panel").stop().animate({"left":-i*wid})
          }
         $(".navi li").removeClass("on")
         $(".navi li").eq(i).addClass("on")
      },2000)
  }

  $(".navi li").on("click",function(){
      clearInterval(timer);
      i = $(this).index();
      $(".panel").stop().animate({"left":-i*wid});
      $(".navi li").removeClass("on");
      $(".navi li").eq(i).addClass("on");
      start();

  });


  $(".next").on("click",function(){
      clearInterval(timer);
      i++;
      if(i == total-1) {
          $(".panel").stop().animate({"left":-i*wid},function(){
              $(".panel").css({"left":"0"});
          });
          i = 0;
      } else {
          $(".panel").stop().animate({"left":-i*wid});
      }
      $(".navi li").removeClass("on");
      $(".navi li").eq(i).addClass("on");
      start();

  });

  $(".prev").on("click",function(){
      clearInterval(timer);
      i--;
      if(i < 0 ) {
          // $(".panel").css({"left":"-1000px"})
          // $(".panel").stop().animate({"left":"-500px"})

          $(".panel").css({"left":-((i+3)*wid)})
          $(".panel").stop().animate({"left":-(-i*wid)})
          i = 1;

      } else {
          $(".panel").stop().animate({"left": -i*wid })
      }
     
     
      $(".navi li").removeClass("on");
      $(".navi li").eq(i).addClass("on");
      start();
  });




})