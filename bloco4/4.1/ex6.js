let peça = "rei";
console.log(peça.toLowerCase());
switch (peça) {
  case "cavalo":
    console.log("Formato de L");
    break;
  case "bispo":
    console.log("Diagonal");
    break;
  case "rainha":
    console.log("Diagonal + Vertical/Horizontal");  
    break;
  case "rei":
    console.log("Diagonal + Vertical/Horizontal - apenas uma casa");
    break;
  case "peão":
    console.log(
      "Uma casa para frente, exceto no primeiro movimento que podem ser duas."
    );
    break;
  case "torre":
    console.log("Vertical/Horizontal");
  default:
    console.log('Peça inválida');
}
