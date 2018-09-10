function initCarousel() {
  console.log("loading!")
  $('#gallery-preview').slick({
     slidesToShow: 1,
     slidesToScroll: 1,
     arrows: false,
     fade: true,
     asNavFor: '#gallery-nav',
  });
  $('#gallery-nav').slick({
     slidesToShow: 3,
     slidesToScroll: 1,
     asNavFor: '#gallery-preview',
     dots: true,
     centerMode: true,
     focusOnSelect: true,
     autoplay: true,
     autoplaySpeed: 2000,
  });
}

window.addEventListener('load', initCarousel)
