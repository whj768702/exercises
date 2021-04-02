let button = {
  clicked: false,
  click: () => {
    console.log(this); // window
    this.clicked = true;
  }
};
button.click();
console.log(button.clicked); // false