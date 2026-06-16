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

function isPalindrome(x: number): boolean {
    if(x < 0) {
        return false
    }

    const stringNumberReverse = String(x).split("").reverse().join("")

    if(String(x) === stringNumberReverse) {
        return true
    }

    return false
}


console.log(isPalindrome(121))
console.log(isPalindrome(-121))
console.log(isPalindrome(10))