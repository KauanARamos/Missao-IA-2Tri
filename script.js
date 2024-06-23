const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "O ano é 2060, Você viajou de teletransporte nacional para um hotel em Curitiba, uma recentemente inaugurada 'cidade inteligente'. Depois de dormir um pouco, você sai vê nas ruas uma imensidão de luzes fortes e letreiros brilantes que quase não te permitiram dormir à noite. Você conclui que:",
        alternativas: [
            {
                texto: "A poluição visual é um preço justo a se pagar.",
                afirmacao: "Você se mostrou disposto(a) a ter luzes fortes pela cidade."
            },
            {
                texto: "É tortura não poder dormir bem à noite.",
                afirmacao: "Você se mostrou receoso(a) à piora na sua qualidade de sono e visibilidade."
            }
        ]
    },
    {
        enunciado: "Quando sai na rua, escuta o som do motor de poucos carros, pois a maioria deles é elétrico. Você pensa nas possíveis consequências disso e reflete que:",
        alternativas: [
            {
                texto: "Erradicar o som dos carros compensa pela poluição visual excessiva. E a emissão de gases do efeito estufa por eles também são menores.",
                afirmacao: "Você percebe que a emissão dos carros é bem menor, inclusive, consegue ver o céu azul no meio da cidade grande!"
            },
            {
                texto: "O som na cidade grande não me faz falta, mas gostaria de saber de onde vêm energia elétrica para energizar tantos carros.",
                afirmacao: "Você percebe que toda a energia elétrica para os carros tem que vir de uma fonte imensa, que provavelmente continua com a emissão de gases poluentes."
            }
        ]
    },
    {
        enunciado: "Ao final da tarde, você decide passear pelo parque quando recebe uma mensagem estranha de um número desconhecido. Alguns dados seus foram roubados por uma falha de segurança no wi-fi público do parque. Você:",
        alternativas: [
            {
                texto: "Ignora a mensagem. Confia na cibersegurança da cidade, afinal deve ser só um golpe.",
                afirmacao: "Não deu bola para a mensagem avisando que seus dados foram roubados e não aconteceu nada, mas não deixa de ter aquele receio."
            },
            {
                texto: "Liga para a polícia e avisa da mensagem.",
                afirmacao: "Avisou a polícia sobre uma possível falha de segurança em uma região da cidade, as investigações continuam, mas te informam que devia ser apenas um golpe."
            }
        ]
    },
    {
        enunciado: "Quanto mais se distancia do centro da cidade, você nota que tudo fica menos colorido e menos verde, como se a cidade fosse um oásis no meio de um deserto. Você decide que esse caminho que Curitiba tomou para se tornar uma cidade inteligente:",
        alternativas: [
            {
                texto: "Foi necessário, afinal o centro compensa pelas emissões fora da cidade e possui maior concentração de habitantes de qualquer modo.",
                afirmacao: "Decidiu que para o desenvolvimento de Curitiba, sacrifícios foram necessários. Afinal, foi minimizada a miséria no centro da cidade e a maioria vive tranquilamente."
            },
            {
                texto: "Poderiam ter investido mais implementações sustentáveis antes de extrair em excesso os recursos naturais em volta para finaciar a cidade em si.",
                afirmacao: "Apesar de tudo, percebeu que o futuro de Curitiba poderia ter sido muito melhor se o desenvolvimente houvesse sido mais sustentável e mostrassem mais preocupação com o meio-ambiente. "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Na cidade inteligente...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();