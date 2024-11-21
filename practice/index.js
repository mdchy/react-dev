// Get the container element
const containerEl = document.querySelector(".container");

// Select all div elements inside the container and convert the NodeList to an array
const boxesEl = Array.from(containerEl.querySelectorAll("div"));

// Log the array to check if the divs are stored properly
console.log(boxesEl);

// Now you can loop through the array and manipulate the elements using DOM methods
boxesEl.forEach((box, index) => {
    // Example: Add some text or change the background color
    box.textContent = `Box ${index + 1}`;
    box.style.backgroundColor = `rgba(0, 0, 255, 0.${index + 1})`;
});