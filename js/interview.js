// / < --------------Question 1----------------->
// What is the output ?
let randomValue = { name: "Lydia" };
randomValue = 23;

if (!typeof randomValue === "string") {
  console.log("It's not a string!");
}
 else {
  console.log("Yay it's a string!");
}

// A: It's not a string!
// B: Yay it's a string!   
// C: TypeError
// D: undefined