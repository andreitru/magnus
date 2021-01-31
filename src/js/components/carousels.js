import Swiper from "../vendor/swiper-bundle.min";

var productsAsideSlider = new Swiper('.products-aside__container', {
  init: false,
  speed: 400,
  slidesPerView: 'auto',
  spaceBetween: 45,
  breakpoints: {
    577: {
      spaceBetween: 80
    }
  }
})

var productsCardsSlider = new Swiper('.products-list__container', {
  init: false,
  speed: 400,
  slidesPerView: 'auto',
  spaceBetween: 12,
  breakpoints: {
    577: {
      spaceBetween: 20
    }
  }
});


// включение и выключение слайдеров в зависимости от ширины экрана

function switchSliders(width) {
  if (width <= 768) {
    productsAsideSlider.init();
    productsCardsSlider.init();
  } else if (width > 768) {
    if (productsAsideSlider.initialized === true) {
      productsAsideSlider.destroy(false);
    }
    if (productsCardsSlider.initialized === true) {
      productsCardsSlider.destroy(false);
    }
  }
}

function onResize() {
  let width = document.body.clientWidth;
  switchSliders(width);
}

window.onload = onResize;
window.onresize = onResize;
