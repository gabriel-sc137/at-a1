let aluno = (prompt("Nome do aluno"));
let notaUmAluno = Number(prompt("Nota Um"));
let notaDoisAluno = Number(prompt("Nota Dois"));


let mediaNota = (notaUmAluno + notaDoisAluno) / 2;
let verificacao = mediaNota >= 7 ? "Aprovado" : "Reprovado";

alert("A média do " + aluno + " é " + mediaNota + ", sendo assim o aluno está " + verificacao + ".");