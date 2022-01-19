
let $elemento = document.querySelector('#elemento');

window.onload = function() {
    fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
    .then(resp=>resp.json().then(data=>{
        console.log(data)
        for(i=0; i<data.length; i++){
            console.log(data[i].url)
            console.log(data[i].title)
  let imagen = data[i].url
  let titulo = data[i].title

let texto = `<div class="card" style="width: 18rem;">
  <img src="${imagen}.url" class="card-img-top" alt="...">
  <div class="card-body">
    <p class="card-text">${titulo}.title</p>
  </div>
  </div>` 
  let elementos = document.createElement('div')
  elementos.innerHTML = texto
  $elemento.appendChild(elementos);
        }
    }))
  };
