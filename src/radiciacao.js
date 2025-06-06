"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var calculo_1 = require("./calculo");
var Radiciacao = /** @class */ (function (_super) {
    __extends(Radiciacao, _super);
    function Radiciacao() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Radiciacao.prototype.calcular = function (numero1, numero2) {
        if (numero1 < 0 && numero2 % 2 === 0) {
            throw new Error("Não existe raiz real de número negativo com índice par");
        }
        return Math.pow(numero1, 1 / numero2);
    };
    return Radiciacao;
}(calculo_1.default));
exports.default = Radiciacao;
