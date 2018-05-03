function getFName(){
    var fName = document.getElementById("fName").value
    alert(fName);
}

$("myForm").submit(function()
{
$('myForm').trigger("reset");
$('fName').focus();
return true;
});