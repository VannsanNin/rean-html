let data = prompt("Input the number");
data = Number(data);
let sum = 0;

for (let i = 1; i <= data; i++) {
  sum += i;
  document.write(i + "+");
}
document.write("=", sum);
