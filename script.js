'use strict';

let buildingBox = document.getElementById('b-apartaments-container');
let svg = document.getElementById('b-svg-container');
const poly = document.getElementsByClassName('b-poly-shape');
// console.log(svg);

// Building polyhons
const buildingPolygons = [
  [207, 485, 671, 486, 670, 520, 209, 520],
  [189, 453, 709, 452, 709, 487, 189, 486],
  [189, 419, 709, 418, 709, 453, 189, 452],
  [189, 386, 709, 385, 709, 420, 189, 419],
  [189, 352, 709, 351, 709, 386, 189, 385],
  [189, 318, 709, 317, 709, 352, 189, 351],
  [189, 285, 709, 284, 709, 319, 189, 318],
  [189, 285, 189, 252, 708, 252, 708, 285],
  [188, 252, 188, 219, 707, 219, 707, 252],
  [188, 218, 188, 185, 707, 185, 707, 218],
  [189, 185, 189, 152, 708, 152, 708, 185],
  [189, 152, 189, 119, 708, 119, 708, 152],
  [189, 119, 189, 86, 708, 86, 708, 119],
  [189, 85, 189, 52, 708, 52, 708, 85],
  [189, 53, 189, 20, 708, 20, 708, 53],
];

// setting building polygons from buildingPolygons array
for (let i = 0; i < buildingPolygons.length; i++) {
  let poly = '';
  poly += `
    <polygon
      class="poly-shape b-poly-shape"
      id="b-polygon"
      points=${buildingPolygons[i]}
    >
    </polygon>`;
  svg.innerHTML += `${poly}`;
}

// Showing Container UI
buildingBox.innerHTML = `${svg.outerHTML}`;
buildingBox.innerHTML += `<img src="images/building1.png" alt="building" />`;

// ---------- Building floors onClick ------------- //

const floors = [
  [
    {
      apartament: 44,
      square: 51.8,
      floor: 1,
      livingSquare: 44.6,
      balcoon: 7.2,
      view: 'edge',
    },
    {
      apartament: 41,
      square: 85.8,
      floor: 1,
      livingSquare: 74.6,
      balcoon: 11.2,
      view: 'edge',
    },
  ],
  [{ name: 'Jonas' }, { lastName: 'Schidtman' }],
];
const floor0 = [{ name: 'Oto' }, { lastName: 'Javakhi' }];
const floor1 = [{ name: 'Jonas' }, { lastName: 'Schidtman' }];

for (let i = 0; i < poly.length; i++) {
  poly[i].addEventListener('click', function (e) {
    console.log(e.target, buildingPolygons[i]);
    console.log(floors[buildingPolygons.indexOf(buildingPolygons[i])]);
  });
}
