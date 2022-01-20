//FUNÇÃO ARROW FUNCTION
const _$ = x => document.getElementById(x) || document.querySelector(x);

function anoCorrenteRodape(x) {
    let dataHoje = new Date();
    _$(x).textContent = dataHoje.getFullYear();
};

document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM totalmente caregado");

    //INSERIR O ANO NO RODAPÉ DA PÁGINA
    anoCorrenteRodape("ano");

    const lim = 500;
    let txtTexto = document.querySelector("p > textarea");
    let vContador = document.getElementById("limite");

    txtTexto.addEventListener("input", function () {
        let total = txtTexto.value.length;
        vContador.textContent = (lim - total);
    });
});

