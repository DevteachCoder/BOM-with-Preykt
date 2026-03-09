// console.log(window);
// console.log(window.innerHeight);

// let x = window.document.getElementById("demo");
// window.addEventListener('resize',()=>{
//     x.innerHTML = 'Brawser inner window width: ' + window.innerWidth + "heiight: " +  window.innerHeight;
// });  
// //resize: height va width o'lchamini hisoblab beradi!


// //scroll

// window.addEventListener("scroll",()=> {
//     // console.log("scrolled");
//     const scrolled = window.scrollY;
//     // console.log(scrolled);
//     const scrollable = document.documentElement.scrollHeight - window.innerHeight;
//     console.log(scrollable);  

//     if(Math.ceil(scrolled) === scrollable) {
//         alert('You finish button')
//     }
// })
window.addEventListener("scroll",()=> {
    let header = document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 0)
})