/*global $,WOW*/
/*
===========================================================================
 EXCLUSIVE ON themeforest.net
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 Project Name		: RBN - Responsive CV/Resume Template
 Author             : Rabin Rai
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 Copyright (c) 2017 - Rabin Rai - https://rabinrai.com
===========================================================================
*/

$(document).ready(function () {
	"use strict";
    var $body = $("body"),/* cash Body */
        $window = $(window), /* cash window */
        myNav = $("#nav"), /* cash Nav */
        $link = $(".nav a"); /* cash Link */
    


/* Navbar */
    $window.on('scroll', function () {
        if ($window.scrollTop() >= 280) {
            myNav.addClass("scroll");
        } else {
            myNav.removeClass("scroll");
        }
    });
/* navbar toggle */
    $link.on("click", function () {
        if ($(".navbar-toggle").css("display") !== "none") {
            $(".navbar-toggle").trigger("click");
        }
    });
/* End Navbar */
    
    
    
  /* Scroll on buttons */  
    
    $('.js--scroll-work').click(function () {
        $('html,body').animate({scrollTop: $('.works').offset().top}, 800);
    });
    
    
    /* Scrolling Navigation with smooth */
        $(function() {
          $('a[href*=\\#]:not([href=\\#])').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
              var target = $(this.hash);
              target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
              if (target.length) {
                $('html, body').animate({
                  scrollTop: target.offset().top
                }, 800);
                return false;
              }
            }
          });
        });
    
   

    /* Activate WOW Animation */     
    new WOW().init();
    
    
      
/* Filter Gallery/Portfolio */  
    
    $(".filter-btn").click(function(){
        var value = $(this).attr('data-filter');
        
        if(value == "all")
        {
           
            $('.filter').show('1000');
        }
        else
        {

            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000');
            
        }
    });
    
    if ($(".filter-btn").removeClass("active")) {
$(this).removeClass("active");
}
$(this).addClass("active");

    
  
    
});

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}



