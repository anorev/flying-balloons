const balloon = document.querySelectorAll('.balloon')
const randomX = random(10, 20);
const randomY = random(20, 30);
const randomDelay = random(0, 1);
const randomTime = random(3, 5);
const randomTime2 = random(5, 10);
const randomAngle = random(8, 12);

TweenLite.set(balloon, {
  x: randomX(-1),
  y: randomX(1),
  rotation: randomAngle(-1)
});

moveX(balloon, 1);
moveY(balloon, -1);
rotate(balloon, 1);

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