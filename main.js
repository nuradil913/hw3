function login() {
    let correctPassword = "12345";
    let enteredPassword = document.getElementById("password").value;
    let errorMessage = document.getElementById("error-message");

    if (enteredPassword === correctPassword) {
        window.location.href = "welcome.html";
    } else {
        errorMessage.textContent = "Неверный пароль. Попробуйте снова.";
    }
}