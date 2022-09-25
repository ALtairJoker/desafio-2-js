 // seleccionando variable parrafo
 
 let parrafo =  document.getElementById('texto')

 //Creando evento 'click'

const boton = document.getElementById('boton')

boton.addEventListener( 'click' , () => {

     //Seleccionando valores de select

     const option1 = document.querySelector('#option1').value
     const option2 = document.querySelector('#option2').value
     const option3 = document.querySelector('#option3').value

    //Creando variable password

    const password = option1 + option2 + option3

    if (password === '911'){
        parrafo.innerHTML = "Password 1 correcto"
    }else if (password === '714'){
        parrafo.innerHTML = "Password 2 correcto"
    }else{
        parrafo.innerHTML = "Password incorrecto"
    }

})