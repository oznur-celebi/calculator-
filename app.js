let dugme = document.querySelectorAll(".button");//
let screen = document.querySelector(".calc-numbers");
let calculator = dugme[18];
let clear_button = dugme[0];
let sign_changer = dugme[1];
let delete_button =dugme[2];
let result_displayed = false;

// element.addEventListener("click", print);
// function print() {
//     screen.value += element.innerHTML;
// }
dugme.forEach(element => {
    element.addEventListener("click", ()=>{
    if (element.innerHTML != "+/-" && element.innerHTML != "AC" && element.innerHTML != "← " && element.innerHTML != "=") {
        if (result_displayed === false) {
            screen.value += element.innerHTML;
        } else if (result_displayed === true && (element.innerHTML === "+" || element.innerHTML === "-" || element.innerHTML === "×" || element.innerHTML === "÷")){
            result_displayed = false;
            screen.value += element.innerHTML;
        } else {
            screen.value="";
            result_displayed=false;
           screen.value += element.innerHTML;
        }
    }
})
});
calculator.addEventListener("click", () => {
    let array = screen.value.split("");
    screen.value = calculate(array);
    console.log(array);
    // console.log(array.slice(1,3).join(""));

})

function calculate(array) {
    let i;
    if (array.includes("÷") == true) {
        let i = array.indexOf("÷");
        let x = array.slice(0, i).join("");
        let y = array.slice(i + 1).join("");
        console.log(x);
        console.log(y);
        result_displayed = true;
        console.log(result_displayed);
        return divide(parseFloat(x), parseFloat(y))
    }
    if (array.includes("x") == true) {
        i = array.indexOf("x");
        let x = array.slice(0, i).join("");
        let y = array.slice(i + 1).join("");
        result_displayed = true;
        console.log(result_displayed);
        return mul(parseFloat(x), parseFloat(y));
    }
    if (array.includes("-") == true) {
        i = array.indexOf("-");
        let x = array.slice(0, i).join("");
        let y = array.slice(i+1).join("");
        result_displayed = true;
        console.log(result_displayed);
        return sub(parseFloat(x), parseFloat(y));

    }
    if (array.includes("+") == true) {
        let i = array.indexOf("+");
        let x = array.slice(0, i).join("");
        let y = array.slice(i + 1).join("");
        console.log(y);
        console.log(x);
        result_displayed= true;
        console.log(result_displayed);
        return sum(parseFloat(x), parseFloat(y));
    }


}

function divide(a, b) {
    if (b == 0) {
        return "infinity"
    }
    else {
        return (a / b)
    }
}

function mul(a, b) {
    return (a * b)
}
function sub(a, b) {
    return (a - b)
}
function sum(a, b) {
    return (a + b)
}

clear_button.onclick =()=>{
    screen.value = "";
};
sign_changer.onclick=()=>{
    screen.value = screen.value * (-1);
}
delete_button.onclick=("click", del);
function del(){
    screen.value = screen.value.slice(0,-1);
}
// let value ="34+4";
// console.log(value.slice(0,-1));