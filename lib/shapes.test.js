// lib/shapes.test.js
const { Triangle, Circle, Square } = require('./shapes');

console.log("Triangle:", Triangle);
console.log("Circle:", Circle);
console.log("Square:", Square);

const shape = new Triangle('red');
console.log("Triangle instance:", shape);
console.log("Render method:", shape.render);
