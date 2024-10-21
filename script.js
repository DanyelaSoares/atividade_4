// Inicialização do Swiper.js
const swiper = new Swiper('.swiper-container', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

// Inicialização do AOS.js
AOS.init();

// Consumo de API para a Seção de Serviços
fetch('https://api.exemplo.com/servicos')
    .then(response => response.json())
    .then(data => {
        const servicosContainer = document.querySelector('.servicos-container');
        data.forEach(servico => {
            const card = document.createElement('div');
            card.classList.add('servico-card');
            card.innerHTML = `<h3>${servico.nome}</h3><p>${servico.descricao}</p>`;
            servicosContainer.appendChild(card);
        });
    })
    .catch(error => {
        console.error('Erro ao carregar os serviços:', error);
    });

// Consumo de API para a Seção de Testemunhos
fetch('https://api.exemplo.com/testemunhos')
    .then(response => response.json())
    .then(data => {
        const testemunhosContainer = document.querySelector('.testemunhos-container');
        data.forEach(testemunho => {
            const div = document.createElement('div');
            div.classList.add('testemunho');
            div.innerHTML = `
                <img src="${testemunho.foto}" alt="${testemunho.nome}">
                <p>${testemunho.texto}</p>
                <h4>${testemunho.nome}</h4>
            `;
            testemunhosContainer.appendChild(div);
        });
    })
    .catch(error => {
        console.error('Erro ao carregar os testemunhos:', error);
    });

// Integração com EmailJS para o Formulário de Contato
document.getElementById('contato-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    emailjs.send('seu_servico', 'seu_template', {
        nome: nome,
        email: email,
        mensagem: mensagem
    })
    .then(response => {
        alert('Mensagem enviada com sucesso!', response.status, response.text);
    })
    .catch(error => {
        alert('Erro ao enviar a mensagem:', error);
    });
});
