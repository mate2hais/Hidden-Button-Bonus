function generateButtons(button, input) {
  numberOfBtn = input.value;
  for (let index = 1; index <= numberOfBtn; ++index) {
    let newButton = document.createElement("button");
    newButton.className = "btn btn-success";
    newButton.textContent = 'Click me!';
    button.appendChild(newButton);
  }
}

let flag = 1;
function handleClick() {
  let winnerId = Math.ceil(Math.random() * numberOfBtn + 1);
  const output = document.querySelector('#randomText');
  if (numberOfBtn == winnerId && flag === 1) {
    output.textContent += "Congratulations! ";
    flag = 0;
  } else {
    output.textContent += "  Keep trying!";
  }   
}
