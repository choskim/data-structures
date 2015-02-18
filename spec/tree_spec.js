describe("Tree", function() {
  var tree = null;

  beforeEach(function() {
    tree = new Tree(1);
    tree._root.children.push(new Node(2));
    tree._root.children[0].parent = tree;
    tree._root.children.push(new Node(3));
    tree._root.children[1].parent = tree;
    tree._root.children.push(new Node(4));
    tree._root.children[2].parent = tree;

    tree._root.children[0].children.push(new Node(5));
    tree._root.children[0].children[0].parent = tree._root.children[0];

    tree._root.children[0].children.push(new Node(6));
    tree._root.children[0].children[1].parent = tree._root.children[0];

    tree._root.children[2].children.push(new Node(7));
    tree._root.children[2].children[0].parent = tree._root.children[2];

    //                   1
    //                /  |  \
    //               2   3   4
    //              / \      |
    //             5   6     7
  });

  it("should have 1 as root's data", function() {
    expect(tree._root.data).toEqual(1);
  });

  it("should have null as root's parent", function() {
    expect(tree._root.parent).toEqual(null);
  });

  it("should have [] as root's children", function() {
    expect(tree._root.children).toEqual(jasmine.any(Array));
  });

  describe("#traverseDF(callback)", function() {
    var sequence = '';

    beforeEach(function() {
      tree.traverseDF(function(node) {
        sequence += node.data;
      });
    });

	  it("should have the correct sequence", function() {
	    expect(sequence).toEqual("5623741");
	  });
  });
  
  describe("#traverseBF(callback)", function() {
  	var sequence = '';

  	beforeEach(function() {
  	  tree.traverseBF(function(node) {
  	    sequence += node.data;
  	  });
  	});

	  it("should have the correct sequence", function() {
	    expect(sequence).toEqual("1234567");
	  });
  });

  describe("#contains(callback, traversal)", function() {
	  it("should return even numbers with DFS", function() {
	    var sequence = '';

    	tree.contains(function(node) {
    		if (!(node.data % 2)) {
    	    sequence += node.data;
    		}
    	}, tree.traverseDF);

	    expect(sequence).toEqual("624");
	  });

	  it("should return even numbers with BFS", function() {
	    var sequence = '';

    	tree.contains(function(node) {
    		if (!(node.data % 2)) {
    	    sequence += node.data;
    		}
    	}, tree.traverseBF);
	    	
	    expect(sequence).toEqual("246");
	  });
  });

  describe("#add(data, toData, traverse)", function() {
  	var sequence = '';

	  it("should add node with a valid data of 8", function() {
      tree.add(8, 4, tree.traverseBF);
  	  tree.traverseBF(function(node) {
  	    sequence += node.data;
  	  });

	    expect(sequence).toEqual("12345678");
	  });

	  it("should throw an error with an invalid parent", function() {
	    expect(function() { 
	    	tree.add(9, 400, tree.traverseBF);
	    }).toThrowError("Cannot add node to a non-existent parent.");
	  });
  });

  describe("#remove(data, toData, traverse)", function() {
  	var sequence = '';

  	beforeEach(function() {
  		tree.add(8, 4, tree.traverseBF);
  	});

	  it("should remove node with a valid data of 8", function() {
      tree.remove(8, 4, tree.traverseBF);
  	  tree.traverseBF(function(node) {
  	    sequence += node.data;
  	  });

	    expect(sequence).toEqual("1234567");
	  });

	  it("should throw an error with an invalid parent", function() {
	    expect(function() { 
	    	tree.remove(8, 400, tree.traverseBF);
	    }).toThrowError("Parent does not exist.");
	  });

	  it("should throw an error with an invalid node", function() {
	    expect(function() { 
	    	tree.remove(80, 4, tree.traverseBF);
	    }).toThrowError("Node to remove does not exist.");
	  });
  });
});


