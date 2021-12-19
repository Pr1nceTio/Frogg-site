// Use Strict
"use strict";

// Global Variable
let total = 0;

// Tab function
function opentab(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

//  Add Event Listeners
document.getElementById("mark").addEventListener("click", mark)

// Add Event Funtions
function mark() {

    // Mark Test

    // Reset
    total = 0

    // Question 1
    // Input
    let Q1A = (document.getElementById("Q1A").value);
    Q1A = Q1A.toLowerCase();

    // Output
    if (Q1A == "amphibians" || Q1A == "amphibian") {
        document.getElementById("Q1R").innerHTML = "Correct";
        document.getElementById("Q1R").style.color = "green";
        document.getElementById("Q1").style.border = "2px solid greenyellow";
        total = total + 1;
        console.log(total)
    } else {
        document.getElementById("Q1R").innerHTML = "Incorrect";
        document.getElementById("Q1R").style.color = "red";
        document.getElementById("Q1").style.border = "2px solid red";
    }

    // Question 2
    // Input
    let Q2A = (document.getElementById("Q2A").value);
    Q2A = Q2A.toLowerCase();

    // Output
    if (Q2A == "yes" || Q2A == "yh" || Q2A == "yup" || Q2A == "absolutely") {
        document.getElementById("Q2R").innerHTML = "Correct";
        document.getElementById("Q2R").style.color = "green";
        document.getElementById("Q2").style.border = "2px solid greenyellow";
        total = total + 1;
        console.log(total)
    } else {
        document.getElementById("Q2R").innerHTML = "Incorrect";
        document.getElementById("Q2R").style.color = "red";
        document.getElementById("Q2").style.border = "2px solid red";
    }

    // Question 3
    // Input
    let Q3A = (document.getElementById("Q3A").value);
    Q3A = Q3A.toLowerCase();

    // Output
    if (Q3A == "false" || Q3A == "f" || Q3A == "nottrue" || Q3A == "not true" || Q3A == "nah") {
        document.getElementById("Q3R").innerHTML = "Correct";
        document.getElementById("Q3R").style.color = "green";
        document.getElementById("Q3").style.border = "2px solid greenyellow";
        total = total + 1;
        console.log(total)
    } else {
        document.getElementById("Q3R").innerHTML = "Incorrect";
        document.getElementById("Q3R").style.color = "red";
        document.getElementById("Q3").style.border = "2px solid red";
    }

    // Question 4
    // Input
    let Q4A = (document.getElementById("Q4A").value);
    Q4A = Q4A.toLowerCase();

    // Output
    if (Q4A == "yes" || Q4A == "yh" || Q4A == "yup" || Q4A == "absolutely") {
        document.getElementById("Q4R").innerHTML = "Correct";
        document.getElementById("Q4R").style.color = "green";
        document.getElementById("Q4").style.border = "2px solid greenyellow";
        total = total + 1;
        console.log(total)
    } else {
        document.getElementById("Q4R").innerHTML = "Incorrect";
        document.getElementById("Q4R").style.color = "red";
        document.getElementById("Q4").style.border = "2px solid red";
    }

    // Question 5
    // Input
    let Q5A = (document.getElementById("Q5A").value);

    // Output
    if (Q5A == "indicator" || Q5A == "amphibians" || Q5A == "amphibian") {
        document.getElementById("Q5R").innerHTML = "Correct";
        document.getElementById("Q5R").style.color = "green";
        document.getElementById("Q5").style.border = "2px solid greenyellow";
        total = total + 1;
        console.log(total)
    } else {
        document.getElementById("Q5R").innerHTML = "Incorrect";
        document.getElementById("Q5R").style.color = "red";
        document.getElementById("Q5").style.border = "2px solid red";
    }

    // Question 6
    // Input
    let Q6A = (document.getElementById("Q6A").value);

    // Output
    if (Q6A == "permeable" || Q6A == "absorbent" || Q6A == "penetrable" || Q6A == "porous" || Q6A == "permeable to water" || Q6A == "permeabletowater") {
        document.getElementById("Q6R").innerHTML = "Correct";
        document.getElementById("Q6R").style.color = "green";
        document.getElementById("Q6").style.border = "2px solid greenyellow";
        total = total + 1;
        console.log(total)
    } else {
        document.getElementById("Q6R").innerHTML = "Incorrect";
        document.getElementById("Q6R").style.color = "red";
        document.getElementById("Q6").style.border = "2px solid red";
    }

    // Your score
    document.getElementById("math").innerHTML = "Your " + "score " + "is  " + Math.round(total) + "  /  6" + " " + "(" + Math.round(total / 6 * 100) + "%)";
    // Comment
    if (total == 6) {
        document.getElementById("result").innerHTML = "Excellent, you have been listening!";
    } else if (total == 5) {
        document.getElementById("result").innerHTML = "Good, I bet you spelt amphibian wrong, if not you still did fine.";
    } else if (total == 4) {
        document.getElementById("result").innerHTML = "Cool, I see you read some of it!";
    } else if (total <= 3) {
        document.getElementById("result").innerHTML = " It's really not that hard to read a few words ya know -_-";
    }
}

// Drawing Basics

// Setup the canvas and the graphics context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

// Store images in variables
let gamerunning = false;
let frogg = document.getElementById("frogger");
let holeL = document.getElementById("holeL");
let holeC = document.getElementById("holeC");
let holeR = document.getElementById("holeR");
let log = document.getElementById("log");
let road = document.getElementById("road");
let water = document.getElementById("water");
let car = document.getElementById("car");
let score = 10000;
let frogX = 370;
let frogY = 540;
let carX = 10;
let carY = 297;
let carX2 = 450;
let carY2 = 297;
let bigboyX = -460;
let bigboyY = 297;
let logX = 10;
let logX2 = -350;
let logX3 = 350;
let logX4 = 350;
let logX5 = 690;
let logX6 = 1000;
let logY = 140;
let logY2 = 190;
let bikeX = 250;
let bikeY = 450;
let busX = 525;
let busY = 437;
let truckX = 880;
let truckY = 400;
let carSpeed = Math.random() * (13 - 7) + 7;
let otherSpeed = Math.random() * (9 - 5) + 5;
let holes1X = 50;
let holes2X = 280;
let holes3X = 625;
let holeY = 20;
let hole2Y = 10;
let logSpeedR = 3;
let logSpeedL = 2;
let inhouse1 = false;
let inhouse2 = false;
let inhouse3 = false;
let notOnWater = true;

// Frog spritesheet
let spriteani = true;
let spritepos = 0;
let frogani = document.getElementById("frogg");
let framecount = 0;


// Add event listeners 
window.addEventListener("click", FrogAni); 
function FrogAni() {
    if (spriteani == true) {
        requestAnimationFrame(FrogAni);
        framecount++;
    }

    if (framecount % 20 == 0) {
        if (spritepos > 528) {
            spritepos = 0;
        }
        spritepos += 66;

        ctx.clearRect(0, 0, cnv.width, cnv.height);


        // Draw Beginning
        ctx.drawImage(frogg, 50, 50); 
        ctx.fillStyle = "green";
        ctx.fillRect(0, 0, cnv.width, cnv.height, );
        ctx.fillStyle = "white";
        ctx.fillRect(100, 100, 600, 400, );
        ctx.font = "50px Arial";
        ctx.strokeStyle = "black";
        ctx.strokeText("Click Anywhere To Begin", 125, 250); // Outline Text
        ctx.font = "35px Comic Sans MS";
        ctx.drawImage(frogani, spritepos, 0, 66, 50, 340, 300, 99, 75);
    }
    document.getElementById("myCanvas").addEventListener("click", startGame); 
}

if (spriteani == true) {
    requestAnimationFrame(FrogAni);
}

function startGame() {
    spriteani = false;
    if (gamerunning == false) {
        requestAnimationFrame(loop);
    }
    gamerunning = true;
}

if (gamerunning == true) {
    // Main Program Loop (60 FPS)
    requestAnimationFrame(loop);
}

// Add Event Listeners
document.addEventListener("keyup", move);

// Update frog variables based on arrow key
function move(event) {
    if (event.keyCode == 37 || event.key == "a") { // Left Arrow

        if (frogY <= 290) {
            frogX -= 55;
        } else {
            frogX -= 75;
        }

    } else if (event.keyCode == 39 || event.key == "d") { // Right Arrow

        if (frogY <= 290) {
            frogX += 55;
        } else {
            frogX += 75;
        }

    } else if (event.keyCode == 38 || event.key == "w") { // Up Arrow

        if (frogY <= 290) {
            frogY -= 55;
        } else {
            frogY -= 75;
        }

    } else if (event.keyCode == 40 || event.key == "s") { // Down Arrow

        if (frogY <= 290) {
            frogY += 55;
        } else {
            frogY += 75;
        }

    }
}

function loop() {

    ctx.clearRect(0, 0, cnv.width, cnv.height);

    // DRAW ROAD
    ctx.drawImage(road, -10, 290); // Draw image
    ctx.drawImage(road, 313, 290); // Draw image
    ctx.drawImage(road, 500, 290); // Draw image

    // DRAW WATER   
    ctx.drawImage(water, 0, 130, 799, 50); // Draw image
    ctx.drawImage(water, 0, 180, 799, 50); // Draw image

    // DRAW GOAL
    ctx.drawImage(holeL, holes1X, holeY); // Draw goal
    ctx.drawImage(holeC, holes2X, hole2Y, 250, 100); // Draw goal
    ctx.drawImage(holeR, holes3X, holeY); // Draw goal

    // DRAW LOG
    ctx.drawImage(log, logX, logY)
    ctx.drawImage(log, logX2, logY)
    ctx.drawImage(log, logX3, logY)
    ctx.drawImage(log, logX4, logY2)
    ctx.drawImage(log, logX5, logY2)
    ctx.drawImage(log, logX6, logY2)


    // Update Log
    logX += logSpeedR;
    logX2 += logSpeedR;
    logX3 += logSpeedR;
    logX4 -= logSpeedL;
    logX5 -= logSpeedL;
    logX6 -= logSpeedL;

    // DRAW FROG
    ctx.drawImage(frogg, frogX, frogY); // Draw image 

    // DRAW TOP LANE VEHICLES
    ctx.drawImage(car, carX, carY);
    ctx.drawImage(car2, carX2, carY2);
    ctx.drawImage(bigboy, bigboyX, bigboyY);

    // Update Top Lane Vehicles
    carX = carX + carSpeed;
    carX2 = carX2 + carSpeed;
    bigboyX = bigboyX + 30;

    // DRAW BOTTOM LANE VEHICLES
    ctx.drawImage(bike, bikeX, bikeY);
    ctx.drawImage(bus, busX, busY);
    ctx.drawImage(truck, truckX, truckY);

    // Update Bottom Lane Vehicles
    bikeX = bikeX - otherSpeed;
    busX = busX - otherSpeed;
    truckX = truckX - otherSpeed;

    // Inside Loop Functions

    function death() {
        frogX = 370;
        frogY = 540;
        notOnWater = true;
    }

    function frogOnLogL() {
        frogX += logSpeedL + 1;
        notOnWater = true;
    }

    function frogOnLogR() {
        frogX -= logSpeedR - 1;
        notOnWater = true;
    }

    //  Frog dies river end right
    if (frogX + 45 > cnv.width && frogY >= 130 && frogY < 230) {
        death()
    }
    //  Frog dies river end left
    if (frogX < 0 && frogY >= 130 && frogY < 230) {
        death()
    }

    //  Frog can't pass bottom wall
    if (frogY + 45 > cnv.height) {
        frogY = 558;
    }

    //  Frog can't pass top wall
    if (frogY < 0) {
        frogY = -5;
    }

    //  Frog can't pass right  wall
    if (frogX + 45 > cnv.width) {
        frogX = 755;
    }

    //  Frog can't pass left wall
    if (frogX < 0) {
        frogX = 0;
    }

    // Vehicles return (Right)

    if (carX > 800) {
        carX = -200;
        carX = carX + carSpeed;
    }

    if (carX2 > 800) {
        carX2 = -200;
        carX2 = carX2 + carSpeed;
    }

    if (bigboyX > 800) {
        bigboyX = -10000;
    }

    if (logX > 800) {
        logX = -200;
    }

    if (logX2 > 800) {
        logX2 = -200;
    }

    if (logX3 > 800) {
        logX3 = -200;
    }

    // Vehicles return (Left)

    if (busX < -250) {
        busX = 800;
    }

    if (bikeX < -250) {
        bikeX = 800;
    }

    if (truckX < -250) {
        truckX = 800;
    }

    if (logX4 < -150) {
        logX4 = 800;
    }

    if (logX5 < -150) {
        logX5 = 800;
    }

    if (logX6 < -150) {
        logX6 = 800;
    }

    // Collisions

    if (frogX > carX - 50 && frogX < carX + 100 && frogY < carY + 55 && frogY > carY - 30 && score > 0) {
        death()
        score -= 1000;
    }

    if (frogX > carX2 - 50 && frogX < carX2 + 100 && frogY < carY2 + 55 && frogY > carY2 - 30 && score > 0) {
        death()
        score -= 1000;
    }

    if (frogX > bigboyX - 50 && frogX < bigboyX + 70 && frogY < bigboyY + 30 && frogY > bigboyY - 30 && score > 0) {
        death()
        score -= 2500;
    }

    if (frogX > bikeX - 40 && frogX < bikeX + 125 && frogY < bikeY + 50 && frogY > bikeY - 20 && score > 0) {
        death()
        score -= 1000;
    }

    if (frogX > busX - 40 && frogX < busX + 175 && frogY < busY + 60 && frogY > busY - 30 && score > 0) {
        death()
        score -= 1000;
    }

    if (frogX > truckX - 30 && frogX < truckX + 225 && frogY < truckY + 100 && frogY > truckY - 10 && score > 0) {
        death()
        score -= 1000;
    }

    // Attach Log Top

    if (frogX > logX - 25 && frogX < logX + 125 && frogY < logY + 10 && frogY > logY - 15) {
        frogOnLogL()
    } else if (frogX > logX2 - 25 && frogX < logX2 + 125 && frogY < logY + 10 && frogY > logY - 15) {
        frogOnLogL()
    } else if (frogX > logX3 - 25 && frogX < logX3 + 125 && frogY < logY + 10 && frogY > logY - 15) {
        frogOnLogL()
    } else if (frogY < 230 && frogY > 130) {
        notOnWater = false;
    }

    // Attach Log Bottom

    if (frogX > logX4 - 25 && frogX < logX4 + 125 && frogY < logY2 + 10 && frogY > logY2 - 15) {
        frogOnLogR()
    } else if (frogX > logX5 - 25 && frogX < logX5 + 125 && frogY < logY2 + 10 && frogY > logY2 - 15) {
        frogOnLogR()
    } else if (frogX > logX6 - 25 && frogX < logX6 + 125 && frogY < logY2 + 10 && frogY > logY2 - 15) {
        frogOnLogR()
    } else if (frogY < 230 && frogY > 130) {
        notOnWater = false;
    }

    // Die by water

    if (frogY < 230 && frogY > 130 && notOnWater == false) {
        death()
    }

    // Goal

    if (frogX > holes1X - 30 && frogX < holes1X + 90 && frogY < holeY + 50 && frogY > holeY - 10) {
        inhouse1 = true;
        document.getElementById("holeL").src = "images/fullhole.png";
        frogX = 370;
        frogY = 540;
        score += 1500
    }

    if (frogX > holes2X - 30 && frogX < holes2X + 125 && frogY < hole2Y + 50 && frogY > hole2Y - 10) {
        inhouse2 = true;
        document.getElementById("holeC").src = "images/fullhole.png";
        frogX = 370;
        frogY = 540;
        score += 2000
    }

    if (frogX > holes3X - 30 && frogX < holes3X + 90 && frogY < holeY + 50 && frogY > holeY - 10) {
        inhouse3 = true;
        document.getElementById("holeR").src = "images/fullhole.png";
        frogX = 370;
        frogY = 540;
        score += 1500
    }

    if (inhouse1 && inhouse2 && inhouse3) {
        console.log("YOU'VE WON")
        gamecomplete()
    }

    if (score == 0) {
        console.log("YOU'VE LOST")
        gameover()
    }

    if (gamerunning == true) {
        requestAnimationFrame(loop);
    }
}

// Outside Loop Functions

function gameover() { // Gameover screen
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, cnv.width, cnv.height, );
    ctx.font = "75px Arial";
    ctx.strokeStyle = "white";
    ctx.strokeText("GAME OVER!", 175, 250); // Outline Text
    ctx.font = "35px Comic Sans MS";
    ctx.fillStyle = "white";
    ctx.fillText("You have Lost !!!", 275, 325); // Filled Text
    gamerunning = false;
}

function gamecomplete() { // Congratulations screen
    ctx.drawImage(frogg, 50, 50);
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, cnv.width, cnv.height, );
    ctx.font = "75px Arial";
    ctx.strokeStyle = "white";
    ctx.strokeText("CONGRATULATIONS", 35, 250); // Outline Text
    ctx.font = "35px Comic Sans MS";
    ctx.fillStyle = "white";
    ctx.fillText("You have Won with a score of " + score + " !! ", 100, 325); // Filled Text
    gamerunning = false;
}