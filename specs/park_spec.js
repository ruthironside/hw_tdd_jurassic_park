const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {
  let park;

  beforeEach(function () {
    park = new Park("Jurassic Park", 10.00, 50);
    dinosaur = new Dinosaur("t-rex", "carnivore", 50);
    dinosaur1 = new Dinosaur("diplodocus", "herbivore", 10)
    dinosaur2 = new Dinosaur("triceratops", "herbivore", 20)

  })

  it('should have a name', function() {
    const actual = park.name;
    assert.strictEqual(actual, "Jurassic Park")
  });

  it('should have a ticket price', function() {
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 10.00);
  });

  it('should have a collection of dinosaurs', function() {
    const actual = park.collectionOfDinosaurs;
    assert.deepStrictEqual(actual, []);
  });

  it('should be able to add a dinosaur to its collection', function() {
    park.addDinosaurtoCollection(dinosaur1);
    const expected = [dinosaur1];
    assert.deepStrictEqual(park.collectionOfDinosaurs, expected)

  });

  it('should be able to remove a dinosaur from its collection', function() {
    park.addDinosaurtoCollection(dinosaur1);
    park.addDinosaurtoCollection(dinosaur2);
    park.removeDinosaur(dinosaur2);
    const expected = [dinosaur1];
    const actual = park.collectionOfDinosaurs;
    assert.deepStrictEqual(actual, expected);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function() {
    park.mostVisitors;
    const expected = "t-rex";
    assert.strictEqual(park.mostVisitors(), expected);

  });

  it('should be able to find all dinosaurs of a particular species', function() {
    park.particularSpecies;
    const expected = "diplodocus";
    assert.strictEqual(park.particularSpecies(), expected);
  });

  it('should be able to calculate the total number of visitors per day', function() {
    park.numberOfVisitorsDay(dinosaur);
    park.numberOfVisitorsDay(dinosaur1);
    park.numberOfVisitorsDay(dinosaur2);
    const expected = 80;
    assert.strictEqual(park.numberOfVisitorsDay(), expected);
  });

  it('should be able to calculate the total number of visitors per year', function() {
    park.numberOfVisitorsYear(dinosaur);
    park.numberOfVisitorsYear(dinosaur1);
    park.numberOfVisitorsYear(dinosaur2);
    const expected = 29200;
    assert.strictEqual(park.numberOfVisitorsYear(), expected);
  });

  // it('should be able to calculate total revenue for one year', function () {
  //   park.calculateTotalRevenue(ticketPrice);
  //   const expected = 292000;
  //   assert.strictEqual(park.calculateTotalRevenue(), expected);
  // });

});
