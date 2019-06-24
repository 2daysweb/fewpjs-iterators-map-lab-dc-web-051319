let tutorials = [
  'what does the this keyword mean?',
  'What is the Contutorialuctor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];



const titleCased = () => {
  
  //First take the array and capitalize the first character 
  
  //Take the array and map the values which result from the function we're passing (to uppercase the first char) 
  
  //return changed array 
  

let arrCaps = tutorials.map(x => 

(y => x.split(" ").map [0].toUpperCase() + x.slice(1)));
  
  return arrCaps
}
