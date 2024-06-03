//assegnazione di una password

//inserimento del nome

let nomeUtente = "Enxhi";

document.getElementById ("nome").innerHTML = "Inserisci il tuo nome: " + nomeUtente

//inserimento del cognome

let cognomeUtente = "Hoxhaj";

document.getElementById ("cognome").innerHTML = "Inserisci il tuo cognome: " + cognomeUtente

//inserimento del colore preferito

let colorePreferito = "Verde";

document.getElementById ("colore_p").innerHTML = "Qual'è il tuo colore preferito?: " + colorePreferito

// inserimento del numero 23

const numventitre = 23;

//formulazione della password

document.getElementById ("password").innerHTML = `La password che ti è stata assegnata è la seguente: ${nomeUtente}${cognomeUtente}${colorePreferito}${numventitre}`;
