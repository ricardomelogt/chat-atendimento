# chat-atendimento
Chatbot para auxiliar no atendimento dos servidores beneficiários dos planos municipais de saúde e previdência da cidade do Recife. É uma estrutura de navegação auxiliar que pode ser utilizada com cliques seguindo um mapa de rotas pré-definidas ou pode funcionar com a digitação de palavras-chave pelo usuário.

### Setup
Para visualizar o chatbot neste projeto, é necessário que a pasta do projeto esteja rodando em algum servidor http (eu uso http-server do node).

### Como Inserir em uma página HTML
O chatbot é inserido em uma página html através de uma pequena estrutura de tags a serem adicionadas ao final do html da página desejada. O exemplo a seguir é o utilizado neste projeto:

`<script src="chatbot/includeHTML.js"></script>`  
`<div id="chat-root" w3-include-html="chatbot/chat.html"></div>`  
`<script> includeHTML(); addCss('chatbot/style.css');</script>`  
`<script src="chatbot/chat.js"></script>`  


### Manutenção
Para adicionar, alterar ou remover opções do script basta encontrar o bloco de funcção javascript correspondente e fazer as alterações desejadas.
O sistema de leitura e resposta do bot é baseado em uma estrutura javascript de SWITCH, com várias ramificações de CASE para interpretar as possíveis inputs do usuário.  

A seguir um exemplo onde o CASE em questão interpreta se o input do usuário corresponde à palavra chave "saúde", também levando em consideração se o usuário digitar sem acento:  

`case resposta.indexOf('saúde') !== -1:`  
`case resposta.indexOf('saude') !== -1:`  
`scriptParaSaude();`  
`break;`    

#### - Como o sistema responde às ações do usuário?
O script espera a função `enviarMsg('Input do usuário')` para validar a input e rodar a função `robotReact('Input do usuário validada')`. É na função `robotReact()` que roda o switch com todos os scripts de resposta.  

Quando o usuário digita algo e aperta ENTER ou clica no botão de envio de mensagem, a função `enviarMsg()` é acionada.  

Quando o usuário clica em um botão de navegação no chat, no html do botão está configurado o atributo `onclick="enviarMsg('palavra-chave')"` que faz com que o chat adicione uma mensagem como se fosse do usuário e responde de acordo.  

#### - Como fazer o robô mandar uma mensagem no chat?
A função `robotDialog('Mensagem do robô')` insere o conteúdo passado em seu parâmetro como mensagem do robô no chat. É possível que ele responda com HTML em vez de apenas texto, possibilitando o uso de botões, imagens e campos de texto. Para que ele responda com html é necessário utilizar uma estrutura de  [template string](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Template_literals).