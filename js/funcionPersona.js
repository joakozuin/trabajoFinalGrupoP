const registroUsuario = document.querySelector('#registrarUsuario')

registroUsuario.addEventListener('submit',(event)=>{
    event.preventDefault()

    let formData = new FormData(registroUsuario)

    let nuevaPersona ={
        nombre:formData.get('nombre'),
        apellido:formData.get('apellido'),
        email:formData.get('email'), 
        usuario:formData.get('usuario'),
        pasword:formData.get('pasword'),

    } 

   console.log(nuevaPersona)

   BDPersona.push(nuevaPersona)

   console.log(BDPersona)
})
