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
  // in-order traversal for binary search trees
  toString: function() {
    console.log(this);
    return [(this.left || '').toString(), this.value, (this.right || '').toString()].join(' ');
  },
  // returns node instance containing value, or null
  depthFirstSearch: function(value) {
    var stack = [];

    stack.push(this);

    while(stack.length > 0) {
      var node = stack.pop();
      console.log('DFS: checking ' + node.value);
      if (node.value === value) {
        return node;
      }

      if (node.left) {
        stack.push(node.left);
      }
      if (node.right) {
        stack.push(node.right);
      }
    }
    return null;
  },
  getLongestAndShortestLeafDepths: function() {
    if (!this.left && !this.right) {
      return { longest: 0, shortest: 0 };
    }

    var leftDepths = this.left ? this.left.getLongestAndShortestLeafDepths() : { longest: -1, shortest: Number.MAX_VALUE };
    var rightDepths = this.right ? this.right.getLongestAndShortestLeafDepths() : { longest: -1, shortest: Number.MAX_VALUE };

    return {
      longest: Math.min(leftDepths.shortest, rightDepths.shortest) + 1,
      shortest: Math.max(leftDepths.longest, rightDepths.longest) + 1
    };
  }
}

var bt = new BinaryTreeNode(1);
bt.insertLeft(2);
bt.insertRight(3);
bt.left.insertLeft(4);
bt.left.left.insertRight(5);

console.log(bt);
console.log(bt.getLongestAndShortestLeafDepths());

console.log(bt.depthFirstSearch(5));
