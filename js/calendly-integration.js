// Calendly Integration Script
document.addEventListener('DOMContentLoaded', function() {
    // Referências aos elementos
    const agendarBtns = document.querySelectorAll('.agendar-btn');
    const calendlyContainer = document.getElementById('calendly-container');
    
    // Configuração dos barbeiros e seus links do Calendly
    const barbeirosConfig = {
        'riltonborges': {
            nome: 'Rilton Borges',
            calendlyUrl: 'reinavalha/rilton-borges'
        },
        'rafaelandrade': {
            nome: 'Rafael Andrade',
            calendlyUrl: 'reinavalha/rafael-andrade'
        },
        'diegoleonardo': {
            nome: 'Diego Leonardo',
            calendlyUrl: 'reinavalha/diego-leonardo'
        },
        'marcosfelipe': {
            nome: 'Marcos Felipe',
            calendlyUrl: 'reinavalha/marcos-felipe'
        }
    };
    
    // Adicionar evento de clique para cada botão de agendamento
    agendarBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const barbeiroId = this.getAttribute('data-barbeiro');
            const barbeiro = barbeirosConfig[barbeiroId];
            
            if (barbeiro) {
                // Atualizar título da seção
                const agendamentoTitle = document.querySelector('#agendamento .section-title');
                agendamentoTitle.textContent = `AGENDAMENTO COM ${barbeiro.nome.toUpperCase()}`;
                
                // Limpar conteúdo anterior do container
                calendlyContainer.innerHTML = '';
                
                // Adicionar classe ativa para mostrar o container
                calendlyContainer.classList.add('active');
                
                // Mostrar o widget do Calendly
                Calendly.initInlineWidget({
                    url: `https://calendly.com/${barbeiro.calendlyUrl}`,
                    parentElement: calendlyContainer,
                    prefill: {},
                    utm: {}
                });
                
                // Rolar até o widget
                calendlyContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
                
                // Adicionar classe ativa ao botão selecionado e remover dos outros
                agendarBtns.forEach(b => b.classList.remove('active'));
                this.classList.add('active');
            }
        });
    });
    
    // Adicionar estilo para botão ativo
    const style = document.createElement('style');
    style.textContent = `
        .agendar-btn.active {
            background-color: #111111;
            color: #d4af37;
            border: 2px solid #d4af37;
        }
    `;
    document.head.appendChild(style);
});
