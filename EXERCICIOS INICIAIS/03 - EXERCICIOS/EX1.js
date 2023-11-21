/*

1) Faca um algoritmo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e impruna a sua media e a sua classificacao conforme a tabela abaixo.

Media = (nota 1 + nota 2 + nota 3) / 3 ;

Classificacao:

- Media menor que 5, reprovacao ;
- Media entre 5 e 7, recuperacao ;
- Media acima de 7, passou de semestre ;

*/

const nota1 = 8;
const nota2 = 7;
const nota3 = 7;

const media = (nota1 + nota2 + nota3) / 3;

console.log(media);

if(media <= 5){
    console.log("Reprovado !");
} else if(media > 5 && media <7){
    console.log("Recuperacao !");
} else {
    console.log("Passou de Semestre !");
}

