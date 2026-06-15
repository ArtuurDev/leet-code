
/* 


*** 
Dado um array de inteiros nums e um inteiro target, retorne os índices dos dois números de forma que a soma deles seja igual a target .

Você pode assumir que cada entrada terá exatamente uma solução e que não poderá usar o mesmo elemento duas vezes.

Você pode retornar a resposta em qualquer ordem.
***



Primeira solução - Complexidade: O(n2)

Essa foi a solução que encontrei ao tentar resolver pela primeira vez

Utilizo dois loops, onde o primeiro loop só irá ser incrementando após o de dentro terminar, 
o primeiro no indice inicial do array e o segundo no indice inicial + 1,
dessa forma, vou comparar o primeiro elemento com todos os outros, 
depois o primeiro loop é incrementado, e repete a mesma lógica.

*/

function FirtsTwoSum(nums: number[], target: number) {
  const start = Date.now()

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        const end = Date.now() - start
        console.log(`Execução de SecondTwoSum em milissegundos: ${end}ms`)
        return [i, j]
      }
    }
  }
}


/* 

Segunda Solução - Complexidade: O(n)

Essa foi a solução que encontrei após estudar a melhor maneira de resolver.

Agora, ao invés de comparar o primeiro com todos os outros elementos, 
crio uma estrutura de dados onde armazeno o valor que que eu quero encontrar, exemplo:

[2, 3, 5, 7]

se meu target é o 9, faço a seguinte pergunta "Qual numero que somado ao atual o resultado é 9?"

ou seja, se meu numero atual no laço é 2 e quero encontrar o 9, o numero 7 nesse caso é meu complemento.

Armazeno no Map o complemento como chave e o índice do elemento atual como valor e a cada iteração armazeno valores diferentes, {7,0}. 7 é o complemento e 0 é posição do numero que somado com 7 dá 9, no caso 2
agora preciso iterar até encontrar o numero 7, quando encontrar retorno o indice 0 e o indice do numero 7

*/

function SecondTwoSum(nums: number[], target: number): number[] {
  const start = Date.now()
  const map = new Map<number, number>()

  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      const end = Date.now() - start
      console.log(`Execução de SecondTwoSum em milissegundos: ${end}ms` )
      return [map.get(nums[i])!, i]
    }
    
    map.set(target - nums[i], i)
  }
  return []
}

const input = Array.from(
  { length: 100_000 },
  (_, i) => i
)

const target = 199_997

console.log(FirtsTwoSum(input, target))
console.log(SecondTwoSum(input, target))