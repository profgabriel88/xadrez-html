var tabuleiro = document.getElementById('tabuleiro');
var dimensao = 8;

// CÓDIGO UNICODE DA PEÇA E POSIÇÕES INICIAIS
// TORRE, CAVALO, BISPO, REI, RAINHA, PEÃO
var brancas = [
    ['&#9814', '1A', '1H'],
    ['&#9816', '1B', '1G'],
    ['&#9815', '1C', '1F'],
    ['&#9812', '1D'],
    ['&#9813', '1E'],
    ['&#9817', '2*']
];

var pretas = [
    ['&#9820', '8A', '8H'],
    ['&#9822', '8B', '8G'],
    ['&#9821', '8C', '8F'],
    ['&#9818', '8D'],
    ['&#9819', '8E'],
    ['&#9823', '7*']
];

var cores = [brancas, pretas];
var pecasJogo = [];

function criaTabuleiro() {
    for (let i = dimensao; i > 0; i--) {
        for (let j = 0; j < dimensao; j++) {
            let celula = document.createElement('div');
            let deslocamento = i % 2 == 0 ? -1 : 0; 
            let letra = 65 + j + deslocamento;
            let cor = letra % 2 == 1 ? 'p' : 'b'
            celula.id = `${i}${String.fromCharCode(65 + j)}`
            celula.className = `celulas ${cor}`;
            celula.innerHTML = `<p>${i} ${String.fromCharCode(65 + j)}</p>`;
            tabuleiro.appendChild(celula);
        }
    }
    populaTabuleiro();
}

function populaTabuleiro() {
    for (let j = 0; j < cores.length; j++) {
        let corAtual = cores[j];
        for (let i = 0; i < corAtual.length; i++) {
            if (corAtual[i].length == 3) {
                let ids = [corAtual[i][1], corAtual[i][2]];
                let celulas = [document.getElementById(ids[0]), document.getElementById(ids[1])];
                
                let pecas = [document.createElement('div'), document.createElement('div')];
                pecas[0].className = 'peca';
                pecas[1].className = 'peca';
                pecas[0].innerHTML = `<p>${corAtual[i][0]}</p>`;
                pecas[1].innerHTML = `<p>${corAtual[i][0]}</p>`;
                
                pecas[0].setAttribute('onclick', 'teste()');
                pecas[1].setAttribute('onclick', 'teste()');
                
                celulas[0].appendChild(pecas[0]);
                celulas[1].appendChild(pecas[1]);
                
                pecasJogo.push(pecas[0]);
                pecasJogo.push(pecas[1]);
            }
            else if (corAtual[i].length == 2) {
                let id = corAtual[i][1];
                if (id[1] != '*') {

                    let celula = document.getElementById(id);
                    
                    let peca = document.createElement('div');
                    peca.className = 'peca';
                    peca.innerHTML = `<p>${corAtual[i][0]}</p>`;
                    peca.setAttribute('onclick', 'teste()');
                    celula.appendChild(peca);

                    pecasJogo.push(peca);
                }
                else {
                    for (let k = 0; k < dimensao; k++) {
                        let id2 = `${id[0]}${String.fromCharCode(65 + k)}`
                        let celula = document.getElementById(id2);
                        
                        let peca = document.createElement('div');
                        peca.className = 'peca';
                        peca.innerHTML = `<p>${corAtual[i][0]}</p>`;
                        peca.setAttribute('onclick', 'teste()');
                        celula.appendChild(peca);

                        pecasJogo.push(peca);
                    }
                }
            }
        }
    }
}

function teste() {
    alert('clicou');
}