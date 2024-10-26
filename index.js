const promptInput = prompt("Enter comma separated values for spot speed in km/hr");
const value = promptInput.split(",");
const numberArray = [];
for (let i = 0; i < value.length; i++) {
  numberArray.push(Number(value[i]));
}

let tms = numberArray.reduce((a,b) => a + b)/numberArray.length;
let sms = numberArray.reduce((a,b) => 1/(1/a+1/b))/(1/numberArray.length);
tms = tms.toFixed(2);
sms = sms.toFixed(2);

document.getElementById("spotSpeed").innerText = `Sample spot speeds are (km/hr): ${numberArray}`;
document.getElementById("tms").innerText = `Time mean speed (km/hr): ${tms}`;
document.getElementById("sms").innerText = `Space mean speed (km/hr): ${sms}`;

