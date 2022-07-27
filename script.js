var tabuleiro = document.getElementById('tabuleiro');
var dimensao = 8;

// CÓDIGO UNICODE DA PEÇA E POSIÇÕES INICIAIS
// TORRE, CAVALO, BISPO, REI, RAINHA, PEÃO
var brancas = [
    ['&#9814', '1A', '1H', 'T'],
    ['&#9816', '1B', '1G', 'C'],
    ['&#9815', '1C', '1F', 'B'],
    ['&#9812', '1D', 'r'],
    ['&#9813', '1E', 'R'],
    ['&#9817', '2*', 'P']
];

var pretas = [
    ['&#9820', '8A', '8H', 'T'],
    ['&#9822', '8B', '8G', 'C'],
    ['&#9821', '8C', '8F', 'B'],
    ['&#9818', '8D', 'r'],
    ['&#9819', '8E', 'R'],
    ['&#9823', '7*', 'P']
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
    cores.forEach(cor => {
        cor.forEach(e => {
            if (e.length == 4) {
                let ids = [e[1], e[2]];
                let celulas = [document.getElementById(ids[0]), document.getElementById(ids[1])];
                
                let pecas = [document.createElement('div'), document.createElement('div')];
                pecas[0].className = 'peca';
                pecas[1].className = 'peca';
                pecas[0].id = e[3];
                pecas[1].id = e[3];
                pecas[0].innerHTML = `<p>${e[0]}</p>`;
                pecas[1].innerHTML = `<p>${e[0]}</p>`;
                
                pecas[0].setAttribute('onclick', 'mostraMovimentos(this)');
                pecas[1].setAttribute('onclick', 'mostraMovimentos(this)');
                
                celulas[0].appendChild(pecas[0]);
                celulas[1].appendChild(pecas[1]);
                
                pecasJogo.push(pecas[0]);
                pecasJogo.push(pecas[1]);
            }
            else if (e.length == 3) {
                let id = e[1];
                if (id[1] != '*') {

                    let celula = document.getElementById(id);
                    
                    let peca = document.createElement('div');
                    peca.className = 'peca';
                    peca.id = e[2];
                    peca.innerHTML = `<p>${e[0]}</p>`;
                    peca.setAttribute('onclick', 'mostraMovimentos(this)');
                    celula.appendChild(peca);

                    pecasJogo.push(peca);
                }
                else {
                    for (let k = 0; k < dimensao; k++) {
                        let id2 = `${id[0]}${String.fromCharCode(65 + k)}`
                        let celula = document.getElementById(id2);
                        
                        let peca = document.createElement('div');
                        peca.className = 'peca';
                        peca.id = e[2];
                        peca.innerHTML = `<p>${e[0]}</p>`;
                        peca.setAttribute('onclick', 'mostraMovimentos(this)');
                        celula.appendChild(peca);

                        pecasJogo.push(peca);
                    }
                }
            }
        })
    })
}

function mostraMovimentos(peca) {
    let id = peca.parentNode.id.split('');
    console.log(id);
    if (peca.id = 'C') {
        let divId = `${parseInt(id[0])+2}${String.fromCharCode(id[1].charCodeAt(0)+1)}`
        let div = document.getElementById(divId);
        div.style.background = 'orange';
    }
}