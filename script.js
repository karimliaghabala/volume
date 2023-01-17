const volumeBar = document.querySelector('.volume-bar');
const input = document.querySelector('input');
const firstBtn = document.querySelector('.button');
const secondBtn = document.querySelector('.button:last-child');
const value = document.querySelector('.value');

 const valueNumber = value.innerText;
 const valueNumber1 = valueNumber.split("%");

function buttonClick(e) {
    if (e.target.innerText == "-" && Number(valueNumber1[0]) > 0) {
        if (Number(valueNumber1[0]) == 0) {
            valueNumber1[0] = valueNumber1[0];
        } else {
            valueNumber1[0] = String(Number(valueNumber1[0]) - 1);
            input.value = Number(valueNumber1[0]);
            input.value = input.value-1;
        }
    } else {
        if (Number(valueNumber1[0]) < 100) {
            valueNumber1[0] = String(Number(valueNumber1[0]) + 1);
            input.value = Number(valueNumber1[0]);
            input.value = input.value-1;;
        }
    }
    value.innerText = `${valueNumber1[0]}%`
}

function valueClick(e) {
    valueNumber1[0] = String(e.target.value);
    value.innerText = `${valueNumber1[0]}%`
}
firstBtn.addEventListener("click", buttonClick)
secondBtn.addEventListener("click", buttonClick)
input.addEventListener("click", valueClick)
