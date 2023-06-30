$(function(){
  $('.m-slider').slick({
    dots:false,
    slidesToShow: 5,
    slidesToScroll:1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    fade: false,
    vertical: false,
    // arrows: true,
    // prevArrow: "<a>Prev</a>",
    // nextArrow: "<a>Next</a>",
    prevArrow: '<i class="xi-angle-left-min prev-btn"></i>',
    nextArrow: '<i class="xi-angle-right-min next-btn"></i>'
  }); 
});

$(function(){
  $('.sub-slider').slick({
    dots:true,
    slidesToShow: 1,
    slidesToScroll:1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true,
    vertical: false,
    // arrows: true,
    prevArrow: "<a>Prev</a>",
    nextArrow: "<a>Next</a>",
    prevArrow: '<i class="xi-angle-left-min prev-btn"></i>',
    nextArrow: '<i class="xi-angle-right-min next-btn"></i>'
  }); 
});

$(function(){
  $('.sub-slick').slick({
    dots:true,
    slidesToShow: 3.5,
    slidesToScroll:1,
    prevArrow: "<a>Prev</a>",
    nextArrow: "<a>Next</a>",
    prevArrow: '<i class="xi-angle-left-min prev-btn"></i>',
    nextArrow: '<i class="xi-angle-right-min next-btn"></i>',
  }); 
});

window.onscroll=function(){
  scrollFunction();
}

var header = document.querySelector("header");
var logo = document.querySelectorAll(".logo > a ")
var subtitle = document.querySelectorAll(".sub1 > li > a");
var maintitle = document.querySelectorAll(".mainsub li > a");
var subtitle2 = document.querySelectorAll(".sub2 > li > a");
// var logo2 = document.querySelector(".maintitle-logo .logo2 > a.dg")


function stylechange(str1, str2, str3, str4){
  document.querySelector(".logo a.white").style.cssText = "display:"+str1;
  document.querySelector(".logo a.black").style.cssText = "display:"+str2;
  document.querySelector(".logo2 a.dg").style.cssText = "display:"+str3;
  // document.querySelector(".maintitle-logo .logo2 > a.dg").style.cssText ="display:"+str1;

  for(var i=0; i < subtitle.length; i++){
    subtitle[i].style.cssText ="color:" + str4;
  } 
  for(var i=0; i < maintitle.length; i++){
    maintitle[i].style.cssText ="color:" + str4;
  }
  for(var i=0; i< subtitle2.length; i++){
    subtitle2[i].style.cssText ="color:" + str4;
  }
}

function scrollFunction(){
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
      header.style.cssText = "background-color:white; height:110px" 
      stylechange("none","none","block","black");

      // for(var i=0; i < subtitle.length; i++){
      //   subtitle[i].style.cssText ="color:black" 
      // } 
      // for(var i=0; i < maintitle.length; i++){
      //   maintitle[i].style.cssText ="color:black" 
      // }
      // for(var i=0; i< subtitle2.length; i++){
      //   subtitle2[i].style.cssText ="color:black" 
      // }
      // document.querySelector("maintitle_logo .maintitle-logo a.white").style.cssText = "display:none";
      // document.querySelector("maintitle_logo .maintitle-logo a.black").style.cssText = "display:block";
    
      $("header").mouseout(function(){
        header.style.cssText = "background-color:white; height:110px";
        stylechange("none", "none","block", "black");
        $("header").mouseover(function(){
          header.style.cssText = "background-color:white; height:110px ";
          stylechange("none", "none","block", "black");})
    });
    
    }else{
      header.style.cssText = "background-color:none; height:110px";
      stylechange("block", "none", "none", "white");

      $("header").mouseover(function(){
        header.style.cssText = "background-color:white; height:110px ";
        stylechange("none", "none","block", "black");})

        $("header").mouseout(function(){
          header.style.cssText = "background-color:none; height:110px";
          stylechange("block", "none","noen", "white");
        })
      }
}



