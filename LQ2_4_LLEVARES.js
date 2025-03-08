//Matrix Printer:Using a Conditional and/or Loop Statement, console, and prompt()

let rows = prompt("Enter number of rows:");
let cols = prompt("Enter number of columns:");
let depth = prompt("Enter depth:");

let word = prompt("Enter a word:");
let char = prompt("Enter a character:");
let number = prompt("Enter a number:");
let symbol = prompt("Enter a symbol:");

for (let i = 0; i < rows; i++) {
  let row = "";
  for (let j = 0; j < cols; j++) {
    for (let k = 0; k < depth; k++) {
      if (k === 0) row += word;
      else if (k === 1) row += char;
      else if (k === 2) row += number;
      else row += symbol;
    }
    row += " ";
  }
  console.log(row);
}