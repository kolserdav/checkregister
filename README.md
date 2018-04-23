_Check registration form module_

_Installation_

~$`npm i check-form-reg`

_Using_

EXAMPLE HTML:
```html
<form>
    <label for="email">Email</label><br>
    <div id="emailError"></div>
    <input id="email" type="email" title="input email" autocomplete="email">
    <br>
    <label for="password">Password</label><br>
    <div id="passwordError"></div>
    <input id="password" type="password" title="input password" autocomplete="new-password">
    <br>
    <label for="password2">Repeat password</label><br>
    <div id="password2Error"></div>
    <input id="password2" type="password" title="repeat password" autocomplete="new-password">
    <br><br>
    <div id="buttonError"></div>
    <button id="button" type="button" title="send">Send</button>
</form>
```

SETTINGS JS:
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
check.password = document.querySelector('#password1');
check.passwordError = document.querySelector('#password1Error');
check.password2 = document.querySelector('#password2');
check.password2Error = document.querySelector('#password2Error');
check.button = document.querySelector('#button');
check.buttonError = document.querySelector('#buttonError');
check.minPasswordLength = 6;
check.callbackSend = function(email, password, password2){
    console.log(email);
    console.log(password);
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
