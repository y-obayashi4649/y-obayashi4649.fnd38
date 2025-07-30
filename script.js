'use strict'

const pictureMatch = {
    reset : 'image/mushitori_long_boy.png',
    boat : 'image/menkyo.jpg',
    ezo1 : 'image/souya.jpg',
    ezo2 : 'image/esanuka.jpg',
    ezo3 : 'image/ginza.jpg',
    oki1 : 'image/ento.jpg',
    oki2 : 'image/oki_uma.jpg',
    oki3 : 'image/oki_sun.jpg',
    okiplay : 'image/oki_hand.jpg'
}

const resetPic = document.getElementById("reset");
const boatPic = document.getElementById("boat");
const changeEzo1 = document.getElementById("ezo1");
const changeEzo2 = document.getElementById("ezo2");
const changeEzo3 = document.getElementById("ezo3");
const changeOki1 = document.getElementById("oki1");
const changeOki2 = document.getElementById("oki2");
const changeOki3 = document.getElementById("oki3");
const changeOkiPlay = document.getElementById("okiplay");
const pictureBase = document.getElementsByClassName("pictureBase");

function resetPicture() {
    console.log(pictureBase[0]);
    const tag = "<img src = " + pictureMatch.reset + " class = 'innerPicture'>";
    pictureBase[0].innerHTML = tag;
    console.log(pictureBase[0]);
}

function boatPicture() {
    console.log(pictureBase[0]);
    const tag = "<img src = " + pictureMatch.boat + " class = 'innerPicture'>";
    pictureBase[0].innerHTML = tag;
    console.log(pictureBase[0]);
}

function ezo1Picture() {
    console.log(pictureBase[0]);
    const tag = "<img src = " + pictureMatch.ezo1 + " class = 'innerPicture'>";
    pictureBase[0].innerHTML = tag;
    console.log(pictureBase[0]);
}

function ezo2Picture() {
    console.log(pictureBase[0]);
    const tag = "<img src = " + pictureMatch.ezo2 + " class = 'innerPicture'>";
    pictureBase[0].innerHTML = tag;
    console.log(pictureBase[0]);    
}

function ezo3Picture() {
    console.log(pictureBase[0]);
    const tag = "<img src = " + pictureMatch.ezo3 + " class = 'innerPicture'>";
    pictureBase[0].innerHTML = tag;
    console.log(pictureBase[0]);    
}

function oki1Picture() {
    console.log(pictureBase[0]);
    const tag = "<img src = " + pictureMatch.oki1 + " class = 'innerPicture'>";
    pictureBase[0].innerHTML = tag;
    console.log(pictureBase[0]);    
}

function oki2Picture() {
    console.log(pictureBase[0]);
    const tag = "<img src = " + pictureMatch.oki2 + " class = 'innerPicture'>";
    pictureBase[0].innerHTML = tag;
    console.log(pictureBase[0]);    
}

function oki3Picture() {
    console.log(pictureBase[0]);
    const tag = "<img src = " + pictureMatch.oki3 + " class = 'innerPicture'>";
    pictureBase[0].innerHTML = tag;
    console.log(pictureBase[0]);    
}

function okiPlayPicture() {
    console.log(pictureBase[0]);
    const tag = "<img src = " + pictureMatch.okiplay + " class = 'innerPicture'>";
    pictureBase[0].innerHTML = tag;
    console.log(pictureBase[0]);    
}

resetPic.addEventListener("click", resetPicture);
boatPic.addEventListener("click", boatPicture);
changeEzo1.addEventListener("click", ezo1Picture);
changeEzo2.addEventListener("click", ezo2Picture);
changeEzo3.addEventListener("click", ezo3Picture);
changeOki1.addEventListener("click", oki1Picture);
changeOki2.addEventListener("click", oki2Picture);
changeOki3.addEventListener("click", oki3Picture);
changeOkiPlay.addEventListener("click", okiPlayPicture);
