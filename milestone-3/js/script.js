// Scrivi un programma che stampi i numeri da 1 a 100.
// MILESTONE 1
// Per i multipli di 3 stampi in console “Fizz” al posto del numero e per i multipli di 5 stampi in console Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi in console FizzBuzz.
// MILESTONE 2
// Dato un container nel DOM, appendi un elemento html con il numero o la stringa corretta.
// MILESTONE 3
// Applica uno stile differente a seconda del valore dell'indice per i multipli di 3, 
// per i multipli di 5 e per i valori che sono sia multipli di 3 che di 5.


const boxesContainer = document.querySelector('.container');

for ( let i = 1; i <= 100; i++){

    let print;
    let newDivColor;
    if ( (i % 3 === 0) && (i % 5 === 0) ){
        print = 'FizzBuzz';
        newDivColor = 'violet-bg';
    } else if ( i % 3 === 0 ){
        print = 'Fizz';
        newDivColor = 'green-bg';
    } else if ( i % 5 === 0 ){
        print = 'Buzz';
        newDivColor = 'yellow-bg';
    } else{
        print = i;
        newDivColor = '';
    }
    console.log(print);

    //OUTPUT 
    // const newBox = `
    //       <div class="box ${newDivColor}">${print}</div>
    // `;
    // console.log(newBox)

    // boxesContainer.innerHTML += newBox

    const newBox = document.createElement ('div')
    newBox.innerHTML = (print)
    newBox.classList.add('box');
    // aggiungi newDivColor solo se non vuoto altrimenti add da errore
    if(newDivColor !== '') {
        newBox.classList.add(newDivColor);
    }
    console.log(newBox)

    boxesContainer.append (newBox)
}