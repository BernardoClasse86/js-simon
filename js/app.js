// Ciao ragazzi,
// Esercizio di oggi: Simon Says
// nome repo: js-simon
// Descrizione:
// Visualizzare in pagina 5 numeri casuali con alert.
// Dopo che l’utente ha chiuso l’alert fate partire un timer di 30 secondi.
// Allo scadere dei 30 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt(). Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali numeri sono stati individuati tramite console.log
// BONUS
// aggiungete una interfaccia per il gioco:
// almeno un pulsante play per poter ripetere il gioco al click sul pulsante
// e almeno gestite la stampa del risultato in pagina
// Consigli del giorno:
// Pensate prima in italiano.
// Dividete in piccoli problemi la consegna.
// Individuate gli elementi di cui avete bisogno per realizzare il programma.

console.log('hello')

// prendo l'elemento button dall HTML
const btnElement = document.getElementById('button')

// prendo l'elemento result dall HTML
const resultElement = document.getElementById('result')

btnElement.addEventListener ('click', function () {
    
    // creo un array vuoto nel quale inserisco 5 numeri random e invoco la funzione randomGenerator 
    let randomNumbArray = randomGenerator()
    
    // imposto un timer di 30 secondi dopo i quali apparira un prompt che chiede di inserire 5 numeri
    setTimeout(waitingTime, 1000)

    function waitingTime() {
        
        // creo un array vuoto dove andranno a inserirsi i 5 numeri scritti dall utente e invoco la funzione userChoice
        let userNum = userChoice()
    
        // creo un array vuoto dove andro a pushare solo i numeri inseriti dall'utente che sono anche uguali ai numeri gia presenti nell'array dei numeri random
        let equalNumbers = []
    
        for (let i = 0; i < userNum.length; i++) {
    
        if (randomNumbArray.includes(userNum[i])) {
    
            equalNumbers.push(userNum[i])
        }
    }
    
    resultElement.innerHTML = `You guessed ${equalNumbers.length} of 5 numbers.<br> You picked : ${equalNumbers}`
    }
})

/********
FUNZIONI
********/

// FUNZIONE per generare 5 numeri random e stamparli in un alert
function randomGenerator() {

    let randomNumbArray = []

    // creo un ciclo che a sua volta crei 5 numeri random diversi tra loro
    while (randomNumbArray.length < 5) {

        // creo 5 numeri casuali da 1 a 50
        let randomNum = Math.floor(Math.random() * 50) + 1

        // se il numero random non e gia presente lo inseriamo nell'array
        if (!randomNumbArray.includes(randomNum)) {

            randomNumbArray.push(randomNum)

            // console.log(randomNum)
        }

        // con join disponiamo tutti gli elementi dell'array inserendo una virgola per dividerli nell'alert
        let allRandomNum = randomNumbArray.join(', ')

        // stampo un alert che mostri all utente i 5 numeri random che dovra ricordarsi
        alert(`Those are the numbers to remember: ${allRandomNum}`)
    }

    return randomNumbArray
}

// FUNZIONE per creare un array di scelte fatte dall'utente
function userChoice() {

    let userNum = []

    // creo un ciclo while che pushi i numeri inseriti dall'utente all'interno dell'array vuoto
    while (userNum.length < 5) {

        let userChoiceNumber = parseInt(prompt('Insert a Number'))

        userNum.push(userChoiceNumber)

        // console.log(userChoiceNumber)
    }

    return userNum
}

