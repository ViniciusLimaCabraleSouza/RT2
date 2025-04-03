import * as readline from 'readline';
import Mensagens from './mensagens';
import Multiplicacao from './multiplicacao';
import Soma from './soma';
import Subtracao from './subtracao';
import Divisao from './divisao';
import Potenciacao from './potenciacao';
import Radiciacao from './radiciacao';
import Bhaskara from './bhaskara';

const mensagens = new Mensagens();

const iniciar = (): void => {
  const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  leitor.question('Deseja inserir números e a operação matemática?\n', (valor: string) => {
    const instrucoes = valor.split(' ');
    const numero1 = Number(instrucoes[0]);
    const numero2 = Number(instrucoes[1]);
    let operacao = instrucoes[2];
    
    if(instrucoes.length === 1){
      operacao = instrucoes[0];
    }
    
    console.log(`Estas foram suas instruções: ${instrucoes}\n`);

    let calculo;
    switch (operacao.toLowerCase()) {
      case 'somar':
        calculo = new Soma();
        console.log(`Resultado é ${calculo.calcular(numero1, numero2)}\n`);
        break;
      case 'subtrair':
        calculo = new Subtracao();
        console.log(`Resultado é ${calculo.calcular(numero1, numero2)}\n`);
        break;
      case 'multiplicar':
        calculo = new Multiplicacao();
        console.log(`Resultado é ${calculo.calcular(numero1, numero2)}\n`);
        break;
      case 'dividir':
        calculo = new Divisao();
        console.log(`Resultado é ${calculo.calcular(numero1, numero2)}\n`);
        break;
      case 'potenciar':
        calculo = new Potenciacao();
        console.log(`Resultado é ${calculo.calcular(numero1, numero2)}\n`);
        break;
      case 'radiciar':
        calculo = new Radiciacao();
        console.log(`Resultado é ${calculo.calcular(numero1, numero2)}\n`);
        break;
      case 'bhaskara':
        if (instrucoes.length >= 4) {
          const numero3 = Number(instrucoes[3]);
          const [x1, x2] = Bhaskara.calcularRaiz(numero1, numero2, numero3);
          console.log(`Raízes da equação: x1 = ${x1}, x2 = ${x2}`);
        } else {
          console.log('Para Bhaskara, precisa de 3 números (a, b, c)');
        }
        break;

      case 'sair':
        console.log('Finalizando...');
        leitor.close();
        process.exit(0);
        return;
      default:
        console.log('Algo deu errado :(');
    }
    
    leitor.close();
    if (operacao.toLowerCase() !== 'sair') {
      mensagens.comoUsar();
      iniciar();
    }
  });
}

mensagens.boasVindas();
mensagens.listarOpcoes();
mensagens.comoUsar();
iniciar();