console.log("Executing Order 66");

var elements = document.getElementsByTagName('*');

for (var k = 0; k < censoredWords.length; k++) {
  for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
      var node = element.childNodes[j];

      if (node.nodeType === 3) {
        var text = node.nodeValue;
        // console.log("Checking text:", text);
      // (?i)
        // console.log("Checking for", censoredWords[k].case);
        if (text.indexOf(censoredWords[k].case)) { // If contains
          // replacedText = text.split(censoredWords[k].case).join(censoredWords[k].replacement);
          replacedText= text.replace(new RegExp(censoredWords[k].case, 'gi'), censoredWords[k].replacement);
          element.replaceChild(document.createTextNode(replacedText), node);
        } else {
          // Did not find match
        }
      }
    }
  }
}
