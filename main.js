var button = document.getElementsByTagName("button")[0];


var ourRandomLunchItem = document.createElement("p");


var lunchItemWrapper = document.getElementById("generator-results");
lunchItemWrapper.appendChild(ourRandomLunchItem);

var placeholderText = document.createTextNode("");
ourRandomLunchItem.appendChild(placeholderText);

var lunchItems = ["Palomino's", "Red Rock Deli", "Freddy's", "Just Wafflin'", "Nikki's", "The Garage", "Braum's", "Fuzzy's Taco Shop", "Mexico Joe's"];

var myFunction = function(){
    lunchItems.sort(function(a,b){return 0.5 - Math.random()});

var ourRandomLunchItemFiller = document.createTextNode(lunchItems[0]);
ourRandomLunchItem.appendChild(ourRandomLunchItemFiller);
    
var ourButtonSection = document.getElementById("generator-button");
ourButtonSection.removeChild(button);
ourRandomLunchItem.classList.add("big-and-bold");

};



button.onclick = myFunction;
