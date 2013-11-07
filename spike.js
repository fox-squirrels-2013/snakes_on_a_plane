function inputBox() {

  // Gets dummy text and user text and splits them into arrays.
  var userInput = document.getElementsByName('user_input')[0].value.split(" ");
  var testText = document.getElementById('dummy_text_hidden').innerHTML.split(" ").slice(0,userInput.length);

  // Gets the plain dummy text.
  var dummyText = document.getElementById('dummy_text').innerText;


  // Split plain dummy text to seperate array  and initialize spanned text.
  var eachWord = dummyText.split(' ');
  var spannedText = '';

  // Create spanned version of dummy text. (with span tags)
  for(var index =0; index < eachWord.length; index++) {
    spannedText += "<span onclick='changeColor(" + index + ")'>" + eachWord[index] + "</span>";
  }


  // Replace original dummy text on document with spanned version.
  document.getElementById('dummy_text')[0].innerHTML = spannedText;

  function changeColor(i) {
    document.getElementsByTagName('span')[i].className = 'correct';
  }

  // var truthindexness = true;

  // var i = 0;
  // var x = 0;


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




  // document.getElementsByName('user_output')[0].value = truthiness;

}