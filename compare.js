var a = "";
var b = "";


function compare (a, b) {
  if (a == b) {

  console.log("Match!");

  } else {
    var aString = [];
    var bString = [];

    for (var i = 0; i < a.length; i++) {
      aString.push(a[i]);

    }

    for (var i = 0; i < b.length; i++) {
      bString.push(b[i]);
        }

    for (var i = 0; i < aString.length; i++) {
    if (aString[i] != bString[i]) {
      console.log(bString[i]);
      }
    }
  }
};




compare("Samantha", "Samantha");
compare("I love Lyra", "I love Hannes");
