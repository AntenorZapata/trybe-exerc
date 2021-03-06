let custo = 30;

let venda = 75;

if (custo >= 0 || venda >= 0) {
  let custoTotal = custo + (20 / 100) * custo;
  let lucro = (venda - custoTotal) * 1000;
  console.log(lucro);
} else {
  console.log("valores incorretos");
}
