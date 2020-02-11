$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    autoplay: true,
    center: true,
    touchDrag: true,
    autoWidth: true,
    lazyLoad: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})
