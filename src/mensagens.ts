export default class Mensagens {
    public listarOpcoes = () => {
        console.log('Opções:');
        console.log('Soma, Subtração, Multiplicação, Dividisão, Potenciação, Radiciação ou Bhaskara\n');
    }

    public comoUsar = () => {
        console.log('Para começar digite número e tipo de cálculo (separados por espaço):');
        console.log('Para Bhaskara: "a b c Bhaskara"');
        console.log('O resultado será a soma dos números: 4');
        console.log('Para encerrar digite "Sair"\n');
    }

    public boasVindas = () => {
        console.log('\nCalculadora polimórfica\n');
    }
}