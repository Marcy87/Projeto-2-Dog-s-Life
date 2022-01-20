let totalVotos = 0, totalVotosBtnSat = 0, totalVotosBtnInd = 0, totalVotosBtnIns = 0;

//FUNÇÃO ARROW FUNCTION
const _$ = x => document.getElementById(x) || document.querySelector(x);

function anoCorrenteRodape (x) {
    let dataHoje = new Date();
    _$(x).textContent = dataHoje.getFullYear();
};


//FUNÇÃO BARRA PROGRESSO
function baraProgresso(votos, total, barras) {
    let progresso = 0;
    progresso = (votos * 100) / total;
    barras.style.width = progresso.toFixed(2) + "%";
};

//FUNÇÃO PERCENTUAL
function calcularPercentualSatisfeito(votoSatisfeito, total) {
    let calPercentualSat = 0
    calPercentualSat = (votoSatisfeito * 100) / total;

    _$("percentualSatisfeito").textContent = calPercentualSat.toFixed(2) + "%";
};

function calcularPercentualIndiferente(votosIndiferente, total) {
    let calPercentualInd = 0
    calPercentualInd = (votosIndiferente * 100) / total;

    _$("percentualIndiferente").textContent = calPercentualInd.toFixed(2) + "%";
};

function calcularPercentualInsatisfeito(votosInsatisfeito, total) {
    let calPercentualIns = 0
    calPercentualIns = (votosInsatisfeito * 100) / total;

    _$("percentualInsatisfeito").textContent = calPercentualIns.toFixed(2) + "%";
};


document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM totalmente carregado");

    //INSERIR O ANO NO RODAPÉ DA PÁGINA
    anoCorrenteRodape("ano");


    //BOTÕES DE VOTAÇÃO
    const btnSat = _$("btnSatisfeito");
    const btnInd = _$("btnIndiferente");
    const btnIns = _$("btnInsatisfeito");


    //BARRAS DE PROGRESSO
    const sat = _$(".satisfeito");
    const ind = _$(".indiferente");
    const ins = _$(".insatisfeito");


    //EVENTOS
    btnSat.addEventListener("click", function () {
        totalVotos++;
        totalVotosBtnSat++;

        _$("totalVotos").textContent = totalVotos;
        _$("totalVotoSatisfeito").textContent = totalVotosBtnSat;        

        calcularPercentualSatisfeito(totalVotosBtnSat, totalVotos);
        calcularPercentualIndiferente(totalVotosBtnInd, totalVotos);
        calcularPercentualInsatisfeito(totalVotosBtnIns, totalVotos);

        baraProgresso(totalVotosBtnSat, totalVotos, sat);
        baraProgresso(totalVotosBtnInd, totalVotos, ind);
        baraProgresso(totalVotosBtnIns, totalVotos, ins);
    });

    btnInd.addEventListener("click", function () {
        totalVotos++;
        totalVotosBtnInd++;

        _$("totalVotos").textContent = totalVotos;
        _$("totalVotosIndiferente").textContent = totalVotosBtnInd;

        calcularPercentualSatisfeito(totalVotosBtnSat, totalVotos);
        calcularPercentualIndiferente(totalVotosBtnInd, totalVotos);
        calcularPercentualInsatisfeito(totalVotosBtnIns, totalVotos);

        baraProgresso(totalVotosBtnSat, totalVotos, sat);
        baraProgresso(totalVotosBtnInd, totalVotos, ind);
        baraProgresso(totalVotosBtnIns, totalVotos, ins);
    });

    btnIns.addEventListener("click", function () {
        totalVotos++;
        totalVotosBtnIns++;

        _$("totalVotos").textContent = totalVotos;
        _$("totalVotosInsatisfeito").textContent = totalVotosBtnIns;

        calcularPercentualSatisfeito(totalVotosBtnSat, totalVotos);
        calcularPercentualIndiferente(totalVotosBtnInd, totalVotos);
        calcularPercentualInsatisfeito(totalVotosBtnIns, totalVotos);

        baraProgresso(totalVotosBtnSat, totalVotos, sat);
        baraProgresso(totalVotosBtnInd, totalVotos, ind);
        baraProgresso(totalVotosBtnIns, totalVotos, ins);
    });
});