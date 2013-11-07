function inputBox() {
  var pageText = document.getElementById("dummy_text").innerHTML;
  var splitText = splitUpText(pageText);
  // console.log(splitText)
}

function splitUpText(input_text) {
  return input_text.split(" ");
}