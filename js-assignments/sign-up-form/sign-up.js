let userDetails = {};

//document.getElementById('outerColors').onchange = event => {
function changeColor() {
    let element1 = document.getElementById('firstColor')
    let element2 = document.getElementById('secondColor');
    let mixedColor = "linear-gradient(to right," + element1.value + "," + element2.value + ")";
    document.getElementById("outerColors").style.backgroundImage = mixedColor;
}


let namePattern = /^[a-zA-Z]+$/;
let documentFirstName = document.getElementById('spanFirstName');
document.getElementById('firstName').onblur = event => {
    if (event.target.value === "") {
        documentFirstName.innerHTML = "*required";
        userDetails['First Name'] = '';
    }
    else if (namePattern.test(event.target.value)) {
        documentFirstName.innerHTML = "";
        userDetails['First Name'] = event.target.value;
    }
    else {
        documentFirstName.innerHTML = "Enter valid firstname";
        userDetails['First Name'] = '';
    }
}

let documentLastName = document.getElementById('spanLastName');
document.getElementById('lastName').onblur = event => {
    if (event.target.value === "") {
        documentLastName.innerHTML = "*required";
        userDetails['Last Name'] = '';
    }
    else if (namePattern.test(event.target.value)) {
        documentLastName.innerHTML = "";
        userDetails['Last Name'] = event.target.value;
    }
    else {
        documentLastName.innerHTML = "Enter valid lastname";
        userDetails['Last Name'] = '';
    }
}

let numberPattern = /^[0-9]{10}$/;
let documentMobileNumber = document.getElementById('spanMobileNo');
let result = document.getElementById('mobileNumber');
document.getElementById('mobileNumber').onblur = event => {
    if (result.value === "") {
        documentMobileNumber.innerHTML = "*required";
        userDetails['Mobile number'] = '';
    }
    else if (numberPattern.test(result.value)) {
        documentMobileNumber.innerHTML = " ";
        userDetails['Mobile number'] = event.target.value;
    }
    else {
        documentMobileNumber.innerHTML = "Enter valid number";
        userDetails['Mobile number'] = '';
    }
}


let val = document.getElementById('email');
let documentEmail = document.getElementById('spanEmail');
val.onblur = event => {
    if (val.validity.typeMismatch) {
        documentEmail.innerHTML = "Enter valid email";
        userDetails['Email'] = '';
    }
    else if (val.validity.valueMissing) {
        documentEmail.innerHTML = "*required";
        userDetails['Email'] = '';
    }
    else {
        documentEmail.innerHTML = " ";
        userDetails['Email:'] = event.target.value;
    }
}


let pwdPattern = /^(?=.*[a-z])(?=.*[A-Z]).*$/;
let pwd = "";
let documentPassword = document.getElementById('spanPassword');
document.getElementById('password').onblur = event => {
    if (event.target.value === "") {
        documentPassword.innerHTML = "*required";
        userDetails['Password'] = '';
    }
    else if (pwdPattern.test(event.target.value)) {
        documentPassword.innerHTML = " ";
        pwd = event.target.value;
        userDetails['Password'] = event.target.value;
    }
    else {
        documentPassword.innerHTML = "Give atleast one capital Alphabet and small Alphabet";
        userDetails['Password'] = '';
    }
};

let documentConfirmPassword = document.getElementById('spanConfirmPwd');
document.getElementById('confirmPassword').onblur = event => {
    if (event.target.value === "") {
        documentConfirmPassword.innerHTML = "*required";
        userDetails['confirm Password'] = "";
    }
    else if (pwd === event.target.value) {
        documentConfirmPassword.innerHTML = " ";
        userDetails['confirm Password'] = event.target.value;
    }
    else {
        documentConfirmPassword.innerHTML = "password not matched";
        userDetails['confirm Password'] = "";
    }
};


let documentGender = document.getElementById('spanGender');
document.getElementById('genderDiv').onclick = event => {
    //console.log(event.target.value);
    if (event.target.value === "") {
        documentGender.innerHTML = "*required";
        userDetails['Gender'] = "";
    }
    else {
        documentGender.innerHTML = "";
        userDetails['Gender'] = event.target.value;
    }
}



document.getElementById('dateOfBirth').onblur = event => {
    let resultValue = event.target;

    if (event.target.value === "") {
        document.getElementById('spanDob').innerHTML = "*required";
        userDetails['Date Of Birth'] = "";
    }
    else if (event.target.value < resultValue.min) {
        document.getElementById('spanDob').innerHTML = 'Your date of birth must be above 2002';
        userDetails['Date Of Birth'] = "";
    }
    else {
        document.getElementById('spanDob').innerHTML = " ";
        userDetails['Date Of Birth'] = event.target.value;
    }
};


document.getElementById("selectBranches").onblur = event => {
    let branchResult = event.target;
    let select = branchResult.options[branchResult.selectedIndex].value;
    userDetails['Branch'] = select;
}

document.getElementById('address').onblur = event => {
    if (event.target.value !== 'null') {
        userDetails['address'] = event.target.value;
    }
}

document.getElementById('inputCheckbox').onblur = event => {
    if (event.target.value.checked === false) {
        document.getElementById('spanCheckbox').innerHTML = '*required';
        //userDetails['Terms&conditions']="";
    }
    else {
        event.target.value.checked = true;

    }
};



// document.getElementById('signUp').onclick = event => {
//     console.log()
//     let objectValues = Object.values(userDetails);
//     let result =objectValues.(eachValue=>eachValue==="");


// }

document.getElementById('signUp').onclick = event => {
    // alert('Submitted the form');
    console.log(userDetails);
    let validSpan = document.getElementsByTagName('span');
    for (let i = 0; i < validSpan.length; i++) {
        //console.log(`${validSpan[i].id} ,${validSpan[i].value !== ""}`);
        if (validSpan[i].innerHTML !== "") {
            console.log(`${validSpan[i].id} ,${validSpan[i].id.value !== ""}`);
            document.getElementById(validSpan[i].id).innerHTML = "*fill this field";
            // console.log(`fill the ${validSpan[i].id}field`);
        }
        else {
            document.getElementById(validSpan[i].id).innerHTML = "";
        }
    }
}
