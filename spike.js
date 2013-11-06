function inputBox() {
  // document.getElementsByName('user_output')[0].value = document.getElementsByName('user_input')[0].value;
  var userInput = document.getElementsByName('user_input')[0].value.split("");
  var testText = document.getElementById('dummy_text').innerHTML.split("").slice(0,userInput.length);
  document.getElementsByName('user_output')[0].value = (userInput.join('') == testText.join(''));

  var truthiness = true;

  var i = 0;
  var x = 0;


  // while (x <= userInput.length){
  //   if (testText[i] === userInput[i]){
  //     truthiness = true;
  //     i += 1;
  //     x = i;
  //   }
  //   else {
  //     userInput.splice(i, 1);
  //     truthiness = false;
  //     i += 1;
  //   }
  //   if (userInput.length > testText.length) {
  //     truthiness = false;
  //   }
  // }

  document.getElementsByName('user_output')[0].value = truthiness;

}