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
   
];

let numberOfColors = colorArray.length;


let index = [];

for(let i = 0; i < numberOfColors; i++) {
   
   index.push(i);

};






btnChange.onclick = () => {
   
   let randomNumber = Math.round(Math.random() * numberOfColors);
   
   if(randomNumber == index[0] && index[0] == indexOfColorArray[index[0]]) {
      
      currentColor = currentColorInput.style.color = colorArray[index[0]];
      currentColorInput.innerHTML = currentColor;
      bgBody.style.backgroundColor = colorArray[index[0]];
      
   };
   
};


// switch(randomNumber) {
//    case index:  
//       currentColor = currentColorInput.style.color = colorArray[0];
//       currentColorInput.innerHTML = currentColor;
//       bgBody.style.backgroundColor = colorArray[0];
//       break;
//    case 1:
//       currentColor = currentColorInput.style.color = colorArray[1];
//       currentColorInput.innerHTML = currentColor;
//       bgBody.style.backgroundColor = colorArray[1];
//       break;
//    case 2:
//       currentColor = currentColorInput.style.color = colorArray[2];
//       currentColorInput.innerHTML = currentColor;
//       bgBody.style.backgroundColor = colorArray[2];
//       break;
//    case 3:            
//       currentColor = currentColorInput.style.color = colorArray[3];
//       currentColorInput.innerHTML = currentColor;
//       bgBody.style.backgroundColor = colorArray[3];
//       break;
//    case 4:
//       currentColor = currentColorInput.style.color = colorArray[4];
//       currentColorInput.innerHTML = currentColor;
//       bgBody.style.backgroundColor = colorArray[4];
//       break;
//    case 5:
//       currentColor = currentColorInput.style.color = colorArray[5];
//       currentColorInput.innerHTML = currentColor;
//       bgBody.style.backgroundColor = colorArray[5];
//       break;
//    case 6:
//       currentColor = currentColorInput.style.color = colorArray[6];
//       currentColorInput.innerHTML = currentColor;
//       bgBody.style.backgroundColor = colorArray[6];
//       break;
//    case 7:
//       currentColor = currentColorInput.style.color = colorArray[7];
//       currentColorInput.innerHTML = currentColor;
//       bgBody.style.backgroundColor = colorArray[7];
//       break;
//    case 8:
//       currentColor = currentColorInput.style.color = colorArray[8];
//       currentColorInput.innerHTML = currentColor;
//       bgBody.style.backgroundColor = colorArray[8];
//       break;
//    case 9:
//       currentColor = currentColorInput.style.color = colorArray[9];
//       currentColorInput.innerHTML = currentColor;
//       bgBody.style.backgroundColor = colorArray[9];
//       break;
//    case 10:
//       currentColor = currentColorInput.style.color = colorArray[10];
//       currentColorInput.innerHTML = currentColor;
//       bgBody.style.backgroundColor = colorArray[10];
//       break;
//    case 11:
//       currentColor = currentColorInput.style.color = colorArray[11];
//       currentColorInput.innerHTML = currentColor;
//       bgBody.style.backgroundColor = colorArray[11];
//       break;
// };