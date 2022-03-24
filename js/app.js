var firstDivTag = document.querySelector('div');
firstDivTag.innerText="MACHO IS THE MAN";

var allDivTags = document.querySelectorAll('div');
for(var i=0; i < allDivTags.length; i++) {
    allDivTags[i].style.color = "red";
}

var firstStoneQuote = document.getElementById('stonequote1');
for (var i=0; i < firstStoneQuote.length; i++) {
    firstStoneQuote[i].style.backgroundColor = "black";
}

var stoneCold = document.getElementsByClassName('stone_cold');
for (var i=0; i < stoneCold.length; i++) {
    stoneCold[i].style.color = "purple";
}

var h1 = document.getElementsByTagName('h1');
for (var i=0; i < h1.length; i++) {
    h1[i].style.borderStyle = "solid";
}

var newElement = document.createElement('p');
var parentElement = document.getElementById('stonequote3');
parentElement.append(newElement);
newElement.innerText = "MACHO MACHO MAN";