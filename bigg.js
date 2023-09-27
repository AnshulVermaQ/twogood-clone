

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
    function video(){
        var videocon = document.querySelector(".video_container");
var cursor = document.querySelector(".play");
videocon.addEventListener("mouseenter",function(){
    gsap.to(cursor,{
        opacity:1,
        scale:1
    })
})
videocon.addEventListener("mouseleave",function(){
    gsap.to(cursor,{
        opacity:0,
        scale:0
    })
})
videocon.addEventListener("mousemove",function(dets){
    gsap.to(cursor,{
        left:dets.x-70,
        top:dets.y-80
    })
})
    }
    video();
    gsap.from("#page1 h1",{
        y:100,
        opacity:0,
        delay:0.5,
        duration:0.9,
        stagger:0.2

    })
    gsap.from("#page1 .video_container",{
       scale:0.9,
        opacity:0,
        delay:1,
        duration:0.5,
        stagger:0.2

    })
   

document.addEventListener("mousemove",function(dets){
    gsap.to(".top",{
        left:dets.x,
        top:dets.y
    })
})


    document.querySelectorAll(".child").forEach(function(elem){
        elem.addEventListener("mouseenter",function(){
            gsap.to(".top",{
                transform: `translate(-50%,-50%) scale(1)`
            })
        })
    })
    
    
    document.querySelectorAll(".child").forEach(function(elem){
        elem.addEventListener("mouseleave",function(){
            gsap.to(".top",{
                transform: `translate(-50%,-50%) scale(0)`
            })
        })
    })
    



   
    



















    