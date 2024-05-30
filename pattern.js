

let pattern = "";

for (let i= 5;i>= 1; i--) {
   for (let j = 5;j<= i; j--) {
      pattern += "*";
   }
   pattern += "\n";
}
console.log(pattern);