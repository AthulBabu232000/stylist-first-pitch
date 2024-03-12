const icon=document.getElementById("tagicon");
const line=document.getElementById("tagline");
const tname=document.getElementById("tagname");
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
  // swiper2.slideNext();
// const fwd=document.getElementsByClassName("fa-forward")[0];
// const bwd=document.getElementsByClassName("fa-backward")[0];
// fwd.addEventListener("click",()=>{
//     swiper2.slideNext();
// })
// bwd.addEventListener("click",()=>{
//   swiper2.slidePrev();
// })

icon.addEventListener("click",()=>{
    const div1=document.getElementsByClassName("inner-inner-section1b1")[0];
    const div2=document.getElementsByClassName("inner-inner-section1b2")[0];
    const div3=document.getElementsByClassName("inner-inner-section1b3")[0];
    

    div1.style.transform="translate(-135%,-117%)";
    div3.style.transform="translate(135%,117%)";
    div2.style.height="95vh";
    div2.style.width="95vw";
    line.style.display="none";
    tname.style.display="none";
    icon.style.display="none";
    setTimeout(() => {
    div2.querySelector(".inner-inner-section1b2-cover").style.display="block";
      
    }, 1000);
    // div2.querySelector(".overlay").style.display="none";
      div2.style.backgroundColor="#140226";
      div2.style.color="#fff";


})