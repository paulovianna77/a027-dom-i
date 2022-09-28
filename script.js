// EXERCICIO 1
const frutas = ["uva", "maçã", "pera"];

const fruta1 = document.getElementById("fruta-1");
fruta1.innerHTML = frutas[0];

// usando laços
for (let i = 0; i < frutas.length; i++) {
  let fruta = document.getElementById(`fruta-${[i + 1]}`);
  fruta.innerHTML = frutas[i];
}

//EXERICIO 3
const input = document.getElementById("fruta");
/* const fruta1 = document.getElementById('fruta-1') */

function adicionaFruta() {
  fruta1.innerHTML = input.value;
}
