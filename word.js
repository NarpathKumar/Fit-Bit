console.clear()
var input = document.getElementById('input');
var character = document.getElementById('charat');
var wordsC = document.getElementById('wordsC');
var white = document.getElementById('spaces');
var lines = document.getElementById('lines')

setInterval(function(){
    if(input.value !== ""){
        var char = input.value.split('')
        character.innerText = char.length
        var words = input.value.split(' ')
        wordsC.innerText = words.length
        white.innerText = words.length - 1;
        var line = input.value.split('\n');
        lines.innerText = line.length
    }
    else character.innerText = 00
},0)

    