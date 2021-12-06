$(document).ready(function () {
  var owl = $('.owl-feature');
  var owlStory = $('.owl-story');
  owl.owlCarousel({
    loop: true,
    nav: true,
    margin: 10,
    autoplay: true,
    pagination: true,
    paginationNumbers: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      960: {
        items: 4
      },
      1200: {
        items: 4
      }
    }
  });

  owlStory.owlCarousel({
    loop: true,
    nav: true,
    margin: 10,
    autoplay: true,
    pagination: true,
    paginationNumbers: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1200: {
        items: 2
      }
    }
  });

});


$(document).on('scroll', function () { 
  if ($(window).scrollTop() > 700) {
    $('.navbar').addClass('change-color');
  } else {
    $('.navbar').removeClass('change-color');
  }
});