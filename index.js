const inquirer = require('inquirer');
const fs = require('fs');
const { Triangle, Circle, Square } = require('./lib/shapes');

const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter up to three characters for your logo:',
      validate: (input) => {
        if (input.length >= 1 && input.length <= 3) return true;
        return 'Please enter 1 to 3 characters.';
      },
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter a color keyword (OR a hexadecimal number) for the text:',
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Choose a shape:',
      choices: ['Triangle', 'Circle', 'Square'],
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter a color keyword (OR a hexadecimal number) for the shape:',
    },
  ]);
};

const generateLogo = (answers) => {
  console.log("Shape selected:", answers.shape); // Log the shape string
  let shape;
  switch (answers.shape) {
    case 'Triangle':
      shape = new Triangle(answers.shapeColor);
      break;
    case 'Circle':
      shape = new Circle(answers.shapeColor);
      break;
    case 'Square':
      shape = new Square(answers.shapeColor);
      break;
    default:
      console.error("Unexpected shape:", answers.shape); // Log an error if no match
      return; // Exit the function if no match
  }
  console.log("Shape instance:", shape); // Log the shape instance

  // Include the text in the SVG, positioning it at the center of the shape
  const svgContent = `
    <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">${shape.draw()}<text x="150" y="100" font-size="30" text-anchor="middle" fill="${answers.textColor}">${answers.text}</text></svg>`;

  fs.writeFileSync('logo.svg', svgContent);
  console.log(svgContent)
};

promptUser()
  .then(generateLogo)
  .then(() => {
    console.log('Generated logo.svg');
  });



