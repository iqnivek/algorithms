function BinaryTreeNode(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

BinaryTreeNode.prototype = {
  insertLeft: function(value) {
    this.left = new BinaryTreeNode(value);
    return this.left;
  },
  insertRight: function(value) {
    this.right = new BinaryTreeNode(value);
    return this.right;
  },
  toString: function() {
    console.log(this);
    return [(this.left || '').toString(), this.value, (this.right || '').toString()].join(' ');
  }
}

var bt = new BinaryTreeNode(1);
bt.insertLeft(2);
bt.insertRight(3);
console.log(bt);
