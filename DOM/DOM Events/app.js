// let btn = document.querySelector('button');
// console.dir(btn);

// btn.onclick = function () {
//     console.log("Button was clicked");
// }



// let btns = document.querySelectorAll('button');

// for (btn of btns) {
//     // btn.onclick = clicked;
//     // btn.onmouseenter = over;

//     btn.addEventListener("click",clicked);
//     btn.addEventListener("click",over);
//     btn.addEventListener("dblclick",function(){
//         console.log("You double clicked!")
//     });
// }

// function clicked() {
//     console.log("Btn clicked");
// }

// function over() {
//     console.log("Mouse over");
// }



let btn = document.querySelector("button");

btn.addEventListener("click", function(){
    let h3 = document.querySelector('h3');
    h3.innerText = getRandomColor();

    let div = document.querySelector("div");
    div.style.backgroundColor = getRandomColor();
    console.log("Color changed");
})

function getRandomColor(){
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    let color = `rgb(${red},${green},${blue})`;
    return color;

}