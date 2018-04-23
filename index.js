"use strict";

//module.exports = c;

function CheckRegister() {}
let check = new CheckRegister();

/**
 * Require variables
 * Your elements
 * @type {Element}
 */
    //For login
check.email = document.querySelector('#email');
check.emailError = document.querySelector('#emailError');
check.password = document.querySelector('#password');
check.passwordError = document.querySelector('#passwordError');
check.button = document.querySelector('#button');
check.buttonError = document.querySelector('#buttonError');
check.minPasswordLength = 6;
check.callbackSend = function(email, password1, password2){ //For example
    console.log(email);
    console.log(password1);
    console.log(password2);
};
    //For register
check.password2 = document.querySelector('#password2');
check.password2Error = document.querySelector('#password2Error');

/**
 * Optional variables
 * Your messages
 */
check.checkbox = document.querySelector('#checkbox');
check.checkboxError = document.querySelector('#checkboxError');
check.checkboxMessage = "Custom checkbox is required message";
check.passwordLengthMessage = 'Custom length password message';
check.emailError.message = 'Custom error email message';
check.emailError.messageIfEmpty = 'Custom empty email message';
check.passwordErrorMessage = 'Custom error password message';
check.passwordErrorMessageIfEmpty = 'Custom empty password message';
check.passwordsUnmatchMessage = 'Custom passwords no match message';
check.colorErrorMesages = "red";


