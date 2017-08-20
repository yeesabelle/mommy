function initCarousel() {
  $('#gallery-preview').slick({
     slidesToShow: 1,
     slidesToScroll: 1,
     arrows: false,
     fade: true,
     asNavFor: '#gallery-nav'
  });
  $('#gallery-nav').slick({
     slidesToShow: 3,
     slidesToScroll: 1,
     asNavFor: '#gallery-preview',
     dots: true,
     centerMode: true,
     focusOnSelect: true
  });
}

window.addEventListener('load', initCarousel)
