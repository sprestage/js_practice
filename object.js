function Ranch( critters, pastures, family ) {
  this.critters = critters;
  this.pastures = pastures;
  this.family = family;

  this.toString = function () {
    return "The ranch has " + this.critters + ", " + this.pastures + " pastures, and " + this.family + " in the family.";
  };
}

var myRanch2001 = new Ranch();
myRanch2001.critters = ['cats'];
myRanch2001.pastures = 3;
myRanch2001.family = ['Craig','Susan'];

var myRanch2013 = new Ranch();
myRanch2013.critters = ['cats','horses','chickens'];
myRanch2013.pastures = 3;
myRanch2013.family = ['Craig','Kai','Aaron','Susan','Nathaniel'];

console.log( myRanch2001.toString() );

console.log(myRanch2001.critters)
myRanch2001.critters = ['elk', 'deer']
console.log(myRanch2001.critters)

console.log( myRanch2001.toString() );
console.log( myRanch2013.toString() );
