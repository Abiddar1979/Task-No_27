/* Task # 27 : Alien Colours#3: Turn your if-els chain from Exercise 5-4 into an if-else.

*if the alien is green , print a massage that the player earned 5 points.

*if the alien is yellow ,print a massage that the player earned 10 points.

*if the alien is red , print a message that the player earned 15 points.

*write three version of this program,making sure each message is printed for the alien.*/

// 1st version :

let alien_colour: string = `green`;

if (alien_colour === `green`){
    console.log("congratulation! you just earned 5 points.");
}

else if (alien_colour === `yellow`){
    console.log("congratulation! you have just earned 19 points.");
}
else {
    console.log("congratulation! you just earned 15 points.");
}

// 2nd Version:

alien_colour= `yellow`;

if (alien_colour === `green`){
    console.log ("congratulation! you just earned 5 points. ");
}
else if (alien_colour === `yellow`){
    console.log("congratulation! you just earned 10 points.");
}
else{
    console.log("congratulation! you just earned 15 points.");
}

// 3rd version:

alien_colour =`red`;

if (alien_colour === `green`){
    console.log("congratulation! you just earned 5 points."); 
}
else if (alien_colour === `yellow`){
    console.log("congratulation! you just earned 10 points.");
}
else{
    console.log(" congratulation!you just earned 15 points.");
}