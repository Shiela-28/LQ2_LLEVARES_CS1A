//Price injury: Using SWITCH (Conditional Statement),Alert() and Prompt()

let itemChoice = prompt("Enter item choice (A, B, C, D, or E):").toUpperCase();
let quantity = prompt("Enter quantity:");
let totalPrice;


switch (itemChoice) {
  case "A": totalPrice = quantity * 45; break;
  case "B": totalPrice = quantity * 65; break;
  case "C": totalPrice = quantity * 50; break; 
  case "D": totalPrice = quantity * 80; break; 
  case "E": totalPrice = quantity * 100; break; 
  default: alert("No matching item! Try to re-run the program"); return;
}
alert("The Total Price of the order is: " + totalPrice);