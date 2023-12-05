import { ObjectContainer } from '/22_3-web_engeneering/js/components/ObjectTile.js';
import { dineData } from './js/components/objectData.js';
import { renderHeader } from './js/components/header.js';



document.addEventListener('DOMContentLoaded', function() {
    console.log('v0.1.1');
    renderHeader('header123');

  });


const recomendedatoins = dineData.slice(0,3); // implement getRecommendations() function in ./components/recomendations.js

const container = new ObjectContainer('objectDisplay-Container');
container.render(recomendedatoins);