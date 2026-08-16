let type = document.querySelector("input");

type.addEventListener("keypress", function(event){
    console.log("The button is pressed");
    console.log(event);
})