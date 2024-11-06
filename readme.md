# atividade_4

# Landing Page Moderna

Este projeto consiste em uma landing page moderna, desenvolvida utilizando HTML, CSS, JavaScript e bibliotecas externas. A página consome APIs para popular informações dinâmicas e inclui elementos interativos como sliders, animações e formulários de contato.

## Estrutura do Projeto

A landing page é composta por diversas seções que destacam a empresa, seus serviços, depoimentos de clientes e um formulário de contato. A estrutura é a seguinte:

- **Header**: Cabeçalho com logo, menu de navegação e botão de chamada para ação.
- **Banner Principal**: Slider/carrossel com navegação interativa.
- **Sobre**: Breve descrição da empresa ou produto.
- **Serviços**: Seção dinâmica consumindo uma API externa para exibir os serviços.
- **Testemunhos**: Depoimentos de clientes com animações ao rolar a página.
- **Contato**: Formulário de contato com validação de campos e integração com API de envio de emails.

## Bibliotecas Externas

- **Swiper.js / Slick Slider**: Utilizado para o slider/carrossel de imagens e conteúdo interativo.
- **AOS.js**: Usado para animar a exibição de testemunhos conforme o usuário rola a página.
- **Bootstrap / Tailwind CSS**: Frameworks CSS para design responsivo.
- **EmailJS**: Para enviar os dados do formulário de contato diretamente para um email.

## APIs Utilizadas

- **API de Serviços**: Carrega dinamicamente os serviços disponíveis da empresa.
- **API de Depoimentos**: Exibe depoimentos de clientes através de uma chamada de API.
- **EmailJS**: API para enviar os dados do formulário de contato para um email.

## Como Visualizar o Projeto Localmente

1. Clone o repositório para o seu computador:
    ```bash
    git clone https://github.com/SEU_USUARIO/nome-do-repositorio.git
    ```

2. Navegue até a pasta do projeto:
    ```bash
    cd nome-do-repositorio
    ```

3. Abra o arquivo `index.html` em seu navegador:
    ```bash
    open index.html
    ```

Ou, se preferir, utilize um servidor local para rodar o projeto.

## Estrutura de Diretórios


## Funcionalidades

### Slider Interativo

O slider/carrossel na seção de banner é implementado utilizando a biblioteca **Swiper.js**. Ele possui navegação fluida, botões de avançar/retroceder e indicadores (círculos ou barras) para cada slide.

### Seção de Serviços

A seção de serviços consome uma API externa para carregar os dados de serviços disponíveis. O conteúdo é exibido dinamicamente utilizando JavaScript.

### Testemunhos

Os depoimentos são exibidos utilizando a biblioteca **AOS.js** para aplicar animações conforme o usuário rola a página.

### Formulário de Contato

O formulário de contato é validado com JavaScript para garantir que os campos obrigatórios sejam preenchidos corretamente. Os dados são enviados para um email utilizando a API **EmailJS**.

## Considerações Finais

Este projeto demonstra o uso de bibliotecas modernas, consumo de APIs externas e boas práticas de design responsivo. O objetivo é fornecer uma experiência interativa e dinâmica para o usuário.

## Links

- [Repositório GitHub](https://danyelasoares.github.io/atividade_4/)

