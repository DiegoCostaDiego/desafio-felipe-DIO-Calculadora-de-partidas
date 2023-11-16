//Calculadora de partidass Rankeadas

let result = winCalculation(105, 33);

function winCalculation(win, lose) {
  let winBalance = win - lose;
  return winBalance;
}

let level = result;

if (level <= 10) level = "Ferro";
else if (level <= 20) level = "Bronze";
else if (level <= 50) level = "Prata";
else if (level <= 80) level = "Ouro";
else if (level <= 90) level = "Diamente";
else if (level <= 100) level = "Lendário";
else level = "Imortal";

console.log("O herói tem o saldo de " + result + " está no nível de " + level);