function c()
{
    let password2 = null,
        emailErrorOld = check.emailError.innerText,
        passwordErrorOld = check.passwordError.innerText,
        passwordColorOld = check.passwordError.style.color,
        buttonErrorOld = check.buttonError.innerText,
        checkbox = null,
        pregEmail = /\w+@\w+\.\w+/,
        pregPass = /\w+/,
        minLength = check.minPasswordLength,
        password2ErrorOld = '',
        defaultEmptyEmail = 'Please insert your email',
        defaultEmailError = 'Unacceptable email',
        defaultCheckboxMess = 'Checkbox is required',
        defaultEmptyPassword = 'Please insert your password',
        defaultPasswordLengthError = 'The password must not be shorter than '+minLength+' symbols',
        defaultUnmatchError = 'Passwords do not match',
        defaultPasswordError = 'Unacceptable password',
        defaultColorErrorMess = "brown";
    try {
        password2ErrorOld = check.password2Error.innerText;
    }
    catch (err){}
    try {
        password2 = check.password2;
    }
    catch(err){}
    try {
        checkbox = check.checkbox;
    }
    catch(err){}

    buttonDisabled(true);
    checkEmail();
    checkPassword1();
    if (password2 !== null) {
        checkPassword2();
    }
    checkSend(check.button);

    function checkSend(input)
    {
        document.addEventListener('click',function() {
            if (check.password2) {
                input.onclick = clickSend;
            }
            else {
                input.onclick = click;
            }
        },false);
    }
    function click() {
        check.callbackSend(check.email.value, check.password.value);
    }
    function clickSend() {
        check.buttonError.style.color = check.colorErrorMesages || defaultColorErrorMess;
        if (check.email.value === emailErrorOld){
            check.buttonError.innerText = check.passwordErrorMessageIfEmpty || defaultEmptyEmail;
        }
        else if (!check.email.value.match(pregEmail)){
            check.buttonError.innerText = check.emailError.message || defaultEmailError
        }
        else if (check.password.value === passwordErrorOld){
            check.buttonError.innerText = check.passwordErrorMessageIfEmpty || defaultEmptyPassword;
        }
        else if (!check.password.value.match(pregPass)){
            check.buttonError.innerText = check.passwordErrorMessage || defaultPasswordError;
        }
        else if (check.password.value.length < check.minPasswordLength ){
            check.buttonError.innerText = check.passwordLengthMessage || defaultPasswordLengthError;
        }
        else {
            if (check.checkbox !== null){
                if (checkbox.checked === false){
                    check.buttonError.innerText = check.checkboxMessage || defaultCheckboxMess;
                }
                else {
                    check.buttonError.innerText = buttonErrorOld;
                    check.callbackSend(check.email.value, check.password.value, check.password2.value);
                }
            }
            else {
                check.buttonError.innerText = buttonErrorOld;
                check.callbackSend(check.email.value, check.password.value, check.password2.value);
            }
        }
    }
    function buttonDisabled(bool) {
        if (bool){
            check.button.setAttribute('disabled', 'disabled');
        }
        else {
            check.button.removeAttribute("disabled");
        }
    }
    function checkEmail()
    {
      let input = check.email,
          error = check.emailError,
          message = check.emailError.message  || defaultEmailError,
          messageIfEmpty = check.emailError.messageIfEmpty  || defaultEmptyEmail;
        listener(input, error, pregEmail, message, messageIfEmpty, emailErrorOld);
        inputer(input);
    }

    function checkPassword1() {
        let input = check.password,
            error = check.passwordError,
            message = check.passwordErrorMessage  || defaultPasswordError,
            messageIfEmpty = check.passwordErrorMessageIfEmpty  || defaultEmptyPassword;

        listener(input, error, pregPass, message, messageIfEmpty, passwordErrorOld, 1);
        inputer(input);
    }

    function checkPassword2() {
        let input = check.password2,
            error = check.password2Error,
            message = check.passwordErrorMessage  || defaultPasswordError,
            preg = /\w+/,
            messageIfEmpty = check.passwordErrorMessageIfEmpty  || defaultEmptyPassword;

        listener(input, error, preg, message, messageIfEmpty, password2ErrorOld, 2);
        inputer(input);
    }
    function inputer(input)
    {
        document.addEventListener('DOMContentLoaded',function() {
            input.oninput=changeEventInput;
        },false);
    }
    function changeEventInput(event)
    {
        if (!event.target.value){
        }
        else {
            if (check.email.value.match(pregEmail)) {
                if (check.passwordError.innerText === passwordErrorOld) {
                    if (check.password.value.length >= check.minPasswordLength) {
                        if (check.password2 !== null) {
                            if (check.password.value === check.password2.value) {
                                buttonDisabled(false);
                                check.buttonError.innerText = buttonErrorOld;
                            }
                            else {
                                buttonDisabled(true);
                            }
                        }
                        else {
                                buttonDisabled(false);
                                check.buttonError.innerText = buttonErrorOld;
                            }
                    }
                    else {
                        buttonDisabled(true);
                    }
                }
                else {
                    buttonDisabled(true);
                }
            }
            else {
                buttonDisabled(true);
            }
        }
    }

    function listener(input, error, preg, message, messageIfEmpty, old, index = 0) {
        document.addEventListener('DOMContentLoaded',function() {
            input.onchange=changeEventHandler;
        },false);

        function changeEventHandler(event)
        {
            let prg = preg,
                msg = message;
            if (!event.target.value) {
                error.innerText = messageIfEmpty;
            }
            else {
                if (index === 1){
                    let length = event.target.value.length;
                    if (length < minLength)
                    {
                        prg = /ubercasenomutchchalenge/;
                        msg = check.passwordLengthMessage || defaultPasswordLengthError;
                    }
                    else {
                        prg = preg;
                        msg = message;
                    }
                }
                if (index === 2){
                    if (check.password.value !== check.password2.value)
                    {
                        prg = /ubercasenomutchchalenge/;
                        msg = check.passwordsUnmatchMessage || defaultUnmatchError;
                    }
                    else {
                        prg = preg;
                        msg = message;
                    }
                }
                changer(input, error, prg, msg, old);
            }
        }
    }

    function changer(input, error, preg, message, old)
    {
        if (input.value.match(preg)) {
            error.innerText = old;
            error.style.color = passwordColorOld;
        }
        else {
            error.innerText = message;
            error.style.color = check.colorErrorMesages || defaultColorErrorMess;
        }
    }
}