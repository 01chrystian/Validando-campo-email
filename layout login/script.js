
var erro_email = document.querySelector(".erro-email");
var button = document.querySelector("#button");
var email = document.querySelector("#email");
var password = document.querySelector("#password");

button.addEventListener('click', (event) => {
    event.preventDefault();

    const emailValue = email.value;
    const passwordValue = password.value;

    const paragrafoSpanEmailPass = document.createElement("p");
    paragrafoSpanEmailPass.textContent = "Digite seu email e senha!";

    const paragrafoSpanEmail = document.createElement("p");
    paragrafoSpanEmail.textContent = "Digite seu email!";

    const paragrafoSpanPass = document.createElement("p");
    paragrafoSpanPass.textContent = "Digite sua senha!";

    const searchArroba = document.createElement("p");
    searchArroba.textContent = "Digite o @!";

    const searchPonto = document.createElement("p");
    searchPonto.textContent = "Digite o '.com'";

    const changeAP = document.createElement("p");
    changeAP.textContent = "Digite na ordem '@gmail.' !";

    const gmail = document.createElement("p");
    gmail.textContent = "Digite o gmail!";

    const position = document.createElement("p");
    position.textContent = "Digite 'gmail.com'";

    if (emailValue.length == 0 && passwordValue.length == 0) {

        erro_email.style.display = "block";
        erro_email.classList.remove("hide");

        erro_email.innerHTML = "</br>" + paragrafoSpanEmailPass.textContent;
        email.focus();
    } else if (emailValue.length == 0 && passwordValue.length != 0) {

        erro_email.style.display = "block";
        erro_email.classList.remove("hide");

        erro_email.innerHTML = "</br>" + paragrafoSpanEmail.textContent;
        email.focus();
    } else if (passwordValue.length == 0 && emailValue.length != 0) {

        erro_email.style.display = "block";
        erro_email.classList.remove("hide");

        erro_email.innerHTML = "</br>" + paragrafoSpanPass.textContent;
        password.focus();

    } else if (
        emailValue.indexOf("@") == -1 // não foi digitado
    ) {
        erro_email.style.display = "block";
        erro_email.classList.remove("hide");

        erro_email.innerHTML = "</br>" + searchArroba.textContent;
        email.focus();
    } else if (
        emailValue.indexOf("gmail") - emailValue.indexOf("@") < 1 // verificando se digitaram gmail
    ) {
        erro_email.style.display = "block";
        erro_email.classList.remove("hide");

        erro_email.innerHTML = "</br>" + gmail.textContent;
        email.focus();
    } else if (emailValue.indexOf(".") == -1 // não foi digitado
    ) {
        erro_email.style.display = "block";
        erro_email.classList.remove("hide");

        erro_email.innerHTML = "</br>" + searchPonto.textContent;
        email.focus();
    } else if (
        emailValue.indexOf(".") < emailValue.indexOf("@")  // informando a ordem
    ) {
        erro_email.style.display = "block";
        erro_email.classList.remove("hide");

        erro_email.innerHTML = "</br>" + changeAP.textContent;
        email.focus();
    } else if (
        emailValue.indexOf(".") - emailValue.indexOf("@") == 1 // o '.' vai na frente do '@'
    ) {
        erro_email.style.display = "block";
        erro_email.classList.remove("hide");

        erro_email.innerHTML = "</br>" + position.textContent;
        email.focus();
    }

    setTimeout(() => {
        email.style.border = "none";
        erro_email.classList.add("hide");
    }, 3000);
})



