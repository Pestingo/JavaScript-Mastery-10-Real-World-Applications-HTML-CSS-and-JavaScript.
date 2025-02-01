const password = document.getElementById("password");
const message = document.getElementById("message");
const strength = document.getElementById("strength");
const submitButton = document.querySelector("button");

password.addEventListener("input",function(){

    const passwordValue = password.value;
    const passwordLength = passwordValue.length;

    let strengthValue = '';

    if(password ===0){
        strengthValue = '';
    }else if(passwordLength<6){
        strengthValue = 'Weak'
    }else if(passwordLength<10){
        strengthValue = 'Medium'
    }else {
        strengthValue = 'Strong'
    }

    strength.textContent = strengthValue;
    message.style.display = "block"         // Display the Message

});


submitButton.addEventListener("click",function(){

    const passwordType = password.getAttribute('type');

    if(passwordType === 'password'){
        password.setAttribute('type','text')
    }else{
        password.setAttribute('type','password')
    }

});