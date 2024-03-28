const bgBody = document.querySelector('body');
const currentColorInput = document.querySelector('.color-input');
const btnChange = document.querySelector('button');
const normalSection = document.querySelector('.normal-section');
const hexSection = document.querySelector('.hex-section');
let randomNumber;
let currentColor;

normalSection.onclick = () => {
   
   btnChange.classList.remove('hide');
   hexSection.classList.remove('active');
   normalSection.classList.add('active');
   
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
      'crimson',
      'burlywood',
      'cyan',
      'darkseagreen',
      'khaki',
   ];

   let indexOfColorArray = colorArray.map((element, index) => index);
   let numberOfColors = colorArray.length;
   
   btnChange.onclick = () => {
   
      randomNumber = Math.round(Math.random() * numberOfColors);
      
      if(randomNumber == indexOfColorArray[randomNumber]) {
         
         currentColor = currentColorInput.style.color = colorArray[randomNumber];
         currentColorInput.innerHTML = currentColor;
         bgBody.style.backgroundColor = colorArray[randomNumber];
         
      };
      
   };
   
};

hexSection.onclick = () => {
   
   btnChange.classList.remove('hide');
   normalSection.classList.remove('active');
   hexSection.classList.add('active');
   
   const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
   
   btnChange.onclick = () => {
     
      let hexColor = '#';
      
      for(let i = 0; i < 6; i++) {

         randomNumber = Math.floor(Math.random() * hex.length);
         hexColor += hex[randomNumber];

      };
      
      currentColor = currentColorInput.style.color = hexColor;
      currentColorInput.innerHTML = currentColor;
      bgBody.style.backgroundColor = hexColor;
      
   };

};



