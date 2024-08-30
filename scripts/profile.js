let isPasswordHidden = true;
const passwordField = document.getElementById("field-password");
const usernameField = document.getElementById("field-username");
const passwordVisibilityButton = document.getElementById("password-visibility-btn");

function TogglePasswordVisibility()
{
    isPasswordHidden ? ShowPassword() : HidePassword();
}

function HidePassword()
{
    isPasswordHidden = true;
    passwordField.innerHTML = "••••••••";
    document.getElementById("password-visibility-btn").innerHTML = "👁️";
}

function ShowPassword()
{
    isPasswordHidden = false;
    passwordField.innerHTML = localStorage.getItem("password");
    passwordVisibilityButton.innerHTML = "🙈";
}

usernameField.innerHTML = localStorage.getItem("name");
HidePassword();