val1 = document.getElementById("n1")
val2 = document.getElementById("n2")
num1 = 0;
op = "";
num2 = "";
arr = []

no = val1
val2.value = 0;
no.focus();

no.onblur = function () {
    setTimeout(function () {
        no.focus();
        val = val1.value;
        val1.value = '';
        val1.value = val;
    }, 500);
}

function btnclick(x) {
    y = val1.value + x
    val1.value = y;
    calculate();

}
function opclick(x) {
    val1.value += x;
}
function btnclear() {
    val1.value = "";
    val2.value = "";
    num1 = 0;
    op = "";
    num2 = "";
}
function btnsquare() {


    val1.value = val2.value + "^2";
    val2.value = val2.value ** 2;
}
function btnback() {
    num2 = val1.value.slice(0, -1)
    val1.value = num2;
    if (num2 == "") {
        val2.value = 0;

    }
    else {
        val2.value = eval(num2);
    }
}

function calculate() {
    val = val1.value;

    try {
        if (val == "") {
            val2.value = 0;

        }
        else {
            val2.value = eval(val);
        }
    }
    catch (err) {
        val2.value = "Error";
    }
}
function btnequals() {
    val1.value = val2.value;
}
function btnplusminus() {
    val2.value = val2.value * -1;
}
function pi() {
    val1.value += 3.14159;
    calculate();
}
function e() {
    val1.value += 2.71828;
    calculate();
}
function btnfrac() {
    val1.value = val2.value + "^-1"
    val2.value = val2.value ** -1
}
function abs() {
    val2.value = Math.abs(val2.value)
}
function btnsqrt() {

    val1.value = '\u221A' + val1.value
    val2.value = Math.sqrt(val2.value)
}
function fact() {
    f = 1
    n = val1.value
    for (i = 1; i <= n; i++) {
        f *= i;

    }

    no.value += '!'
    val2.value = f
}
function exp() {
    val1.value += "**"
}
function btnsin() {
    y = val1.value;
    val1.value = "Sin(" + y + ")";
    x = Math.sin(y * Math.PI / 180).toFixed(2);
    val2.value = x;

}
function btncos() {
    y = val1.value;
    val1.value = "Cos(" + y + ")";
    x = Math.cos(y * Math.PI / 180).toFixed(2);
    val2.value = x;

}
function btntan() {
    y = val1.value;
    val1.value = "Tan(" + y + ")";
    x = Math.tan(y * Math.PI / 180).toFixed(2);
    val2.value = x;

}
function btnsec() {
    y = val1.value;
    val1.value = "Sec(" + y + ")";
    x = (1 / Math.cos(y * Math.PI / 180)).toFixed(2);
    val2.value = x;

}
function btncosec() {
    y = val1.value;
    val1.value = "Cosec(" + y + ")";
    x = (1 / Math.sin(y * Math.PI / 180)).toFixed(2);
    val2.value = x;
}
function btncot() {
    y = val1.value;
    val1.value = "Cot(" + y + ")";
    x = (1 / Math.tan(y * Math.PI / 180)).toFixed(2);
    val2.value = x;

}



// Loader Animation

// var myVar;

// function myFunction() {
//     myVar = setTimeout(showPage, 3000);
// }

// function showPage() {
//     document.getElementById("loader").style.display = "none";
//     document.getElementById("myDiv").style.display = "block";
// }