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

Rubio.moveUp()
Rubio.moveUp()
Rubio.shoot()

// Refactored Code






// Reflection
// This was a very good challenge. First when I looked at it I had no idea what to do. I'm not sure the first two challenges 
// prepared me well enough for this. But after I had my pairing session and knew a little more this was perfect.
// I mainly used this site (http://tobyho.com/2010/11/22/javascript-constructors-and/) as a tool. It gives a lot of good examples
// and explanations. Not sure if there is an easier way to write this code. Maybe one were I do not have so mnay functions inside
// of one big function but my code all works. Watching my code actually work and thinking about how much farther I could go
// with this challenge is exciting.
// 
// 
