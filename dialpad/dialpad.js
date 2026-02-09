const display = document.getElementById("numberDisplay");
const keys = document.querySelectorAll(".keys button");
const clearBtn = document.getElementById("clear");
const backspaceBtn = document.getElementById("backspace");
const callBtn = document.getElementById("call");

keys.forEach(key => {
  key.addEventListener("click", () => {
    display.value += key.dataset.key;
  });
});

clearBtn.addEventListener("click", () => {
  display.value = "";
});

backspaceBtn.addEventListener("click", () => {
  display.value = display.value.slice(0, -1);
});

callBtn.addEventListener("click", () => {
  if (!display.value) {
    alert("Enter a number");
    return;
  }
  alert(`Calling ${display.value}...`);
  // Hook this to SIP / Twilio / Telco API
});
