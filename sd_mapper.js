"use strict";
// Uses strict mode.
/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Case Problem 1

   Planisphere Script
   Author: Ryan Wahl
   Date: 2.12.19  

*/

// Stores the current date into the variable thisTime
var thisTime = new Date();

// Takes the date that was stored in the thisTime and turns it into a string which is saved inside of timeStr.
var timeStr = thisTime.toLocaleString();

// Grabs the element with the id of timeStamp. It takes the inner html of that element and sets it to the string that was set in timeStr
document.getElementById("timeStamp").innerHTML = timeStr;

// The variable thisHour stores the current hour from the thisTime date.
var thisHour = thisTime.getHours();
// The variable thisMonth stores the current month from the thisTime date.
var thisMonth = thisTime.getMonth();

// The mapNum variable stores the calculation of the the following equation to get the map number (image number).
var mapNum = (2 * thisMonth + thisHour) % 24;

// The imgStr variable stores the string for an image element that gets the corresponding map number.
var imgStr = "<img src='sd_sky" + mapNum + ".png' />";

// The element with the id planisphere is grabbed. Html is inserted after the begining tag. That html was described in the variable imgStr.
document.getElementById("planisphere").insertAdjacentHTML('afterbegin', imgStr);