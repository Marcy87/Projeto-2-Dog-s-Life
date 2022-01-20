//FUNÇÃO ARROW FUNCTION
const _$ = x => document.getElementById(x) || document.querySelector(x);

function anoCorrenteRodape (x) {
    let dataHoje = new Date();
    _$(x).textContent = dataHoje.getFullYear();
};


document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM totalmente carregado");

    //INSERIR O ANO NO RODAPÉ DA PÁGINA
    anoCorrenteRodape("ano");
    anoCorrenteRodape("anoCorrente");
});