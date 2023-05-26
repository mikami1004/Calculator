var display = document.getElementById('display');
    number = document.querySelectorAll('.num'); // 0-9
    operator = document.querySelectorAll('.ope'); // +-*/
    func = document.querySelectorAll('.func'); // +/- %
    clear = document.getElementsByClassName('.clear');
    resultDisplayed = true;

// clicked number button
for(var i=0; i<number.length; i++) {
    number[i].addEventListener("click", function(e) {
        var currentString = display.innerHTML;
        var lastChar = currentString[currentString.length - 1];

        if(resultDisplayed === false) {
            display.innerHTML += e.target.innerHTML;
        }else if(resultDisplayed === true && lastChar === "+" || lastChar === "-" || lastChar === "×" || lastChar === "÷") {
            resultDisplayed = false;
            display.innerHTML += e.target.innerHTML;
        }else {
            resultDisplayed = false;
            display.innerHTML = "";
            display.innerHTML += e.target.innerHTML;
        }
    });
}
// clicked operator button
for(var i=0; i<operator.length; i++) {
    operator[i].addEventListener("click", function(e) {
        
    })
}

