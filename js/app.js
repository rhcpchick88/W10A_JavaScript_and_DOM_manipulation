var firstDivTag = document.querySelector('div');
firstDivTag.innerText="MACHO IS THE MAN";

//changed the first div inner text to macho is the man

var allDivTags = document.querySelectorAll('div');
for(var i=0; i < allDivTags.length; i++) {
    allDivTags[i].style.color = "red";
}

//made a loop for all div tags to be cycled through and the content colored red.

var firstStoneQuote = document.getElementById('stonequote1');
for (var i=0; i < firstStoneQuote.length; i++) {
    firstStoneQuote[i].style.backgroundColor = "black";
}
//made a loop for checking stonequote 1  and changing it to black

var stoneCold = document.getElementsByClassName('stone_cold');
for (var i=0; i < stoneCold.length; i++) {
    stoneCold[i].style.color = "purple";
}
// chose all elements of the class stone cold and chaged the color to purple


var h1 = document.getElementsByTagName('h1');
for (var i=0; i < h1.length; i++) {
    h1[i].style.borderStyle = "solid";
}
// chose the h1 tag and got it to show a solid border.

var newElement = document.createElement('p');
var parentElement = document.getElementById('stonequote3');
parentElement.append(newElement);
newElement.innerText = "MACHO MACHO MAN";

//created a p tag under the stonequote3 and added macho macho man.