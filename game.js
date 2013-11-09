function inputBox() {
  var pageText = document.getElementById("hidden_dummy_text").innerHTML.split(" ");
  userText = document.getElementsByName("user_input")[0].value.split(" ");
  var text = document.getElementById("hidden_dummy_text").innerHTML;
  
  if (event.keyCode === 32) {
     checkErrors(pageText);
   // console.log(userText);
    highlightText(text,userText);
  } else if (event.keyCode === 8) {
    checkErrors(pageText, userText);
    highlightText(text,userText);
  }
}

function checkErrors(pageText) {
  var pageText = pageText.splice(0, userText.length);
  console.log(pageText)
  var errors = 0;
  var pindex = 0;
  var inputLength = userText.length;
  var uindex = 0;

  while (pindex <= inputLength){
    if (pageText[pindex] === userText[pindex]){
      //console.log(pageText[pindex], userText[pindex]);
      pindex += 1;
    }
    else {
      errors++;
      pindex += 1;
    }
  }
  //console.log(userText);
  document.getElementsByName("error_output")[0].value = errors;
  return errors;
}


function highlightText(text, userText) {
  var eachWord = text.split(' ');
  var spannedText = '';

  // Removes first array item if it is blank(to prevent false correct on first word)
  if (userText[0] === ""){
    userText.shift();
  }

  // Takes all the words in the page text and puts spans around them.
  for(var x = 0; x < eachWord.length; x++) {
    spannedText += "<span>" + eachWord[x] + "</span> ";
  }
  document.getElementById("dummy_text").innerHTML = spannedText;


  // Highlights words according to how many words have been typed by the user.
  var n = 0;
  var factor = userText.length;
  // Word count: 7
  while (n < factor){
    document.getElementsByTagName('span')[n].className = 'correct';
    n++;
  }

}

function countdown(time_in_seconds) {
  var displayTimer = document.querySelector('#displayTimer')
// refactor: the next 3 lines to score function

  this.addEventListener('keydown', function() {
    if (displayTimer.innerText === '') {
      var totalSeconds = time_in_seconds;

      timer = function() {
        if (totalSeconds >= 0) {
          displayTimer.innerText = totalSeconds;
          totalSeconds--
          setTimeout('timer()', 1000);
        } else {

          getScore();
          // note: refactor by making the score a function
        }
      }
      timer();
    }
  }, false);
}


function getScore() {
          var dummyText = document.getElementById("hidden_dummy_text").innerHTML.split(" ").length;
          var wordsTyped = document.getElementsByName("user_input")[0].value.split(" ").length - 1;
          var errors = document.getElementById("error_output").value;
          var score = Math.round(((wordsTyped - errors)/dummyText)*100).toString() + "%"
            // console.log(score)
          document.getElementById("score").value = score;
          // note: refactor by making the score a function
}


window.countdown(5);

