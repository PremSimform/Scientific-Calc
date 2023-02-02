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

//This function handles the basic mathematical operations.
function opclick(x) {
    val1.value += x;
}

//clear: This will clear every thing from input and output pannel.
function btnclear() {
    val1.value = "";
    val2.value = "";
    num1 = 0;
    op = "";
    num2 = "";
}

//square: find the square of the input value.
function btnsquare() {


    val1.value = val2.value + "^2";
    val2.value = val2.value ** 2;
}

//back button: this acts as a backspace to remove the a digit at a time from the input.
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

//calculate: This calculate the output based on the user operation and numeric input .
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

//plusminus: It inverts the sign (if user input is 7 then using this the output will be -7)
function btnplusminus() {
    val2.value = val2.value * -1;
}

//pi: multiplies the input value with the pi value 
function pi() {
    val1.value += 3.14159;
    calculate();
}

function e() {
    val1.value += 2.71828;
    calculate();
}

//frac: calculate the fraction of the input value (user input is x then 1/x)
function btnfrac() {
    val1.value = val2.value + "^-1"
    val2.value = val2.value ** -1
}

//finds absolute value.
function abs() {
    val2.value = Math.abs(val2.value)
}

// sqrt: will find square root of the given input.
function btnsqrt() {

    val1.value = '\u221A' + val1.value
    val2.value = Math.sqrt(val2.value)
}

// fact: will find the factorial of the input value.
function fact() {
    f = 1
    n = val1.value
    for (i = 1; i <= n; i++) {
        f *= i;

    }

    no.value += '!'
    val2.value = f
}

//exp funtions: This signals to the calculator that you are using scientific notation and that the next value you input will be a power of 10.
function exp() {
    val1.value += "**"
}

// Below are the Trignometric Funtions of the calculator.
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
// Trignometry Functions ends here 


//log: will find log of the usser input
function btnlog() {
    y = val1.value;
    val1.value = "log(" + y + ")";
    x = Math.log(y);
    val2.value = x;
}

//ln: Natural Log
function btnln() {
    y = val1.value;
    val1.value = "ln(" + y + ")";
    x = Math.log10(y);
    val2.value = x;
}

// 10x function: It will calculate the value by putting user input to the power to 10.
function btn10x() {
    y = val1.value;
    val1.value = "10**" + y;
    x = 10 ** y;
    val2.value = x;
}

//e function.
function btne() {
    y = val1.value;
    val1.value = y + "e"
}

// equal: Take the final result.
function btnequal() {
    val1.value = val2.value;
}

//Modulus func |x| : Will convert negative number in posiive.
function btnmodulus() {
    y = val1.value;
    val1.value = "|" + y + "|";
    x = Math.abs(y);
    val2.value = x;
}

// mod : will find the reminder from the divsion of 2 numbers 
function btnmod() {
    y = val1.value;
    val1.value = y + "%";
}

//Memory Store : Store the input into the memory.
function btnms() {
    localStorage.setItem("Memory", val2.value)

}

//Memory Recall: displays the value that is currently in memory
function btnmr() {
    val1.value = localStorage.getItem("Memory")
    calculate()
}

//Memory Add: The memory is accessed, the displayed number is added to it, and the outcome is stored there.
function btnmplus() {
    val1.value = localStorage.getItem("Memory") + "+" + val2.value
    localStorage.setItem("Memory", eval(localStorage.getItem("Memory") + "+" + val2.value))
    calculate()
}

//Memory Subtract: The result is stored in memory once the displayed number is subtracted from memory.
function btnmminus() {
    val1.value = localStorage.getItem("Memory") + "-" + val2.value
    localStorage.setItem("Memory", eval(localStorage.getItem("Memory") + "-" + val2.value))
    calculate()
}

//Memory Clear:The memory is set to 0.
function btnmc() {
    localStorage.setItem("Memory", 0)
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