let roll01=1+Math.floor(Math.random()*6);
let roll1= "images/"+"dice"+roll01+".png";
let roll02=1+Math.floor(Math.random()*6);
let roll2="images/"+"dice"+roll02+".png";
if(roll01>roll02){
    document.querySelector("h1").innerHTML="Player 1 WON";
}
if(roll01<roll02){
    document.querySelector("h1").innerHTML="Player 2 WON";
}
if(roll01===roll02){
    document.querySelector("h1").innerHTML="Draw";
}
document.querySelector(".img1").setAttribute("src",roll1);
document.querySelector(".img2").setAttribute("src",roll2);

