const REQUIRED = 'REQUIRED';
const MIN_LENGTH = 'MIN_LENGTH';

function validate(val, flag, validatorVal) {
    if (flag === REQUIRED) {
        return val.trim().length > 0;
    }
    if (flag === MIN_LENGTH) {
        return val.trim().length > validatorVal;
    }
}

function getUserInput(inputElementId) {
    return document.getElementById(inputElementId).value;
}

function createUser(userName, userPassword) {
    if(!validate(userName, REQUIRED) || !validate(userPassword, MIN_LENGTH, 5)) {
        throw new Error('Ivalid input - username or password is wrong (password should be at least six chars)');
    }
    return {
        userName: userName,
        password: userPassword
    }
}

function greetUser(user) {
    console.log(`Hi, I am ${user.userName}`);
}

function signupHandler(e) {
    e.preventDefault();

    const enteredUsername = getUserInput('username');
    const enteredPassword = getUserInput('password');

    try {
        const newUser = createUser(enteredUsername, enteredPassword);
        greetUser(newUser);
    } catch(err) {
        alert(err.message);
    }
}

function connectForm(formId, formSubmitHandler) {
    const form = document.getElementById(formId);
    form.addEventListener('submit', formSubmitHandler);
}

connectForm('user-input', signupHandler);