let smallImg = document.getElementsByClassName("oldImg");


for(let i = 0; i<smallImg.length; i++){
    smallImg[i].src = "assets/spiderman_img.png";
    console.log(`The src of the image ${i} is changed`)
}