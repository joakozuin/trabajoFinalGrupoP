const registroProducto = document.querySelector('#registrarProducto')

registroProducto.addEventListener('submit',(event)=>{
    event.preventDefault()

    let formData = new FormData(registroProducto)

    let nuevoProducto ={
        nombre:formData.get('nombre'),
        descripcion:formData.get('descripcion'),
        precio:formData.get('precio'), 
        imagen:formData.get('imagen'),
        stock:formData.get('stock'),
        categoria:formData.get('categoria'),
        destacado:formData.get('destacado'),

    } 

   console.log(nuevoProducto)

   BD.push(nuevoProducto)

   console.log(BD)
})