describe("Stack", function() {
  var stack;

  beforeEach(function() {
    stack = new Stack();
  });

  it("should have an initial size of 0", function() {
    expect(stack._size).toEqual(0);
  });

  it("should have a property named storage", function() {
    expect(stack._storage).toEqual(jasmine.any(Object));
  });

  describe("#push(data)", function() {
    describe("first invocation with 'Plate 1'", function() {
      beforeEach(function() {
        stack.push("Plate 1");
      });

      it("should have a size of 1", function() {
        expect(stack._size).toEqual(1);
      });

      it("should add a key of 1", function() {
        expect(Object.keys(stack._storage)[0]).toEqual("1");
      });

      it("should have a value of 'Plate 1'", function() {
        expect(stack._storage[1]).toEqual("Plate 1");
      });
    });

    describe("second invocation with 'Plate 2'", function() {
      beforeEach(function() {
        stack.push("Plate 1");
        stack.push("Plate 2");
      });

      it("should have a size of 2", function() {
        expect(stack._size).toEqual(2);
      });

      it("should add a key of 2", function() {
        expect(Object.keys(stack._storage)[1]).toEqual("2");
      });

      it("should have a value of 'Plate 2'", function() {
        expect(stack._storage[2]).toEqual("Plate 2");
      });
    });
  });

  describe("#pop()", function() {
    var deletedData; 

    describe("first invocation", function() {
      beforeEach(function() {
        stack.push("Plate 1");
        stack.push("Plate 2");
        deletedData = stack.pop();
      });

      it("should return 'Plate 2'", function() {
        expect(deletedData).toEqual("Plate 2");
      });

      it("should remove a key of 2", function() {
        expect(Object.keys(stack._storage)[2]).toEqual(undefined);
      });

      it("should have a size of 1", function() {
        expect(stack._size).toEqual(1);
      });
    });


    describe("second invocation", function() {
      beforeEach(function() {
        stack.push("Plate 1");
        stack.push("Plate 2");
        deletedData = stack.pop();
        deletedData = stack.pop();
      });

      it("should return 'Plate 1'", function() {
        expect(deletedData).toEqual("Plate 1");
      });

      it("should remove a key of 1", function() {
        expect(Object.keys(stack._storage)[1]).toEqual(undefined);
      });

      it("should have a size of 0", function() {
        expect(stack._size).toEqual(0);
      });
    });

    describe("third invocation", function() {
      beforeEach(function() {
        stack.push("Plate 1");
        stack.push("Plate 2");
        deletedData = stack.pop();
        deletedData = stack.pop();
        deletedData = stack.pop();
      });

      it("should return undefined", function() {
        expect(deletedData).toEqual(undefined);
      });

      it("should have no keys", function() {
        expect(Object.keys(stack._storage).length).toEqual(0);
      });

      it("should have a size of 0", function() {
        expect(stack._size).toEqual(0);
      });
    });
  });
});