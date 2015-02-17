describe("SinglyList", function() {
  var singly;

  beforeEach(function() {
    singly = new SinglyList();
  });

  it("should have an initial length of 0", function() {
    expect(singly._length).toEqual(0);
  });

  it("should have a head that is null", function() {
    expect(singly.head).toEqual(null);
  });

  describe("#add(data)", function() {
    describe("first invocation with 'first'", function() {
      var head = null;

      beforeEach(function() {
        head = singly.add("first");
      });

      it("should have a length of 1", function() {
        expect(singly._length).toEqual(1);
      });

      it("should return head", function() {
        expect(head).toEqual(singly.head);
      });

      it("should have 'first' as head's data", function() {
        expect(head.data).toEqual('first');
      });

      it("should have null as head's next", function() {
        expect(head.next).toEqual(null);
      });
    });

    describe("second invocation with 'second'", function() {
      var head = null, 
          node = null;

      beforeEach(function() {
        head = singly.add("first");
        node = singly.add("second");
      });

      it("should have a length of 2", function() {
        expect(singly._length).toEqual(2);
      });

      it("should have 'second' as node's data", function() {
        expect(node.data).toEqual('second');
      });

      it("should have node as head's next", function() {
        expect(head.next).toEqual(node);
      });

      it("should have null as node's next", function() {
        expect(node.next).toEqual(null);
      });
    });
  });

  describe("#searchNodeAt(position)", function() {
    describe("with an invalid position", function() {
      var head = null,
          node = null;

      beforeEach(function() {
        head = singly.add("first");
        node = singly.add("second");
      });

      it("should throw an error with a position of -1", function() {
        expect(function() { singly.searchNodeAt(-1); }).toThrowError("Failure: non-existent node in this list.");
      });

      it("should throw an error with a position of 20", function() {
        expect(function() { singly.searchNodeAt(20); }).toThrowError("Failure: non-existent node in this list.");
      });
    });

    describe("with a position of 1", function() {
      var head = null,
          node = null;

      beforeEach(function() {
        head = singly.add("first");
        node = singly.add("second");
      });

      it("should return head", function() {
        expect(singly.searchNodeAt(1)).toEqual(head);
      });
    });

    describe("with a position of 2", function() {
      var head = null,
          node = null;

      beforeEach(function() {
        head = singly.add("first");
        node = singly.add("second");
      });

      it("should return node", function() {
        expect(singly.searchNodeAt(2)).toEqual(node);
      });
    });
  });

  describe("#remove(position)", function() {
    describe("at an invalid position", function() {
      var head        = null, 
          node        = null,
          deletedNode = null;

      beforeEach(function() {
        head = singly.add("first");
        node = singly.add("second");
      });

      it("should throw an error with a position of -1", function() {
        expect(function() { singly.remove(-1); }).toThrowError("Failure: non-existent node in this list.");
      });

      it("should throw an error with a position of 20", function() {
        expect(function() { singly.remove(20); }).toThrowError("Failure: non-existent node in this list.");
      });
    });

    describe("at 1", function() {
      var head        = null, 
          node        = null,
          deletedNode = null;

      beforeEach(function() {
        head = singly.add("first");
        node = singly.add("second");
        deletedNode = singly.remove(1);
      });

      it("should have a length of 1", function() {
        expect(singly._length).toEqual(1);
      });

      it("should return head", function() {
        expect(deletedNode).toEqual(head);
      });

      it("should have node as head", function() {
        expect(singly.head).toEqual(node);
      });

      it("should have null as head's next", function() {
        expect(singly.head.next).toEqual(null);
      });
    });

    describe("at 2", function() {
      var head        = null, 
          node        = null,
          deletedNode = null;

      beforeEach(function() {
        head = singly.add("first");
        node = singly.add("second");
        deletedNode = singly.remove(2);
      });

      it("should have a length of 1", function() {
        expect(singly._length).toEqual(1);
      });

      it("should return node", function() {
        expect(deletedNode).toEqual(node);
      });

      it("should have head as head", function() {
        expect(singly.head).toEqual(head);
      });

      it("should have node as head's next", function() {
        expect(singly.head.next).toEqual(null);
      });
    });
  });
});