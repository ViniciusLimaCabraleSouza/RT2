"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Mensagens = /** @class */ (function () {
    function Mensagens() {
        this.listarOpcoes = function () {
            console.log('Aqui você pode:');
            console.log('Somar, Subtrair, Multiplicar, Dividir, Potenciacao, Radiacao ou Bhaskara números\n');
        };
        this.comoUsar = function () {
            console.log('Para usar digite os números e a opção de cálculo separados por espaço como: "1.5 2.5 Soma"');
            console.log('Para Bhaskara: "a b c Bhaskara"');
            console.log('O resultado será a soma dos números: 4');
            console.log('Para encerrar digite "Sair"\n');
        };
        this.boasVindas = function () {
            console.log('\nBem-vindo a calculadora polimórfica\n');
        };
    }
    return Mensagens;
}());
exports.default = Mensagens;
