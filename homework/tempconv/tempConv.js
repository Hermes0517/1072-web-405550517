let ctemp = document.getElementById('celcius');
let ftemp = document.getElementById('fahrenheit');

document.getElementById('c2f').addEventListener('click', C2F);
document.getElementById('f2c').addEventListener('click', F2C);
document.getElementById('reset').addEventListener('click', reset);

function C2F() {
  console.log('c2f');
  if (ctemp.value === null) {
    alert('No input for Celcius temperature');
    return;
  } else {
    ftemp.value = ((ctemp.value * 9) / 5 + 32).toFixed(2);
  }
}

function F2C() {
  console.log('f2c');
  if (ftemp.value === null) {
    alert('No input for Fahrenheit temperature');
    return;
  } else {
    ctemp.value = (((ftemp.value - 32) * 5) / 9).toFixed(2);
  }
}

function reset() {
  ctemp.value = '';
  ftemp.value = '';
}
