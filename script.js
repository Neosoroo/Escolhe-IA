const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const barraProgresso = document.getElementById("barraProgresso");

const perguntas = [
    {
        enunciado: "Você encontra uma IA que responde tudo. O que pensa?",
        alternativas: [
            { texto: "Assustador!", afirmacao: "Ficou com medo do que essa tecnologia pode fazer." },
            { texto: "Incrível!", afirmacao: "Quis saber como usar a IA no seu dia a dia." }
        ]
    },
    {
        enunciado: "Sua professora propõe um trabalho sobre IA. Como age?",
        alternativas: [
            { texto: "Uso IA para me ajudar.", afirmacao: "Soube usar a IA para buscar informações úteis." },
            { texto: "Faço sozinho.", afirmacao: "Preferiu usar seus próprios conhecimentos." }
        ]
    },
    {
        enunciado: "Debate sobre IA e empregos. Qual sua posição?",
        alternativas: [
            { texto: "Cria oportunidades.", afirmacao: "Acredita no potencial da IA para gerar novos trabalhos." },
            { texto: "Risco ao emprego.", afirmacao: "Defende o uso ético e com proteção ao trabalhador." }
        ]
    },
    {
        enunciado: "Criação de imagem sobre IA. Qual ferramenta usa?",
        alternativas: [
            { texto: "Paint ou Photoshop.", afirmacao: "Ensinou outras pessoas a usarem ferramentas clássicas." },
            { texto: "Gerador de imagem com IA.", afirmacao: "Mostrou como IA pode ajudar quem não sabe desenhar." }
        ]
    },
    {
        enunciado: "Colega copiou texto da IA no trabalho. O que faz?",
        alternativas: [
            { texto: "Não vejo problema.", afirmacao: "Ficou dependente da IA para tudo." },
            { texto: "Reviso e corrijo com minha visão.", afirmacao: "Percebeu que IA é ferramenta, não solução final." }
        ]
    },
    {
        enunciado: "A escola oferece um curso de IA. O que faz?",
        alternativas: [
            { texto: "Se inscreve animado.", afirmacao: "Buscou se especializar cada vez mais." },
            { texto: "Acha difícil e evita.", afirmacao: "Tem receio, mas mantém o interesse." }
        ]
    },
    {
        enunciado: "Você cria um canal sobre IA. Qual abordagem?",
        alternativas: [
            { texto: "Explica o uso prático.", afirmacao: "Ajuda outras pessoas a usar IA com responsabilidade." },
            { texto: "Foca em entretenimento com IA.", afirmacao: "Mostra como IA pode divertir e ensinar." }
        ]
    },
    {
        enunciado: "IA é usada para corrigir redações. Você:",
        alternativas: [
            { texto: "Confia na correção.", afirmacao: "Confia na IA, mas revisa sempre que possível." },
            { texto: "Prefere correção humana.", afirmacao: "Acredita que a sensibilidade humana é essencial." }
        ]
    },
    {
        enunciado: "O governo quer usar IA para tomar decisões. Você:",
        alternativas: [
            { texto: "Apoia com limites éticos.", afirmacao: "Defende uso transparente e justo da tecnologia." },
            { texto: "É contra, prefere humanos.", afirmacao: "Teme o uso político e injusto da IA." }
        ]
    },
    {
        enunciado: "Você precisa ensinar IA para crianças. O que faz?",
        alternativas: [
            { texto: "Cria jogos educativos.", afirmacao: "Criou experiências interativas e divertidas." },
            { texto: "Dá aulas teóricas.", afirmacao: "Explicou conceitos de forma clara e acessível." }
        ]
    }
];

let indiceAtual = 0;
let historiaFinal = "";

function mostrarPergunta() {
    if (indiceAtual >= perguntas.length) {
        mostrarResultado();
        return;
    }

    const pergunta = perguntas[indiceAtual];
    caixaPerguntas.textContent = pergunta.enunciado;
    caixaAlternativas.innerHTML = "";

    pergunta.alternativas.forEach((alt) => {
        const botao = document.createElement("button");
        botao.textContent = alt.texto;
        botao.onclick = () => selecionarResposta(alt.afirmacao);
        caixaAlternativas.appendChild(botao);
    });

    atualizarBarraProgresso();
}

function selecionarResposta(afirmacao) {
    historiaFinal += afirmacao + " ";
    indiceAtual++;
    mostrarPergunta();
}

function mostrarResultado() {
    caixaPerguntas.textContent = "";
    caixaAlternativas.innerHTML = "";
    textoResultado.textContent = historiaFinal.trim();
    caixaResultado.classList.remove("hidden");
    barraProgresso.style.width = "100%";
}

function reiniciarJogo() {
    indiceAtual = 0;
    historiaFinal = "";
    caixaResultado.classList.add("hidden");
    mostrarPergunta();
}

function atualizarBarraProgresso() {
    const progresso = (indiceAtual / perguntas.length) * 100;
    barraProgresso.style.width = `${progresso}%`;
}

mostrarPergunta();