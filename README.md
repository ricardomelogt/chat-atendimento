# chat-atendimento
Chatbot para auxiliar no atendimento dos servidores beneficiários dos planos municipais de saúde e previdência da cidade do Recife.

### Setup
Para visualizar o chatbot neste projeto, é necessário que a pasta do projeto esteja rodando em algum servidor http (eu uso http-server do node).

### Como Inserir em uma página HTML
O chatbot é inserido em uma página html através de uma tag <iframe>. O exemplo a seguir é o utilizado neste projeto:
<iframe sandbox="allow-scripts" style="border:none; width:320px; height:500px; position:fixed; right:0; bottom:0;" src="chatbot/chat.html" frameborder="0"></iframe>