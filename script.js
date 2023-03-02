var itens_menu = document.getElementById ('menu-mobile')

function menumobile(){
    if (itens_menu.style.display == 'none') {
    itens_menu.style.display = 'block'
    }
    else{
    itens_menu.style.display = 'none'
    }
}

// Seleciona o elemento da mensagem de cookie
const cookieMessage = document.getElementById('cookie-message')

// Seleciona o botão de aceitação de cookies
const acceptCookiesButton = document.querySelector("#accept-cookies");

// Define a função que exibe a mensagem de cookie
function exibirMensagemCookie() {
  cookieMessage.style.display = "flex";
}

// Define a função que esconde a mensagem de cookie quando o usuário clica no botão "Aceitar"
function aceitarCookies() {
  cookieMessage.style.display = "none";
  localStorage.setItem("cookiesAceitos", "true");
}

// Verifica se o usuário já aceitou os cookies antes
if (localStorage.getItem("cookiesAceitos") !== "true") {
  // Se não tiver aceitado, exibe a mensagem de cookie
  exibirMensagemCookie();

  // Configura o evento de clique do botão "Aceitar"
  acceptCookiesButton.addEventListener("click", aceitarCookies);
}