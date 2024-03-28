let indices = [];
let array = ["a", "b", "a", "c", "a", "d"];
let elemento = "a";
let idx = array.indexOf(elemento);
while (idx != -1) {
  indices.push(idx);
  idx = array.indexOf(elemento, idx + 1);
}
console.log(indices);