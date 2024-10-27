let boxes = document.querySelectorAll('.box');

boxes.forEach(box => {
    const hoverImg = box.querySelector('.hover-img');

    box.addEventListener('mousemove', () => {
        hoverImg.style.visibility = "hidden";
    });
    
    box.addEventListener('mouseleave', () => {
        hoverImg.style.visibility = "visible";
    });
});


let rigth = document.querySelector(".wach-ritgh h1")
setInterval(()=>{
    rigth.innerHTML = `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`
},1000)


let left = document.querySelector(".section-two h1")
setInterval(()=>{
    left.innerHTML = `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`
},1000)

