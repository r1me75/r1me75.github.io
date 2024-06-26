(function($) {
    "use strict";
    
      $.fn.andSelf = function() {
        return this.addBack.apply(this, arguments);
      }
    
        /* Loader Code Start */
        $(window).on("load", function() { 
            $(".section-loader").fadeOut("slow");
            
            var $container = $('.portfolioContainer');
            $container.isotope({
                filter: '*',
                animationOptions: {
                    queue: true
                }
            });
            
            $("#portfolioTab a").click(function(e){
              e.preventDefault();
              $(this).tab("show");
          });
            
            $('.portfolio-nav li').click(function(){
                $('.portfolio-nav .current').removeClass('current');
                $(this).addClass('current');
         
                var selector = $(this).attr('data-filter');
                $container.isotope({
                    filter: selector,
                    animationOptions: {
                        queue: true
                    }
                 });
                 return false;
            });
          });
        /* Loader Code End */
  
  
        // var height = $('.mh-service-item').height();
        // if($(window).width()){
        //   $('.mh-service-item').css('height', height);   
        //   $('.mh-service-item').css('height', height);   
        // }
    
  
        
     
      /*
      |====================
      | Mobile NAv trigger
      |=====================
      */
      
      var trigger = $('.navbar-toggler'),
        overlay     = $('.overlay'),
        navc     = $('.navbar-collapse'),
        active      = false;
    
  
        $('.navbar-toggler, .navbar-nav li a, .overlay').on('click', function () {
            $('.navbar-toggler').toggleClass('active')
          //   $('#js-navbar-menu').toggleClass('active');
          //   $('.navbar-collapse').toggleClass('show');
            overlay.toggleClass('active');
            navc.toggleClass('active');
        });  
        
          
      /*
      |=================
      | Onepage Nav
      |================
      */
          
        $('#mh-header').onePageNav({
            currentClass: 'active', 
            changeHash: false,
            scrollSpeed: 750,
            scrollThreshold: 0.5,
        });
      
      /*
      |=================
      | fancybox
      |================
      */
   
        $("[data-fancybox]").fancybox({});
        
        
      /*
      |===============
      | WOW ANIMATION
      |==================
      */
          var wow = new WOW({
            mobile: false  // trigger animations on mobile devices (default is true)
        });
        wow.init();
        
        
      /*
      |=================
      | AOS
      |================
      */      
        
        //AOS.init();
    
      /*
      | ==========================
      | NAV FIXED ON SCROLL
      | ==========================
      */
      $(window).on('scroll', function() {
          var scroll = $(window).scrollTop();
          if (scroll >= 50) {
              $(".nav-scroll").addClass("nav-strict");
          } else {
              $(".nav-scroll").removeClass("nav-strict");
          }
      });
      
  
      /*
      |=================
      | Progress bar
      |================
      */   
      $(".determinate").each(function(){
        var width = $(this).text();
        $(this).css("width", width)
          .empty()
          .append('<i class="fa fa-circle"></i>');                
      });
      
      /*
      |=================
      | Portfolio mixin
      |================
      */   
      // $('#portfolio-item').mixItUp();
      
      
    
            
      // Smooth Scroll
          $(function() {
            $('a[href*=#]:not([href=#])').click(function() {
              if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                if (target.length) {
                  $('html,body').animate({
                    scrollTop: target.offset().top
                  }, 600);
                  return false;
                }
              }
            });
          });
      
  }(jQuery));
  