// I worked [by myself, with:] on this challenge

// Your mission description:
// The Minnesota Timberwolves have to score one more basket to win the NBA Finals.
// I must navigate Ricky Rubio towards the basket and have him shoot and score.
// 

// Pseudocode
// Need to create Ricky Rubio/ Timberwolves players
// Create function that moves Rubio 
// Creat function for him to shoot
// 
// 

// Initial Code
function Player(name, number, team, locationx, locationy){
  this.name = name;
  this.number = number;
  this.team = team;
  this.locationx = locationx;
  this.locationy = locationy;
  this.moveUp = function(){
  this.locationy = this.locationy + 5
  };
  this.moveDown = function(){
  this.locationy = this.locationy - 5
  };

  this.moveRight = function(){
  this.locationx = this.locationx + 5
  };

  this.moveLeft = function(){
  this.locationx = this.locationx - 5
  };
  this.info = function(){
    console.log(this.name);
    console.log(this.number);
    console.log(this.team);
    console.log(this.locationx);
    console.log(this.locationy);
  };
  this.shoot = function(){
    if (this.locationy = 10)
      {return "We win! The" + this.team + " win!"}
    else
      {return +this.name+ "missed! and the" +this.team+ " lose!"}
  }
};

var Rubio = new Player("Ricky Rubio", 9, "Timberwolves", 0, 0)


// Refactored Code






// Reflection
// 
// 
// 
// 
// 
// 
// 
// 
