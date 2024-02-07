var input = document.getElementById("inputBox");
var buttons = document.querySelectorAll(".buttons");   

var string = "";

let arr = Array.from(buttons);

arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if(e.target.innerHTML == "=") {
            string = eval(string);
            input.value = string;
        }

        string = string + e.target.innerHTML;
        input.value = string;
    })
})

arr.forEach(button => {
    button.addEventListener('keypress', (e) => {
        console.log(e);
        string = string + e.target.innerHTML;
        input.value = string;
    })
})
