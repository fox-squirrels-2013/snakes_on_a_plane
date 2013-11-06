var text = document.getElementsByTagName('p')[0].innerText

// console.log(text)

var eachChar = text.split('')
var spannedText = '';

for(var i =0; i < eachChar.length; i++) {
  spannedText += "<span onclick='changeColor(" + i + ")'>" + eachChar[i] + "</span>"
}

document.getElementsByTagName('p')[0].innerHTML = spannedText

function changeColor(i) {
  document.getElementsByTagName('span')[i].className = 'correct'
}
