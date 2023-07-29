function insert(num) {
    let number = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = number + num;
}

function clean() {
    document.getElementById('result').innerHTML = "";
}

function back() {
    let results = document.getElementById('result').innerHTML
    document.getElementById('result').innerHTML = results.substring(0, results.length - 1);
}

function calculate() {
    let calculates = document.getElementById('result').innerHTML

    if (calculates) {
        document.getElementById('result').innerHTML = eval(calculates)
    }

}