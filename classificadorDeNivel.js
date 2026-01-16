let nameHero = "Asgard";
let xpAmount = 8000;

function showRank(name, xp) {
  if (xp >= 10001) {
    return `O Herói de nome ${name} está no nível de Radiante.`;
  } else if (xp >= 9001 && xp <= 10000) {
    return `O Herói de nome ${name} está no nível de Imortal.`;
  } else if (xp >= 8001 && xp <= 9000) {
    return `O Herói de nome ${name} está no nível de Ascendente.`;
  } else if (xp >= 7001 && xp <= 8000) {
    return `O Herói de nome ${name} está no nível de Platina.`;
  } else if (xp >= 5001 && xp <= 7000) {
    return `O Herói de nome ${name} está no nível de Ouro.`;
  } else if (xp >= 2001 && xp <= 5000) {
    return `O Herói de nome ${name} está no nível de Prata.`;
  } else if (xp >= 1001 && xp <= 2000) {
    return `O Herói de nome ${name} está no nível de Bronze.`;
  } else {
    return `O Herói de nome ${name} está no nível de Ferro.`;
  }
}

console.log(showRank(nameHero,xpAmount));
