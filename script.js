function generateButtons(button, input) {
    x = input.value;
    for (y = 0; x > y; ++y) {
        let newButton = document.createElement("button");
        newButton.className = "btn btn-success";
        newButton.textContent = 'Click me!';
        button.appendChild(newButton);
    }
  }

let flag = 1;

  function handleClick() {
    winnerId =  Math.floor(Math.random() * x + 1);
    const output = document.querySelector('#randomText');
    if (x == winnerId && flag === 1) {
         output.textContent += "Congratulations! ";
         flag = 0;
    } else {
        output.textContent += "  Keep trying!";
    }   
}