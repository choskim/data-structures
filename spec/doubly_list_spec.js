describe("DoublyList", function() {
  var doubly;

  beforeEach(function() {
    doubly = new DoublyList();
  });

  it("should have an initial length of 0", function() {
    expect(doubly._length).toEqual(0);
  });

  it("should have a head that is null", function() {
    expect(doubly.head).toEqual(null);
  });

  it("should have a tail that is null", function() {
    expect(doubly.tail).toEqual(null);
  });

  describe("#add(data)", function() {
    describe("first invocation with 'first'", function() {
      var head = null,
          tail = null;

      beforeEach(function() {
        head = doubly.add("first");
        tail = head;
      });

      it("should have a length of 1", function() {
        expect(doubly._length).toEqual(1);
      });

      it("should return head", function() {
        expect(head).toEqual(doubly.head);
      });

      it("should return tail", function() {
        expect(tail).toEqual(doubly.head);
      });

      it("should have 'first' as head's data", function() {
        expect(head.data).toEqual('first');
      });

      it("should have 'first' as tail's data", function() {
        expect(tail.data).toEqual('first');
      });

      it("should have null as head's next", function() {
        expect(head.next).toEqual(null);
      });

      it("should have null as tail's previous", function() {
        expect(tail.previous).toEqual(null);
      });
    });

    describe("second invocation with 'second'", function() {
      var head = null,
          tail = null;

      beforeEach(function() {
        head = doubly.add("first");
        tail = head;
      });

      it("should have a length of 1", function() {
        expect(doubly._length).toEqual(1);
      });

      it("should return head", function() {
        expect(head).toEqual(doubly.head);
      });

      it("should return tail", function() {
        expect(tail).toEqual(doubly.head);
      });

      it("should have 'first' as head's data", function() {
        expect(head.data).toEqual('first');
      });

      it("should have 'first' as tail's data", function() {
        expect(tail.data).toEqual('first');
      });

      it("should have null as head's next", function() {
        expect(head.next).toEqual(null);
      });

      it("should have null as tail's previous", function() {
        expect(tail.previous).toEqual(null);
      });
    });
  });

  describe("#searchNodeAt(position)", function() {
    describe("with an invalid position", function() {
      var head = null,
          tail = null;

      beforeEach(function() {
        head = doubly.add("first");
        tail = doubly.add("second");
      });

      it("should throw an error with a position of -1", function() {
        expect(function() { 
          doubly.searchNodeAt(-1); 
        }).toThrowError("Failure: non-existent node in this list.");
      });

      it("should throw an error with a position of 20", function() {
        expect(function() { 
          doubly.searchNodeAt(20); 
        }).toThrowError("Failure: non-existent node in this list.");
      });
    });

    describe("with a position of 1", function() {
      var head = null,
          tail = null;

      beforeEach(function() {
        head = doubly.add("first");
        tail = doubly.add("second");
      });

      it("should return head", function() {
        expect(doubly.searchNodeAt(1)).toEqual(head);
      });
    });

    describe("with a position of 2", function() {
      var head = null,
          tail = null;

      beforeEach(function() {
        head = doubly.add("first");
        tail = doubly.add("second");
      });

      it("should return tail", function() {
        expect(doubly.searchNodeAt(2)).toEqual(tail);
      });
    });
  });

  describe("#remove(position)", function() {
    describe("at an invalid position", function() {
      var head        = null, 
          tail        = null,
          deletedNode = null;

      beforeEach(function() {
        head = doubly.add("first");
        node = doubly.add("second");
      });

      it("should throw an error with a position of -1", function() {
        expect(function() { 
          doubly.remove(-1); 
        }).toThrowError("Failure: non-existent node in this list.");
      });

      it("should throw an error with a position of 20", function() {
        expect(function() { 
          doubly.remove(20); 
        }).toThrowError("Failure: non-existent node in this list.");
      });
    });

    describe("at 1", function() {
      var head        = null, 
          tail        = null,
          deletedNode = null;

      beforeEach(function() {
        head        = doubly.add("first");
        tail        = doubly.add("second");
        deletedNode = doubly.remove(1);
      });

      it("should have a length of 1", function() {
        expect(doubly._length).toEqual(1);
      });

      it("should return head", function() {
        expect(deletedNode).toEqual(head);
      });

      it("should have tail as head", function() {
        expect(doubly.head).toEqual(tail);
      });

      it("should have null as head's next", function() {
        expect(doubly.head.next).toEqual(null);
      });

      it("should have null as tail's previous", function() {
        expect(doubly.tail.previous).toEqual(null);
      });
    });

    describe("at 2", function() {
      var head        = null, 
          node        = null,
          deletedNode = null;

      beforeEach(function() {
        head        = doubly.add("first");
        tail        = doubly.add("second");
        deletedNode = doubly.remove(2);
      });

      it("should have a length of 1", function() {
        expect(doubly._length).toEqual(1);
      });

      it("should return tail", function() {
        expect(deletedNode).toEqual(tail);
      });

      it("should have tail as head", function() {
        expect(doubly.tail).toEqual(head);
      });

      it("should have null as head's next", function() {
        expect(doubly.head.next).toEqual(null);
      });

      it("should have null as tail's previous", function() {
        expect(doubly.tail.previous).toEqual(null);
      });
    });
  });
});