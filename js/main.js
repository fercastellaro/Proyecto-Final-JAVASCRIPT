
//------Variables y eventos------
const turnoerror = document.getElementById('turnoAsignado')
const selt1 = document.getElementById('sel1')
const singUp = document.getElementById('form-singup')
const register = document.getElementById('form-registro')
const checkSingUp = document.getElementById('check-singup')
const checkRegister = document.getElementById('check-register')
const nombre = document.getElementById('nombre')
const email = document.getElementById('email')
const password = document.getElementById('password')
const textoBienvenida = document.getElementById('mastertext')
let arrayBienvenida = ['¡Hola! Estas en Medicarg.', '¡Bienvenido!', 'Hey! Medicarg te da la bienvenida.', 'Medicarg, estamos con vos.']
const subTextoBienvenida = document.getElementById('subtext')
let subArrayBienvenida = ['La Red de servicios médicos más grande de Argentina.', 'Médicos online las 24 hs.', 'Medicina prepaga pensada para vos.', 'Cuidar tu salud, nuestra prioridad.','Planes que se adaptan a cada necesidad.']
let buttonSingUp = document.getElementById('check-singup')


//------Arrays de medicos------
const clinicos = [ 
    {nombre:'Gustavo Perez', sucursal:'Berazategui', especialidad:'Clinico'},
    {nombre:'Juan Goretzka', sucursal:'Ramos Mejia', especialidad:'Clinico'},
    {nombre:'Alberto Lopez', sucursal:'CABA', especialidad:'Clinico'},
    {nombre:'Osmar Vitto', sucursal:'Lanus', especialidad:'Clinico'},
    {nombre:'Fabricio Pons', sucursal:'San Martin', especialidad:'Clinico'},
    {nombre:'Hanna E. Almiron', sucursal:'Moron', especialidad:'Clinico'},

]

const pediatras = [
    {nombre:'Rodrigo Carlucci', sucursal:'Lanus', especialidad:'Pediatra'},
    {nombre:'Maria Osborn', sucursal:'CABA', especialidad:'Pediatra'},
    {nombre:'Milenka Bella', sucursal:'Fcio. Varela', especialidad:'Pediatra'},
    {nombre:'Carlos Colman', sucursal:'Berazategui', especialidad:'Pediatra'},
    {nombre:'Luis F. Milozzi', sucursal:'Quilmes', especialidad:'Pediatra'},

]

const tramumatologos = [
    {nombre:'Luis M. Merlos', sucursal:'Lanus', especialidad:'Traumatologo'},
    {nombre:'Rosa Gonzalez', sucursal:'San Fernando', especialidad:'Traumatologo'},
    {nombre:'Juana Ortega', sucursal:'Haedo', especialidad:'Traumatologo'},
    {nombre:'Mora Bauer', sucursal:'Berazategui', especialidad:'Traumatologo'},
    {nombre:'Pablo Gatti', sucursal:'Quilmes', especialidad:'Traumatologo'},
]

const cardiologos = [
    {nombre:'Ana Maria Gucz', sucursal:'Pilar', especialidad:'Cardiologo'},
    {nombre:'Mario Ramirez', sucursal:'Moreno', especialidad:'Cardiologo'},
    {nombre:'Esteban Ramirez', sucursal:'CABA', especialidad:'Cardiologo'},
    {nombre:'Matias A. Moga', sucursal:'La Plata', especialidad:'Cardiologo'},
]

const neurologos = [
    {nombre:'Lucio Meneses', sucursal:'Olivos', especialidad:'Neurologo'},
    {nombre:'Marlen Romero', sucursal:'San Fernando', especialidad:'Neurologo'},
    {nombre:'Fernando Pickleships', sucursal:'Quilmes', especialidad:'Neurologo'},
    {nombre:'Hernan G. Vashiv', sucursal:'Ezpeleta', especialidad:'Neurologo'},
]

const medicos = [...clinicos, ...pediatras, ...tramumatologos, ...cardiologos, ...neurologos]


//------Variables del selector------
var opt_1 = []
for(clinico of clinicos){
    opt_1.push(clinico.nombre + "  -  " + clinico.sucursal)
}

var opt_2 = []
for(pediatra of pediatras){
    opt_2.push(pediatra.nombre + "  -  " + pediatra.sucursal)
}

var opt_3 = []
for(traumatologo of tramumatologos){
    opt_3.push(traumatologo.nombre + "  -  " + traumatologo.sucursal)
}

var opt_4 = []
for(cardiologo of cardiologos){
    opt_4.push(cardiologo.nombre + "  -  " + cardiologo.sucursal)
}

var opt_5 = []
for(neurologo of neurologos){
    opt_5.push(neurologo.nombre + "  -  " + neurologo.sucursal)
}


//------ Saludo personalizado INDEX ------
if (textoBienvenida!=null){
    textoBienvenida.addEventListener('DOMContentLoaded', bienvenida())
}


    function bienvenida(){

        var random = Math.floor(Math.random()*(arrayBienvenida.length))
        textoBienvenida.textContent = arrayBienvenida[random]
    }


if(subTextoBienvenida != null){
    subTextoBienvenida.addEventListener('DOMContentLoaded', bienvenida2())
}

function bienvenida2(){

    var random = Math.floor(Math.random()*(subArrayBienvenida.length))
    subTextoBienvenida.textContent = subArrayBienvenida[random]
}


//------ login/register ------
if(register != null){
    register.addEventListener('submit', evt => {
        evt.preventDefault()

        let error = ''
        let entrar = false
        let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

        if(nombreR.value.length < 1){
            error += `No ingresaste un nombre válido.<br>`
            entrar = true
        }
        if(!regexEmail.test(emailR.value)){
            error+= `El email no es válido.<br>`
            entrar = true
        }
        if(passwordR.value.length < 6){
            error+= `El password no es válido.<br>`
            entrar = true
        }if(entrar){
            checkRegister.innerHTML = error
        }else{
            checkRegister.innerHTML = `¡Ya sos parte!<br> Ahora inicia sesion`
            localStorage.setItem('nombre', nombreR.value)
            localStorage.setItem('email', emailR.value)
            localStorage.setItem('password', passwordR.value)
            register.reset()
        }
    })
}


if(singUp != null){
    singUp.addEventListener('submit', evt => {
        evt.preventDefault()


        let emailRegistrado = localStorage.getItem('email')
        let passwordRegistrado = localStorage.getItem('password')

        
        if(email.value === emailRegistrado && password.value === passwordRegistrado){
                checkSingUp.innerHTML = `Enviado !`
                window.location="turnos.html"

            }else{
                checkSingUp.innerHTML = `email/password incorrectos`
                singUp.reset()
            }
    })
}


