console.clear();
var blueC = document.getElementById('blue');
var purpleC = document.getElementById('purple');
var blackC = document.getElementById('black');
var redC = document.getElementById('red');
var pinkC = document.getElementById('pink');
var time = document.getElementsByClassName('features')[0];
var heart = document.getElementsByClassName('features')[1];
var watchText = document.getElementsByClassName('time')[0];
var image = document.getElementsByClassName('watch')[0];
var heartDiv = document.getElementsByClassName('broken-heart-div')[0];
setInterval(function(){
    watchText.innerText = "" + new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds(); 
},1000)

time.onclick=function(){
    watchText.style.display = "block"
    heartDiv.style.display = "none"
}
heart.onclick=function(){
    heartDiv.style.display = "block"
    watchText.style.display = "none"
}
blueC.onclick=function(){
    image.src = "https://i.imgur.com/Mplj1YR.png"
}

purpleC.onclick=function(){
    image.src = "https://i.imgur.com/xSIK4M8.png"
}
pinkC.onclick=function(){
    image.src = "https://i.imgur.com/Zygu7I3.png"
}
redC.onclick=function(){
    image.src = "https://i.imgur.com/PTgQlim.png"
}
blackC.onclick=function(){
    image.src = "https://i.imgur.com/iOeUBV7.png"
}


