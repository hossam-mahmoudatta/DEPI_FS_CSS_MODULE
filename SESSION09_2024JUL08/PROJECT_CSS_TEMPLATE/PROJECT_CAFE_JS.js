// PROJECT_CAFE_JS.js

$(document).ready(function() {
  var lastScrollTop = 0;
  var navbar = $('#mainNav');

  $(window).scroll(function(event) {
      var st = $(this).scrollTop();

      if (st > lastScrollTop){
          // Downscroll code
          navbar.addClass('smaller');
      } else {
          // Upscroll code
          navbar.removeClass('smaller');
      }
      lastScrollTop = st;
  });
});

// Initialize scrollspy
$('body').scrollspy({ target: '#navbarNav' });
