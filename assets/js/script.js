// Objeto para ser renderizado no HTML
const myInformations = {
   
    fotoPerfil: 'https://github.com/CassiaSantos.png',
    nome: 'Cássia Santos',
    cargo: 'Desenvolvedora Front-end',
    
    // Redes sociais: 
    github: 'https://github.com/CassiaSantos',
    linkedin: 'https://www.linkedin.com/in/cassia-santos-areadeti',
    instagram: 'https://www.instagram.com/cassiasantos_05',
    codepen: 'https://codepen.io/Cassia_Oliveira',
    
    //Texto biografia:
    minhaBio: 'Olá! Meu nome é Cássia e eu sou desenvolvedora Front-end. Tenho conhecimento em HTML, CSS e estou estudando Javascript. Atualmente busco aprimorar meus conhecimentos e desenvolver projetos que mostrem minhas habilidades e me levam a adquirir novas! Quero aprender muito mais e me posicionar no mercado, desenvolvendo soluções concretas e confiáveis!💜'
};

// Passando dados do objeto: 
document.getElementById('fotoPerfil').src = myInformations.fotoPerfil;
document.getElementById('nome').innerHTML = myInformations.nome;
document.getElementById('cargo').innerHTML = myInformations.cargo;

//Redes sociais:
document.getElementById('github').href = myInformations.github;
document.getElementById('linkedin').href = myInformations.linkedin;
document.getElementById('instagram').href = myInformations.instagram;
document.getElementById('codepen').href = myInformations.codepen;

//Texto da biografia:
document.getElementById('minhaBio').innerHTML = myInformations.minhaBio;