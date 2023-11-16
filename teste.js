//Calculadora de partidass Rankeadas
// Aqui tentei outra forma de resolver o desafio usando duas funções
function winCalculation(win, lose) {
  let winBalance = win - lose;
  return winBalance;
}

function determinarLevel(winBalance) {
  if (winBalance <= 10) return "Ferro";
  else if (winBalance <= 20) return "Bronze";
  else if (winBalance <= 50) return "Prata";
  else if (winBalance <= 80) return "Ouro";
  else if (winBalance <= 90) return "Diamente";
  else if (winBalance <= 100) return "Lendário";
  else return "Imortal";
}
let result = winCalculation(105, 33);
let level = determinarLevel(result);

console.log(`O herói tem o saldo de ${result} está no nível de ${level}`);
