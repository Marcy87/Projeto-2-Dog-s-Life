//FUNÇÃO ARROW FUNCTION
const _$ = x => document.getElementById(x) || document.querySelector(x);

function anoCorrenteRodape(x) {
    let dataHoje = new Date();
    _$(x).textContent = dataHoje.getFullYear();
};


document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM totalmente carregado");

    const _$ = vid => document.getElementById(vid);

    function dataSimples() {
        let hoje = new Date();

        _$("dia").textContent = (hoje.getDate() < 10) ? "0" + hoje.getDate() : hoje.getDate(); // operador ternario
        _$("mes").textContent = (hoje.getMonth() < 10) ? "0" + (hoje.getMonth() + 1) : (hoje.getMonth() + 1);
        _$("ano").textContent = hoje.getFullYear();


        _$("horas").textContent = (hoje.getHours() < 10) ? "0" + hoje.getHours() : hoje.getHours();
        _$("minutos").textContent = (hoje.getMinutes() < 10) ? "0" + hoje.getMinutes() : hoje.getMinutes();
        _$("segundos").textContent = (hoje.getSeconds() < 10) ? "0" + hoje.getSeconds() : hoje.getSeconds();
    };

    window.setInterval(dataSimples, 1000);


    //INSERIR O ANO NO RODAPÉ DA PÁGINA
    anoCorrenteRodape("anoCorrente");
});
