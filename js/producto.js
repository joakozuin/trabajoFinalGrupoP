const Inputsearch = document.querySelector('#Inputsearch') 


function htmlInterfaz(BDArray){
    
    containerProducts.innerHTML = ''

    BDArray.forEach(function(elemento) {
        
        containerProducts.innerHTML += `
        
                                    <div class="producto">
                                    <h3>${elemento.nombre.toUpperCase() }</h3>
                                    <div class="contImg">
                                       <img src=${elemento.imagen} alt="producto">
                                    </div> 
                                    <p>${elemento.descripcion}</p>
                                        <h4> Stock: ${elemento.stock }</h4>
                                        <p> $ ${elemento.precio}.00</p>
                                        <button class="btn" id='${elemento.id}'>Añadir al carrito</button>
                                    </div>
        
        `
    
    });


}

function agregarAlCarrito(){
    let botones = document.querySelectorAll('.btn')
    console.log(botones);
    botones.forEach(function(boton){
      boton.addEventListener('click', function(evento){
        /* alert(`agregado al carrito `) */
      let id = evento.target.id
      let nombre = evento.target.nombre
      console.log(id);

      alert(`agregado al carrito  ${id}`)

      let todosProductoBD = BD.find( (elemento) =>  elemento.id == id  )
         console.log(todosProductoBD.nombre);
        
      arrayCarrito.push(todosProductoBD)
      console.log(arrayCarrito);
      })
    })

  }

/*   for (let i = 0; i < BD.length; i++) {
  
    if (BDs[i].destacado === true) {
      htmlInterfaz(BD[i])
      
    }else{
      continue
    }
    
  } */

htmlInterfaz(BD)

agregarAlCarrito()


Inputsearch.addEventListener('input', function(evento){
    console.log(evento.target.value);
    let inputValue = evento.target.value
    inputValue = inputValue.toLowerCase()
    let busqueda = BD.filter((elemento) => elemento.nombre.includes(inputValue))
    console.log(busqueda);
    htmlInterfaz(busqueda)
    agregarAlCarrito()
})