// swiper catalog
const swiperCatalog = new Swiper('.catalog__swiper', {
  speed: 500,
  slidesPerView: 2,
  slidesPerGroup: 2,
  spaceBetween: 16,
  grid: {
    rows: 3,
    fill: "row"
  },

  breakpoints: {
    750: {
      spaceBetween: 32,
      grid: {
        rows: 3,
        fill: "row"
      }
    },

    1024: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 32,
      grid: {
        rows: 3,
        fill: "row"
      }
    }
  },

  pagination: {
    el: ".catalog__swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    }
  }
});
