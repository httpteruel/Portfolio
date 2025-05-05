const translations = {
    'pt': {
        'title': 'Portfolio',
        'nav-home': 'Início',
        'nav-about': 'Sobre',
        'nav-projects': 'Projetos',
        'nav-contact': 'Contato',
        'header-subtitle': 'Desenvolvedor FullStack',
        'about-title': 'Sobre Mim',
        'about-text': 'Olá! Meu nome é Arthur Teruel e sou graduando do 5º período de Engenharia de Software no IFPR - Campus Paranavaí. Tenho interesse na atuação Full Stack e possuo experiência com algumas linguagens de programação, incluindo HTML, CSS, JavaScript, Python e PHP',
        'projects-title': 'Meus Projetos',
        'project1-desc': 'Alternador de temas para páginas web',
        'project2-desc': 'Animação de uma flor criada inteiramente com CSS, sem o uso de JavaScript ou bibliotecas externas',
        'project3-desc': 'Este repositório contém um Weather App simples e responsivo, desenvolvido com HTML, CSS e JavaScript. O aplicativo permite consultar a previsão do tempo de qualquer cidade, exibindo informações como temperatura, umidade, vento e condições climáticas atuais',
        'project4-desc': 'Website responsivo para uma clínica genérica, utilizando HTML e CSS. Desenvolvido em comemoração ao Dia Internacional da Mulher (08 de março)',
        'project5-desc': 'Image Slider simples desenvolvido com HTML, CSS e JavaScript. Permite a navegação entre imagens de forma manual e automática, com transições suaves',
        'project6-desc': 'Uma página web de propaganda de refrigerantes desenvolvida com HTML, CSS & JavaScript',
        'project7-desc': 'Aplicação Java para construção de gráficos de diversos tipos',
        'project8-desc': 'Aplicação Java para calcular e ordenar as notas de alunos, com funcionalidade de aprovação/reprovação ajustável de acordo com parâmetros configuráveis',
        'contact-title': 'Entre em Contato',
        'form-name': 'Nome',
        'form-message': 'Digite Sua Mensagem',
        'form-submit': 'Enviar Mensagem',
        'quote-loading': 'Carregando citação...',
        'quote-error': 'Erro ao carregar citação',
        'quote-updated': 'Nova citação carregada'
    },
    'en': {
        'title': 'Portfolio',
        'nav-home': 'Home',
        'nav-about': 'About',
        'nav-projects': 'Projects',
        'nav-contact': 'Contact',
        'header-subtitle': 'FullStack Developer',
        'about-title': 'About Me',
        'about-text': 'Hello! My name is Arthur Teruel, and I am a 5th-semester Software Engineering student at IFPR - Paranavaí Campus. I am interested in Full Stack development and have experience with several programming languages, including HTML, CSS, JavaScript, Python, and PHP',
        'projects-title': 'My Projects',
        'project1-desc': 'Theme switcher for web pages',
        'project2-desc': 'Animation of a flower created entirely with CSS, without using JavaScript or external libraries',
        'project3-desc': 'This repository contains a simple and responsive Weather App developed with HTML, CSS, and JavaScript. The app allows users to check the weather forecast for any city, displaying information such as temperature, humidity, wind, and current weather conditions',
        'project4-desc': 'Responsive website for a generic clinic, using HTML and CSS. Developed in celebration of International Women\'s Day (March 8)',
        'project5-desc': 'Simple Image Slider developed with HTML, CSS, and JavaScript. Allows manual and automatic navigation between images with smooth transitions',
        'project6-desc': 'A web page for soda advertisement developed with HTML, CSS & JavaScript',
        'project7-desc': 'Java application for building various types of charts',
        'project8-desc': 'Java application for calculating and sorting student grades, with adjustable pass/fail functionality based on configurable parameters',
        'contact-title': 'Get in Touch',
        'form-name': 'Name',
        'form-message': 'Enter Your Message',
        'form-submit': 'Send Message',
        'quote-loading': 'Loading quote...',
        'quote-error': 'Error loading quote',
        'quote-updated': 'New quote loaded'
    }
};

