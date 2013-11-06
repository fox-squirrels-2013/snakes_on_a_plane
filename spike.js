function inputBox() {
  // document.getElementsByName('user_output')[0].value = document.getElementsByName('user_input')[0].value;
  var userInput = document.getElementsByName('user_input')[0].value.split("");
  var testText = document.getElementById('dummy_text').innerHTML.split("").slice(0,userInput.length);
  document.getElementsByName('user_output')[0].value = (userInput.join('') == testText.join(''));

}