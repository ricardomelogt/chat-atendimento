const rolarChat = ()=> {
  document.querySelector(".chat-roll").scrollTo(0, document.querySelector(".chat-roll").scrollHeight);
}

// Reset chat
const resetChat = ()=>{
  document.querySelector('.msg-list').innerHTML = 
  `
  <li class="chat-msg bot-msg">
    <i class="bi bi-robot icon-bot" aria-label="Ícone chat-bot"></i>
    <div class="msg-content">
      <p>Olá! Seja bem vindo(a) ao chat atendimento Saúde Recife.</p>
      <p>
        Os serviços abaixo estão disponíveis. Em qual eu posso ajudar?
      </p>
      <div class="chat-btn" onclick="enviarMsg('Saúde Recife')">Saúde Recife</div>
      <div class="chat-btn" onclick="enviarMsg('Previdência')">Previdência</div>
    </div>
  </li>
  `;
  ativarInput();
};

// Ativar-desativar janela do chat
const toggleChat = ()=>{
    let chatWindow = document.querySelector('.chat-window.main-chat');
    let toggleBtn = document.querySelector('.chat-toggle');

    chatWindow.classList.toggle('chat-ativo');
    toggleBtn.classList.toggle('chat-ativo');
};

// Ativar-desativar entrada de texto no chat
const ativarInput = ()=>{
  document.querySelector('.chat-input').disabled = false;
};

