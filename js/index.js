const display = document.getElementById("display");
const keys = document.querySelectorAll(".keys button");

// for the buttons

keys.forEach((key) => {
  key.addEventListener("click", (e) => {
    const keyValue = e.target.textContent;

    switch(keyValue) {
      
      case "C":
        display.value = "";
        break;
      case "<":
        display.value = display.value.slice(0, -1);
        break;
      case "=":
        try {
          display.value = eval(display.value);
        } catch (error) {
          display.value = "Syntax Error"
        }
        break;
      default:
        display.value += keyValue
    }
    
  })
})