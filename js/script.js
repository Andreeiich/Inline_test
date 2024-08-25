const swiper = document.querySelector('swiper-container');
swiper.breakpoints = {
  300: {
      slidesPerView: 1.3, // показ 1 целового и 2-го слайда на 20%
      spaceBetween: 16, // расстояние между слайдами
      width: 374, // ширина контейнера пролистывания
       
  },
  375: {
    slidesPerView: 4,
    spaceBetween: 20,
    allowSlideNext: false,
    allowSlidePrev: false,
  },

 };


const reviewsLink = document.getElementById('reviews'); 
const urlReviews = 'pages/page1.html';

reviewsLink.addEventListener('click', function() {
  window.location.href =urlReviews;
});

const whereLink = document.getElementById('where');
const urlWhere ='pages/page2.html';

whereLink.addEventListener('click', function(){
  window.location.href = urlWhere;
});

const descriptionLink = document.getElementById('decription_page');
const urlDescription = 'index.html';

descriptionLink.addEventListener('click', function(){
  window.location.href = urlDescription;
})

const tab_linkWhere = document.querySelector('.tab_linkWhere');

tab_linkWhere.addEventListener('click',function(){
  window.location.href = urlWhere;
})



 descriptionLink.classList.add('menuActiveItem');
 descriptionLink.classList.add('bold');


