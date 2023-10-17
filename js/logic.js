function searchObjects(searchTerm) {
    var matches = [];
  
    for (var i = 0; i < objects.length; i++) {
      var object = objects[i];
  
      if (object.name.toLowerCase().includes(searchTerm.toLowerCase())) {
        matches.push(object);
      } else if (object.id.toString().toLowerCase().includes(searchTerm.toLowerCase())) {
        matches.push(object);
      } else if (object.short_description.toLowerCase().includes(searchTerm.toLowerCase())) {
        matches.push(object);
      }
    }
  
    matches.sort(function(a, b) {
      if (a.name.toLowerCase().indexOf(searchTerm.toLowerCase()) === 0 && b.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== 0) {
        return -1;
      } else if (a.id.toString().toLowerCase().indexOf(searchTerm.toLowerCase()) === 0 && b.id.toString().toLowerCase().indexOf(searchTerm.toLowerCase()) !== 0) {
        return -1;
      } else if (a.short_description.toLowerCase().indexOf(searchTerm.toLowerCase()) === 0 && b.short_description.toLowerCase().indexOf(searchTerm.toLowerCase()) !== 0) {
        return -1;
      } else {
        return 0;
      }
    });
  
    return matches;
  }

  function displaySearchResults(results) {
    var container = document.getElementById("search-results");
    container.innerHTML = "";

    if (results.length === 0) {
      container.innerHTML = "No results found.";
      return;
    }

    for (var i = 0; i < results.length; i++) {
      var object = results[i];

      var div = document.createElement("div");
      div.innerHTML = "<h2>" + object.name + "</h2><p>" + object.short_description + "</p>";

      container.appendChild(div);
    }
  }

  var searchInput = document.getElementById("search-input");

  searchInput.addEventListener("input", function() {
    var searchTerm = searchInput.value;
  
    if (searchTerm === "") {
      displaySearchResults([]);
    } else {
      var results = searchObjects(searchTerm);
      displaySearchResults(results);
    }
  });