let victory = 100;
let defeat = 15;

function calculateVictories(victory, defeat) {
  const saldo = victory - defeat;

  if (saldo >= 101) {
    return `O Herói tem de saldo de ${saldo} está no nível de Imortal.`;
  } else if (saldo >= 91 && saldo <= 100) {
    return `O Herói tem de saldo de ${saldo} está no nível de Lendário.`;
  } else if (saldo >= 81 && saldo <= 90) {
    return `O Herói tem de saldo de ${saldo} está no nível de Diamante.`;
  } else if (saldo >= 51 && saldo <= 80) {
    return `O Herói tem de saldo de ${saldo} está no nível de Ouro.`;
  } else if (saldo >= 21 && saldo <= 50) {
    return `O Herói tem de saldo de ${saldo} está no nível de Prata.`;
  } else if (saldo >= 11 && saldo <= 20) {
    return `O Herói tem de saldo de ${saldo} está no nível de Bronze.`;
  } else {
    return `O Herói tem de saldo dee ${saldo} está no nível de Ferro.`;
  }
}

console.log(calculateVictories(victory, defeat));
