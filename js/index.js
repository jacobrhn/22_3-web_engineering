import { ObjectContainer } from './components/ObjectTile.js';
import { dineData } from './components/objectData.js';
import { renderHeader } from '/js/components/header.js';



document.addEventListener('DOMContentLoaded', function() {
    renderHeader('header123');
  });


const recomendedatoins = dineData.slice(0,3); // implement getRecommendations() function in ./components/recomendations.js

const container = new ObjectContainer('objectDisplay-Container');
container.render(recomendedatoins);