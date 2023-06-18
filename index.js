var randomnumber1=Math.floor(Math.random()*6)+1;
var randomnumber2=Math.floor(Math.random()*6)+1;
var imagesource1="dice"+randomnumber1+".png";
var imagesource2="dice"+randomnumber2+".png";
var imgsr1="images/"+imagesource1;
var imgsr2="images/"+imagesource2;
var image1=document.querySelectorAll("img")[0];
var image2=document.querySelectorAll("img")[1];
image1.setAttribute("src", imgsr1);
image2.setAttribute("src", imgsr2);
if(randomnumber1>randomnumber2) {
    document.querySelector("h1").innerHTML="Player 1 Won";
}
else if(randomnumber1<randomnumber2) {
    document.querySelector("h1").innerHTML="Player 2 Won";
}
else {
    document.querySelector("h1").innerHTML="Match is draw";
}