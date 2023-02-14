const header = document.querySelector("#header");
const timestamp = document.querySelector("#timestamp");

setInterval(function() {
  const now = new Date();
  const date = now.toLocaleDateString();
  const time = now.toLocaleTimeString();

  timestamp.innerHTML = `${date} ${time}`;
}, 1000);

// const textSizeDecrease = document.getElementById("text-size-decrease");
// const textSizeIncrease = document.getElementById("text-size-increase");
// const textSizeValue = document.getElementById("text-size-value");

// textSizeDecrease.addEventListener("click", function() {
//   let currentSize = parseInt(textSizeValue.innerHTML);
//   if (currentSize > 10) {
//     textSizeValue.innerHTML = currentSize - 2;
//     document.body.style.fontSize = currentSize - 2 + "px";
//   }
// });

// textSizeIncrease.addEventListener("click", function() {
//   let currentSize = parseInt(textSizeValue.innerHTML);
//   if (currentSize < 24) {
//     textSizeValue.innerHTML = currentSize + 2;
//     document.body.style.fontSize = currentSize + 2 + "px";
//   }
// });

let textSizeOption = document.querySelector("#textSizeOption");
textSizeOption.addEventListener("click", function(event) {
  let currentTextSize = document.querySelector("#textArea").style.fontSize;
  if (currentTextSize === "") {
    currentTextSize = "16px";
  }
  let textSize = parseFloat(currentTextSize);
  textSize = textSize + 2 + "px";
  document.querySelector("#textArea").style.fontSize = textSize;
});

// Text Style
let textStyleOption = document.querySelector("#textStyleOption");
textStyleOption.addEventListener("click", function(event) {
  let currentTextStyle = document.querySelector("#textArea").style.fontFamily;
  if (currentTextStyle === "") {
    currentTextStyle = "Arial";
  }
  let textStyles = ["Arial", "Helvetica", "Times New Roman", "Verdana", "Courier New"];
  let currentTextStyleIndex = textStyles.indexOf(currentTextStyle);
  if (currentTextStyleIndex === textStyles.length - 1) {
    document.querySelector("#textArea").style.fontFamily = textStyles[0];
  } else {
    document.querySelector("#textArea").style.fontFamily = textStyles[currentTextStyleIndex + 1];
  }
});

// Bold
let boldOption = document.querySelector("#boldOption");
boldOption.addEventListener("click", function(event) {
  let currentFontWeight = document.querySelector("#textArea").style.fontWeight;
  if (currentFontWeight === "bold") {
    document.querySelector("#textArea").style.fontWeight = "normal";
  } else {
    document.querySelector("#textArea").style.fontWeight = "bold";
  }
});

// Italic
let italicOption = document.querySelector("#italicOption");
italicOption.addEventListener("click", function(event) {
  let currentFontStyle = document.querySelector("#textArea").style.fontStyle;
  if (currentFontStyle === "italic") {
    document.querySelector("#textArea").style.fontStyle = "normal";
  } else {
    document.querySelector("#textArea").style.fontStyle = "italic";
  }
});

// Underline
let underlineOption = document.querySelector("#underlineOption");
underlineOption.addEventListener("click", function(event) {
  let currentTextDecoration = document.querySelector("#textArea").style.textDecoration;
  if (currentTextDecoration === "underline") {
    document.querySelector("#textArea").style.textDecoration = "none";
  } else {
    document.querySelector("#textArea").style.textDecoration = "underline";
  }
});

// Align Left
// let alignLeftOption = document.querySelector("#alignLeftOption");
// alignLeftOption.addEvent

// Get the number of words typed and update the loading bar
// Function to update the loading bar



// function updateLoadingBar(words) {
//   var bar = document.getElementById("loading-bar");
//   bar.style.width = (words / 100000) * 100 + "%";
// }

// // Function to update the number of words written
// function updateWords(words) {
//   var wordCount = document.getElementById("word-count");
//   wordCount.innerHTML = words + " words out of 100000";
// }

// // Function to update the selected option in the dropdown
// function updateSelectedOption(option) {
//   var selectedOption = document.getElementById("selected-option");
//   selectedOption.innerHTML = option;
// }

// // Function to handle the change event of the dropdown
// document.getElementById("project-dropdown").addEventListener("change", function() {
//   var selectedOption = this.value;
//   updateSelectedOption(selectedOption);
// });

// // Initialize the loading bar with 0 words
// updateLoadingBar(0);

// // Initialize the number of words written with 0 words
// updateWords(0);

// // Initialize the selected option in the dropdown with "LinkedIn Posts"
// updateSelectedOption("LinkedIn Posts");

const loadingBar = document.querySelector(".loading-bar");

let width = 0;
const interval = setInterval(() => {
  width = width + 10;
  loadingBar.style.width = width + "%";
  if (width >= 70) {
    clearInterval(interval);
  }
}, 1000);



const textarea = document.getElementById("content-description-textbox");
const wordCount = document.getElementById("word-count");
const characterCount = document.getElementById("character-count");

textarea.addEventListener("input", function () {
  wordCount.textContent = textarea.value.split(" ").length;
  characterCount.textContent = textarea.value.length;
});




