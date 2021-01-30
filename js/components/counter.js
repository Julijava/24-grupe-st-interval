/*
REIKALAVIMAI:
- rasti vieta/elementa
- istraukti skaiciu
- kas sekunde ta skaiciu mazinti iki nulio
- pasiekus nuli - parasyti FINITO
*/

let number = 0;

function counter(selector) {
    const DOM = document.querySelector(selector);
    let number = parseInt(DOM.innerText);

    const timer = setInterval(function () {
        showMeNumber(number);
        number--;
        if (number < 0) {
            clearInterval(timer);

        }
    }, 1000);

}

function showMeNumber(num) {
    console.log(num);
}

export { counter }