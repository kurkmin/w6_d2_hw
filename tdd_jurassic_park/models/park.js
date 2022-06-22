const Dinosaur = require("./dinosaur");

const Park = function (name, ticketPrice) {
    this.name = name; 
    this.ticketPrice = ticketPrice; 
    this.dinosaurs = []; 
};

Park.prototype.addDinosaur = function (dinosaur) {
  this.dinosaurs.push(dinosaur);
};

// how to remove a specific element from array in JS? 
// in Python, we have remove function 
// should i put dinosaur inside brackets after pop 
Park.prototype.removeDinosaur = function (dinosaur) {
  this.dinosaurs.pop(dinosaur);
}

Park.prototype.findMostVisitors = function () {
    let theLargest = 0;
    for (dinosaur of this.dinosaurs) {
        if (dinosaur.guestsAttractedPerDay > theLargest) {
            theLargest = dinosaur;
        }
    }
    return theLargest;
};


Park.prototype.findDinoBySpecie = function (specie) { 
    let arrayBySpeice = []; 
    for (dinosaur of this.dinosaurs) {
        if (dinosaur.specie == specie) {
            arrayBySpeice.push(dinosaur);
        }
    }
    return arrayBySpeice
};

Park.prototype.getTotalVisitors = function () { 
    let total = 0;
    for (dinosaur of this.dinosaurs) {
        total = total + dinosaur.guestsAttractedPerDay; 
    }
    return total; 
};

Park.prototype.getAnnualTotalVisitors = function () { 
    dayTotal = this.getTotalVisitors();
    return dayTotal * 365; 
};

Park.prototype.getTotalRevenue = function () { 
    dayTotal = this.ticketPrice; 
    return dayTotal * 365; 
};

module.exports = Park; 

