import React from "react";




function App() {

    
// Задача №1

const array = [22, 0, -45, 1001, 8, -6, -0.1, 101, 2.5, -55555];

const positive = array.filter(item =>{
  return item > 0
})
console.log(positive);





// Задача №2

const messages = [
  {message: 'hello', error: true},  
  {message: 'javascript', error: false},  
  {message: 'expovisiov', error: true},  
  {message: 'react', error: true},  
  {message: 'angular', error: false}, 
  {message: 'es6', error: false}, 
];

const messages2 = messages.filter(item =>{
  return item.error === false
})
console.log(messages2);




// Задача №3

const words = ['экспо', 'js', 'react', 'css', 'angular', 'vue', 'html'];

const words2 = words.map(item =>{
  if (item.length < 5) {
    return "*"
  
} else {
  return item
}
})
console.log(words2);





// Задача №4

const sendMessage = (message) => {

};


const half = (number) => {
  return number / 2;
};


const showConsole = () => {
  console.log('Экспо');
}

const concatWords = (first, second) => {
  return first + second;
}





// Задача №5


function justText(){
  return "expo"
}



function logging(text) {
  console.log(text);
  
}



function add(x,y) {
  const z = 3;
  return z * x * y;
  
}



function onlyPositive(number) {
  if(number < 0) {
    return false;
  }
  return true;
}









 return(
    <div>
    </div>
 )
}


export default App;