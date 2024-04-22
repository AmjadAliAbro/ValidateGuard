var nameError = document.getElementById('name-error');
var phoneError = document.getElementById('phone-error');
var emailError = document.getElementById("email-error");
var msgError = document.getElementById('message-error');
var submitError = document.getElementById("submit-error");

function validateName(){
    var name = document.getElementById('contact-name').value;
    if(name.length == 0){
        nameError.innerHTML = "Name is required";
        return false;
    }
    if(!name.match(/^[a-zA-Z]*\s{1}[a-zA-Z]*$/)){
        nameError.innerHTML = "Name is invalid";
        return false;
    }
    nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validatePhone(){
    var phone = document.getElementById("contact-phone").value;
    if(phone.length == 0){
        phoneError.innerHTML = "Phone is required";
        return false;
    }
    if(phone.length !== 10) {
        phoneError.innerHTML = "Phone should be 10 digit";
        return false;
    }
    if(!phone.match(/^[0-9]{10}$/)){
        phoneError.innerHTML = "Only digits!";
        return false;
    }

    phoneError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateEmail(){
    var email = document.getElementById("contact-email").value;
    if(email.length == 0){
        emailError.innerHTML = "Email is required";
        return false;
    }
    if(!email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)){
        emailError.innerHTML = "Email is invalid";
        return false;
    }
    emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateMessage(){
    var message = document.getElementById("contact-message").value;
    if(message.length == 0){
        msgError.innerHTML = "Message is required";
        return false;
    }
    msgError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateForm(){
    if(validateName() && validatePhone() && validateEmail() && validateMessage()){
        return true;
    }
    return false;
}