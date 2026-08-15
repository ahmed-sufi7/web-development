let para = document.createElement('p');
para.innerText = "Hey! I'm red";
document.querySelector('body').append(para);
para.classList.add("red");
// p.style.color = 'red';

// let bdy = document.querySelector('body');
// bdy.appendChild(p)

// let heading = document.createElement('h3');
// heading.innerText = "Hey! im blue h3";
// heading.classList.add("blue")

// bdy.append(heading);

let h3 = document.createElement('h3');
h3.innerText = "Hey! I'm red!";
document.querySelector('body').append(h3);
h3.classList.add("blue");
