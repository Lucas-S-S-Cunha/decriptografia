const apiKey = "quando chegar eu boto aqui"
const apiLink = `https://api.wordnik.com/v4/words.json/wordsWithSimilarMeanings?api_key=${apiKey}`
//const valor = document.querySelector("input").value
// She sells seashells by the seashore
const valor = "&$@ &@!!& &@/&$@!!& :’ #&@  &@/&$”+@".toLocaleLowerCase()
let splitValue = valor.split(' ')
let repeatedLetters = ``
let repeated = []

splitValue.forEach(palavra => {
    
})
    function verificarValoresRepetidos() {
        // faz com que a verificação ocorra de palavea em palavra
        for (let x = 0; x < splitValue; x++) {
            
             let newFirstWord = ``
             for (let i = 0; i < splitValue[x].length; i++) {
                
                  for (let j = i + 1; j < splitValue[x]; j++) {
                       if (splitValue[x][i] === splitValue[x][j]) {
                       console.log(`Letra repetida: ${valor[i]} encontrada nos índices ${i} e ${j}`)
                       repeated.push(`${i}, ${j}, `)
                
                }
                

                
            



//            if (valor[i] === 't') {
//                newFirstWord += 'l'
//                console.log(newFirstWord)
//                
//            } else if (valor[i] === " ") {
//                newFirstWord += " "
//                console.log(newFirstWord)
//            } else if (valor[i] === 'u') {
//                newFirstWord += 'o'
//                console.log(newFirstWord)
//            }else if (valor[i] === 'h') {
//            newFirstWord += 'k'
//                console.log(newFirstWord)
//            }else {
//                newFirstWord += valor[i]
//                console.log(newFirstWord)
//                console.log(repeated)
//            } 
//        }
     }
}
        verificarValoresRepetidos()
    
async function findWords() {
    const resposta = await fetch(apiLink)
    const palavras = await resposta.json()
    return palavras
}

async function decriptografar() {
    const palavras = findWords()
    



