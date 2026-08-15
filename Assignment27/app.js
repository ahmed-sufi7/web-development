let input = document.createElement('input');
input.placeholder = "Username";
document.querySelector('body').append(input);

let btn = document.createElement('button');
btn.innerText = "Click me!"
document.querySelector('body').append(btn);
btn.setAttribute('id',"btn");
let color = document.querySelector("#btn")
color.classList.add('btncolor')

let h1 = document.createElement('h1');
h1.innerText =  "DOM Practice";
h1.style.color = 'purple';
document.querySelector('body').append(h1)