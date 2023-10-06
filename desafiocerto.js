let nome;
let exp;
let novamente;

do {
  nome = prompt("Digite o nome do personagem:");
  exp = parseFloat(prompt("Digite a experiência:"));

  if (exp < 1000) {
    console.log("o personagem" +nome + "Você é Ferro");
  } else if (exp >= 1000 && exp <= 2000) {
    console.log("o personagem" +nome + "Você é Bronze");
  } else if (exp > 2000 && exp <= 5000) {
    console.log("o personagem" +nome + "Você é Prata");
  } else if (exp > 5000 && exp <= 7000) {
    console.log("o personagem" +nome  + "Você é Ouro");
  } else if (exp > 7000 && exp <= 8000) {
    console.log("o personagem" +nome + "Você é Platina");
  } else if (exp > 8000 && exp <= 9000) {
    console.log("o personagem" +nome + "Você é Ascendente");
  } else if (exp > 9000 && exp <= 10000) {
    console.log("o personagem" +nome + "Você é Imortal");
  } else if (exp > 10000) {
    console.log("o personagem" +nome + " é Radiante");
  } else {
    console.log("Tente novamente!");
  }

  novamente = prompt(' Quer saber de outro personagem? (y ou n)');
} while (novamente.toLowerCase() === 'y');