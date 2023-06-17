const alunos = [
    {nome: 'Joao', nota: 8},
    {nome: 'Maria', nota: 5},
    {nome: 'Joana', nota: 4},
    {nome: 'Joyce', nota: 9},
    {nome: 'Paula', nota: 7},
    {nome: 'Erick', nota: 6}
]

function notaMaior(notaSeis){
    let notas = [];
    for (let i = 0 ; i < alunos.length; i++) {
        if (alunos[i].nota >= notaSeis) {
            notas.push(alunos[i]);
        }
    }
    return notas;
}

const notaMaior2 = (notaSeis) => {
    return alunos.filter(alunos => alunos.nota >= notaSeis)
};

console.log(notaMaior(6));
console.log(notaMaior2(6));