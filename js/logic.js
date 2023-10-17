// Define any global variables or constants here
var container = document.getElementById("object-container");
container.innerHTML = "1"; // clear the container
// ToDo add images to the objects

// Define any functions you need here
function displayObjects() {
  var container = document.getElementById("object-container");
  container.innerHTML = "0"; // clear the container

  if (objects.length === 0) {
    var message = document.createElement("p");
    message.textContent = "No objects found.";
    container.appendChild(message);
  } else {
    for (var i = 0; i < objects.length; i++) {
      var object = objects[i];

      var div = document.createElement("div");
      div.className = "object";
      div.innerHTML = "<h2>" + object.name + "(" + object.id + ")" + "</h2><p>" + object.description + "</p>";

      container.appendChild(div);
    }
  }
}

function searchObjects() {
    var searchTerm = document.getElementById("search-term").value.toLowerCase();
    var matches = [];
  
    for (var i = 0; i < objects.length; i++) {
      var object = objects[i];
  
      if (object.name.toLowerCase().includes(searchTerm)) {
        matches.push(object);
      }
    }
  
    objects = matches; // update the objects array with the matches
    displayObjects(); // display the matching objects on the page
  
    var container = document.getElementById("object-container");
    container.style.display = "block"; // show the object-container div
  }
  
  // Wait for the DOM to be ready before executing any code
  document.addEventListener("DOMContentLoaded", function() {
    // Your code goes here
  
    var searchInput = document.getElementById("search-term");
    var searchButton = document.getElementById("search-button");
  
    searchInput.addEventListener("input", function() {
      searchObjects();
      if (searchInput.value === "") {
        searchButton.disabled = true;
      } else {
        searchButton.disabled = false;
      }
    });
  });