
gsap.from(
    'body', {
        backgroundColor: 'black',
        duration: 2.5, 
        ease: 'none',
    }
)
let balloons = document.querySelectorAll('.balloon')
console.log(balloons);

gsap.from(
    '.balloon', {
        y: 1000, 
        duration: 3.5,
        stagger: 0.2,
        ease: Elastic.easeOut.config( 1, 1.2)
    }
)








