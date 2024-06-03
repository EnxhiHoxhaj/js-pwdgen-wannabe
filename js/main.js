//assegnazione di una password

let titolo = "Form per generare la password adatta a te... speriamo sia sicura!";

document.getElementById ("form").innerHTML = titolo;

//inserimento del nome

let nomeUtente = prompt ("indica nome");

document.getElementById ("nome").innerHTML = "Inserisci il tuo nome: " + nomeUtente

//inserimento del cognome

let cognomeUtente = prompt ("indica cognome");

document.getElementById ("cognome").innerHTML = "Inserisci il tuo cognome: " + cognomeUtente

//inserimento del colore preferito

let colorePreferito = prompt ("indica colore");

document.getElementById ("colore_p").innerHTML = "Qual'è il tuo colore preferito?: " + colorePreferito

// inserimento del numero 23

const numventitre = 23;

//formulazione della password

let risultato = nomeUtente+cognomeUtente+colorePreferito+numventitre;

console.log( "La password che ti è stata assegnata è la seguente:" + risultato);

document.getElementById ("password").innerHTML = "La password che ti è stata assegnata è la seguente:" + risultato;
