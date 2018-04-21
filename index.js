"use strict";

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


function c()
{
    checkEmail();
    checkPassword1();
    checkPassword2();

    function checkEmail() {
      let input = check.email,
          error = check.emailError,
          message = check.emailError.message  || 'Error email',
          preg = /\w+@\w+\.\w+/,
          messageIfEmpty = check.emailError.messageIfEmpty  || 'Please insert your email';
      listener(input, error, preg, message, messageIfEmpty);
    }

    function checkPassword1() {
        let input = check.password1,
            error = check.password1Error,
            message = check.passwordErrorMessage  || 'Password invalid',
            preg = /\w+/,
            messageIfEmpty = check.passwordErrorMessageIfEmpty  || 'Please insert your password';

        listener(input, error, preg, message, messageIfEmpty, 1);
    }

    function checkPassword2() {
        let input = check.password2,
            error = check.password2Error,
            message = check.passwordErrorMessage  || 'Password invalid',
            preg = /\w+/,
            messageIfEmpty = check.passwordErrorMessageIfEmpty  || 'Please insert your password';

        listener(input, error, preg, message, messageIfEmpty, 2);
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
                    let length = event.target.value.length,
                        minLength = check.minPasswordLength;
                    if (length <= minLength)
                    {
                        prg = /3443ubercase212/;
                        msg = check.passwordLengthMessage || 'Password must be a longer as '+minLength+' symbols';
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
                        msg = check.passwordsUnmatchMessage || 'Passwords do not match';
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