let n = 5;
let result = "";
let asterisco = "*";

for (let i = 0; i < n; i++) {
  if (i === n - 1) {
    result += "*";
    console.log(result);
  } else {
    result += " ";
  }
}
let s = 1;
for (let i = 0; i < n - 1; i++) {
  let a = result.slice(s) + asterisco;
  console.log(a);
  asterisco += "*";
  s += 1;
}
