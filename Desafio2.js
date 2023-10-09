let nome;
let vitoria;
let derrota;
let novamente;

do {
  nome = prompt("Digite o nome do personagem:");
  vitoria = parseInt(prompt("Digite a quantidade de vitórias:"));
  derrota = parseInt(prompt("Quantas derrotas você tem?"));

  rankear();
  VictoryBalance();

  novamente = prompt("Quer inserir informações para outro personagem? (y ou n)");
} while (novamente.toLowerCase() === 'y');

function rankear() {
  if (vitoria < 10) {
    console.log("O personagem " + nome + " é Ferro");
  } else if (vitoria >= 10 && vitoria <= 20) {
    console.log("O personagem " + nome + " é Bronze");
  } else if (vitoria > 20 && vitoria <= 50) {
    console.log("O personagem " + nome + " é Prata");
  } else if (vitoria > 50 && vitoria <= 80) {
    console.log("O personagem " + nome + " é Ouro");
  } else if (vitoria > 80 && vitoria <= 90) {
    console.log("O personagem " + nome + " é Diamante");
  } else if (vitoria > 90 && vitoria <= 100) {
    console.log("O personagem " + nome + " é Lendário");
  } else if (vitoria > 100) {
    console.log("O personagem " + nome + " é Imortal");
  } else {
     console.log("Tente novamente!");
  }
}

function VictoryBalance() {
  Wins = vitoria - derrota;
  console.log("Seu saldo de vitórias é " + Wins);
}