
// This code demonstrates event bubbling and capturing in JavaScript.
// When you click on the child element, the event will first trigger the capturing phase (from grandparent to child).
document.querySelector("#grandparent").addEventListener("click", () => {
  console.log("Grandparent clicked (capture)");
}, true); // Use capture phase

document.querySelector("#parent").addEventListener("click", () => {
  console.log("Parent clicked (capture)");
}, true); // Use capture phase

document.querySelector("#child").addEventListener("click", () => {
  console.log("Child clicked (capture)");
}, true); // Use capture phase

// To demonstrate bubbling phase, you can add event listeners without the third parameter or set it to false
// This will use the bubbling phase
// When you click on the child element, the event will first trigger the the bubbling phase (from child back to grandparent).  
document.querySelector("#grandparent").addEventListener("click", () => {
  console.log("Grandparent clicked (bubbling)");
}, false); // Use bubbling phase

document.querySelector("#parent").addEventListener("click", () => {
  console.log("Parent clicked (bubbling)");
}, false); // Use bubbling phase

document.querySelector("#child").addEventListener("click", () => {
  console.log("Child clicked (bubbling)");
}, false); // Use bubbling phase

// Even though we can change true & false accourding to our need & also it effects to that was call for event bubbling or capturing.
document.querySelector("#grandparent").addEventListener("click", () => {
  console.log("Grandparent clicked (capturing)");
}, true); // Use capturing phase

document.querySelector("#parent").addEventListener("click", () => {
  console.log("Parent clicked (bubbling)");
}, false); // Use bubbling phase

document.querySelector("#child").addEventListener("click", () => {
  console.log("Child clicked (bubbling)");
}, false); // Use bubbling phase

// stop the event bubbling by using stopPropagation() method
document.querySelector("#child").addEventListener("click", (e) => {
  console.log("Child clicked (stopPropagation)");
  e.stopPropagation(); // This will stop the event from bubbling up to the parent and grandparent
});
