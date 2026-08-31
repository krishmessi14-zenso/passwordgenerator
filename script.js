const password = document.getElementById("password");
const length = document.getElementById("length");
const lengthValue = document.getElementById("lengthValue");

const uppercase = document.getElementById("uppercase");
const numbers = document.getElementById("numbers");
const symbols = document.getElementById("symbols");

length.addEventListener("input", function () {
    lengthValue.textContent = length.value;
});

function generatePassword() {

    let characters = "abcdefghijklmnopqrstuvwxyz";

    if (uppercase.checked) {
        characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }

    if (numbers.checked) {
        characters += "0123456789";
    }

    if (symbols.checked) {
        characters += "!@#$%^&*";
    }

    let result = "";

    for (let i = 0; i < length.value; i++) {
        let index = Math.floor(Math.random() * characters.length);
        result += characters[index];
    }

    password.value = result;
}

function copyPassword() {

    if (password.value === "") {
        alert("Generate a password first!");
        return;
    }

    navigator.clipboard.writeText(password.value);

    alert("Password copied!");
}