let leftBtn = document.createElement('button');
let rightBtn = document.createElement('button');

leftBtn.innerHTML = '&#x2039;';
rightBtn.innerHTML = '&#x203A;';

leftBtn.classList.add('btn-left');
rightBtn.classList.add('btn-right');

let item = document.querySelector('.slider-item');

item.append(leftBtn);
item.append(rightBtn);

let i = 0
const items = document.querySelectorAll('.item')

const moveSlide = (lambda) => {
  let nextIndex = i + lambda;
  
  
  if (i + lambda < 0) {
    nextIndex = items.length - 1;
  }
  
  if (i + lambda > items.length - 1) {
    nextIndex = 0;
  }
  
  items[nextIndex].classList.remove('disable')
  items[i].classList.add('disable');
  i = nextIndex;
}

rightBtn.addEventListener('click', moveSlide.bind(null, 1));

leftBtn.addEventListener('click', moveSlide.bind(null, -1));

setInterval(moveSlide.bind(null, 1), 5000);