const desativarInput = ()=>{
  document.querySelector('.chat-input').disabled = true;
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
    let newURL;
    switch (true) {
        
        // PALAVRAS-CHAVE IGNORADAS
        case resposta.indexOf('sim, leve-me até lá!') !== -1:
        case resposta.indexOf('não, desejo outra coisa.') !== -1:
          break;

        // SAUDE RECIFE : LISTA DE BOTÕES
        case resposta.indexOf('saúde') !== -1:
        case resposta.indexOf('saude') !== -1:
          console.log('direcionar para Saúde Recife');
          robotDialog(`
            <p>No <strong>Saúde Recife</strong> posso lhe ajudar em:</p>
            <div class="chat-btn" onclick="enviarMsg('Boleto')">Gerar boleto</div>
            <div class="chat-btn" onclick="enviarMsg('Situação de guia')">Situação de guia</div>
            <div class="chat-btn" onclick="enviarMsg('Normatizações')">Normatizações</div>
            <div class="chat-btn" onclick="enviarMsg('Portal do beneficiário')">Portal do beneficiário</div>
            <div class="chat-btn" onclick="enviarMsg('Rede médica credenciada')">Rede médica credenciada</div>
            `);
          break;

        // SAUDE RECIFE > BOLETO
        case resposta.indexOf('boleto') !== -1:
        case resposta.indexOf('boletos') !== -1:

          desativarInput();
          robotDialog(`<p>Para ter acesso, por favor informe seu CPF: </p><span class='line-space'></span><input class='msg-input' type="number" placeholder='Digite seu CPF...'/>
          <div class="chat-btn" onclick="robotDialog('Verificando dados...');ativarInput();">Enviar</div>`);
          break;

        // SAUDE RECIFE > SITUAÇÃO DE GUIA
        case resposta.indexOf('guia') !== -1:
          
          desativarInput();
          robotDialog(`<p>Para ter acesso, por favor informe seu CPF: </p><span class='line-space'></span><input class='msg-input' type="number" placeholder='Digite seu CPF...'/>
          <div class="chat-btn" onclick="robotDialog('Verificando dados...');ativarInput();">Enviar</div>`);
          break;

        // SAUDE RECIFE > NORMATIZAÇÕES
        case resposta.indexOf('normatizações') !== -1:
        case resposta.indexOf('normatizacoes') !== -1:
        case resposta.indexOf('normatizaçoes') !== -1:
        case resposta.indexOf('norma') !== -1:
        case resposta.indexOf('normas') !== -1:
        case resposta.indexOf('regulamento') !== -1:
        case resposta.indexOf('regulamentos') !== -1:
        case resposta.indexOf('leis') !== -1:
        case resposta.indexOf('lei') !== -1:
        case resposta.indexOf('legislação') !== -1:
        case resposta.indexOf('legislacao') !== -1:

          newURL = "https://reciprev.recife.pe.gov.br/normatizacoes";
          desativarInput();
          robotDialog(`
          <p>Deseja ser direcionado para a seção <strong>${mensagemUser}</strong>?</p>
          <div class="chat-btn" onclick="enviarMsg('Sim, leve-me até lá!');window.location.href = '${newURL}';">Sim, leve-me até lá!</div>
          <div class="chat-btn" onclick="ativarInput();enviarMsg('Não, desejo outra coisa.')">Não, desejo outra coisa.</div>
          `);
          break;
        
        // SAUDE RECIFE > PORTAL DO BENEFICIÁRIO
        case resposta.indexOf('portal do beneficiário') !== -1:
        case resposta.indexOf('portal') !== -1:
        case resposta.indexOf('beneficiario') !== -1:

          newURL = "http://www.recife.pe.gov.br/sauderecife";
          desativarInput();
          robotDialog(`
          <p>Deseja ser direcionado para a seção <strong>${mensagemUser}</strong>?</p>
          <div class="chat-btn" onclick="enviarMsg('Sim, leve-me até lá!');window.location.href = '${newURL}';">Sim, leve-me até lá!</div>
          <div class="chat-btn" onclick="ativarInput();enviarMsg('Não, desejo outra coisa.')">Não, desejo outra coisa.</div>
          `);
          break;
        
        // SAUDE RECIFE > REDE MÉDICA CREDENCIADA
        case resposta.indexOf('rede medica credenciada') !== -1:
        case resposta.indexOf('rede médica credenciada') !== -1:
        case resposta.indexOf('rede credenciada') !== -1:
        case resposta.indexOf('credenciado') !== -1:
        case resposta.indexOf('credenciados') !== -1:

          newURL = "https://reciprev.recife.pe.gov.br/manual-da-rede-credenciada";
          desativarInput();
          robotDialog(`
          <p>Deseja ser direcionado para a seção <strong>${mensagemUser}</strong>?</p>
          <div class="chat-btn" onclick="enviarMsg('Sim, leve-me até lá!');window.location.href = '${newURL}';">Sim, leve-me até lá!</div>
          <div class="chat-btn" onclick="ativarInput();enviarMsg('Não, desejo outra coisa.')">Não, desejo outra coisa.</div>
          `);
          break;


        // PREVIDENCIA
        case resposta.indexOf('reciprev') !== -1:
        case resposta.indexOf('reciprev') !== -1:
        case resposta.indexOf('previdência') !== -1:
        case resposta.indexOf('previdencia') !== -1:
          robotDialog(`<p>No <strong>Plano de Previdência</strong> posso lhe ajudar em:</p>
            <div class="chat-btn" onclick="enviarMsg('Calendário de pagamento')">Calendário de pagamento</div>
            <div class="chat-btn" onclick="enviarMsg('Acompanhamento de processos')">Acompanhamento de processos</div>
            <div class="chat-btn" onclick="enviarMsg('Aposentadoria')">Aposentadoria</div>
            <div class="chat-btn" onclick="enviarMsg('Concessão de pensão')">Concessão de pensão</div>
            <div class="chat-btn" onclick="enviarMsg('Extrato previdenciário')">Extrato previdenciário</div>
            <div class="chat-btn" onclick="enviarMsg('Prova de anual de vida')">Prova anual de vida</div>
            <div class="chat-btn" onclick="enviarMsg('Restos deixados')">Restos deixados</div>
            <div class="chat-btn" onclick="enviarMsg('Serviços')">Reciprev serviços</div>
            `);
          break;
        
        // PREVIDENCIA > ACOMPANHAMENTO DE PROCESSO
        case resposta.indexOf('processo') !== -1:
        case resposta.indexOf('processos') !== -1:
        case resposta.indexOf('acompanhamento de processos') !== -1:

          newURL = "https://recifeemdia.recife.pe.gov.br/acompanhamentoProcesso/";
          desativarInput();
          robotDialog(`
          <p>Deseja ser direcionado para a seção <strong>${mensagemUser}</strong>?</p>
          <div class="chat-btn" onclick="enviarMsg('Sim, leve-me até lá!');window.location.href = '${newURL}';">Sim, leve-me até lá!</div>
          <div class="chat-btn" onclick="ativarInput();enviarMsg('Não, desejo outra coisa.')">Não, desejo outra coisa.</div>
          `);
          break;
        
        // PREVIDENCIA > APOSENTADORIA
        case resposta.indexOf('aposentadoria') !== -1:
        case resposta.indexOf('aposentado') !== -1:
        case resposta.indexOf('aposentada') !== -1:

          newURL = "https://reciprev.recife.pe.gov.br/aposentadoria";
          desativarInput();
          robotDialog(`
          <p>Deseja ser direcionado para a seção <strong>${mensagemUser}</strong>?</p>
          <div class="chat-btn" onclick="enviarMsg('Sim, leve-me até lá!');window.location.href = '${newURL}';">Sim, leve-me até lá!</div>
          <div class="chat-btn" onclick="ativarInput();enviarMsg('Não, desejo outra coisa.')">Não, desejo outra coisa.</div>
          `);
          break;

        // PREVIDENCIA > AUXILIO FUNERAL
        case resposta.indexOf('funeral') !== -1:
        case resposta.indexOf('auxilio') !== -1:
        case resposta.indexOf('auxílio') !== -1:
          window.location.href = "https://reciprev.recife.pe.gov.br/auxilio-funeral";
          break;

        // PREVIDENCIA > CADPREV/DIPR
        case resposta.indexOf('cadprev') !== -1:
        case resposta.indexOf('dipr') !== -1:
        case resposta.indexOf('cadprev/dipr') !== -1:
          window.location.href = "https://reciprev.recife.pe.gov.br/cadprevdipr";
          break;
        
        // PREVIDENCIA > CONCESSÃO DE PENSÃO
        case resposta.indexOf('pensão') !== -1:

          newURL = "https://reciprev.recife.pe.gov.br/concessao-de-pensao";
          desativarInput();
          robotDialog(`
          <p>Deseja ser direcionado para a seção <strong>${mensagemUser}</strong>?</p>
          <div class="chat-btn" onclick="enviarMsg('Sim, leve-me até lá!');window.location.href = '${newURL}';">Sim, leve-me até lá!</div>
          <div class="chat-btn" onclick="ativarInput();enviarMsg('Não, desejo outra coisa.')">Não, desejo outra coisa.</div>
          `);
          break;
        
        // PREVIDENCIA > CERTIFICADO DE REGULARIDADE PREVIDENCIÁRIA - CRP 
        case resposta.indexOf('certificado') !== -1:
        case resposta.indexOf('regularidade') !== -1:
        case resposta.indexOf('crp') !== -1:
          window.location.href = "https://reciprev.recife.pe.gov.br/certificado-de-regularidade-previdenciaria-crp";
          break;

        // PREVIDENCIA > ESTUDO DE ADERÊNCIA
        case resposta.indexOf('estudo') !== -1:
        case resposta.indexOf('aderencia') !== -1:
        case resposta.indexOf('aderência') !== -1:
          window.location.href = "https://reciprev.recife.pe.gov.br/sites/default/files/inline-files/Relat%C3%B3rio_Pro_Gest%C3%A3o_RECIFE%28PE%29_2019_Nivel_I_II_III.pdf";
          break;

        // PREVIDENCIA > EXTRATO PREVIDENCIÁRIO
        case resposta.indexOf('extrato') !== -1:
        case resposta.indexOf('contribuições') !== -1:
        case resposta.indexOf('previdenciarias') !== -1:
        case resposta.indexOf('previdenciárias') !== -1:

          newURL = "https://login.recife.pe.gov.br/auth/realms/recife/protocol/openid-connect/auth?response_type=code&redirect_uri=https%3A%2F%2Fportaldoservidor.recife.pe.gov.br%2Flogin_check&client_id=pose&nonce=5890f8c4be350d734ea452d5c792dc29&state=602b7cdc6e952a4d09872d2a45d74dbb&scope=openid";
          desativarInput();
          robotDialog(`
          <p>Deseja ser direcionado para a seção <strong>${mensagemUser}</strong>?</p>
          <div class="chat-btn" onclick="enviarMsg('Sim, leve-me até lá!');window.location.href = '${newURL}';">Sim, leve-me até lá!</div>
          <div class="chat-btn" onclick="ativarInput();enviarMsg('Não, desejo outra coisa.')">Não, desejo outra coisa.</div>
          `);
          break;

        // PREVIDENCIA > GESTÃO ATUARIAL
        case resposta.indexOf('atuarial') !== -1:
          window.location.href = "https://reciprev.recife.pe.gov.br/gestao-atuarial";
          break;

        // PREVIDENCIA > PROVA ANUAL DE VIDA
        case resposta.indexOf('prova') !== -1:

          newURL = "https://reciprev.recife.pe.gov.br/prova-de-vida";
          desativarInput();
          robotDialog(`
          <p>Deseja ser direcionado para a seção <strong>${mensagemUser}</strong>?</p>
          <div class="chat-btn" onclick="enviarMsg('Sim, leve-me até lá!');window.location.href = '${newURL}';">Sim, leve-me até lá!</div>
          <div class="chat-btn" onclick="ativarInput();enviarMsg('Não, desejo outra coisa.')">Não, desejo outra coisa.</div>
          `);
          break;

        // PREVIDENCIA > PLANO DE TRABALHO ATUARIAL
        case resposta.indexOf('trabalho') !== -1:
          window.location.href = "https://reciprev.recife.pe.gov.br/sites/default/files/inline-files/relatorio_normas_procedimentos_atuariais_v10%20%282%29_2.pdf";
          break;

        // PREVIDENCIA > PASSIVO JUDICIAL
        case resposta.indexOf('passivo') !== -1:
        case resposta.indexOf('judicial') !== -1:
          window.location.href = "https://reciprev.recife.pe.gov.br/sites/default/files/inline-files/RELAT%C3%93RIO%20DE%20AVALIA%C3%87%C3%83O%20DO%20PASSIVO%20JUDICIAL%20-%202021.2.pdf";
          break;

        // PREVIDENCIA > PREVIDÊNCIA COMPLEMENTAR
        case resposta.indexOf('complementar') !== -1:
          window.location.href = "https://reciprev.recife.pe.gov.br/previdencia-complementar";
          break;

        // PREVIDENCIA > RESTOS DEIXADOS
        case resposta.indexOf('restos') !== -1:
        case resposta.indexOf('deixados') !== -1:

          newURL = "https://reciprev.recife.pe.gov.br/restos-deixados";
          desativarInput();
          robotDialog(`
          <p>Deseja ser direcionado para a seção <strong>${mensagemUser}</strong>?</p>
          <div class="chat-btn" onclick="enviarMsg('Sim, leve-me até lá!');window.location.href = '${newURL}';">Sim, leve-me até lá!</div>
          <div class="chat-btn" onclick="ativarInput();enviarMsg('Não, desejo outra coisa.')">Não, desejo outra coisa.</div>
          `);
          break;

        // PREVIDENCIA > RECIPREV SERVIÇOS
        case resposta.indexOf('serviços') !== -1:

          newURL = "https://reciprev.recife.pe.gov.br/reciprev-servicos";
          desativarInput();
          robotDialog(`
          <p>Deseja ser direcionado para a seção <strong>${mensagemUser}</strong>?</p>
          <div class="chat-btn" onclick="enviarMsg('Sim, leve-me até lá!');window.location.href = '${newURL}';">Sim, leve-me até lá!</div>
          <div class="chat-btn" onclick="ativarInput();enviarMsg('Não, desejo outra coisa.')">Não, desejo outra coisa.</div>
          `);
          break;

        default:
          robotDialog(`Desculpe, não possuo respostas para: "${mensagemUser}"`);
          console.log(`Desculpe, não entendi a mensagem: ${mensagemUser}.`);
      }
      rolarChat();
};