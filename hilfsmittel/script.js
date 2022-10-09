// Inserting Objects from html
// Color Buttons --->
const r = document.querySelector("#R");
const g = document.querySelector("#G");
const b = document.querySelector("#B");
const copyValues = document.querySelector("#copyValues");

// Color Inputs --->
const rangeR = document.querySelector("#range-R");
const rangeG = document.querySelector("#range-G");
const rangeB = document.querySelector("#range-B");

// Functions for quick selections

function dirR() {
  rangeR.value = 255;
  rangeG.value = 0;
  rangeB.value = 0;

  copyValues.style.backgroundColor = "rgb(255, 0, 0)";

  navigator.clipboard.writeText("rgb(225, 0, 0);");
}

function dirG() {
  rangeR.value = 0;
  rangeG.value = 255;
  rangeB.value = 0;

  copyValues.style.backgroundColor = "rgb(0, 255, 0)";

  navigator.clipboard.writeText("rgb(0, 255, 0);");
}

function dirB() {
  rangeR.value = 0;
  rangeG.value = 0;
  rangeB.value = 255;

  copyValues.style.backgroundColor = "rgb(0, 0, 255)";

  navigator.clipboard.writeText("rgb(0, 0, 255);");
}

// Function for Color Range ------------------------------->

function rangeColor() {
  rangeR.value;
  rangeG.value;
  rangeB.value;

  // Defining background of Copy Button --------------------------------------->

  copyValues.style.backgroundColor = "rgb(" + rangeR.value + "," + rangeG.value + "," + rangeB.value + ")";

  console.log(rangeR.value, rangeG.value, rangeB.value);

  navigator.clipboard.writeText("rgb(" + rangeR.value + "," + rangeG.value + "," + rangeB.value + ");");
}

// first Color

copyValues.style.backgroundColor = "rgb(" + rangeR.value + "," + rangeG.value + "," + rangeB.value + ")";


// HTML shortcuts ----------------------------------------------------------------------------->

const elements = document.querySelector("#elements");
const attributs = document.querySelector("#attributs");
const selectElement = document.querySelector("#selectElement");
const yourElement = document.querySelector("#yourElement");
const inputElement = document.querySelector("#input");

var elemArr = ["a", "div", "p", "h1", "h2", "h3", "h4", "h5", "h6", "input"];

// Sort elements

console.log(elemArr.sort());

// Copy-values function

function copyValue() {

  navigator.clipboard.writeText("<" + elements.value + " " + attributs.value +">" + "</" + elements.value + ">");

  if(elements.value == selectElement.value) {
    navigator.clipboard.writeText("");
  }

  if(elements.value == inputElement.value) {
    navigator.clipboard.writeText("<" + "input " + attributs.value + ">");
  }

  attributs.value = "";
}
