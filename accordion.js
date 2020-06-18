console.clear();
var roll = document.getElementById('roll');
var dice = document.getElementById('dice');
var hold = document.getElementById('hold');
var player1 = document.getElementById('player-1');
var player2 = document.getElementById('player-2');
var play1Final = document.getElementById('play1-final')
var play2Final = document.getElementById('play2-final')
var play1current = document.getElementById('play1-current');
var play2current = document.getElementById('play2-current');
var arr=[1,2,3,4,5,6];
var play1 = 0;
var play2 = 0;
var dot1 = document.getElementsByClassName('dot-div')[0];
var dot2 = document.getElementsByClassName('dot-div')[1];

roll.onclick=function(){
    var random = arr[Math.floor(Math.random() * arr.length)];
    dice.innerText = random;
    if(player1.classList.contains('bgidencolor')){
        play1current.innerText = random;
        play1+=random;
    }
    else if(player2.classList.contains('bgidencolor')){
        play2current.innerText = random;
        play2+=random;
    }
}

// if(player1.classList.contains('bgidencolor')){
//     dot1.style.display = "block"
// } else if(player1.classList.contains('bgidencolor')){
//     dot2.style.display = "block"
// }

hold.onclick=function(){
    if(player1.classList.contains('bgidencolor')){
        play1Final.innerText = play1;
        player1.classList.remove('bgidencolor');
        player2.classList.add('bgidencolor');
        if(play1Final.innerText >= 50){
            alert("Winner is Player 1")
            play1Final.innerText = "0";
            play1current.innerText = "0"
            play2Final.innerText = "0";
            play2current.innerText = "0"
        }
        dot2.style.display = "block"
        dot1.style.display = "none";
    }
    else if(player2.classList.contains('bgidencolor')){
        player2.classList.remove('bgidencolor');
        player1.classList.add('bgidencolor');
        play2Final.innerText = play2;
        if(play2Final.innerText >= 50){
            alert('Winner is Player 2')
            play1Final.innerText = "0";
            play1current.innerText = "0"
            play2Final.innerText = "0";
            play2current.innerText = "0"
        }
        dot1.style.display = "block"
        dot2.style.display = "none"
    }
}
setInterval(function(){
    if(play1Final.innerText >= 50){
        alert("Winner is Player 1")
        play1Final.innerText = "0";
        play1current.innerText = "0"
        play2Final.innerText = "0";
        play2current.innerText = "0"
    } 
    if(play2Final.innerText >= 50){
        alert('Winner is Player 2')
        play1Final.innerText = "0";
        play1current.innerText = "0"
        play2Final.innerText = "0";
        play2current.innerText = "0"
    }
},0)

