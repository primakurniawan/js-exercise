// const generateColor = () => {
//   const red = Math.floor(Math.random() * 255);
//   const green = Math.floor(Math.random() * 255);
//   const blue = Math.floor(Math.random() * 255);

//   let hexRed = red.toString(16);
//   let hexGreen = green.toString(16);
//   let hexBlue = blue.toString(16);

//   if (hexRed.length < 2) hexRed = "0" + hexRed;
//   if (hexGreen.length < 2) hexGreen += "0" + hexGreen;
//   if (hexBlue.length < 2) hexBlue += "0" + hexBlue;
//   // rgb(0, 0, 0)

//   const color = {
//     rgb: `rgb(${red}, ${green}, ${blue})`,
//     hex: `#${hexRed}${hexGreen}${hexBlue}`,
//   };
//   return color;
// };

// const btnClick = document.getElementById("btn-click");
// const body = document.querySelector("body");

// const colorText = document.querySelector(".color");
// const colorHexText = document.querySelector(".color-hex");

// const showColor = () => {
//   const color = generateColor();
//   body.style.backgroundColor = color.hex;
//   colorText.textContent = color.rgb;
//   colorHexText.textContent = color.hex;
//   console.log(color);
// };

// window.addEventListener("keypress", (e) => {
//   if ((e.keyCode = 32)) {
//     showColor();
//   }
// });
// btnClick.addEventListener("click", showColor);

// const labor = {
//   name: "prime",
//   salary: 150,
//   contract: 5,
//   changePosition: function (position) {
//     this.position = position;
//   },
// };

// const laborOfCompA = Object.create(labor);
// laborOfCompA.changePosition("Manager");
// console.log(laborOfCompA.position);

// const str = { str: "string" };

class Person {
  constructor(name, gender, birthYear) {
    this.name = name;
    this.gender = gender;
    this.birthYear = birthYear;
  }

  set passed(year) {
    this.duration = year - this.birthYear;
  }

  get passed() {
    return this.duration;
  }
}

const p1 = new Person("prime", "male", 2000);
p1.passed = 2100;
console.log(p1.passed);
