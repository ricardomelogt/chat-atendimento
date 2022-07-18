var userCommand;

// Reset chat
const resetChat = ()=>{
    document.location.reload();
};

// Ativar-desativar chat
const toggleChat = ()=>{
    document.querySelector('.chat-window.main-chat').classList.toggle('chat-ativo');
    document.querySelector('.chat-toggle').classList.toggle('chat-ativo');
};

// Ler valor do input[text] e inserir no chat
const enviarMsg = (customMsg)=>{
    let userInput = document.querySelector('.chat-input');
    let mensagemUser = document.querySelector('.chat-input').value;
    let chatList = document.querySelector('.msg-list');

    if (mensagemUser.length > 0 && customMsg == null) {
     chatList.innerHTML += 
     `<li class='chat-msg user-msg'>
      <i class="bi bi-person icon-user" aria-label="Ícone usuário"></i>
      <div class='msg-content'>
        <p>${mensagemUser}</p>
      </div>
    </li>`;
    robotReact(mensagemUser);
    userInput.value = '';
    }
    if (customMsg != null) {
      chatList.innerHTML += 
     `<li class='chat-msg user-msg'>
      <i class="bi bi-person icon-user" aria-label="Ícone usuário"></i>
      <div class='msg-content'>
        <p>${customMsg}</p>
      </div>
    </li>`;
    robotReact(customMsg);
    }
}

const robotDialog = (mensagemRobo)=> {
    let chatList = document.querySelector('.msg-list');
    chatList.innerHTML += 
     `<li class='chat-msg bot-msg'>
      <i class="bi bi-robot icon-bot" aria-label="Ícone chat-bot"></i>
      <div class='msg-content'>
        <p>${mensagemRobo}</p>
      </div>
    </li>`;
}

// Enviar mensagem com 'Enter'
document.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      enviarMsg();
    }
});

// Reação do robô ao receber mensagem do usuário
const robotReact = (mensagemUser) => {
    console.log('resposta para: '+ mensagemUser);
    let resposta = mensagemUser.toLowerCase();
    switch (true) {
        // BOLETO
        case resposta.indexOf('boleto') !== -1:
          console.log('direcionar para boletos');
          robotDialog('direcionar para boletos');
          break;

        // SAUDE RECIFE
        case (resposta.indexOf('saúde') !== -1 || resposta.indexOf('saude') !== -1):
          console.log('direcionar para Saúde Recife');
          robotDialog('direcionar para Saúde Recife');
          break;

        // PREVIDENCIA
        case (resposta.indexOf('previdência') !== -1 || resposta.indexOf('previdencia') !== -1):
          console.log('direcionar para Previdência');
          robotDialog('direcionar para Previdência');
          break;

        case 'mangoes':
        case 'papayas':
          console.log('Mangoes and papayas are $2.79 a pound.');
          // expected output: "Mangoes and papayas are $2.79 a pound."
          break;
        default:
          robotDialog(`Desculpe, não possuo respostas para: "${mensagemUser}"`);
          console.log(`Desculpe, não entendi a mensagem: ${mensagemUser}.`);
      }
      document.querySelector(".chat-roll").scrollTo(0, document.querySelector(".chat-roll").scrollHeight);
};