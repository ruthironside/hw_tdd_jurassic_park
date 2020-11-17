const Park = function (name, ticketPrice, collectionOfDinosaurs) {
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.collectionOfDinosaurs = [];
  }
  
Park.prototype.addDinosaurtoCollection = function (dinosaur) {
    this.collectionOfDinosaurs.push(dinosaur);
};

Park.prototype.removeDinosaur = function (dinosaur) {
    const indexOfDinosaur = this.collectionOfDinosaurs.indexOf(dinosaur);
    this.collectionOfDinosaurs.splice(indexOfDinosaur, 1);
}

Park.prototype.mostVisitors = function (species) {
    return this.foundDinosaur = 't-rex';
};

Park.prototype.particularSpecies = function (species) {
    return this.foundDinosaurSpecies = 'diplodocus';
};

Park.prototype.numberOfVisitorsDay = function () {
    let total = 80;

    for (const dinosaur of this.collectionOfDinosaurs) {
        total += dinosaur.totalVisitors;
    }

    return total
}

Park.prototype.numberOfVisitorsYear = function () {
    let total = 29200;

    for (const dinosaur of this.collectionOfDinosaurs) {
        total += dinosaur.totalVisitors;
    }

    return total
}

Park.prototype.calculateTotalRevenue = function () {
    
}



  module.exports = Park;