const defaultQuotes = [
    {
        content: "A persistência é o caminho do êxito.",
        author: "Charles Chaplin"
    },
    {
        content: "Não espere por oportunidades, crie-as.",
        author: "George Bernard Shaw"
    },
    {
        content: "O sucesso é ir de fracasso em fracasso sem perder o entusiasmo.",
        author: "Winston Churchill"
    },
    {
        content: "O único limite para nossa realização de amanhã são nossas dúvidas de hoje.",
        author: "Franklin D. Roosevelt"
    },
    {
        content: "A criatividade é a inteligência se divertindo.",
        author: "Albert Einstein"
    },
    {
        content: "Se eu vi mais longe, foi por estar sobre os ombros de gigantes.",
        author: "Isaac Newton"
    },
    {
        content: "Podemos apenas ver um pouco do futuro, mas o suficiente para perceber que há muito a fazer.",
        author: "Alan Turing"
    },
    {
        content: "O sucesso é um péssimo professor. Ele seduz pessoas inteligentes a pensar que não podem perder.",
        author: "Bill Gates"
    },
    {
        content: "Nada na vida deve ser temido, apenas compreendido. Agora é hora de compreender mais, para temer menos.",
        author: "Marie Curie"
    },
    {
        content: "A gravidade explica o movimento dos planetas, mas não pode explicar quem colocou os planetas em movimento.",
        author: "Isaac Newton"
    },
    {
        content: "Às vezes, é a própria tecnologia que impede o progresso social.",
        author: "Alan Turing"
    },
    {
        content: "A tecnologia é apenas uma ferramenta. No que diz respeito a motivar as pessoas, a verdadeira oportunidade está em dar-lhes propósito.",
        author: "Bill Gates"
    },
    {
        content: "Seja menos curioso sobre as pessoas e mais curioso sobre as ideias.",
        author: "Marie Curie"
    },
    {
        content: "A natureza é escrita em linguagem matemática.",
        author: "Galileu Galilei"
    },
    {
        content: "A ciência é uma maneira de pensar muito mais do que um corpo de conhecimento.",
        author: "Carl Sagan"
    },
    {
        content: "O universo não tem obrigação de fazer sentido para você.",
        author: "Neil deGrasse Tyson"
    },
    {
        content: "A imaginação é mais importante que o conhecimento. O conhecimento é limitado, a imaginação circunda o mundo.",
        author: "Albert Einstein"
    },
    {
        content: "O importante é não parar de questionar. A curiosidade tem sua própria razão de existir.",
        author: "Albert Einstein"
    },
    {
        content: "A ciência avança um funeral de cada vez.",
        author: "Max Planck"
    },
    {
        content: "Tudo o que chamamos de real é feito de coisas que não podem ser consideradas reais.",
        author: "Niels Bohr"
    },
    {
        content: "A mente que se abre a uma nova ideia jamais volta ao seu tamanho original.",
        author: "Oliver Wendell Holmes"
    },
    {
        content: "A ciência é a busca pela verdade, não a posse da verdade.",
        author: "Karl Popper"
    },
    {
        content: "O maior inimigo do conhecimento não é a ignorância, mas a ilusão do conhecimento.",
        author: "Stephen Hawking"
    },
    {
        content: "O que sabemos é uma gota, o que ignoramos é um oceano.",
        author: "Isaac Newton"
    },
    {
        content: "Não há limites para a inteligência artificial, exceto aqueles que nós próprios impusermos.",
        author: "Ada Lovelace"
    }
];

function setLanguage(lang) {
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        element.textContent = translations[lang][key];
    });
    document.querySelectorAll('[data-translate-placeholder]').forEach(element => {
        const key = element.getAttribute('data-translate-placeholder');
        element.placeholder = translations[lang][key];
    });
    document.title = translations[lang]['title'];
    document.documentElement.lang = lang === 'pt' ? 'pt-br' : 'en';
    const langButton = document.getElementById('langBotao');
    langButton.textContent = lang === 'pt' ? 'EN' : 'PT';
    langButton.setAttribute('data-lang', lang === 'pt' ? 'en' : 'pt');
    langButton.setAttribute('aria-label', lang === 'pt' ? 'Alternar idioma para inglês' : 'Switch language to Portuguese');
}

function enviar(event) {
    event.preventDefault();
    const nome = document.getElementById('nome').value;
    const mensagem = document.getElementById('mensagem').value;
    const telefone = '5544999333287';
    const texto = `Olá! Me chamo ${nome}, ${mensagem}`;
    const mensagemFormatada = encodeURIComponent(texto);
    const url = `https://wa.me/${telefone}?text=${mensagemFormatada}`;
    window.open(url, '_blank');
    const ariaAlert = document.getElementById('aria-alert');
    ariaAlert.textContent = 'Formulário enviado, você será redirecionado para o WhatsApp.';
    setTimeout(() => ariaAlert.textContent = '', 3000);
}

function getRandomQuote(quotes) {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

async function fetchQuote(attempt = 1, maxAttempts = 3) {
    const quoteText = document.getElementById('quote-text');
    const quoteAuthor = document.getElementById('quote-author');
    const ariaAlert = document.getElementById('aria-alert');
    const currentLang = document.documentElement.lang === 'pt-br' ? 'pt' : 'en';

    quoteText.textContent = translations[currentLang]['quote-loading'];
    quoteAuthor.textContent = '';

    try {
        const response = await fetch('https://api.quotable.io/random');
        if (!response.ok) {
            if (response.status === 429 && attempt < maxAttempts) {
                console.warn(`Erro 429: Limite de taxa atingido. Tentando novamente em 5 segundos... (Tentativa ${attempt}/${maxAttempts})`);
                await new Promise(resolve => setTimeout(resolve, 5000));
                return fetchQuote(attempt + 1, maxAttempts);
            }
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        quoteText.textContent = `"${data.content}"`;
        quoteAuthor.textContent = `— ${data.author}`;
        ariaAlert.textContent = translations[currentLang]['quote-updated'];
        setTimeout(() => ariaAlert.textContent = '', 3000);
    } catch (error) {
        console.error('Erro ao buscar citação:', error.message, error.stack);
        const fallbackQuote = getRandomQuote(defaultQuotes);
        quoteText.textContent = `"${fallbackQuote.content}"`;
        quoteAuthor.textContent = `— ${fallbackQuote.author}`;
        ariaAlert.textContent = translations[currentLang]['quote-updated'];
        setTimeout(() => ariaAlert.textContent = '', 3000);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const themeButton = document.getElementById("temaBotao");
    const langButton = document.getElementById("langBotao");
    const body = document.body;

    themeButton.addEventListener("click", function () {
        body.classList.toggle("dark-theme");
        themeButton.textContent = body.classList.contains("dark-theme") ? "Light" : "Dark";
        themeButton.setAttribute('aria-label', body.classList.contains("dark-theme") ? 'Alternar para tema claro' : 'Alternar para tema escuro');
    });

    langButton.addEventListener("click", function () {
        const newLang = langButton.getAttribute('data-lang');
        setLanguage(newLang);
    });

    setLanguage('pt');
    fetchQuote();
});