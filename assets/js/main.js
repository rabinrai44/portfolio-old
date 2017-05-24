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
    
   
    
   /* Active Toggle Nav */
 
    
    
    
    
    
    
    
    
    /* Activate WOW Animation */     
    new WOW().init();
    
});




