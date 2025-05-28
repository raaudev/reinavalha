## Landing Page - Barbearia Rei Navalha

## Sobre o Projeto

Este projeto consiste em uma landing page responsiva para a Barbearia Rei Navalha, desenvolvida utilizando HTML, CSS e JavaScript. A página foi criada para apresentar os serviços da barbearia e permitir o agendamento online através da integração com o Calendly.

## Características

Design Responsivo: Adaptável a diferentes tamanhos de tela (desktop, tablet e mobile)
Estilo Elegante: Combinação de fundo escuro com detalhes dourados
Integração com Calendly: Sistema de agendamento online para cada barbeiro
Navegação Intuitiva: Menu de navegação simples e funcional
Seções Organizadas: Apresentação clara dos serviços e informações da barbearia

## Estrutura do Projeto
´´´
rei-navalha-barbearia/
│
├── css/
│   └── style.css          # Estilos da página
│
├── js/
│   ├── main.js            # Funcionalidades gerais
│   └── calendly-integration.js  # Integração com Calendly
│
├── images/
│   ├── hero-background.jpg     # Imagem de fundo original
│   ├── new-hero-background.jpg # Nova imagem de fundo
│   └── ...                     # Outras imagens
│
└── index.html            # Arquivo principal HTML
´´´

## Seções da Página

Header: Logo e menu de navegação
Hero: Chamada principal com botão de agendamento
Sobre: Informações sobre a barbearia
Serviços: Lista de serviços oferecidos
Depoimentos: Feedback de clientes
Galeria: Fotos dos serviços e ambiente
Localização: Endereço e mapa
Agendamento: Sistema de agendamento com Calendly
Footer: Informações de contato e redes sociais

## Tecnologias Utilizadas

HTML5
CSS3 (com Flexbox e Grid para layouts)
JavaScript (ES6+)
Integração com API do Calendly
Font Awesome (para ícones)
Google Fonts
Personalização do Calendly

Para configurar corretamente a integração com o Calendly, é necessário editar o arquivo js/calendly-integration.js e substituir os URLs de exemplo pelos links reais do Calendly para cada barbeiro:

´´´
javascript
const barbeirosConfig = {
    'riltonborges': {
        nome: 'Rilton Borges',
        calendlyUrl: 'seu-usuario-calendly/rilton-borges' // Substitua pelo link real
    },
    'rafaelandrade': {
        nome: 'Rafael Andrade',
        calendlyUrl: 'seu-usuario-calendly/rafael-andrade' // Substitua pelo link real
    },
    // ... outros barbeiros
};
´´´

## Instalação e Uso

Faça o download ou clone este repositório
Edite o arquivo js/calendly-integration.js para configurar os links do Calendly
Faça upload dos arquivos para seu servidor web ou hospedagem
Acesse o site através do navegador

## Manutenção e Atualizações
Para atualizar o conteúdo da página:
Textos: Edite diretamente no arquivo index.html
Estilos: Modifique o arquivo css/style.css
Imagens: Substitua os arquivos na pasta images/
Funcionalidades: Atualize os arquivos JavaScript em js/

## Compatibilidade

A landing page é compatível com os seguintes navegadores:
Google Chrome (versão 60+)
Mozilla Firefox (versão 55+)
Safari (versão 10+)
Microsoft Edge (versão 15+)
Opera (versão 47+)

## Licença
Este projeto foi desenvolvido exclusivamente para a Barbearia Rei Navalha e não deve ser redistribuído sem autorização.
Desenvolvido por Rau Souza | 2025
