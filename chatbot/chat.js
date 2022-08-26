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
            <div class="chat-btn" onclick="enviarMsg('Cálculos autuariais')">Cálculos autuariais</div>
            <div class="chat-btn" onclick="enviarMsg('Cartilha sobre o COVID-19')">Cartilha sobre o coronavirus</div>
            <div class="chat-btn" onclick="enviarMsg('Cartilha sobre autismo')">Cartilha sobre autismo</div>
            <div class="chat-btn" onclick="enviarMsg('Cobertura')">Cobertura</div>
            <div class="chat-btn" onclick="enviarMsg('Credenciamento Médico-Odontológico')">Credenciamento médico-Odontológico</div>
            <div class="chat-btn" onclick="enviarMsg('Manual da rede credenciada')">Manual da rede credenciada</div>
            <div class="chat-btn" onclick="enviarMsg('Manual do credenciado')">Manual do credenciado</div>
            <div class="chat-btn" onclick="enviarMsg('Normatizações')">Normatizações</div>
            <div class="chat-btn" onclick="enviarMsg('Portal do beneficiário')">Portal do beneficiário</div>
            <div class="chat-btn" onclick="enviarMsg('Rede médica credenciada')">Rede médica credenciada</div>
            <div class="chat-btn" onclick="enviarMsg('Sistema de co-participação')">Sistema de co-participação</div>
            <div class="chat-btn" onclick="enviarMsg('Sobre o sistema')">Sobre o Saúde Recife</div>
            `);
          break;

        // SAUDE RECIFE > BOLETO
        case resposta.indexOf('boleto') !== -1:
          robotDialog('direcionar para boletos');
          break;

        // SAUDE RECIFE > SITUAÇÃO DE GUIA
        case resposta.indexOf('guia') !== -1:
          robotDialog('direcionar para situação de guia');
          break;

        // SAUDE RECIFE > AGENDAMENTO, RECADASTRAMENTO E CADASTRAMENTO BIOMETRICO
        case resposta.indexOf('biométrico') !== -1:
        case resposta.indexOf('biometrico') !== -1:
        case resposta.indexOf('biometria') !== -1:
          window.location.href = "https://reciprev.recife.pe.gov.br/agendamento-recadastramento-e-cadastro-biometrico";
          break;

        // SAUDE RECIFE > CALCULOS AUTUARIAIS
        case resposta.indexOf('autuariais') !== -1:
        case resposta.indexOf('autuarial') !== -1:
          window.location.href = "https://reciprev.recife.pe.gov.br/calculos-atuariais-0";
          break;

        // SAUDE RECIFE > CARTILHA SOBRE O CORONAVIRUS
        case resposta.indexOf('coronavirus') !== -1:
        case resposta.indexOf('covid') !== -1:
          case resposta.indexOf('covid-19') !== -1:
          window.location.href = "https://reciprev.recife.pe.gov.br/cartilha-coronavirus";
          break;

        // SAUDE RECIFE > CARTILHA SOBRE O AUTISMO
        case resposta.indexOf('autismo') !== -1:
          window.location.href = "https://reciprev.recife.pe.gov.br/cartilha-sobre-autismo";
          break;

        // SAUDE RECIFE > COBERTURA DO SAUDE RECIFE
        case resposta.indexOf('cobertura') !== -1:
          window.location.href = "https://reciprev.recife.pe.gov.br/rol-de-cobertura-do-saude-recife";
          break;

        // SAUDE RECIFE > CREDENCIAMENTO MÉDICO-ODONTOLOGICO
        case resposta.indexOf('credenciamento') !== -1:
          window.location.href = "https://reciprev.recife.pe.gov.br/credenciamento-medico-odontologico-saude-recife";
          break;
        
        // SAUDE RECIFE > MANUAL DA REDE CREDENCIADA
        case resposta.indexOf('manual da rede credenciada') !== -1:
          window.location.href = "https://reciprev.recife.pe.gov.br/manual-da-rede-credenciada";
          break;

        // SAUDE RECIFE > MANUAL DO CREDENCIADO
        case resposta.indexOf('manual do credenciado') !== -1:
          window.location.href = "https://reciprev.recife.pe.gov.br/sites/default/files/inline-files/MANUAL%20DO%20CREDENCIADO.pdf";
          break;

        // SAUDE RECIFE > NORMATIZAÇÕES
        case resposta.indexOf('normatizações') !== -1:
        case resposta.indexOf('normatizacoes') !== -1:
        case resposta.indexOf('normatizaçoes') !== -1:
          window.location.href = "https://reciprev.recife.pe.gov.br/normatizacoes";
          break;
        
        // SAUDE RECIFE > PORTAL DO BENEFICIÁRIO
        case resposta.indexOf('portal do beneficiário') !== -1:
        case resposta.indexOf('portal') !== -1:
        case resposta.indexOf('beneficiario') !== -1:
          window.location.href = "http://www.recife.pe.gov.br/sauderecife/getRoles.do;jsessionid=FAB987E8CAAFFADF62E4B5C2B25FC534";
          break;
        
        // SAUDE RECIFE > REDE MÉDICA CREDENCIADA
        case resposta.indexOf('rede medica credenciada') !== -1:
        case resposta.indexOf('rede médica credenciada') !== -1:
        case resposta.indexOf('rede credenciada') !== -1:
          window.location.href = "https://reciprev.recife.pe.gov.br/rede-medica-credenciada";
          break;
        
        // SAUDE RECIFE > SISTEMA DE CO-PARTICIPAÇÃO
        case resposta.indexOf('co-participação') !== -1:
        case resposta.indexOf('co-participacao') !== -1:
          window.location.href = "https://reciprev.recife.pe.gov.br/sistema-de-co-participacao";
          break;

        // SAUDE RECIFE > SOBRE O SAÚDE RECIFE
        case resposta.indexOf('sobre o sistema') !== -1:
          window.location.href = "https://reciprev.recife.pe.gov.br/sobre-o-sistema-saude-recife";
          break;

        // PREVIDENCIA
        case resposta.indexOf('reciprev') !== -1:
        case resposta.indexOf('reciprev') !== -1:
          robotDialog(`<p>No <strong>Plano de Previdência</strong> posso lhe ajudar em:</p>
            <div class="chat-btn" onclick="enviarMsg('Calendário de pagamento')">Calendário de pagamento</div>
            <div class="chat-btn" onclick="enviarMsg('Acompanhamento de processos')">Acompanhamento de processos</div>
            <div class="chat-btn" onclick="enviarMsg('Aposentadoria')">Aposentadoria</div>
            <div class="chat-btn" onclick="enviarMsg('Auxílio funeral')">Auxílio funeral</div>
            <div class="chat-btn" onclick="enviarMsg('CADPREV/DIPR')">CADPREV/DIPR</div>
            <div class="chat-btn" onclick="enviarMsg('Concessão de pensão')">Concessão de pensão</div>
            <div class="chat-btn" onclick="enviarMsg('Contribuições previdenciárias')">Contribuições previdenciárias</div>
            <div class="chat-btn" onclick="enviarMsg('Certificado de Regularidade Previdenciária')">Certificado de Regularidade Previdenciária</div>
            <div class="chat-btn" onclick="enviarMsg('Estudo de Aderência')">Estudo de Aderência</div>
            <div class="chat-btn" onclick="enviarMsg('Extrato previdenciário')">Extrato previdenciário</div>
            <div class="chat-btn" onclick="enviarMsg('Gestão atuarial')">Gestão atuarial</div>
            <div class="chat-btn" onclick="enviarMsg('Prova de anual de vida')">Prova anual de vida</div>
            <div class="chat-btn" onclick="enviarMsg('Plano de Trabalho Atuarial')">Plano de Trabalho Atuarial</div>
            <div class="chat-btn" onclick="enviarMsg('Passivo judicial')">Passivo judicial</div>
            <div class="chat-btn" onclick="enviarMsg('Previdência complementar')">Previdência complementar</div>
            <div class="chat-btn" onclick="enviarMsg('Restos deixados')">Restos deixados</div>
            <div class="chat-btn" onclick="enviarMsg('Reciprev serviços')">Reciprev serviços</div>
            `);
          break;

        // PREVIDENCIA > CALENDÁRIO DE PAGAMENTO
        case resposta.indexOf('calendário') !== -1:
        case resposta.indexOf('calendario') !== -1:
          robotDialog(`<p>Direcionar para Calendário de pagamento</p>`);
          break;
        
        // PREVIDENCIA > ACOMPANHAMENTO DE PROCESSO
        case resposta.indexOf('processo') !== -1:
        case resposta.indexOf('processos') !== -1:
        case resposta.indexOf('acompanhamento de processos') !== -1:
          window.location.href = "https://recifeemdia.recife.pe.gov.br/acompanhamentoProcesso/";
          break;
        
        // PREVIDENCIA > APOSENTADORIA
        case resposta.indexOf('aposentadoria') !== -1:
          window.location.href = "https://reciprev.recife.pe.gov.br/aposentadoria";
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
          window.location.href = "https://reciprev.recife.pe.gov.br/concessao-de-pensao";
          break;

        // PREVIDENCIA > CONTRIBUIÇÕES PREVIDENCIÁRIAS
        case resposta.indexOf('contribuições') !== -1:
        case resposta.indexOf('previdenciarias') !== -1:
        case resposta.indexOf('previdenciárias') !== -1:
          window.location.href = "https://reciprev.recife.pe.gov.br/contribuicoes-previdenciarias";
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
          window.location.href = "https://login.recife.pe.gov.br/auth/realms/recife/protocol/openid-connect/auth?response_type=code&redirect_uri=https%3A%2F%2Fportaldoservidor.recife.pe.gov.br%2Flogin_check&client_id=pose&nonce=5890f8c4be350d734ea452d5c792dc29&state=602b7cdc6e952a4d09872d2a45d74dbb&scope=openid";
          break;

        // PREVIDENCIA > GESTÃO ATUARIAL
        case resposta.indexOf('atuarial') !== -1:
          window.location.href = "https://reciprev.recife.pe.gov.br/gestao-atuarial";
          break;

        // PREVIDENCIA > PROVA ANUAL DE VIDA
        case resposta.indexOf('prova') !== -1:
          window.location.href = "https://reciprev.recife.pe.gov.br/prova-de-vida";
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
          window.location.href = "https://reciprev.recife.pe.gov.br/restos-deixados";
          break;

        // PREVIDENCIA > RECIPREV SERVIÇOS
        case resposta.indexOf('serviços') !== -1:
          window.location.href = "https://reciprev.recife.pe.gov.br/reciprev-servicos";
          break;

        default:
          robotDialog(`Desculpe, não possuo respostas para: "${mensagemUser}"`);
          console.log(`Desculpe, não entendi a mensagem: ${mensagemUser}.`);
      }
      rolarChat();
};