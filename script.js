const apiKey = "quando chegar eu boto aqui"
const apiLink = `https://api.wordnik.com/v4/words.json/wordsWithSimilarMeanings?api_key=${apiKey}`
//const valor = document.querySelector("input").value
const valor = "utuhu TTTT yruifh".toLocaleLowerCase()
let splitValue = valor.split(' ')
let repeatedLetters = ``
let repeated = []

splitValue.forEach(palavra => {
    
})

    let newFirstWord = ``
        for (let i = 0; i < valor.length; i++) {
                
           // if (valor[i] != Number)
            for (let j = i + 1; j < valor.length; j++) {
                if (valor[i] === valor[j]) {
                    console.log(`Letra repetida: ${valor[i]} encontrada nos índices ${i} e ${j}`)
                    repeated += i + `, ` + j + `, `
                
                }
            //    repeated += ` outro `
                if (valor[j] === valor.length - 1) {
                        break
                    }

                }
            










            if (valor[i] === 't') {
                newFirstWord += 'l'
                console.log(newFirstWord)
                
            } else if (valor[i] === " ") {
                newFirstWord += " "
                console.log(newFirstWord)
            } else if (valor[i] === 'u') {
                newFirstWord += 'o'
                console.log(newFirstWord)
            }else if (valor[i] === 'h') {
                newFirstWord += 'k'
                console.log(newFirstWord)
            }else {
                newFirstWord += valor[i]
                console.log(newFirstWord)
                console.log(repeated)
            } 
        }
        
    
async function findWords() {
    const resposta = await fetch(`https://api.wordnik.com/v4/words.json/wordsWithSimilarMeanings?api_key=${apiKey}`)
    const palavras = await resposta.json()
    return palavras
}

async function decriptografar() {
    const palavras = findWords()
    


   // const palavrasFiltradas = palavras.filter(palavra => {
      //  return palavra 
    
  //  })
}
decriptografar()

