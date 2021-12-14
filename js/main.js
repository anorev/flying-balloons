/**
 * VARS
 */

const balloon1 = document.querySelector('#balloonSvg1')
const balloon2 = document.querySelector('#balloonSvg2')
const balloon3 = document.querySelector('#balloonSvg3')

const randomX = random(1, 3);
const randomY = random(1, 5);
const randomDelay = random(0, 1);
const randomTime = random(1, 5);
const randomTime2 = random(5, 10);
const randomAngle = random(8, 12);



/** FUNCTIONS */

function rotate(target, direction) {
  
  TweenLite.to(target, randomTime2(), {
    rotation: randomAngle(direction),
    // delay: randomDelay(),
    ease: Sine.easeInOut,
    onComplete: rotate,
    onCompleteParams: [target, direction * -1]
  });
}

function moveX(target, direction) {
  
  TweenLite.to(target, randomTime(), {
    x: randomX(direction),
    ease: Sine.easeInOut,
    onComplete: moveX,
    onCompleteParams: [target, direction * -1]
  });
}

function moveY(target, direction) {
  
  TweenLite.to(target, randomTime(), {
    y: randomY(direction),
    ease: Sine.easeInOut,
    onComplete: moveY,
    onCompleteParams: [target, direction * -1]
  });
}

function random(min, max) {
  const delta = max - min;
  return (direction = 1) => (min + delta * Math.random()) * direction;
}



/**
 * Functions calls
 */
TweenLite.set(balloon1, {
  x: randomX(-4),
  y: randomY(1),
  rotation: randomAngle(-1)
});

moveX(balloon1, 1);
moveY(balloon1, -1);
rotate(balloon1, 1);


TweenLite.set(balloon2, {
  x: randomX(-0.8),
  y: randomX(0.9),
  rotation: randomAngle(2)
});

moveX(balloon2, 1);
moveY(balloon2, -1);
rotate(balloon2, 1);

TweenLite.set(balloon3, {
  x: randomX(-1.4),
  y: randomX(2),
  rotation: randomAngle(-3)
});

moveX(balloon3, 1);
moveY(balloon3, -1);
rotate(balloon3, 1);

/**
 * Others anims
 */


gsap.from(
    'body', {
        backgroundColor: 'black',
        duration: 1.7, 
        ease: 'none',
    }
)

gsap.from(
    '.balloon', {
        y: 1000, 
        duration: 1.7,
        stagger: 0.4,
        ease: Elastic. easeOut.config( 1, 1.2)
    }
)








