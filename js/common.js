$(document).ready(function(){

  if ($('.main-nav__btn-menu').length) {
    $('.main-nav__btn-menu').click(function(e) {
      e.preventDefault();

      $('.main-nav__list').toggleClass('main-nav__list--closed');
      $('.page-header__bar').toggleClass('page-header__bar--closed');
    });
  }

  if ($('#reviewsCarousel').length) {
    $('#reviewsCarousel').slick({
      dots: false,
      centerMode: true,
      centerPadding: '0',
      adaptiveHeight: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 960,
          settings: {
            arrows: false,
            dots: true
          }
        }
      ],
      dotsClass: 'reviews__dots',
      nextArrow: '<button type="button" class="reviews__next">Следующий</button>',
      prevArrow: '<button type="button" class="reviews__prev">Предыдущий</button>'
    });
  }

  var $pricesCarousel = $('#pricesCarousel');
  if ($pricesCarousel.length) {

    var resizeTimer;

    var initSlickPrices = function() {
      $pricesCarousel.slick({
        mobileFirst: true,
        initialSlide: 2,
        infinite: false,
        dots: true,
        arrows: false,
        centerMode: true,
        centerPadding: '20px',
        dotsClass: 'prices__dots reviews__dots'
      });
      $pricesCarousel.slick('slickFilter', ':not(.prices__col--features)');
      $pricesCarousel.slick('slickGoTo', 1);
    }

    var onResize = function() {
      clearTimeout(resizeTimer);

      resizeTimer = setTimeout(function() {
        if (window.innerWidth < 660) {
          if (!$pricesCarousel.hasClass('slick-initialized')) {
            initSlickPrices();
          }
        }
        else {
          if ($pricesCarousel.hasClass('slick-initialized')) {
            $pricesCarousel.slick('slickUnfilter');
            $pricesCarousel.slick('unslick');
          }
        }
      }, 250);
    }

    $(window).on('resize', function(e) {
      onResize();
    });

    onResize();
  }

  if ($('#contactsMap').length) {
    ymaps.ready(function () {
      var coords = [59.938631, 30.323055];

      var myMap = new ymaps.Map('contactsMap', {
        controls: ['smallMapDefaultSet'],
        center: coords,
        zoom: 17
      }, {});

      var myPlacemark = new ymaps.Placemark(coords, {}, {
        iconLayout: 'default#image',
        iconImageHref: '../img/icon-map-marker.svg',
        iconImageSize: [36, 36],
        iconImageOffset: [-18, -18]
      });

      myMap.setCenter(coords);
      myMap.geoObjects.add(myPlacemark);
      myMap.behaviors.disable('scrollZoom');
    });
  }

});

