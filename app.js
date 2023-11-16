console.log("Hello World!\n==========\n");

// Exercise 1 Section
const numbers = [2, 22, 12, 17, 18, 39, 129];


function arraySum(numbers) {

  let sum = 0;

  
  numbers.forEach((number) => {
    
    sum += number;
  });

  
  return sum;
}


console.log(arraySum(numbers)); 


// Exercise 2 Section
//console.log("EXERCISE 2:\n==========\n");



const book = {};


book.title = "The Witcher";
book.author = "Andrzej Sapkowski";
book.pages = 384;
book.readCount = 1;


book.info = function() {
  return `${this.title} by ${this.author}, ${this.pages} pages, read ${this.readCount} times.`;
};

console.log(book.info());
 
//execersise 3


let sentence = "The quick brown fox jumps over the lazy dog";

let reversedSentence = "";
const wordsArray = sentence.split(" ");

for (let i = 0; i < wordsArray.length; i++) {
    const characterArray = wordsArray[i].split("");
    characterArray.reverse();
    const reversedWord = characterArray.join("");
    reversedSentence += reversedWord + " ";
}

console.log(reversedSentence.trim());

//exercise 4

let csvData = "name,age\nFrodo,50\nSam,38\nMerry,36\nPippin,26";

const rows = csvData.split("\n");

const headers = rows[0].split(",");

let result = [];

for (let i = 1; i < rows.length; i++) {
  const values = rows[i].split(",");

  let rowObject = {};

  for (let j = 0; j < headers.length; j++) {
    rowObject[headers[j]] = values[j];
  }

  result.push(rowObject);
}

console.log(result);

