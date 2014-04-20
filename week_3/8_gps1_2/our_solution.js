// GPS 1.2 - JavaScript

// YOUR FULL NAMES:
//  1. Johnny Mulvahill
//  2. Simon Gondeck


// 1. "YOU SIGNED... WHO?!"




// 2. "Here they Come!"





// 3. "TIME IS MONEY!"

//YOUR CODE HERE!

function Client(name, age, quote){
    this.name = name
    this.age = age
    this.quote = quote
    this.sayHi = function(){
    return "Hi this is " + this.name + ". I am " + this.age + "years old and let me tell ya " + this.quote
    }
}


var AdamSandler = new Client ("Adam Sandler", 47, "That's your home! Are you too good for your home?!");
var KristenBell = new Client ("Kristen Bell", 33, "Do you wanna build a snowman?");
var JimCarrey = new Client ("Jim Carrey", 52, "...So you're tell me there's a chance? YEAH!");
var JamesFranco = new Client("James Franco", 36, "I'm a big cardigan sweater guy.");

var shooterMcGavin = new Client("Shooter McGavin", 48, "Just stay out of my way... or you'll pay. Listen to what I say.");
shooterMcGavin.constructor === Client;
shooterMcGavin.age === 48;
shooterMcGavin.quote === "Just stay out of my way... or you'll pay. Listen to what I say.";




// 4. "SHOW 'EM OFF!"




// ** BONUS **


//  Your Reflection:
