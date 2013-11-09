SPACEBAR_KEY_CODE = 32
BACKSPACE_KEY_CODE = 8
ENTER_KEY_CODE = 13

function populateText(selectedText) {
  var teletubbies = "Do you see any Teletubbies in here? Do you see a slender plastic tag clipped to my shirt with my name printed on it? Do you see a little Asian child with a blank expression on his face sitting outside on a mechanical helicopter that shakes when you put quarters in it? No? Well, that's what you see at a toy store. And you must think you're in a toy store, because you're here shopping for an infant named Jeb."
  var show = "Well, the way they make shows is, they make one show. That show's called a pilot. Then they show that show to the people who make shows, and on the strength of that one show they decide if they're going to make more shows. Some pilots get picked and become television programs. Some don't, become nothing. She starred in one of the ones that became nothing."
  
  var user_selected = selectedText.options[selectedText.selectedIndex].innerText
  if (user_selected === 'Teletubbies') {
    document.getElementById('dummy_text').innerText = teletubbies
  } else if (user_selected === 'Show') {
    document.getElementById('dummy_text').innerText = show
  }
  document.getElementById('hidden_dummy_text').innerText = document.getElementById('dummy_text').innerText
}

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
    if (userText[n] === eachWord[n]) {
      document.getElementsByTagName('span')[n].className = 'correct'
    } else {
      document.getElementsByTagName('span')[n].className = 'incorrect'
    }
    n++;
  }

}

function countdown(userTime) {
  var selectedTime = parseInt(userTime.options[userTime.selectedIndex].innerText)
  var displayTimer = document.querySelector('#displayTimer')
// refactor: the next 3 lines to score function
  var pageText = document.getElementById("hidden_dummy_text").innerHTML.split(" ");
  var userText = document.getElementsByName("user_input")[0].value.split(" ");
  var text = document.getElementById("hidden_dummy_text").innerHTML;
  var errors = checkErrors(pageText);

  this.addEventListener('keydown', function() {
    if (displayTimer.innerText === '') {
      var totalSeconds = selectedTime;

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
