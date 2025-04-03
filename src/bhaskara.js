"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Bhaskara = /** @class */ (function () {
    function Bhaskara() {
    }
    Bhaskara.calcularRaiz = function (numero1, numero2, numero3) {
        var delta = numero2 * numero2 - 4 * numero1 * numero3;
        if (delta < 0) {
            return ['Não existe raiz real', 'Não existe raiz real'];
        }
        var x1 = (-numero2 + Math.sqrt(delta)) / (2 * numero1);
        var x2 = (-numero2 - Math.sqrt(delta)) / (2 * numero1);
        return [x1, x2];
    };
    return Bhaskara;
}());
exports.default = Bhaskara;
