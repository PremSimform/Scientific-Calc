ip1 = document.getElementById("s1")
ip2 = document.getElementById("s2")
num1 = 0;
op = "";
num2 = "";
arr = []

ip = ip1
ip2.value = 0;
ip.focus();

ip.onblur = function () {
    setTimeout(function () {
        ip.focus();
        val = ip1.value;
        ip1.value = '';
        ip1.value = val;
    }, 500);
}

function btnclick(x) {
    y = ip1.value + x
    ip1.value = y;

    // num2 = num2 + x;
    // ip2.value = eval(num2);
    // calculate(num2);
    calculate();

}
function opclick(x) {
    // y = ip1.value + x
    ip1.value += x;

    // num2 = num2 + x;
    // y = ip1.value + x
    // ip1.value = y;
    // arr = arr.concat(num2);
    // arr = arr.concat(x);
    // op = x;
    // num1 = z;
    // num2 = "";

    // console.log(arr);

}
// function calculate(num) {

//     switch (op) {
//         case '+':
//             z = Number(num1) + Number(num);
//             break;
//         case '-':
//             z = Number(num1) - Number(num);
//             break;
//         case 'x':
//             z = Number(num1) * Number(num);
//             break;
//         case '÷':
//             z = Number(num1) / Number(num);
//             break;
//         default:
//             z = Number(num2);
//     }



//     


// }
function btnclear() {
    ip1.value = "";
    ip2.value = "";
    num1 = 0;
    op = "";
    num2 = "";
}
function btnsquare() {


    ip1.value = ip2.value + "^2";
    ip2.value = ip2.value ** 2;
}
function btnback() {
    num2 = ip1.value.slice(0, -1)
    ip1.value = num2;
    if (num2 == "") {
        ip2.value = 0;

    }
    else {
        ip2.value = eval(num2);
    }
}

function calculate() {
    val = ip1.value;

    try {
        if (val == "") {
            ip2.value = 0;

        }
        else {
            ip2.value = eval(val);
        }
    }
    catch (err) {
        ip2.value = "Error";
    }
}
function btnequals() {
    ip1.value = ip2.value;
}
function btnplusminus() {
    ip2.value = ip2.value * -1;
}
function pi() {
    ip1.value += 3.14159;
    calculate();
}
function e() {
    ip1.value += 2.71828;
    calculate();
}
function btnfrac() {
    ip1.value = ip2.value + "^-1"
    ip2.value = ip2.value ** -1
}
function abs() {
    ip2.value = Math.abs(ip2.value)
}
function btnsqrt() {

    ip1.value = '\u221A' + ip1.value
    ip2.value = Math.sqrt(ip2.value)
}
function fact() {
    f = 1
    n = ip1.value
    for (i = 1; i <= n; i++) {
        f *= i;

    }

    ip.value += '!'
    ip2.value = f
}
function exp() {
    ip1.value += "**"
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