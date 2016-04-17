console.log("Execute Order 66");
var censoredWords = [
  {
    case: "who",
    replacement: "Kevin"
  },
  {
    case: "coworkers",
    replacement: "Sam"
  },
  {
    case: "people",
    replacement: "FAF"
  }
];

var elements = document.getElementsByTagName('*');

for (var k = 0; k < censoredWords.length; k++) {
  for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
      var node = element.childNodes[j];

      if (node.nodeType === 3) {
        var text = node.nodeValue;
        // console.log("Checking text:", text);
      
        // console.log("Checking for", censoredWords[k].case);
        if (text.indexOf(censoredWords[k].case)) { // If contains
          replacedText = text.split(censoredWords[k].case).join(censoredWords[k].replacement);
          element.replaceChild(document.createTextNode(replacedText), node);
        } else {
          // Did not find match
        }
      }
    }
  }
}
