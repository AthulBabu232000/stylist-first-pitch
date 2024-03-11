const icon=document.getElementById("tagicon");

var swiper2 = new Swiper(".mySwiper2", {
    grabCursor: true,
    effect: "creative",
    speed: 1500,
    creativeEffect: {
      prev: {
        shadow: true,
        translate: ["-120%", 0, -500],
      },
      next: {
        shadow: true,
        translate: ["120%", 0, -500],
      },
    },
  });

icon.addEventListener("click",()=>{
    swiper2.slideNext();
})