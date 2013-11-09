SPACEBAR_KEY_CODE = 32
BACKSPACE_KEY_CODE = 8
ENTER_KEY_CODE = 13

function inputBox() {
  var pageText = document.getElementById("hidden_dummy_text").innerHTML.split(" ");
  var userText = document.getElementsByName("user_input")[0].value.split(" ");
  var text = document.getElementById("hidden_dummy_text").innerHTML;
  
  if (event.keyCode === SPACEBAR_KEY_CODE || event.keyCode === ENTER_KEY_CODE) {
     checkErrors(pageText);
    highlightText(text,userText);
  } else if (event.keyCode === BACKSPACE_KEY_CODE) {
    checkErrors(pageText, userText);
    highlightText(text,userText);
  }
}

function checkErrors(pageText) {
  var userText = document.getElementsByName("user_input")[0].value.split(" ");
  var pageText = pageText.splice(0, userText.length);
  var errors = 0;
  var pindex = 0;
  var inputLength = userText.length;
  var uindex = 0;

  while (pindex <= inputLength){
    if (pageText[pindex] === userText[pindex]){
      console.log(pageText[pindex], userText[pindex]);
      pindex += 1;
    }
    else {
      pindex += 1;
      errors++
    }
  }

  pindex = 0;
  uindex = 0;

  // console.log(userText);
  document.getElementsByName("error_output")[0].value = errors;
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
  var pageText = document.getElementById("hidden_dummy_text").innerHTML.split(" ");
  // console.log(pageText)
  var userText = document.getElementsByName("user_input")[0].value.split(" ");
  // console.log(userText)
  var text = document.getElementById("hidden_dummy_text").innerHTML;
  // console.log(text)
  var errors = checkErrors(pageText);
  // console.log(errors)

  this.addEventListener('keydown', function() {
    if (displayTimer.innerText === '') {
      var totalSeconds = time_in_seconds;

      timer = function() {
        if (totalSeconds >= 0) {
          displayTimer.innerText = totalSeconds;
          totalSeconds--
          setTimeout('timer()', 1000);
        } else {
          // note: refactor by making the score a function
          document.getElementById('score').innerText = "Done!"
          document.getElementById('user_input').disabled = true;
        }
        
      }
      timer();
    }
  }, false);
}

// function score() {
//   var theScore = document.querySelector('#theScore');
//     theScore.innerText = errors;

window.countdown(10);

