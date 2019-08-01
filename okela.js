    let x = parseInt(document.getElementById('numb1').value);
    let y = parseInt(document.getElementById('numb2').value);
function addition() {
    let x = parseInt(document.getElementById('numb1').value);
    let y = parseInt(document.getElementById('numb2').value);
    let z = x +y;
    document.getElementById("result").innerHTML = "Result Addition : " + z;
}

function subtraction() {
    let x = parseInt(document.getElementById('numb1').value);
    let y = parseInt(document.getElementById('numb2').value);
    let z = x - y;
    document.getElementById("result").innerHTML = "Result Subtraction : " + z;
}

function Multipilcaton() {
    let x = parseInt(document.getElementById('numb1').value);
    let y = parseInt(document.getElementById('numb2').value);
    let z = x* y;
    document.getElementById("result").innerHTML = "Result Multiplication : " + z;
}

function Division() {
    let x = parseInt(document.getElementById('numb1').value);
    let y = parseInt(document.getElementById('numb2').value);
    if(y == 0){
        alert("Error. Second number must not be 0. Please try again !!")
    } else {
        let z = x / y;
        document.getElementById("result").innerHTML = "Result Division : " + z;
    }
}