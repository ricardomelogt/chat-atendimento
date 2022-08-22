const rolarChat = ()=> {
  document.querySelector(".chat-roll").scrollTo(0, document.querySelector(".chat-roll").scrollHeight);
}

// Reset chat
const resetChat = ()=>{
    document.location.reload();
};

// Ativar-desativar chat
const toggleChat = ()=>{
    let chatWindow = document.querySelector('.chat-window.main-chat');
    let toggleBtn = document.querySelector('.chat-toggle');

    chatWindow.classList.toggle('chat-ativo');
    toggleBtn.classList.toggle('chat-ativo');
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
        <div>${mensagemRobo}</div>
      </div>
    </li>`;
    rolarChat();
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
        
        // SAUDE RECIFE : LISTA DE BOTÕES
        case resposta.indexOf('saúde') !== -1:
        case resposta.indexOf('saude') !== -1:
          console.log('direcionar para Saúde Recife');
          robotDialog(`
            <p>No <strong>Saúde Recife</strong> posso lhe ajudar em:</p>
            <div class="chat-btn" onclick="enviarMsg('Boleto')">Gerar boleto</div>
            <div class="chat-btn" onclick="enviarMsg('Situação de guia')">Situação de guia</div>
            <div class="chat-btn" onclick="enviarMsg('Cadastramento biométrico')">Cadastramento biométrico</div>
            <div class="chat-btn" onclick="enviarMsg('Cálculos Autuariais')">Cálculos Autuariais</div>
            <div class="chat-btn" onclick="enviarMsg('Cartilha sobre o COVID-19')">Cartilha sobre o Coronavirus</div>
            <div class="chat-btn" onclick="enviarMsg('Cartilha sobre Autismo')">Cartilha sobre Autismo</div>
            <div class="chat-btn" onclick="enviarMsg('Cobertura')">Cobertura</div>
            <div class="chat-btn" onclick="enviarMsg('Credenciamento Médico-Odontológico')">Credenciamento Médico-Odontológico</div>
            `);
          break;

        // SAUDE RECIFE > BOLETO
        case resposta.indexOf('boleto') !== -1:
          console.log('direcionar para boletos');
          robotDialog('direcionar para boletos');
          break;

        // SAUDE RECIFE > SITUAÇÃO DE GUIA
        case resposta.indexOf('guia') !== -1:
          console.log('direcionar para situação de guia');
          robotDialog('direcionar para situação de guia');
          break;

        // SAUDE RECIFE > AGENDAMENTO, RECADASTRAMENTO E CADASTRAMENTO BIOMETRICO
        case resposta.indexOf('biométrico') !== -1:
        case resposta.indexOf('biometrico') !== -1:
        case resposta.indexOf('biometria') !== -1:
          console.log('direcionar para cadastramento biométrico');
          window.location.href = "https://reciprev.recife.pe.gov.br/agendamento-recadastramento-e-cadastro-biometrico";
          break;

        // SAUDE RECIFE > CALCULOS AUTUARIAIS
        case resposta.indexOf('autuariais') !== -1:
        case resposta.indexOf('autuarial') !== -1:
          console.log('direcionar para cálculos autuariais');
          window.location.href = "https://reciprev.recife.pe.gov.br/calculos-atuariais-0";
          break;

        // SAUDE RECIFE > CARTILHA SOBRE O CORONAVIRUS
        case resposta.indexOf('coronavirus') !== -1:
        case resposta.indexOf('covid') !== -1:
          case resposta.indexOf('covid-19') !== -1:
          console.log('direcionar para cartilha sobre o coronavirus');
          window.location.href = "https://reciprev.recife.pe.gov.br/cartilha-coronavirus";
          break;

        // SAUDE RECIFE > CARTILHA SOBRE O AUTISMO
        case resposta.indexOf('autismo') !== -1:
          console.log('direcionar para cartilha sobre autismo');
          window.location.href = "https://reciprev.recife.pe.gov.br/cartilha-sobre-autismo";
          break;

        // SAUDE RECIFE > COBERTURA DO SAUDE RECIFE
        case resposta.indexOf('cobertura') !== -1:
          console.log('direcionar para cobertura');
          window.location.href = "https://reciprev.recife.pe.gov.br/rol-de-cobertura-do-saude-recife";
          break;

        // SAUDE RECIFE > COBERTURA DO SAUDE RECIFE
        case resposta.indexOf('credenciamento') !== -1:
          console.log('direcionar para credenciamento médico-odontológico');
          window.location.href = "https://reciprev.recife.pe.gov.br/credenciamento-medico-odontologico-saude-recife";
          break;

        // PREVIDENCIA
        case resposta.indexOf('previdência') !== -1:
        case resposta.indexOf('previdencia') !== -1:
          console.log('direcionar para Previdência');
          robotDialog(`<p>No <strong>Plano de Previdência</strong> posso lhe ajudar em:</p>
            <div class="chat-btn" onclick="enviarMsg('Calendário de pagamento')">Calendário de pagamento</div>
            <div class="chat-btn" onclick="enviarMsg('Situação de processo')">Situação de processo</div>`);
          break;

        // PREVIDENCIA > CALENDÁRIO DE PAGAMENTO
        case resposta.indexOf('calendário') !== -1:
        case resposta.indexOf('calendario') !== -1:
        case resposta.indexOf('pagamento') !== -1:
          console.log('direcionar para Calendário de pagamento');
          robotDialog(`<p>Direcionar para Calendário de pagamento</p>`);
          break;
        
        // PREVIDENCIA > SITUAÇÃO DE PROCESSO
        case resposta.indexOf('processo') !== -1:
        case resposta.indexOf('situação de processo') !== -1:
          console.log('direcionar para Situação de processo');
          robotDialog(`<p>Para verificar o status do processo, por favor informe o número do processo aqui: </p><span class='line-space'></span><input class='msg-input' type="number" placeholder='Digite aqui o número do processo...'/>
          <div class="chat-btn" onclick="robotDialog('Estou verificando o processo...')">Verificar processo</div>`);
          break;

        default:
          robotDialog(`Desculpe, não possuo respostas para: "${mensagemUser}"`);
          console.log(`Desculpe, não entendi a mensagem: ${mensagemUser}.`);
      }
      rolarChat();
};