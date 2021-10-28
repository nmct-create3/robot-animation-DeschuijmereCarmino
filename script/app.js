// gsap.to('#Robot', {duration: 1, x: 50}); //naar rechts gaan

// gsap.from('#Robot', {duration: 1, x: 50}); //van rechts komen

// gsap.set('#Robot', {duration: 1, x: 50});

// gsap.fromTo('#Robot',{x: -50} , {duration: 1, x: 50});
// gsap.to('#Robot', {
//     duration: 2,
//     ease: 'elastic.out(2.5,0.1)',
//     y: 50,
//   })

// let tl = gsap.timeline({
//     defaults: {
//       duration: .75,
//       ease: 'power1.inOut',
//     },
//   })
  
// tl.fromTo('#Robot',{
//     y: 2.5,
//   },{
//     y: -2.5,
//   }).to('#Shadow', {
//     scale: 0.75,
//   })

let tl = gsap.timeline({
    defaults: {
      duration: 1,
      ease: 'power1.inOut',
    },
    repeat: -1,
    yoyo: true,
})

tl.set('#Shadow', {
    transformOrigin: '50% 100%',
}).set('#Fire',{
    transformOrigin: "50% 0%",
})
.set('#Arm-right',{
    transformOrigin: "0% 100%",
})
.set('#Arm-left',{
    transformOrigin: "100% 0%",
}).fromTo('#Robot',{
    y: 2.5,
},{
    y: -2.5,
}).to('#Shadow',{
    scale: 0.75,
},
    '-=.75',
).to('#Head',{
    y: 1,
},
    '-=1',
).to('#Fire',{
    scale: 1.2,
},
    '-=1.2',
).to('#Arm-left',{
    rotation: 5,
},
    '-=1',
).to('#Arm-right',{
    rotation: -5,
},
    '-=1',
)


const btnPause = document.querySelector('.js-pause');
const btnFast = document.querySelector('.js-fast');
const btnNormal = document.querySelector('.js-normal');
const btnSlow = document.querySelector('.js-slow');

btnFast.onclick = () => tl.timeScale(2);
btnNormal.onclick = () => tl.timeScale(1);
btnSlow.onclick = () => tl.timeScale(.5);

btnPause.onclick = () => {
    tl.paused( !tl.paused() );
    btnPause.classList.toggle('pause');
}