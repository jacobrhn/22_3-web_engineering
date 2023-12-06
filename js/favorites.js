
function displayIdArray() {
    const div = document.getElementById('ids-in-local-storage');
    div.innerHTML = localStorage.getItem('favorites');
}

/**
 * Retrieves an object from the objects array by ID.
 * @param {string} objectId - The ID of the object to retrieve.
 * @returns {Object|null} - The object with the specified ID, or null if not found.
 */
function getObjectById(objectId) {

    for (var i = 0; i < objects.length; i++) {
      var object = objects[i];
      if (object.id === objectId) {
        console.log(object)
        return object;
      }
    }
    return null;
  }
  
  function displayFavorites() {
    const favoritesDisplay = document.getElementById('favorites-display');
    let html = '';
    const favorites_ids = JSON.parse(localStorage.getItem('favorites'));
    console.log(favorites_ids)
    for (let i = 0; i < favorites_ids.length; i++) {
        const favorite = getObjectById(favorites_ids[i]);
        if (favorite) {
            html += '<div class="object">';
            html += '<p>' + favorite.name + '</p>';
            //html += '<img src="' + favorite.image + '" alt="' + favorite.name + '">';
            html += '<button onclick="removeFromFavorites(' + favorite.id + ')">Remove from Favorites</button>';
            html += '<p>' + favorite.description + '</p>';
            html += '</div>';
        }
    }
    favoritesDisplay.innerHTML = html;
    favoritesDisplay.scrollIntoView({behavior: "smooth"});
  }
