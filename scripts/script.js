const bgBody = document.querySelector('body');
const currentColorInput = document.querySelector('.color-input');
const btnChange = document.querySelector('button');
let currentColor;

let colorArray = [
   'indigo',
   'red',
   'blue',
   'purple',
   'orange',
   'pink',
   'gray',
   'white',
   'yellow',
   'green',
   'black',
   'aquamarine',
   'brown',
   'chartreuse',
];

let indexOfColorArray = [
   
   colorArray.indexOf('indigo'),
   colorArray.indexOf('red'),
   colorArray.indexOf('blue'),
   colorArray.indexOf('purple'),
   colorArray.indexOf('orange'),
   colorArray.indexOf('pink'),
   colorArray.indexOf('gray'),
   colorArray.indexOf('white'),
   colorArray.indexOf('yellow'),
   colorArray.indexOf('green'),
   colorArray.indexOf('black'),
   colorArray.indexOf('aquamarine'),
   colorArray.indexOf('brown'),
   colorArray.indexOf('chartreuse'),
   
];

let numberOfColors = colorArray.length;


btnChange.onclick = () => {
   
   let randomNumber = Math.round(Math.random() * numberOfColors);
   
   
   if(randomNumber == indexOfColorArray[randomNumber]) {
      
      currentColor = currentColorInput.style.color = colorArray[randomNumber];
      currentColorInput.innerHTML = currentColor;
      bgBody.style.backgroundColor = colorArray[randomNumber];
      
   };
   
   
};