var Node = require('./LinkedList.es6.js');

function testAppend() {
  var n = new Node(1);
  n.append(2);
  n.append(3);
  console.log('' + n);
}

testAppend();
