function inputBox() {
  var pageText = document.getElementById("hidden_dummy_text").innerHTML.split(" ");
  var userText = document.getElementsByName("user_input")[0].value.split(" ");
  var text = document.getElementById("hidden_dummy_text").innerHTML;
  
  if (event.keyCode === 32) {
    checkErrors(pageText, userText);
    highlightText(text,userText);
  } else if (event.keyCode === 8) {
    checkErrors(pageText, userText);
    highlightText(text,userText);
    console.log("hello world");
  }

}


function checkErrors(pageText, userText) {
  pageText = pageText.splice(0, userText.length);
  console.log(pageText);
  var errors = 0;
  for (var i=0; i < pageText.length; i++) {
    if (pageText[i] === userText[i]) {
      console.log("right");
    }
    else {
      console.log("wrong");
      errors++;
    }
  }
  document.getElementsByName("error_output")[0].value = errors;
}



function highlightText(text, userText) {
  var eachWord = text.split(' ');
  var spannedText = '';

  for(var x = 0; x < eachWord.length; x++) {
    console.log(x);
    spannedText += "<span>" + eachWord[x] + "</span> ";
  }

  document.getElementById("dummy_text").innerHTML = spannedText;

  var n = 0;
  while (n < userText.length){
    document.getElementsByTagName('span')[n].className = 'correct';
    n++;
  }
}