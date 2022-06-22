const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park; 

  beforeEach(function () {
    park = new Park('Kelvingrove', 10);
    dinosaur1 = new Dinosaur('t-rex', 'carnivore', 50);
    dinosaur2 = new Dinosaur('hello', 'nice', 10);
    dinosaur3 = new Dinosaur('t-rex', 'bird', 20);
  });

  it('should have a name', function () {
    const actual = park.name;
    assert.strictEqual(actual, 'Kelvingrove');
  });

  it('should have a ticket price', function (){
    const actual = park.ticketPrice; 
    assert.strictEqual(actual, 10);
  });

  it('should have a collection of dinosaurs', function (){
    const actual = park.dinosaurs; 
    assert.deepStrictEqual(actual, []);
  });
  
  it('should be able to add a dinosaur to its collection', function (){
    park.addDinosaur(dinosaur1); 
    const actual = park.dinosaurs; 
    assert.deepStrictEqual(actual, [dinosaur1]);
  });

  it('should be able to remove a dinosaur from its collection', function (){
    park.addDinosaur(dinosaur1);
    park.removeDinosaur(dinosaur1);
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, []);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function (){
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    const actual = park.findMostVisitors();
    assert.deepStrictEqual(actual, dinosaur1);
  });
    
  xit('should be able to find all dinosaurs of a particular species', function (){
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    const actual = park.findDinoBySpecie('t-rex');
    const expected = [dinosaur1, dinosaur3];
    assert.deepStrictEqual(actual, expected);
  });

  it('should be able to calculate the total number of visitors per day', function (){
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    const actual = park.getTotalVisitors(); 
    assert.strictEqual(actual, 80)
  });

  it('should be able to calculate the total number of visitors per year', function (){
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    const actual = park.getAnnualTotalVisitors(); 
    assert.strictEqual(actual, 29200);
  }); 

  it('should be able to calculate total revenue for one year', function (){
    const actual = park.getTotalRevenue(); 
    assert.strictEqual(actual, 3650);
  });

});
