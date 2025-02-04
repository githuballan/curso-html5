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

{
    let alunos = [
        { nome: 'Mario', nota: 10 },
        { nome: 'José', nota: 5 },
        { nome: 'Maria', nota: 9 },
        { nome: 'João', nota: 6 },
        { nome: 'Pedro', nota: 3 },
    ];

    function calcularMedia(acumulador, aluno, index, array) {
        acumulador += aluno.nota;
        if (index === array.length - 1) {
            return acumulador / array.length;
        }
        return acumulador;
    }

    let media = alunos.reduce(calcularMedia, 0);

    console.log(media);
}

{
    // desafio map
    let numeros = [1+'a', 2+'a', 3+'a', 4+'a', 5+'a'];
    let numeros2 =[]; 
    let k=0;

    for(let i=0 ; i < numeros.length; i++){
        
        console.log(i);

        numeros2.push(numeros[i]);

        k++;
        if(k > 1000) { 
            console.log("break");
            break;
        }
    };
        console.log('numeros2: '+numeros2);
        console.log('numeros: '+numeros);
}

{
    // desafio reduce
    let numeros = [1, 2, 3, 4, 5];
    let k=0;
    let acumulador=0

    for(let i=0 ; i < numeros.length; i++){
       
        console.log(numeros[i]);
       
        acumulador+=numeros[i];

        console.log(acumulador)

        k++;
        if(k > 1000) { 
            console.log("break");
            break;
        }
    };
       
        console.log('numeros: '+numeros);
        console.log(acumulador);
}