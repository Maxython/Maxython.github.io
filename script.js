consoleText(['Welcome to my site', 'Hi all', 'How are you?'], 'text');

function consoleText(words, id) {
  var visible = true;
  var cons = document.getElementsByClassName('console');
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var target = document.getElementById(id);
  window.setInterval(function() {
    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount)
      window.setTimeout(function() {
        var usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function() {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount)
      letterCount += x;
    }
  }, 120)
  window.setInterval(function() {
    for (var i=0; i<cons.length; i++) {
      if (visible === true) {
        cons[i].className = 'console console-underscore hidden'
      } else {
        cons[i].className = 'console console-underscore'
      }
    }
    visible = !visible;
  }, 400)
}