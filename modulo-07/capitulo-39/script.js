{
    let numeros = [1, 2, 3, 4, 5, 6];
    let numerosPares = numeros.filter(numero => numero % 2 === 0);
    console.log(numerosPares);
}
{
    function novoAluno(nome, nota) {
        return { nome, nota };
    };

    let alunos = [
        novoAluno('Mario', 8),
        novoAluno('José', 5),
        novoAluno('Maria', 9),
        novoAluno('João', 6),
        novoAluno('Pedro', 3),
    ];

    console.log(alunos);


    let pontinhoExtra = alunos.map(aluno => ({
        nome: aluno.nome,
        nota: aluno.nota + 1
    }));
    console.log(pontinhoExtra);

    console.log(alunos);

    
}