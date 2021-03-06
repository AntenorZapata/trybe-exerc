let palindromo = (str) => {
  let result = "";
  let count = str.length;

  let palavra = str;

  for (let i in str) {
    result += str[count - 1];
    count -= 1;
  }
  if (palavra === result) {
    console.log("true");
  } else {
    console.log("false");
  }
};

palindromo("ele");
