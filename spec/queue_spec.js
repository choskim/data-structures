describe("Queue", function() {
  var queue;

  beforeEach(function() {
    queue = new Queue();
  });

  it("should have property named _oldestIndex", function() {
    expect(queue._oldestIndex).toEqual(1);
  });

  it("should have property named _newestIndex", function() {
    expect(queue._oldestIndex).toEqual(1);
  });

  it("should have a property named storage", function() {
    expect(queue._storage).toEqual(jasmine.any(Object));
  });

  describe("#size()", function() {
    it("should have an intial value of 0", function() {
      expect(queue.size()).toEqual(0);
    });
  });

  describe("#enqueue(data)", function() {
    describe("first invocation with 'Ticket 1'", function() {
      beforeEach(function() {
        queue.enqueue("Ticket 1");
      });

      it("should have a size of 1", function() {
        expect(queue.size()).toEqual(1);
      });

      it("should add a key of 1", function() {
        expect(Object.keys(queue._storage)[0]).toEqual("1");
      });

      it("should have a value of 'Ticket 1'", function() {
        expect(queue._storage[1]).toEqual("Ticket 1");
      });
    });

    describe("second invocation with 'Ticket 2'", function() {
      beforeEach(function() {
        queue.enqueue("Ticket 1");
        queue.enqueue("Ticket 2");
      });

      it("should have a size of 2", function() {
        expect(queue.size()).toEqual(2);
      });

      it("should add a key of 2", function() {
        expect(Object.keys(queue._storage)[1]).toEqual("2");
      });

      it("should have a value of 'Ticket 2'", function() {
        expect(queue._storage[2]).toEqual("Ticket 2");
      });
    });
  });

  describe("#dequeue()", function() {
    var deletedData; 

    describe("first invocation", function() {
      beforeEach(function() {
        queue.enqueue("Ticket 1");
        queue.enqueue("Ticket 2");
        deletedData = queue.dequeue();
      });

      it("should return 'Ticket 1'", function() {
        expect(deletedData).toEqual("Ticket 1");
      });

      it("should have a size of 1", function() {
        expect(queue.size()).toEqual(1);
      });

      it("should remove a key of 1", function() {
        expect(Object.keys(queue._storage)[1]).toEqual(undefined);
      });
    });

    describe("second invocation", function() {
      beforeEach(function() {
        queue.enqueue("Ticket 1");
        queue.enqueue("Ticket 2");
        deletedData = queue.dequeue();
        deletedData = queue.dequeue();
      });

      it("should return 'Ticket 2'", function() {
        expect(deletedData).toEqual("Ticket 2");
      });

      it("should have a size of 0", function() {
        expect(queue.size()).toEqual(0);
      });

      it("should remove a key of 2", function() {
        expect(Object.keys(queue._storage)[2]).toEqual(undefined);
      });
    });

    describe("third invocation", function() {
      beforeEach(function() {
        queue.enqueue("Ticket 1");
        queue.enqueue("Ticket 2");
        deletedData = queue.dequeue();
        deletedData = queue.dequeue();
        deletedData = queue.dequeue();
      });

      it("should return undefined", function() {
        expect(deletedData).toEqual(undefined);
      });

      it("should have no keys", function() {
        expect(Object.keys(queue._storage).length).toEqual(0);
      });

      it("should have a size of 0", function() {
        expect(queue.size()).toEqual(0);
      });
    });
  });
});