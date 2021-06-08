function fn1() {
    try {
        var select = document.getElementById("formula")
        var selected = select.options[select.selectedIndex].value
        var _num1 = document.getElementById("num1")
        var num1 = _num1.value
        var _num2 = document.getElementById("num2")
        var num2 = _num2.value
        
        if (selected == "(a+b)^2") {
            alert((num1 + num2) * (num1 + num2))
        } else if (selected == "(a-b)^2") {
            alert((num1 - num2) * (num1 - num2))
        } else {
            alert((num1 * num1) - (num2 * num2))
        }} catch (e) {
            alert("Something went wrong")
        }

}

function darkmode() {
  var element = document.body;
  var heading = document.getElementById("heading");
  element.classList.toggle("dark-mode");
  heading.classList.toggle("glow");
}