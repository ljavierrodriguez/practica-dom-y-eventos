/* 

Sintaxis:

elemento.addEventListerner('eventoAEscuchar', function(event){})
elemento.addEventListerner('eventoAEscuchar', (event) => {})
elemento.addEventListerner('eventoAEscuchar', funcionAEjecutar)
function funcionAEjecutar(event){}

ejemplo:

document.addEventListerner('mousemove', (evento) => {
    console.log(`X: ${evento.x}, Y: ${evento.y}`)    
})


*/

/* document.addEventListener('mousemove', (evento) => {
    console.log(`X: ${evento.x}, Y: ${evento.y}`)    
}) */

/* Ejemplo  1 */

/* 
let btn = document.getElementById('btn')
btn.addEventListener() 
*/

document.getElementById('btn').addEventListener('click', function(){
    let texto = document.querySelector('#texto')
    texto.textContent = '¡Texto Cambiado desde Javascript!'
})

/* Ejemplo 2 */

let colores = document.querySelectorAll('.color') // obtenemos todos los elementos con la clase color

colores.forEach((color) => {
    //console.log(color)
    color.addEventListener('click', (e) => {
        if(e.target.classList.contains('green')){
            //console.log('Verde')
            document.body.style.backgroundColor = 'green'
        } else if (e.target.classList.contains('blueviolet')){
            //console.log('Violeta')
            document.body.style.backgroundColor = 'blueviolet'
        } else if (e.target.classList.contains('cadetblue')){
            //console.log('Azul')
            document.body.style.backgroundColor = 'cadetblue'
        } else if (e.target.classList.contains('brown')){
            //console.log('Marron')
            document.body.style.backgroundColor = 'brown'
        }
    })

    /* color.addEventListener('mouseover', function(e){
        if(e.target.classList.contains('green')){
            //console.log('Verde')
            document.body.style.backgroundColor = 'green'
        } else if (e.target.classList.contains('blueviolet')){
            //console.log('Violeta')
            document.body.style.backgroundColor = 'blueviolet'
        } else if (e.target.classList.contains('cadetblue')){
            //console.log('Azul')
            document.body.style.backgroundColor = 'cadetblue'
        } else if (e.target.classList.contains('brown')){
            //console.log('Marron')
            document.body.style.backgroundColor = 'brown'
        } 
    }) */
})

/* Ejemplo 3 */
let form = document.querySelector('#formulario')
form.addEventListener('submit', (e) => {
    e.preventDefault() // detener el envio del formulario
    console.log("Formulario Enviado")

    // 1era Forma
    //let search = document.querySelector('#search')
    //console.log(search.value)

    // 2da Forma
    let search = e.target.search
    console.log(search.value)
})

let formLogin = document.querySelector('#login')
formLogin.addEventListener('submit', (e) => {
    e.preventDefault()

    let email = e.target.email
    let password = e.target.password

    // Destructuring
    // let { email, password } = e.target

    console.log(email.value)
    console.log(password.value)

})

/* Ejemplo 4 */

let name = document.getElementById('name')
name.addEventListener('keydown', (e) => {
    console.log(`Tecla Presionada: ${e.key}`)
    console.log(`Tecla Presionada: ${e.keyCode}`)
})

/* Ejemplo 5 */

let tec = ["HTML", "CSS", "Javascript", "Python", "React", "Java", "PHP", "Ruby"]
let lista = document.querySelector('.list-group')
tec.forEach((t) => {
    let li = document.createElement('li')
    li.classList.add('list-group-item', 'list-group-item-action')
    li.textContent = t 
    lista.appendChild(li)
})