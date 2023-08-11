// lib/shapes.js

class Shape {
    constructor(color = 'black') {
      this.color = color;
    }
  
    setColor(color) {
      this.color = color;
    }
  }
  
  class Triangle extends Shape {
    draw() {
      return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
  }
  
  class Circle extends Shape {
    draw() {
      return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
    }
  }
  
  class Square extends Shape {
    draw() {
      return `<rect x="60" y="60" width="180" height="180" fill="${this.color}" />`;
    }
  }
  
  module.exports = { Triangle, Circle, Square };
  