// Scrivi un programma che stampi i numeri da 1 a 100.
// MILESTONE 1
// Per i multipli di 3 stampi in console “Fizz” al posto del numero e per i multipli di 5 stampi in console Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi in console FizzBuzz.
// MILESTONE 2
// Dato un container nel DOM, appendi un elemento html con il numero o la stringa corretta.

const boxesContainer = document.querySelector('.container');

for ( let i = 1; i <= 100; i++){

    let print;
    if ( (i % 3 === 0) && (i % 5 === 0) ){
        print = 'FizzBuzz';
        
    } else if ( i % 3 === 0 ){
        print = 'Fizz';
        
    } else if ( i % 5 === 0 ){
        print = 'Buzz';
        
    } else{
        print = i;
    }
    console.log(print);

    //OUTPUT 
    const newBox = `
          <div class="box">${print}</div>
    `;
    console.log(newBox)

    boxesContainer.innerHTML += newBox

    // const newBox = document.createElement ('div')
    // newBox.innerHTML = (print)
    // newBox.classList.add('box');
    // console.log(newBox)

    // boxesContainer.append (newBox)
}