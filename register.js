function validateForm(){
    var name=document.getElementById("name").value;
    var email=document.getElementById("email").value;
    var password=document.getElementById("password").value;
    var confirmpassword=document.getElementById("confirmpassword").value;
    var dob=document.getElementById("dob").value;
    var number=document.getElementById("number").value;
    var errorMessages="";
    if(password!==confirmpassword){
        errorMessages+="password doesnot match<br>";
    }
    if(!validateEmail(email)){
        errorMessages+="email doesnot match<br>";
    }
    if(!validateNumber(number)){
        errorMessages+="number doesnot match<br>";
    }
    if(errorMessages!==""){
        document.getElementById("errorMessages").innerHTML=errorMessages;
        return false;
    }
    return true;
}
function validateEmail(email){
    var re=/\S+@\S+\.\S+/;
    return re.test(email);
}
function validateNumber(number){
    var re=/^[0-9]{10}$/;
    return re.test(number);
}