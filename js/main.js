const materias = ["Matematica", "Literatura", "Historia", "Ingles", "Biologia", "Educacion Fisica", "Geografia"];
console.log(materias.indexOf("Matematica"));
console.log(materias.indexOf("Historia"));
let materia_buscar = prompt("Ingrese la materia a buscar:");
let pos = materias.indexOf(materia_buscar);

if (pos > -1) {
    alert("La materia: " + materia_buscar + " se encuentra en la posición: " + pos);
} else {
    alert("No se encuentra la materia buscada!");
} 