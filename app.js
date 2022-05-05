let var1 = null;
let var2 = null;
let operator = null;
let display = document.querySelector('.resultDisplay');

const buttons = document.querySelectorAll('.button');
buttons.forEach((button) =>
  button.addEventListener('click', (e) => {
    pushButton(e.target.innerHTML);
  }),
);

const setNumber = (num) => {
  if (operator == null) {
    if (var1 == null) {
      var1 = '';
      var1 += num;
    } else {
      var1 += num;
    }
  } else {
    if (var2 == null) {
      var2 = '';
      var2 += num;
    } else {
      var2 += num;
    }
  }
};
const compute = () => {
  let result = 0;
  switch (operator) {
    case '+':
      result = parseFloat(var1) + parseFloat(var2);
      var1 = var2 = operator = null;
      return result;
    case '-':
      result = parseFloat(var1) - parseFloat(var2);
      var1 = var2 = operator = null;
      return result;

    case 'x':
      result = parseFloat(var1) * parseFloat(var2);
      var1 = var2 = operator = null;
      return result;
    case '/':
      result = parseFloat(var1) / parseFloat(var2);
      var1 = var2 = operator = null;
      return result;
  }
};
const pushButton = (button) => {
  const isNumButton = !isNaN(parseInt(button)) || button == '.';
  if (isNumButton) {
    setNumber(button);
  }
  if (['/', 'x', '-', '+'].indexOf(button) > -1 && !var2) {
    operator = button;
  }
  if (button == 'reset') {
    var1 = var2 = operator = null;
  }
  if (button == '=' && var2) {
    var1 = compute();
  }

  screenRefresh();
};
const screenRefresh = () => {
  if (var2) {
    display.innerHTML = `${var1} ${operator} ${var2}`;
  } else if (operator) {
    display.innerHTML = `${var1} ${operator}`;
  } else if (var1) {
    display.innerHTML = `${var1}`;
  } else {
    display.innerHTML = '0';
  }
};
screenRefresh();
