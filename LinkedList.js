function Node(value) {
  this.value = value;
  this.next = null;
}

Node.prototype = {
  append: function(value) {
    var node = this;
    while (node.next) {
      node = node.next;
    }
    node.next = new Node(value);
  },
  toString: function() {
    var arr = [];
    var node = this;
    while (node) {
      arr.push(node.value);
      node = node.next;
    }
    return arr.toString();
  }
};

// TODO move to test
var n = new Node(1);
n.append(2);
console.log('' + n);
