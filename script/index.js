let next = document.getElementById('next');
let prev = document.getElementById('prev');
let carousel = document.querySelector('.carousel');
let items = document.querySelectorAll('.carousel .item');

let countItem = items.length;
let active = 1;
let other_1 = null;
let other_2 = null;

next.onclick = () =>{
  carousel.classList.remove('prev');
  carousel.classList.add('next');
  active = active + 1 >= countItem ? 0 : active + 1;
  other_1 = active - 1 < 0 ? countItem - 1 : active - 1;
  other_2 = active + 1 >= countItem ? 0 : active + 1;
  changeSlider();
};

prev.onclick = ()=>{
  carousel.classList.remove('next');
  carousel.classList.add('prev');
  active = active - 1 < 0 ? countItem - 1 : active - 1 ;
  other_1 = active -1 >= countItem ? 0 : active + 1;
  other_2 = other_1 + 1 >= countItem ? 0 : other_1 + 1;
  changeSlider();
};

const changeSlider = () =>{
  let itemOldActive = document.querySelector('.carousel .item.active');
  if(itemOldActive) itemOldActive.classList.remove('active');

  let itemOldOther_1 = document.querySelector('.carousel .item.other__1');
  if(itemOldOther_1) itemOldOther_1.classList.remove('other__1');

  let itemOldOther_2 = document.querySelector('.carousel .item.other__2');
  if(itemOldOther_2) itemOldOther_2.classList.remove('other__2');

  items.forEach(e =>{
    e.querySelector('.coffee_image img').style.animation = 'none';
    e.querySelector('.coffee_image figcaption').style.animation = 'none';
    void e.offsetWidth;
    e.querySelector('.coffee_image img').style.animation = '';
    e.querySelector('.coffee_image figcaption').style.animation = '';
  }); 

  items[active].classList.add('active');
  items[other_1].classList.add('other__1');
  items[other_2].classList.add('other__2');
};

