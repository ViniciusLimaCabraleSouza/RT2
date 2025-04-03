"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
import { createInterface } from "readline";
import mensagens_1 from "./mensagens";
import multiplicacao_1 from "./multiplicacao";
import soma_1 from "./soma";
import subtracao_1 from "./subtracao";
import divisao_1 from "./divisao";
import potenciacao_1 from "./potenciacao";
import radiacao_1 from "./radiacao";
import bhaskara_1 from "./bhaskara";
var mensagens = new mensagens_1();
var iniciar = function () {
    var leitor = createInterface({
        input: process.stdin,
        output: process.stdout
    });
    leitor.question('Quais são seus números e a operação desejada?\n', function (valor) {
        var instrucoes = valor.split(' ');
        var numero1 = Number(instrucoes[0]);
        var numero2 = Number(instrucoes[1]);
        var operacao = instrucoes[2];
        if (instrucoes.length === 1) {
            operacao = instrucoes[0];
        }
        console.log("Estas foram suas instru\u00E7\u00F5es: ".concat(instrucoes, "\n"));
        var calculo;
        switch (operacao.toLowerCase()) {
            case 'somar':
                calculo = new soma_1();
                console.log("O resultado da opera\u00E7\u00E3o \u00E9: ".concat(calculo.calcular(numero1, numero2), "\n"));
                break;
            case 'subtrair':
                calculo = new subtracao_1();
                console.log("O resultado da opera\u00E7\u00E3o \u00E9: ".concat(calculo.calcular(numero1, numero2), "\n"));
                break;
            case 'multiplicar':
                calculo = new multiplicacao_1();
                console.log("O resultado da opera\u00E7\u00E3o \u00E9: ".concat(calculo.calcular(numero1, numero2), "\n"));
                break;
            case 'dividir':
                calculo = new divisao_1();
                console.log("O resultado da opera\u00E7\u00E3o \u00E9: ".concat(calculo.calcular(numero1, numero2), "\n"));
                break;
            case 'potenciar':
                calculo = new potenciacao_1();
                console.log("O resultado da opera\u00E7\u00E3o \u00E9: ".concat(calculo.calcular(numero1, numero2), "\n"));
                break;
            case 'radiciar':
                calculo = new radiacao_1();
                console.log("O resultado da opera\u00E7\u00E3o \u00E9: ".concat(calculo.calcular(numero1, numero2), "\n"));
                break;
            case 'bhaskara':
                if (instrucoes.length >= 4) {
                    var numero3 = Number(instrucoes[3]);
                    var _a = bhaskara_1.calcularRaiz(numero1, numero2, numero3), x1 = _a[0], x2 = _a[1];
                    console.log("Ra\u00EDzes da equa\u00E7\u00E3o: x1 = ".concat(x1, ", x2 = ").concat(x2));
                }
                else {
                    console.log('Para Bhaskara, você precisa fornecer 3 coeficientes (a, b, c)');
                }
                break;
            case 'sair':
                console.log('Até uma próxima, falou...');
                leitor.close();
                process.exit(0);
                return;
            default:
                console.log('Operação não entendida :(');
        }
        leitor.close();
        if (operacao.toLowerCase() !== 'sair') {
            mensagens.comoUsar();
            iniciar();
        }
    });
};
mensagens.boasVindas();
mensagens.listarOpcoes();
mensagens.comoUsar();
iniciar();
