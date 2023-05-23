const {innerHight}=window
gsap.registerPlugin(ScrollTrigger);
gsap.from('#zoom-out h2',{
    scale:30,stager:0.25,duration:3,
    ScrollTrigger:{
        trigger:"#zoom-in",
        pain:true,
        end:`+=${innerHight * 1.3}`,
        scrub:3
    }
})



document.addEventListener("scroll",()=>{
    const img=document.getElementById('zoom');
    var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    var paddedNumber = Math.floor(scrollPosition);
        console.log(Math.floor(paddedNumber/10).toString().padStart(4, '0'));
        img.src=`./animation6/${Math.floor(paddedNumber/10).toString().padStart(4, '0')}.png`
    
     
})

// gsap.to(".img", {
//   x: 700,
// scale: 2, 
//   duration: 3,
//   scrollTrigger: { 
//     trigger: ".imp",
//     markers:true,
// },
// });


