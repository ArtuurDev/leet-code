/* 

***
    Dado um número inteiro x, retorne truese x for umpalíndromoe falsede outra forma .
***

*/

/* 
    Primeira solução: 
    Complexidade de tempo O(n), pois quanto mais dígitos, maior o processamento.
    Complexidade de espaço: O(n), pois são alocados uma string e um array com tamanho proporcional à quantidade de dígitos.

    Primeiro verifico se o número é negativo. Caso seja,
    retorno false, pois números negativos não podem ser
    palíndromos devido ao sinal '-'.
    Em seguida, converto x para string, crio um array com cada numero dentro usando split, 121 fica ['1', '2', '1'], 
    após uso o metodo reverse para reverter os caraqteres do array e logo em seguida o metodo join para juntar tudo em uma unica string,
    ao final faço a comparação com o input trasnformado em string e  o input tranformado em string revertida.
*/

function isPalindrome1(x: number): boolean {

    if (x < 0) {
        return false
    }

    const stringNumberReverse = String(x).split("").reverse().join("")

    return String(x) === stringNumberReverse
}


/*
Segunda solução:
    Complexidade de tempo: O(n), pois percorro cada dígito do número uma única vez.

    Complexidade de espaço: O(1), pois utilizo apenas um conjunto fixo de variáveis
    (original, revertido e ultimoDigito), sem criar estruturas adicionais que cresçam
    conforme a quantidade de dígitos aumenta.

    Diferente da primeira solução, que cria strings e arrays proporcionais ao tamanho
    do número, esta abordagem utiliza apenas operações matemáticas para reconstruir
    o número invertido e compará-lo com o valor original.
*/

console.log(isPalindrome1(121))
console.log(isPalindrome1(-121))
console.log(isPalindrome1(10))
console.log(isPalindrome2(0))

function isPalindrome2(x: number): boolean {

    if (x === 0) {
        return true
    }

    if (x < 0) {
        return false
    }

    const original = x
    let revertido = 0
    while (x > 0) {
        const ultimoDigito = x % 10
        revertido = revertido * 10 + ultimoDigito
        x = Math.floor(x / 10)
    }

    return original === revertido
}

console.log(isPalindrome2(121))
console.log(isPalindrome2(-121))
console.log(isPalindrome2(123))
console.log(isPalindrome2(0))