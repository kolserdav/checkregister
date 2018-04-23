"use strict";

module.exports = c;

function CheckRegister() {}
let check = new CheckRegister();

/**
 * Require variables
 * Your elements
 * @type {Element}
 */
check.email = document.querySelector('#email');
check.emailError = document.querySelector('#emailError');
check.password1 = document.querySelector('#password1');
check.password1Error = document.querySelector('#password1Error');
check.password2 = document.querySelector('#password2');
check.password2Error = document.querySelector('#password2Error');
check.button = document.querySelector('#button');
check.buttonError = document.querySelector('#buttonError');
check.minPasswordLength = 6;
check.callbackSend = function(email, password1, password2){
    console.log(email);
    console.log(password1);
    console.log(password2);
};

/**
 * Optional variables
 * Your messages
 */
check.passwordLengthMessage = 'Custom length password message';
check.emailError.message = 'Custom error email message';
check.emailError.messageIfEmpty = 'Custom empty email message';
check.passwordErrorMessage = 'Custom error password message';
check.passwordErrorMessageIfEmpty = 'Custom empty password message';
check.passwordsUnmatchMessage = 'Custom passwords no match message';


function c(check)
{
    let pregEmail = /\w+@\w+\.\w+/,
        pregPass = /\w+/,
        minLength = check.minPasswordLength,
        defaultEmptyEmail = 'Please insert your email',
        defaultEmailError = 'Error email',
        defaultEmptyPassword = 'Please insert your password',
        defaultPasswordLengthError = 'Password must be a longer as '+minLength+' symbols',
        defaultUnmatchError = 'Passwords do not match',
        defaultPasswordError = 'Password invalid';
    buttonDisabled(true);
    checkEmail();
    checkPassword1();
    checkPassword2();
    checkSend(check.button);

    function checkSend(input) {
        document.addEventListener('DOMContentLoaded',function() {
            input.onclick=clickSend;
        },false);
    }
    function clickSend() {
        if (check.email.value === ''){
            check.buttonError.innerText = check.passwordErrorMessageIfEmpty || defaultEmptyEmail;
        }
        else if (!check.email.value.match(pregEmail)){
            check.buttonError.innerText = check.emailError.message || defaultEmailError
        }
        else if (check.password1.value === ''){
            check.buttonError.innerText = check.passwordErrorMessageIfEmpty || defaultEmptyPassword;
        }
        else if (!check.password1.value.match(pregPass)){
            check.buttonError.innerText = check.passwordErrorMessage || defaultPasswordError;
        }
        else if (check.password1.value.length <= check.minPasswordLength ){
            check.buttonError.innerText = check.passwordLengthMessage || defaultPasswordLengthError;
        }
        else {
            check.callbackSend(check.email.value, check.password1.value, check.password2.value);
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
        listener(input, error, pregEmail, message, messageIfEmpty);
        inputer(input);
    }

    function checkPassword1() {
        let input = check.password1,
            error = check.password1Error,
            message = check.passwordErrorMessage  || defaultPasswordError,
            messageIfEmpty = check.passwordErrorMessageIfEmpty  || defaultEmptyPassword;

        listener(input, error, pregPass, message, messageIfEmpty, 1);
        inputer(input);
    }

    function checkPassword2() {
        let input = check.password2,
            error = check.password2Error,
            message = check.passwordErrorMessage  || 'Password invalid',
            preg = /\w+/,
            messageIfEmpty = check.passwordErrorMessageIfEmpty  || defaultEmptyPassword;

        listener(input, error, preg, message, messageIfEmpty, 2);
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
                if (check.password1Error.innerText === '') {
                    if (check.password1.value === check.password2.value) {
                        if (check.password1.value !== '' && check.password2.value !== '') {
                            buttonDisabled(false);
                            check.buttonError.innerText = '';
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
            else {
                buttonDisabled(true);
            }
        }
    }

    function listener(input, error, preg, message, messageIfEmpty, index = 0) {
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
                    if (length <= minLength)
                    {
                        prg = /3443ubercase212/;
                        msg = check.passwordLengthMessage || defaultPasswordLengthError;
                    }
                    else {
                        prg = preg;
                        msg = message;
                    }
                }
                if (index === 2){
                    if (check.password1.value !== check.password2.value)
                    {
                        prg = /3443ubercase212/;
                        msg = check.passwordsUnmatchMessage || defaultUnmatchError;
                    }
                    else {
                        prg = preg;
                        msg = message;
                    }
                }
                changer(input, error, prg, msg);
            }
        }
    }

    function changer(input, error, preg, message)
    {
        if (input.value.match(preg)) {
            error.innerText = '';
        }
        else {
            error.innerText = message;
        }
    }
}