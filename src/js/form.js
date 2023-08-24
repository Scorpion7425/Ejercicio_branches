const formulario = document.getElementById('registro-form');

//Escuchar eventos en la página
formulario.addEventListener('submit', (e) => {
    e.preventDefault(); //Evita que se envie el form automatica/
   
    //Capturar el valor que el usuario ingresa en el campo input
    const nombre_input = formulario.nombre_completo.value;
    console.log(nombre_input);
    const correo_input = formulario.email.value;
    console.log(correo_input);
    const contraseña_input = formulario.contraseña.value;
    console.log(contraseña_input)
    const repetir_contraseña_input = formulario.confirmar_contraseña.value;
    console.log(repetir_contraseña_input)
    const fecha_input = formulario.fecha_nacimiento.value;
    console.log(fecha_input);
    const seleccion_genero_input = formulario.opcion_genero.value;
    console.log(seleccion_genero_input)
    if(formulario.aceptar_terminos.checked){
        console.log("El usuario acepto los terminos y condiciones");
    }else{
        console.log("El usuario no acepto los terminos y condiciones")
    }        
})