let btn = document.querySelectorAll(".btn");
let display = document.querySelector(".inpt");
display.value = "";

console.log(display);

btn.forEach((item) => {
  item.onclick = () => {
    if (item.innerHTML == "AC") {
      display.value = "";
    } else if (item.innerHTML == "DE") {
      let str = "" + display.value;
      display.value = str.slice(0, str.length - 1);
    } else if (display.value != "" && item.innerHTML == "=") {
      display.value = eval(display.value);
    } else if (
      display.value == "" &&
      (item.innerHTML == "+" ||
        item.innerHTML == "-" ||
        item.innerHTML == "*" ||
        item.innerHTML == "/" ||
        item.innerHTML == "=")
    ) {
      display.value = "";
    } else {
      display.value += item.innerHTML;
    }
  };
});
