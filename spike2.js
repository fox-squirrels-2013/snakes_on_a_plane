function inputBox() {
  SPACEBAR_KEYCODE = 32;
  var pageText = document.getElementById("dummy_text").innerHTML;
  var numWordsText = trackNumWords(pageText);
  var splitText = splitUpText(pageText);

  var input = document.getElementsByName("user_input")[0].value;
  var numWordsInput = trackNumWords(input);

  console.log(compareText(input, splitText, numWordsInput));
}

function splitUpText(input_text) {
  return input_text.split(" ");
}

function trackNumWords(input) {
  return splitUpText(input).length;
}

function compareText(input, splitText, numWordsInput) {
  if (event.keyCode === SPACEBAR_KEYCODE) {
    var wholeWordsTyped = splitUpText(input)[numWordsInput - 1];
    var correspondingPageText = splitText[numWordsInput -1];

    return wholeWordsTyped === correspondingPageText;
  }
}

// function compareWords(array1, array2) {
//   var nowArray1 = array1;
//   var nowArray2 = array2;

//   for (var i = 0; i < nowArray1.length; i++){
//     for (var y = 0; y < nowArray2.length; y++)  
// }


//need a loop to go through each array, at different speeds
