import Calculo from "./calculo";

export default class Radiacao extends Calculo {
    public calcular(numero1: number, numero2: number): number {
        if (numero1 < 0 && numero2 % 2 === 0) {
            throw new Error("Não existe raiz real de número negativo com índice par");
        }
        return Math.pow(numero1, 1 / numero2);
    }
}