let nomeHeroi = 'Laught Tale'
let xpHeroi = 3900
let rank = undefined



if (xpHeroi < 1000) {
  rank = "Ferro";
} else if (xpHeroi > 1001 && xpHeroi < 2000) {
  rank = "Bronze";
} else if (xpHeroi > 2001 && xpHeroi < 5000) {
  rank = "Prata";
} else if (xpHeroi > 5001 && xpHeroi < 6000) {
  rank = "Ouro";
} else if (xpHeroi > 6001 && xpHeroi < 7000) {
  rank = "Platina";
} else if (xpHeroi > 7001 && xpHeroi < 8000) {
  rank = "Ascendente";
} else if (xpHeroi > 8001 && xpHeroi < 9000) {
  rank = "Imortal";
} else if (xpHeroi >= 9001) {
  rank = "Radiante";
}



console.log(nomeHeroi);
console.log(xpHeroi);

while (xpHeroi){
  console.log("O Herói de nome " + nomeHeroi + " está no nível de " + rank);
}

