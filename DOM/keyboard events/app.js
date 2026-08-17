// let btn = document.querySelector("button");

// let color = function() {
//     // let red = Math.floor(Math.random() * 256);
//     // let green = Math.floor(Math.random() * 256);
//     // let blue = Math.floor(Math.random() * 256);

//     color = "rgb(0, 128, 0)";
//     return color
// }

// btn.addEventListener("click", function() {
//     // console.dir(this);
//     btn.style.backgroundColor = "rgb(0, 128, 0)";
// })

let input = document.querySelector("input");
let heading = document.querySelector("h2");

input.addEventListener("input", function () {

    let filtered = "";

    for (let char of input.value) {
        if (
            (char >= "a" && char <= "z") ||
            (char >= "A" && char <= "Z") ||
            char === " "
        ) {
            filtered += char;
        }
    }

    heading.innerText = filtered;
});