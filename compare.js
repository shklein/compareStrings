var a = "";
var b = "";


function compare (a, b) {
  if (a == b) {

  console.log("Match!");

  } else {
    var aString = a.split(" ");
    var bString = b.split(" ");

    for (var i = 0; i < aString.length; i++) {
      if (aString[i] != bString[i]) {
        console.log(bString[i]);
      }
    }
  }


};

compare("Samantha", "Samantha");
compare("file:///Users/samanthaklein/Desktop/TextCompare/index.html", "file:///Users/samanthaklein/Desktop/textCompare/index.html");
