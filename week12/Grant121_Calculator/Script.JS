


document.getElementById("elCalculator").onClick = function (event) {
    var theButton = event.target.firstChild.nodeValue;
    var theTotal;

    switch (theButton) {
        case "C":
            elOutput.innerHTML = "&nbsp;";
            break;
        case "=":
            theTotal = eval(elOutput.innerHTML);
            alert("Your total is: " + theTotal);
            elOutput.innerHTML = "&nbsp;";
            break;
        default:
            if (elOutput.innerHTML === "&nbsp;") {
                elOutput.innerHTML = theButton;
            } else {
                elOutput.innerHTML += theButton;
            }
            break;
    }
}

// function AddNums(){
//     var nums = GetNums();

//     var num3 = nums[0] + nums[1];

//     DisplayNum3(num3);
// }

// function GetNums(){
//     var num1 = parseInt(document.getElementById("num1").value);
//     var num2 = parseInt(document.getElementById("num2").value);
//     return [num1, num2];
// }

// function DisplayNum3(num3){
//     document.getElementById("num3").value = num3; 
// }