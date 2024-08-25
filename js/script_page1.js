const reviewsLink = document.getElementById('reviews'); 
const urlReviews = 'page1.html';

reviewsLink.addEventListener('click', function() {
  window.location.href =urlReviews;
});

const whereLink = document.getElementById('where');
const urlWhere ='page2.html';

whereLink.addEventListener('click', function(){
  window.location.href = urlWhere;
});

const descriptionLink = document.getElementById('decription_page');
const urlDescription = '../index.html';

descriptionLink.addEventListener('click', function(){
  window.location.href = urlDescription;
})

const tab_linkWhere = document.querySelector('.tab_linkWhere');

tab_linkWhere.addEventListener('click',function(){
  window.location.href = urlWhere;
})

reviewsLink.classList.add('menuActiveItem');
reviewsLink.classList.add('bold');

