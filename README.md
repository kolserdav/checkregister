_Check registration form module_

_Installation_

~$`npm i check-form-reg`

_Using_

SETTINGS:
```javascript
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
/**
* include and call
*/
let form = require('check-form-reg');
form(check);
```
