var tl = gsap.timeline()
tl.from("#nav h1",{ 
    y:-50,
    duration:0.7,
    delay:0.5,
    opacity:0,
    
})
tl.from("#nav-part2 h4",{
    y:-50,
    duration:0.7,
    delay:0.5,
    opacity:0,
    
}
    )

tl.from("#nav-part3 i",{
    y:-50,
    duration:0.7,
    delay:0.5,
    opacity:0,
    

})
tl.from("#nav-part3 h5",{
    y:-50,
    duration:0.7,
    delay:0.5,
    opacity:0,
    

})
.from("#center>h1",{
    opacity:0,
    y:40,
    scale:1.2,
    duration:0.6,
})
.from("#center>p",{
    opacity:0,
    y:20,
    duration:0.3,
})
.from("#page1 img",{
    opacity:0,
    scale:0.8,
    duration:0.7,
})
.from("#page3 h1 #page3 p",{
    opacity:0,
    scale:0.8,
    duration:0.7,
})
.from("#page4 elembox",{
    opacity:0,
    scale:0.8,
    duration:0.7,
})