//FUNÇÃO ARROW FUNCTION
const _$ = x => document.getElementById(x) || document.querySelector(x);

function anoCorrenteRodape(x) {
    let dataHoje = new Date();
    _$(x).textContent = dataHoje.getFullYear();
};

document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM totalmente carregado");

    //INSERIR O ANO NO RODAPÉ DA PÁGINA
    anoCorrenteRodape("ano");


    const btnRes = document.getElementById("btnResumo");

    const msn1 = document.getElementById("mensagem1");
    const msn2 = document.getElementById("mensagem2");
    const msn3 = document.getElementById("mensagem3");
    const msn4 = document.getElementById("mensagem4");
    const msn5 = document.getElementById("mensagem5");

    btnRes.addEventListener("click", function () {

        const cp0 = document.getElementById("opcao");
        const cp1 = document.getElementById("quantidade");
        const cp2 = document.getElementById("cupom");
        const cp3 = document.getElementById("desconto");
        const cp4 = document.getElementById("frete");

        let opc = cp0.options[cp0.selectedIndex].value;
        let qtd = parseInt(cp1.value);
        let cup = cp2.options[cp2.selectedIndex].value;
        let desc = parseFloat(cp3.value);
        let fret = cp4.options[cp4.selectedIndex].value;

        msn1.innerHTML = opc;
        msn2.innerHTML = qtd;
        msn3.innerHTML = desc;
        msn4.innerHTML = cup;
        msn5.innerHTML = fret;

        msn1.textContent = "Opção digitado é: " + opc;
        msn2.textContent = "Quantidade digitado é: " + qtd;
        msn3.textContent = "Desconto digitado é: " + desc + " %";
        msn4.textContent = "Cupom digitado é: " + cup + "%";
        msn5.textContent = "Frete digitado é: " + fret;

        console.log("Executado");
    });


    const btnConf = document.getElementById("btnConfirmar");
    let numeroPedido = 1;

    btnConf.addEventListener("click", function () {
        const msn6 = document.getElementById("mensagem6");
        const msn7 = document.getElementById("mensagem7");

        msn6.textContent = "";
        msn7.textContent = "";

        const cp0 = document.getElementById("opcao");
        const cp1 = document.getElementById("quantidade");
        const cp2 = document.getElementById("cupom");
        const cp3 = document.getElementById("desconto");
        const cp4 = document.getElementById("frete")

        let opc = cp0.options[cp0.selectedIndex].value;
        let qtd = parseInt(cp1.value);
        let desc = parseFloat(cp3.value);
        let cup = cp2.options[cp2.selectedIndex].value;
        let fret = cp4.options[cp4.selectedIndex].value;
        let calcularQtd = 0;
        let calcularCupom = 0;
        let totalComCupom = 0;
        let totalDesc = 0;
        let total = 0;
        let totalComFrete = 0;

        switch (opc) {
            case '1':
                if (cup == "cupom10") {
                    if (fret == "frete5km") {
                        if (desc !== 0) {
                            calcularQtd = 40 * qtd;
                            calcularCupom = [(calcularQtd * 10) / 100];
                            totalComCupom = calcularQtd - calcularCupom;

                            totalDesc = (totalComCupom * desc) / 100;
                            total = totalComCupom - totalDesc;

                            totalComFrete = total + 50;
                            numeroPedido++;

                            console.log("if cupom10 com frete 5km com desconto executado com sucesso!!");
                        }
                        else {
                            calcularQtd = 40 * qtd;
                            calcularCupom = [(calcularQtd * 10) / 100];
                            totalcomcupom = calcularQtd - calcularCupom;

                            totalComFrete = totalComCupom + 50;
                            numeroPedido++;

                            console.log("else com cupom10 com frete 5km sem desconto executado com sucesso!!");
                        }
                    }
                    else if (fret == "frete10km") {
                        if (desc !== 0) {
                            calcularQtd = 40 * qtd;
                            calcularCupom = [(calcularQtd * 10) / 100];
                            totalComCupom = calcularQtd - calcularCupom;

                            totalDesc = (totalComCupom * desc) / 100;
                            total = totalComCupom - totalDesc;

                            totalComFrete = total + 80;
                            numeroPedido++;

                            console.log("if com cupom10 com frete 10km com desconto executado com sucesso!!");
                        }
                        else {
                            calcularQtd = 40 * qtd;
                            calcularCupom = [(calcularQtd * 10) / 100];
                            totalComCupom = calcularQtd - calcularCupom;

                            totalComFrete = totalComCupom + 80;
                            numeroPedido++;

                            console.log("Else com cupom10 com frete 10km sem desconto executado com sucesso!!");
                        }
                    }
                    else {
                        if (desc !== 0) {
                            calcularQtd = 40 * qtd;
                            calcularCupom = [(calcularQtd * 10) / 100];
                            totalComCupom = calcularQtd - calcularCupom;

                            totalDesc = (totalComCupom * desc) / 100;
                            total = totalComCupom - totalDesc;

                            totalComFrete = total + 100;
                            numeroPedido++;

                            console.log("if com cupom10 com frete 15km com desconto executado com sucesso!!");
                        }
                        else {
                            calcularQtd = 40 * qtd;
                            calcularCupom = [(calcularQtd * 10) / 100];
                            totalComCupom = calcularQtd - calcularCupom;

                            totalComFrete = totalComCupom + 100;
                            numeroPedido++;

                            console.log("Else com cupom10 com frete 15km sem desconto executado com sucesso!!");
                        }
                    }
                }
                else if (cup == "cupom15") {
                    if (fret == "frete5km") {
                        if (desc !== 0) {
                            calcularQtd = 40 * qtd;
                            calcularCupom = [(calcularQtd * 15) / 100];
                            totalComCupom = calcularQtd - calcularCupom;

                            totalDesc = (totalComCupom * desc) / 100;
                            total = totalComCupom - totalDesc;

                            totalComFrete = total + 50;
                            numeroPedido++;

                            console.log("if com cupom20 com frete 5km com desconto executado com sucesso!!");
                        }
                        else {
                            calcularQtd = 40 * qtd;
                            calcularCupom = [(calcularQtd * 15) / 100];
                            totalComCupom = calcularQtd - calcularCupom;

                            totalComFrete = totalComCupom + 50;
                            numeroPedido++;

                            console.log("Else com cupom20 frete 5km sem desconto executado com sucesso!!");
                        }
                    }
                    else if (fret == "frete10km") {
                        if (desc !== 0) {
                            calcularQtd = 40 * qtd;
                            calcularCupom = [(calcularQtd * 15) / 100];
                            totalComCupom = calcularQtd - calcularCupom;

                            totalDesc = (totalComCupom * desc) / 100;
                            total = totalComCupom - totalDesc;

                            totalComFrete = total + 80;
                            numeroPedido++;

                            console.log("if com cupom20 com frete 10km com desconto executado com sucesso!!");
                        }
                        else {
                            calcularQtd = 40 * qtd;
                            calcularCupom = [(calcularQtd * 15) / 100];
                            totalComCupom = calcularQtd - calcularCupom;

                            totalComFrete = totalComCupom + 80;
                            numeroPedido++;

                            console.log("Else com cupom20 frete 10km sem desconto executado com sucesso!!");
                        }
                    }
                    else {
                        if (desc !== 0) {
                            calcularQtd = 40 * qtd;
                            calcularCupom = [(calcularQtd * 15) / 100];
                            totalComCupom = calcularQtd - calcularCupom;

                            totalDesc = (totalComCupom * desc) / 100;
                            total = totalComCupom - totalDesc;

                            totalComFrete = total + 100;
                            numeroPedido++;

                            console.log("if com cupom20 com frete 15km com desconto executado com sucesso!!");
                        }
                        else {
                            calcularQtd = 40 * qtd;
                            calcularCupom = [(calcularQtd * 15) / 100];
                            totalComCupom = calcularQtd - calcularCupom;

                            totalComFrete = totalComCupom + 100;
                            numeroPedido++;

                            console.log("Else com cupom20 frete 15km sem desconto executado com sucesso!!");
                        }
                    }
                }
                else {
                    if (fret == "frete5km") {
                        if (desc !== 0) {
                            calcularQtd = 40 * qtd;
                            calcularCupom = [(calcularQtd * 20) / 100];
                            totalComcupom = calcularQtd - calcularCupom;

                            totalDesc = (totalComCupom * desc) / 100;
                            total = totalComCupom - totalDesc;

                            totalComFrete = total + 50;
                            numeroPedido++;

                            console.log("if com cupom25 com frete 5km com desconto executado com sucesso!!");
                        }
                        else {
                            calcularQtd = 40 * qtd;
                            calcularCupom = [(calcularQtd * 20) / 100];
                            totalComCupom = calcularQtd - calcularCupom;

                            totalComFrete = totalComCupom + 50;
                            numeroPedido++;

                            console.log("Else com cupom25 frete 5km sem desconto executado com sucesso!!");
                        }
                    }
                    else if (fret == "frete10km") {
                        if (desc !== 0) {
                            calcularQtd = 40 * qtd;
                            calcularCupom = [(calcularQtd * 20) / 100];
                            totalComCupom = calcularQtd - calcularCupom;

                            totalDesc = (totalComCupom * desc) / 100;
                            total = totalComCupom - totalDesc;

                            totalComFrete = total + 80;
                            numeroPedido++;

                            console.log("if com cupom25 com frete 10km com desconto executado com sucesso!!");
                        }
                        else {
                            calcularQtd = 40 * qtd;
                            calcularCupom = [(calcularQtd * 20) / 100];
                            totalComCupom = calcularQtd - calcularCupom;

                            totalComFrete = totalComCupom + 80;
                            numeroPedido++;

                            console.log("Else com cupom25 frete 10km sem desconto executado com sucesso!!");
                        }
                    }
                    else {
                        if (desc !== 0) {
                            calcularQtd = 40 * qtd;
                            calcularCupom = [(calcularQtd * 20) / 100];
                            totalComCupom = calcularQtd - calcularCupom;

                            totalDesc = (totalComCupom * desc) / 100;
                            total = totalComCupom - totalDesc;

                            totalComFrete = total + 100;
                            numeroPedido++;

                            console.log("if com cupom25 com frete 15km com desconto executado com sucesso!!");
                        }
                        else {
                            calcularQtd = 40 * qtd;
                            calcularCupom = [(calcularQtd * 20) / 100];
                            totalComCupom = calcularQtd - calcularCupom;

                            totalComFrete = totalComCupom + 100;
                            numeroPedido++;

                            console.log("Else com cupom25 frete 15km sem desconto executado com sucesso!!");
                        }
                    }
                };
                break;
            case '2':
                if (cup == "cupom10") {
                    if (fret == "frete5km") {
                        if (desc !== 0) {
                            calcularQtd = 100 * qtd;
                            calcularCupom = [(calcularQtd * 10) / 100];
                            totalComCupom = calcularQtd - calcularCupom;

                            totalDesc = (totalComCupom * desc) / 100;
                            total = totalComCupom - totalDesc;

                            totalComFrete = total + 50;
                            numeroPedido++;

                            console.log("if cupom10 com frete 5km com desconto executado com sucesso!!");
                        }
                        else {
                            calcularQtd = 100 * qtd;
                            calcularCupom = [(calcularQtd * 10) / 100];
                            totalComCupom = calcularQtd - calcularCupom;

                            totalComFrete = totalComCupom + 50;
                            numeroPedido++;

                            console.log("else com cupom10 com frete 5km sem desconto executado com sucesso!!");
                        }
                    }
                    else if (fret == "frete10km") {
                        if (desc !== 0) {
                            calcularQtd = 100 * qtd;
                            calcularCupom = [(calcularQtd * 10) / 100];
                            totalComCupom = calcularQtd - calcularCupom;

                            totalDesc = (totalComCupom * desc) / 100;
                            total = totalComCupom - totalDesc;

                            totalComFrete = total + 80;
                            numeroPedido++;

                            console.log("if com cupom10 com frete 10km com desconto executado com sucesso!!");
                        }
                        else {
                            calcularQtd = 100 * qtd;
                            calcularCupom = [(calcularQtd * 10) / 100];
                            totalComCupom = calcularQtd - calcularCupom;

                            totalComFrete = totalComCupom + 80;
                            numeroPedido++;

                            console.log("Else com cupom10 com frete 10km sem desconto executado com sucesso!!");
                        }
                    }
                    else {
                        if (desc !== 0) {
                            calcularQtd = 100 * qtd;
                            calcularCupom = [(calcularQtd * 10) / 100];
                            totalComCupom = calcularQtd - calcularCupom;

                            totalDesc = (totalComCupom * desc) / 100;
                            total = totalComCupom - totalDesc;

                            totalComFrete = total + 100;
                            numeroPedido++;

                            console.log("if com cupom10 com frete 15km com desconto executado com sucesso!!");
                        }
                        else {
                            calcularQtd = 100 * qtd;
                            calcularCupom = [(calcularQtd * 10) / 100];
                            totalComCupom = calcularQtd - calcularCupom;

                            totalComFrete = totalComCupom + 100;
                            numeroPedido++;

                            console.log("Else com cupom10 com frete 15km sem desconto executado com sucesso!!");
                        }
                    };
                }
                else if (cup == "cupom15") {
                    if (fret == "frete5km") {
                        if (desc !== 0) {
                            calcularQtd = 100 * qtd;
                            calcularCupom = [(calcularQtd * 15) / 100];
                            totalComCupom = calcularQtd - calcularCupom;

                            totalDesc = (totalComCupom * desc) / 100;
                            total = totalComCupom - totalDesc;

                            totalComFrete = total + 50;
                            numeroPedido++;

                            console.log("if com cupom20 com frete 5km com desconto executado com sucesso!!");
                        }
                        else {
                            calcularQtd = 100 * qtd;
                            calcularCupom = [(calcularQtd * 15) / 100];
                            totalComCupom = calcularQtd - calcularCupom;

                            totalComFrete = totalComCupom + 50;
                            numeroPedido++;

                            console.log("Else com cupom20 frete 5km sem desconto executado com sucesso!!");
                        }
                    }
                    else if (fret == "frete10km") {
                        if (desc !== 0) {
                            calcularQtd = 100 * qtd;
                            calcularCupom = [(calcularQtd * 15) / 100];
                            totalComCupom = calcularQtd - calcularCupom;

                            totalDesc = (totalComCupom * desc) / 100;
                            total = totalComCupom - totalDesc;

                            totalComFrete = total + 80;
                            numeroPedido++;

                            console.log("if com cupom20 com frete 10km com desconto executado com sucesso!!");
                        }
                        else {
                            calcularQtd = 100 * qtd;
                            calcularCupom = [(calcularQtd * 15) / 100];
                            totalComCupom = calcularQtd - calcularCupom;

                            totalComFrete = totalComCupom + 80;
                            numeroPedido++;

                            console.log("Else com cupom20 frete 10km sem desconto executado com sucesso!!");
                        }
                    }
                    else {
                        if (desc !== 0) {
                            calcularQtd = 100 * qtd;
                            calcularCupom = [(calcularQtd * 15) / 100];
                            totalComCupom = calcularQtd - calcularCupom;

                            totalDesc = (totalComCupom * desc) / 100;
                            total = totalComCupom - totalDesc;

                            totalComFrete = total + 100;
                            numeroPedido++;

                            console.log("if com cupom20 com frete 15km com desconto executado com sucesso!!");
                        }
                        else {
                            calcularQtd = 100 * qtd;
                            calcularCupom = [(calcularQtd * 15) / 100];
                            totalComCupom = calcularQtd - calcularCupom;

                            totalComFrete = totalComCupom + 100;
                            numeroPedido++;

                            console.log("Else com cupom20 frete 15km sem desconto executado com sucesso!!");
                        }
                    }
                }
                else if (cup == "cupom20") {
                    if (fret == "frete5km") {
                        if (desc !== 0) {
                            calcularQtd = 100 * qtd;
                            calcularCupom = [(calcularQtd * 20) / 100];
                            totalComCupom = calcularQtd - calcularCupom;

                            totalDesc = (totalComCupom * desc) / 100;
                            total = totalComCupom - totalDesc;

                            totalComFrete = total + 50;
                            numeroPedido++;

                            console.log("if com cupom25 com frete 5km com desconto executado com sucesso!!");
                        }
                        else {
                            calcularQtd = 100 * qtd;
                            calcularCupom = [(calcularQtd * 20) / 100];
                            totalComCupom = calcularQtd - calcularCupom;

                            totalComFrete = totalComCupom + 50;
                            numeroPedido++;

                            console.log("Else com cupom25 frete 5km sem desconto executado com sucesso!!");
                        }
                    }
                    else if (fret == "frete10km") {
                        if (desc !== 0) {
                            calcularQtd = 100 * qtd;
                            calcularCupom = [(calcularQtd * 20) / 100];
                            totalComCupom = calcularQtd - calcularCupom;

                            totalDesc = (totalComCupom * desc) / 100;
                            total = totalComCupom - totalDesc;

                            totalComFrete = total + 80;
                            numeroPedido++;

                            console.log("if com cupom25 com frete 10km com desconto executado com sucesso!!");
                        }
                        else {
                            calcularQtd = 100 * qtd;
                            calcularCupom = [(calcularQtd * 20) / 100];
                            totalComCupom = calcularQtd - calcularCupom;

                            totalComFrete = totalComCupom + 80;
                            numeroPedido++;

                            console.log("Else com cupom25 frete 10km sem desconto executado com sucesso!!");
                        }
                    }
                    else {
                        if (desc !== 0) {
                            calcularQtd = 100 * qtd;
                            calcularCupom = [(calcularQtd * 20) / 100];
                            totalComCupom = calcularQtd - calcularCupom;

                            totalDesc = (totalComCupom * desc) / 100;
                            total = totalComCupom - totalDesc;

                            totalComFrete = total + 100;
                            numeroPedido++;

                            console.log("if com cupom25 com frete 15km com desconto executado com sucesso!!");
                        }
                        else {
                            calcularQtd = 100 * qtd;
                            calcularCupom = [(calcularQtd * 20) / 100];
                            totalComCupom = calcularQtd - calcularCupom;

                            totalComFrete = totalComCupom + 100;
                            numeroPedido++;

                            console.log("Else com cupom25 frete 15km sem desconto executado com sucesso!!");
                        }
                    }
                };
                break;
            case '3':
                if (cup == "cupom10") {
                    if (fret == "frete5km") {
                        if (desc !== 0) {
                            calcularQtd = 800 * qtd;
                            calcularCupom = [(calcularQtd * 10) / 100];
                            totalComCupom = calcularQtd - calcularCupom;

                            totalDesc = (totalComCupom * desc) / 100;
                            total = totalComCupom - totalDesc;

                            totalComFrete = total + 50;
                            numeroPedido++;

                            console.log("if cupom10 com frete 5km com desconto executado com sucesso!!");
                        }
                        else {
                            calcularQtd = 800 * qtd;
                            calcularCupom = [(calcularQtd * 10) / 100];
                            totalComCupom = calcularQtd - calcularCupom;

                            totalComFrete = totalComCupom + 50;
                            numeroPedido++;

                            console.log("else com cupom10 com frete 5km sem desconto executado com sucesso!!");
                        }
                    }
                    else if (fret == "frete10km") {
                        if (desc !== 0) {
                            calcularQtd = 800 * qtd;
                            calcularCupom = [(calcularQtd * 10) / 100];
                            totalComCupom = calcularQtd - calcularCupom;

                            totalDesc = (totalComCupom * desc) / 100;
                            total = totalComCupom - totalDesc;

                            totalComFrete = total + 80;
                            numeroPedido++;

                            console.log("if com cupom10 com frete 10km com desconto executado com sucesso!!");
                        }
                        else {
                            calcularQtd = 800 * qtd;
                            calcularCupom = [(calcularQtd * 10) / 100];
                            totalComCupom = calcularQtd - calcularCupom;

                            totalComFrete = totalComCupom + 80;
                            numeroPedido++;

                            console.log("Else com cupom10 com frete 10km sem desconto executado com sucesso!!");
                        }
                    }
                    else {
                        if (desc !== 0) {
                            calcularQtd = 800 * qtd;
                            calcularCupom = [(calcularQtd * 10) / 100];
                            totalComCupom = calcularQtd - calcularCupom;

                            totalDesc = (totalComCupom * desc) / 100;
                            total = totalComCupom - totalDesc;

                            totalComFrete = total + 100;
                            numeroPedido++;

                            console.log("if com cupom10 com frete 15km com desconto executado com sucesso!!");
                        }
                        else {
                            calcularQtd = 800 * qtd;
                            calcularCupom = [(calcularQtd * 10) / 100];
                            totalComCupom = calcularQtd - calcularCupom;

                            totalComFrete = totalComCupom + 100;
                            numeroPedido++;

                            console.log("Else com cupom10 com frete 15km sem desconto executado com sucesso!!");
                        }
                    };
                }
                else if (cup == "cupom15") {
                    if (fret == "frete5km") {
                        if (desc !== 0) {
                            calcularQtd = 800 * qtd;
                            calcularCupom = [(calcularQtd * 15) / 100];
                            totalComCupom = calcularQtd - calcularCupom;

                            totalDesc = (totalComCupom * desc) / 100;
                            total = totalComCupom - totalDesc;

                            totalComFrete = total + 50;
                            numeroPedido++;

                            console.log("if com cupom20 com frete 5km com desconto executado com sucesso!!");
                        }
                        else {
                            calcularQtd = 800 * qtd;
                            calcularCupom = [(calcularQtd * 15) / 100];
                            totalComCupom = calcularQtd - calcularCupom;

                            totalComFrete = totalComCupom + 50;
                            numeroPedido++;

                            console.log("Else com cupom20 frete 5km sem desconto executado com sucesso!!");
                        }
                    }
                    else if (fret == "frete10km") {
                        if (desc !== 0) {
                            calcularQtd = 800 * qtd;
                            calcularCupom = [(calcularQtd * 15) / 100];
                            totalComCupom = calcularQtd - calcularCupom;

                            totalDesc = (totalComCupom * desc) / 100;
                            total = totalComCupom - totalDesc;

                            totalComFrete = total + 80;
                            numeroPedido++;

                            console.log("if com cupom20 com frete 10km com desconto executado com sucesso!!");
                        }
                        else {
                            calcularQtd = 800 * qtd;
                            calcularCupom = [(calcularQtd * 15) / 100];
                            totalComCupom = calcularQtd - calcularCupom;

                            totalComFrete = totalComCupom + 80;
                            numeroPedido++;

                            console.log("Else com cupom20 frete 10km sem desconto executado com sucesso!!");
                        }
                    }
                    else {
                        if (desc !== 0) {
                            calcularQtd = 800 * qtd;
                            calcularCupom = [(calcularQtd * 15) / 100];
                            totalComCupom = calcularQtd - calcularCupom;

                            totalDesc = (totalComCupom * desc) / 100;
                            total = totalComCupom - totalDesc;

                            totalComFrete = total + 100;
                            numeroPedido++;

                            console.log("if com cupom20 com frete 15km com desconto executado com sucesso!!");
                        }
                        else {
                            calcularQtd = 800 * qtd;
                            calcularCupom = [(calcularQtd * 15) / 100];
                            totalComCupom = calcularQtd - calcularCupom;

                            totalComFrete = totalComCupom + 100;
                            numeroPedido++;

                            console.log("Else com cupom20 frete 15km sem desconto executado com sucesso!!");
                        }
                    }
                }
                else if (cup == "cupom20") {
                    if (fret == "frete5km") {
                        if (desc !== 0) {
                            calcularQtd = 800 * qtd;
                            calcularCupom = [(calcularQtd * 15) / 100];
                            totalComCupom = calcularQtd - calcularCupom;

                            totalDesc = (totalComCupom * desc) / 100;
                            total = totalComCupom - totalDesc;

                            totalComFrete = total + 50;
                            numeroPedido++;

                            console.log("if com cupom25 com frete 5km com desconto executado com sucesso!!");
                        }
                        else {
                            calcularQtd = 800 * qtd;
                            calcularCupom = [(calcularQtd * 15) / 100];
                            totalComCupom = calcularQtd - calcularCupom;

                            totalComFrete = totalComCupom + 50;
                            numeroPedido++;

                            console.log("Else com cupom25 frete 5km sem desconto executado com sucesso!!");
                        }
                    }
                    else if (fret == "frete10km") {
                        if (desc !== 0) {
                            calcularQtd = 800 * qtd;
                            calcularCupom = [(calcularQtd * 20) / 100];
                            totalComCupom = calcularQtd - calcularCupom;

                            totalDesc = (totalComCupom * desc) / 100;
                            total = totalComCupom - totalDesc;

                            totalComFrete = total + 80;
                            numeroPedido++;

                            console.log("if com cupom25 com frete 10km com desconto executado com sucesso!!");
                        }
                        else {
                            calcularQtd = 800 * qtd;
                            calcularCupom = [(calcularQtd * 20) / 100];
                            totalComCupom = calcularQtd - calcularCupom;

                            totalComFrete = totalComCupom + 80;
                            numeroPedido++;

                            console.log("Else com cupom25 frete 10km sem desconto executado com sucesso!!");
                        }
                    }
                    else {
                        if (desc !== 0) {
                            calcularQtd = 800 * qtd;
                            calcularCupom = [(calcularQtd * 20) / 100];
                            totalComCupom = calcularQtd - calcularCupom;

                            totalDesc = (totalComCupom * desc) / 100;
                            total = totalComCupom - totalDesc;

                            totalComFrete = total + 100;
                            numeroPedido++;

                            console.log("if com cupom25 com frete 15km com desconto executado com sucesso!!");
                        }
                        else {
                            calcularQtd = 800 * qtd;
                            calcularCupom = [(calcularQtd * 20) / 100];
                            totalComCupom = calcularQtd - calcularCupom;

                            totalComFrete = totalComCupom + 100;
                            numeroPedido++;

                            console.log("Else com cupom25 frete 15km sem desconto executado com sucesso!!");
                        }
                    }
                };
                break;
            case '4':
                if (cup == "cupom10") {
                    if (fret == "frete5km") {
                        if (desc !== 0) {
                            calcularQtd = 1100 * qtd;
                            calcularCupom = [(calcularQtd * 10) / 100];
                            totalComCupom = calcularQtd - calcularCupom;

                            totalDesc = (totalComCupom * desc) / 100;
                            total = totalComCupom - totalDesc;

                            totalComFrete = total + 50;
                            numeroPedido++;

                            console.log("if cupom10 com frete 5km com desconto executado com sucesso!!");
                        }
                        else {
                            calcularQtd = 1100 * qtd;
                            calcularCupom = [(calcularQtd * 10) / 100];
                            totalComCupom = calcularQtd - calcularCupom;

                            totalComFrete = totalComCupom + 50;
                            numeroPedido++;

                            console.log("else com cupom10 com frete 5km sem desconto executado com sucesso!!");
                        }
                    }
                    else if (fret == "frete10km") {
                        if (desc !== 0) {
                            calcularQtd = 1100 * qtd;
                            calcularCupom = [(calcularQtd * 10) / 100];
                            totalComCupom = calcularQtd - calcularCupom;

                            totalDesc = (totalComCupom * desc) / 100;
                            total = totalComCupom - totalDesc;

                            totalComFrete = total + 80;
                            numeroPedido++;

                            console.log("if com cupom10 com frete 10km com desconto executado com sucesso!!");
                        }
                        else {
                            calcularQtd = 1100 * qtd;
                            calcularCupom = [(calcularQtd * 10) / 100];
                            totalComCupom = calcularQtd - calcularCupom;

                            totalComFrete = totalComCupom + 80;
                            numeroPedido++;

                            console.log("Else com cupom10 com frete 10km sem desconto executado com sucesso!!");
                        }
                    }
                    else {
                        if (desc !== 0) {
                            calcularQtd = 1100 * qtd;
                            calcularCupom = [(calcularQtd * 10) / 100];
                            totalComCupom = calcularQtd - calcularCupom;

                            totalDesc = (totalComCupom * desc) / 100;
                            total = totalComCupom - totalDesc;

                            totalComFrete = total + 100;
                            numeroPedido++;

                            console.log("if com cupom10 com frete 15km com desconto executado com sucesso!!");
                        }
                        else {
                            calcularQtd = 1100 * qtd;
                            calcularCupom = [(calcularQtd * 10) / 100];
                            totalComCupom = calcularQtd - calcularCupom;

                            totalComFrete = totalComCupom + 100;
                            numeroPedido++;

                            console.log("Else com cupom10 com frete 15km sem desconto executado com sucesso!!");
                        }
                    };
                }
                else if (cup == "cupom15") {
                    if (fret == "frete5km") {
                        if (desc !== 0) {
                            calcularQtd = 1100 * qtd;
                            calcularCupom = [(calcularQtd * 15) / 100];
                            totalComCupom = calcularQtd - calcularCupom;

                            totalDesc = (totalComCupom * desc) / 100;
                            total = totalComCupom - totalDesc;

                            totalComFrete = total + 50;
                            numeroPedido++;

                            console.log("if com cupom20 com frete 5km com desconto executado com sucesso!!");
                        }
                        else {
                            calcularQtd = 1100 * qtd;
                            calcularCupom = [(calcularQtd * 15) / 100];
                            totalComCupom = calcularQtd - calcularCupom;

                            totalComFrete = totalComCupom + 50;
                            numeroPedido++;

                            console.log("Else com cupom20 frete 5km sem desconto executado com sucesso!!");
                        }
                    }
                    else if (fret == "frete10km") {
                        if (desc !== 0) {
                            calcularQtd = 1100 * qtd;
                            calcularCupom = [(calcularQtd * 15) / 100];
                            totalComCupom = calcularQtd - calcularCupom;

                            totalDesc = (totalComCupom * desc) / 100;
                            total = totalComCupom - totalDesc;

                            totalComFrete = total + 80;
                            numeroPedido++;

                            console.log("if com cupom20 com frete 10km com desconto executado com sucesso!!");
                        }
                        else {
                            calcularQtd = 1100 * qtd;
                            calcularCupom = [(calcularQtd * 15) / 100];
                            totalComCupom = calcularQtd - calcularCupom;

                            totalComFrete = totalComCupom + 80;
                            numeroPedido++;

                            console.log("Else com cupom20 frete 10km sem desconto executado com sucesso!!");
                        }
                    }
                    else {
                        if (desc !== 0) {
                            calcularQtd = 1100 * qtd;
                            calcularCupom = [(calcularQtd * 15) / 100];
                            totalComCupom = calcularQtd - calcularCupom;

                            totalDesc = (totalComCupom * desc) / 100;
                            total = totalComCupom - totalDesc;

                            totalComFrete = total + 100;
                            numeroPedido++;

                            console.log("if com cupom20 com frete 15km com desconto executado com sucesso!!");
                        }
                        else {
                            calcularQtd = 1100 * qtd;
                            calcularCupom = [(calcularQtd * 15) / 100];
                            totalComCupom = calcularQtd - calcularCupom;

                            totalComFrete = totalComCupom + 100;
                            numeroPedido++;

                            console.log("Else com cupom20 frete 15km sem desconto executado com sucesso!!");
                        }
                    }
                }
                else if (cup == "cupom20") {
                    if (fret == "frete5km") {
                        if (desc !== 0) {
                            calcularQtd = 1100 * qtd;
                            calcularCupom = [(calcularQtd * 20) / 100];
                            totalComCupom = calcularQtd - calcularCupom;

                            totalDesc = (totalComCupom * desc) / 100;
                            total = totalComCupom - totalDesc;

                            totalComFrete = total + 50;
                            numeroPedido++;

                            console.log("if com cupom25 com frete 5km com desconto executado com sucesso!!");
                        }
                        else {
                            calcularQtd = 1100 * qtd;
                            calcularCupom = [(calcularQtd * 20) / 100];
                            totalComCupom = calcularQtd - calcularCupom;

                            totalComFrete = totalComCupom + 50;
                            numeroPedido++;

                            console.log("Else com cupom25 frete 5km sem desconto executado com sucesso!!");
                        }
                    }
                    else if (fret == "frete10km") {
                        if (desc !== 0) {
                            calcularQtd = 1100 * qtd;
                            calcularCupom = [(calcularQtd * 20) / 100];
                            totalComCupom = calcularQtd - calcularCupom;

                            totalDesc = (totalComCupom * desc) / 100;
                            total = totalComCupom - totalDesc;

                            totalComFrete = total + 80;
                            numeroPedido++;

                            console.log("if com cupom25 com frete 10km com desconto executado com sucesso!!");
                        }
                        else {
                            calcularQtd = 1100 * qtd;
                            calcularCupom = [(calcularQtd * 20) / 100];
                            totalComCupom = calcularQtd - calcularCupom;

                            totalComFrete = totalComCupom + 80;
                            numeroPedido++;

                            console.log("Else com cupom25 frete 10km sem desconto executado com sucesso!!");
                        }
                    }
                    else {
                        if (desc !== 0) {
                            calcularQtd = 1100 * qtd;
                            calcularCupom = [(calcularQtd * 20) / 100];
                            totalComCupom = calcularQtd - calcularCupom;

                            totalDesc = (totalComCupom * desc) / 100;
                            total = totalComCupom - totalDesc;

                            totalComFrete = total + 100;
                            numeroPedido++;

                            console.log("if com cupom25 com frete 15km com desconto executado com sucesso!!");
                        }
                        else {
                            calcularQtd = 1100 * qtd;
                            calcularCupom = [(calcularQtd * 20) / 100];
                            totalComCupom = calcularQtd - calcularCupom;

                            totalComFrete = totalComCupom + 100;
                            numeroPedido++;

                            console.log("Else com cupom25 frete 15km sem desconto executado com sucesso!!");
                        }
                    }
                };
                break;
            case '5':
                if (cup == "cupom10") {
                    if (fret == "frete5km") {
                        if (desc !== 0) {
                            calcularQtd = 1800 * qtd;
                            calcularCupom = [(calcularQtd * 10) / 100];
                            totalComCupom = calcularQtd - calcularCupom;

                            totalDesc = (totalComCupom * desc) / 100;
                            total = totalComCupom - totalDesc;

                            totalComFrete = total + 50;
                            numeroPedido++;

                            console.log("if cupom10 com frete 5km com desconto executado com sucesso!!");
                        }
                        else {
                            calcularQtd = 1800 * qtd;
                            calcularCupom = [(calcularQtd * 10) / 100];
                            totalComCupom = calcularQtd - calcularCupom;

                            totalComFrete = totalComCupom + 50;
                            numeroPedido++;

                            console.log("else com cupom10 com frete 5km sem desconto executado com sucesso!!");
                        }
                    }
                    else if (fret == "frete10km") {
                        if (desc !== 0) {
                            calcularQtd = 1800 * qtd;
                            calcularCupom = [(calcularQtd * 10) / 100];
                            totalComCupom = calcularQtd - calcularCupom;

                            totalDesc = (totalComCupom * desc) / 100;
                            total = totalComCupom - totalDesc;

                            totalComFrete = total + 80;
                            numeroPedido++;

                            console.log("if com cupom10 com frete 10km com desconto executado com sucesso!!");
                        }
                        else {
                            calcularQtd = 1800 * qtd;
                            calcularCupom = [(calcularQtd * 10) / 100];
                            totalComCupom = calcularQtd - calcularCupom;

                            totalComFrete = totalComCupom + 80;
                            numeroPedido++;

                            console.log("Else com cupom10 com frete 10km sem desconto executado com sucesso!!");
                        }
                    }
                    else {
                        if (desc !== 0) {
                            calcularQtd = 1800 * qtd;
                            calcularCupom = [(calcularQtd * 10) / 100];
                            totalComCupom = calcularQtd - calcularCupom;

                            totalDesc = (totalComCupom * desc) / 100;
                            total = totalComCupom - totalDesc;

                            totalComFrete = total + 100;
                            numeroPedido++;

                            console.log("if com cupom10 com frete 15km com desconto executado com sucesso!!");
                        }
                        else {
                            calcularQtd = 1800 * qtd;
                            calcularCupom = [(calcularQtd * 10) / 100];
                            totalcomCupom = calcularQtd - calcularCupom;

                            totalComFrete = totalComCupom + 100;
                            numeroPedido++;

                            console.log("Else com cupom10 com frete 15km sem desconto executado com sucesso!!");
                        }
                    };
                }
                else if (cup == "cupom15") {
                    if (fret == "frete5km") {
                        if (desc !== 0) {
                            calcularQtd = 1800 * qtd;
                            calcularCupom = [(calcularQtd * 15) / 100];
                            totalComCupom = calcularQtd - calcularCupom;

                            totalDesc = (totalComCupom * desc) / 100;
                            total = totalComCupom - totalDesc;

                            totalComFrete = total + 50;
                            numeroPedido++;

                            console.log("if com cupom20 com frete 5km com desconto executado com sucesso!!");
                        }
                        else {
                            calcularQtd = 1800 * qtd;
                            calcularCupom = [(calcularQtd * 15) / 100];
                            totalComCupom = calcularQtd - calcularCupom;

                            totalComFrete = totalComCupom + 50;
                            numeroPedido++;

                            console.log("Else com cupom20 frete 5km sem desconto executado com sucesso!!");
                        }
                    }
                    else if (fret == "frete10km") {
                        if (desc !== 0) {
                            calcularQtd = 1800 * qtd;
                            calcularCupom = [(calcularQtd * 15) / 100];
                            totalComCupom = calcularQtd - calcularCupom;

                            totalDesc = (totalComCupom * desc) / 100;
                            total = totalComCupom - totalDesc;

                            totalComFrete = total + 80;
                            numeroPedido++;

                            console.log("if com cupom20 com frete 10km com desconto executado com sucesso!!");
                        }
                        else {
                            calcularQtd = 1800 * qtd;
                            calcularCupom = [(calcularQtd * 15) / 100];
                            totalComCupom = calcularQtd - calcularCupom;

                            totalComFrete = totalComCupom + 80;
                            numeroPedido++;

                            console.log("Else com cupom20 frete 10km sem desconto executado com sucesso!!");
                        }
                    }
                    else {
                        if (desc !== 0) {
                            calcularQtd = 1800 * qtd;
                            calcularCupom = [(calcularQtd * 15) / 100];
                            totalComCupom = calcularQtd - calcularCupom;

                            totalDesc = (totalComCupom * desc) / 100;
                            total = totalComCupom - totalDesc;

                            totalComFrete = total + 100;
                            numeroPedido++;

                            console.log("if com cupom20 com frete 15km com desconto executado com sucesso!!");
                        }
                        else {
                            calcularQtd = 1800 * qtd;
                            calcularCupom = [(calcularQtd * 15) / 100];
                            totalComCupom = calcularQtd - calcularCupom;

                            totalComFrete = totalComCupom + 100;
                            numeroPedido++;

                            console.log("Else com cupom20 frete 15km sem desconto executado com sucesso!!");
                        }
                    }
                }
                else if (cup == "cupom20") {
                    if (fret == "frete5km") {
                        if (desc !== 0) {
                            calcularQtd = 1800 * qtd;
                            calcularCupom = [(calcularQtd * 20) / 100];
                            totalComCupom = calcularQtd - calcularCupom;

                            totalDesc = (totalComCupom * desc) / 100;
                            total = totalComCupom - totalDesc;

                            totalComFrete = total + 50;
                            numeroPedido++;

                            console.log("if com cupom25 com frete 5km com desconto executado com sucesso!!");
                        }
                        else {
                            calcularQtd = 1800 * qtd;
                            calcularCupom = [(calcularQtd * 20) / 100];
                            totalComCupom = calcularQtd - calcularCupom;

                            totalComFrete = totalComCupom + 50;
                            numeroPedido++;

                            console.log("Else com cupom25 frete 5km sem desconto executado com sucesso!!");
                        }
                    }
                    else if (fret == "frete10km") {
                        if (desc !== 0) {
                            calcularQtd = 1800 * qtd;
                            calcularCupom = [(calcularQtd * 20) / 100];
                            totalComCupom = calcularQtd - calcularCupom;

                            totalDesc = (totalComCupom * desc) / 100;
                            total = totalComCupom - totalDesc;

                            totalComFrete = total + 80;
                            numeroPedido++;

                            console.log("if com cupom25 com frete 10km com desconto executado com sucesso!!");
                        }
                        else {
                            calcularQtd = 1800 * qtd;
                            calcularCupom = [(calcularQtd * 20) / 100];
                            totalComCupom = calcularQtd - calcularCupom;

                            totalComFrete = totalComCupom + 80;
                            numeroPedido++;

                            console.log("Else com cupom25 frete 10km sem desconto executado com sucesso!!");
                        }
                    }
                    else {
                        if (desc !== 0) {
                            calcularQtd = 1800 * qtd;
                            calcularCupom = [(calcularQtd * 20) / 100];
                            totalComCupom = calcularQtd - calcularCupom;

                            totalDesc = (totalComCupom * desc) / 100;
                            total = totalComCupom - totalDesc;

                            totalComFrete = total + 100;
                            numeroPedido++;

                            console.log("if com cupom25 com frete 15km com desconto executado com sucesso!!");
                        }
                        else {
                            calcularQtd = 1800 * qtd;
                            calcularCupom = [(calcularQtd * 20) / 100];
                            totalComCupom = calcularQtd - calcularCupom;

                            totalComFrete = totalComCupom + 100;
                            numeroPedido++;

                            console.log("Else com cupom25 frete 15km sem desconto executado com sucesso!!");
                        }
                    }
                };
                break;
            case '6':
                if (cup == "cupom10") {
                    if (fret == "frete5km") {
                        if (desc !== 0) {
                            calcularQtd = 2800 * qtd;
                            calcularCupom = [(calcularQtd * 10) / 100];
                            totalComCupom = calcularQtd - calcularCupom;

                            totalDesc = (totalComCupom * desc) / 100;
                            total = totalComCupom - totalDesc;

                            totalComFrete = total + 50;
                            numeroPedido++;

                            console.log("if cupom10 com frete 5km com desconto executado com sucesso!!");
                        }
                        else {
                            calcularQtd = 2800 * qtd;
                            calcularCupom = [(calcularQtd * 10) / 100];
                            totalComCupom = calcularQtd - calcularCupom;

                            totalComFrete = totalComCupom + 50;
                            numeroPedido++;

                            console.log("else com cupom10 com frete 5km sem desconto executado com sucesso!!");
                        }
                    }
                    else if (fret == "frete10km") {
                        if (desc !== 0) {
                            calcularQtd = 2800 * qtd;
                            calcularCupom = [(calcularQtd * 10) / 100];
                            totalComCupom = calcularQtd - calcularCupom;

                            totalDesc = (totalComCupom * desc) / 100;
                            total = totalComCupom - totalDesc;

                            totalComFrete = total + 80;
                            numeroPedido++;

                            console.log("if com cupom10 com frete 10km com desconto executado com sucesso!!");
                        }
                        else {
                            calcularQtd = 2800 * qtd;
                            calcularCupom = [(calcularQtd * 10) / 100];
                            totalComCupom = calcularQtd - calcularCupom;

                            totalComFrete = totalComCupom + 80;
                            numeroPedido++;

                            console.log("Else com cupom10 com frete 10km sem desconto executado com sucesso!!");
                        }
                    }
                    else {
                        if (desc !== 0) {
                            calcularQtd = 2800 * qtd;
                            calcularCupom = [(calcularQtd * 10) / 100];
                            totalComCupom = calcularQtd - calcularCupom;

                            totalDesc = (totalComCupom * desc) / 100;
                            total = totalComCupom - totalDesc;

                            totalComFrete = total + 100;
                            numeroPedido++;

                            console.log("if com cupom10 com frete 15km com desconto executado com sucesso!!");
                        }
                        else {
                            calcularQtd = 2800 * qtd;
                            calcularCupom = [(calcularQtd * 10) / 100];
                            totalComCupom = calcularQtd - calcularCupom;

                            totalComFrete = totalComCupom + 100;
                            numeroPedido++;

                            console.log("Else com cupom10 com frete 15km sem desconto executado com sucesso!!");
                        }
                    };
                }
                else if (cup == "cupom15") {
                    if (fret == "frete5km") {
                        if (desc !== 0) {
                            calcularQtd = 2800 * qtd;
                            calcularCupom = [(calcularQtd * 15) / 100];
                            totalComCupom = calcularQtd - calcularCupom;

                            totalDesc = (totalComCupom * desc) / 100;
                            total = totalComCupom - totalDesc;

                            totalComFrete = total + 50;
                            numeroPedido++;

                            console.log("if com cupom20 com frete 5km com desconto executado com sucesso!!");
                        }
                        else {
                            calcularQtd = 2800 * qtd;
                            calcularCupom = [(calcularQtd * 15) / 100];
                            totalComCupom = calcularQtd - calcularCupom;

                            totalComFrete = totalComCupom + 50;
                            numeroPedido++;

                            console.log("Else com cupom20 frete 5km sem desconto executado com sucesso!!");
                        }
                    }
                    else if (fret == "frete10km") {
                        if (desc !== 0) {
                            calcularQtd = 2800 * qtd;
                            calcularCupom = [(calcularQtd * 15) / 100];
                            totalComCupom = calcularQtd - calcularCupom;

                            totalDesc = (totalComCupom * desc) / 100;
                            total = totalComCupom - totalDesc;

                            totalComFrete = total + 80;
                            numeroPedido++;

                            console.log("if com cupom20 com frete 10km com desconto executado com sucesso!!");
                        }
                        else {
                            calcularQtd = 2800 * qtd;
                            calcularCupom = [(calcularQtd * 15) / 100];
                            totalComCupom = calcularQtd - calcularCupom;

                            totalComFrete = totalComCupom + 80;
                            numeroPedido++;

                            console.log("Else com cupom20 frete 10km sem desconto executado com sucesso!!");
                        }
                    }
                    else {
                        if (desc !== 0) {
                            calcularQtd = 2800 * qtd;
                            calcularCupom = [(calcularQtd * 15) / 100];
                            totalComCupom = calcularQtd - calcularCupom;

                            totalDesc = (totalComCupom * desc) / 100;
                            total = totalComCupom - totalDesc;

                            totalComFrete = total + 100;
                            numeroPedido++;

                            console.log("if com cupom20 com frete 15km com desconto executado com sucesso!!");
                        }
                        else {
                            calcularQtd = 2800 * qtd;
                            calcularCupom = [(calcularQtd * 15) / 100];
                            totalComCupom = calcularQtd - calcularCupom;

                            totalComFrete = totalComCupom + 100;
                            numeroPedido++;

                            console.log("Else com cupom20 frete 15km sem desconto executado com sucesso!!");
                        }
                    }
                }
                else if (cup == "cupom20") {
                    if (fret == "frete5km") {
                        if (desc !== 0) {
                            calcularQtd = 2800 * qtd;
                            calcularCupom = [(calcularQtd * 20) / 100];
                            totalComCupom = calcularQtd - calcularCupom;

                            totalDesc = (totalComCupom * desc) / 100;
                            total = totalComCupom - totalDesc;

                            totalComFrete = total + 50;
                            numeroPedido++;

                            console.log("if com cupom25 com frete 5km com desconto executado com sucesso!!");
                        }
                        else {
                            calcularQtd = 2800 * qtd;
                            calcularCupom = [(calcularQtd * 20) / 100];
                            totalComCupom = calcularQtd - calcularCupom;

                            totalComFrete = totalComCupom + 50;
                            numeroPedido++;

                            console.log("Else com cupom25 frete 5km sem desconto executado com sucesso!!");
                        }
                    }
                    else if (fret == "frete10km") {
                        if (desc !== 0) {
                            calcularQtd = 2800 * qtd;
                            calcularCupom = [(calcularQtd * 20) / 100];
                            totalComCupom = calcularQtd - calcularCupom;

                            totalDesc = (totalComCupom * desc) / 100;
                            total = totalComCupom - totalDesc;

                            totalComFrete = total + 80;
                            numeroPedido++;

                            console.log("if com cupom25 com frete 10km com desconto executado com sucesso!!");
                        }
                        else {
                            calcularQtd = 2800 * qtd;
                            calcularCupom = [(calcularQtd * 20) / 100];
                            totalComCupom = calcularQtd - calcularCupom;

                            totalComFrete = totalComCupom + 80;
                            numeroPedido++;

                            console.log("Else com cupom25 frete 10km sem desconto executado com sucesso!!");
                        }
                    }
                    else {
                        if (desc !== 0) {
                            calcularQtd = 2800 * qtd;
                            calcularCupom = [(calcularQtd * 20) / 100];
                            totalComCupom = calcularQtd - calcularCupom;

                            totalDesc = (totalComCupom * desc) / 100;
                            total = totalComCupom - totalDesc;

                            totalComFrete = total + 100;
                            numeroPedido++;

                            console.log("if com cupom25 com frete 15km com desconto executado com sucesso!!");
                        }
                        else {
                            calcularQtd = 2800 * qtd;
                            calcularCupom = [(calcularQtd * 20) / 100];
                            totalComCupom = calcularQtd - calcularCupom;

                            totalComFrete = totalComCupom + 100;
                            numeroPedido++;

                            console.log("Else com cupom25 frete 15km sem desconto executado com sucesso!!");
                        }
                    }
                };
                break;
            default:
                alert("DEU ALGO ERRADO");
        };

        msn6.innerHTML = totalComFrete;
        msn7.innerHTML = numeroPedido;

        msn6.textContent = "O total com desconto é: R$ " + totalComFrete;
        msn7.textContent = "Número do pedido é: " + numeroPedido;
    });
});