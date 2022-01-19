////////////// PARA GATITOS

let $btnGato = document.querySelector('#btnGato');

$btnGato.addEventListener('click', () => {
    console.log('Uy! Quieto');

    fetch('https://api.thecatapi.com/v1/images/search')
    .then(resp => resp.json()).then(data => {
        console.log(data);
        let imagenGatito = document.createElement('img');
        imagenGatito.src = data[0].url;
        document.body.appendChild(imagenGatito);
    })
});


///////////// PARA PERRITOS:
// Cambia por ser objeto y no un Array como en Gatitos

let $btnDog = document.querySelector('#btnDog');

$btnDog.addEventListener('click', () => {
    console.log('Uy! Quieto');

    fetch('https://dog.ceo/api/breeds/image/random')
    .then(resp => resp.json()).then(data => {
        console.log(data);
        let imagenDog = document.createElement('img');
        imagenDog.src = data.message;
        document.body.appendChild(imagenDog);
    })
});