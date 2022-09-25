
 // seleccionando variable parrafo
 
 let parrafo =  document.getElementById('texto')

//Creando evento 'click'

const boton = document.getElementById('boton1')

boton.addEventListener( 'click' , () => {

    //Seleccionando valores de input

    const input1 = document.querySelector('#input1').value
    const input2 = document.querySelector('#input2').value
    const input3 = document.querySelector('#input3').value

    //Sumando imput y guardando en variable

    const suma = Number(input1) + Number(input2) + Number(input3)

    //aplicando condiciones

    if( suma <= 10){
        parrafo.innerHTML = `Llevas ${suma} stickers`
        parrafo.style.color = 'black'
    }else {
        parrafo.innerHTML = 'Llevas demasiados stickers'
        parrafo.style.color = 'red'
    }
})