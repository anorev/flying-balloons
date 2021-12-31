gsap.from(
  'body', {
    backgroundColor: 'black',
    duration: 2.5,
    ease: 'none',
  }
)

gsap.from(
  '.balloon', {
    y: 1000,
    duration: 3.5,
    stagger: 0.2,
    ease: Elastic.easeOut.config(1, 1.2)
  }
)

const balloon1 = document.querySelector('#balloon1');
const balloon2 = document.querySelector('#balloon2');
const balloon3 = document.querySelector('#balloon3');
let balloons = document.querySelectorAll('.balloon')
console.log(balloons);


/**
 * Hover balloon 
 */

// balloons.addEventListener('mouseover', ev => {
//   console.log(ev);
// })

/**
 * Hover change background image
 */

// BALLOON 1

balloon1.addEventListener('mouseover', () => {
  document.querySelector('#global-wrapper').style.backgroundImage = 'url(../img/bg1.jpg)'; 
  document.querySelector('#title').innerHTML = "Page1"

  balloon2.style.opacity = '0.3';
  balloon3.style.opacity = '0.3';
  console.log('hover');
}, false); 

balloon1.addEventListener('mouseout', () => {
  document.querySelector('#global-wrapper').style.backgroundImage = ''; 
  document.querySelector('#title').innerHTML = ""

  balloon2.style.opacity = '1';
  balloon3.style.opacity = '1';
  console.log('hover');
}, false); 


// BALLOON 2

balloon2.addEventListener('mouseover', () => {
  document.querySelector('#global-wrapper').style.backgroundImage = 'url(../img/bg2.jpg)'; 
  document.querySelector('#title').innerHTML = "Page2"

  balloon1.style.opacity = '0.3';
  balloon3.style.opacity = '0.3';
  console.log('hover');
}, false); 

balloon2.addEventListener('mouseout', () => {
  document.querySelector('#global-wrapper').style.backgroundImage = ''; 
  document.querySelector('#title').innerHTML = ""

  balloon1.style.opacity = '1';
  balloon3.style.opacity = '1';
  console.log('hover');
}, false); 



// BALLOON 3

balloon3.addEventListener('mouseover', () => {
  document.querySelector('#global-wrapper').style.backgroundImage = 'url(../img/bg3.jpg)'; 
  document.querySelector('#title').innerHTML = "Page3"
  balloon1.style.opacity = '0.3';
  balloon2.style.opacity = '0.3';
  console.log('hover');
}, false); 

balloon3.addEventListener('mouseout', () => {
  document.querySelector('#global-wrapper').style.backgroundImage = ''; 
  document.querySelector('#title').innerHTML = ""
  balloon1.style.opacity = '1';
  balloon2.style.opacity = '1';
  console.log('hover');
}, false); 




/** Draggable balloons */

// let dragValue; 
// let isDragging = false; 



// console.log(balloon1);
// const balloon1Tail = balloon1.querySelector('.balloon__tail');

// balloon1Tail.addEventListener('mousedown', () => {
//   balloon1Tail.addEventListener('mousemove', update);
// });

// function update(ev) {
//   balloon1.style.setProperty('top', `${ev.y}px`)
// }