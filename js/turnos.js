
selt1.addEventListener('change', primerSelect)


//------ Variables ------
let misTurnos = document.getElementById('misTurnos')
let asignado = document.getElementById('asignado')
let sel1 = document.getElementById('sel1')
let sel2 = document.getElementById('sel2')
const turnera = document.getElementById('turnera')
const horario = document.getElementById("inputform");
const dia = document.getElementById('dia')
const listaturnos = document.querySelector('#lista-turnos');
const formulario = document.querySelector('#formularioTurnos');
let turnos = [];
const saludo = document.getElementById('saludo')


//------ Eventos ------
formularioTurnos.addEventListener('submit', validacion)
listaturnos.addEventListener('click', borrarTurn)

document.addEventListener('DOMContentLoaded', ()=>{
    turnos = JSON.parse(localStorage.getItem('turnos')) || []
    render()
})


//------ selector turnos ------
function primerSelect() {
    var sel1;
    sel1 = document.formularioTurnos.sel1[document.formularioTurnos.sel1.selectedIndex].value
    if(sel1 != 0){
        mis_opts = eval ('opt_' + sel1);
        num_opts = mis_opts.length;
        document.formularioTurnos.sel2.length = num_opts;
        for(i=0; i<num_opts; i++){
            document.formularioTurnos.sel2.options[i].value = mis_opts[i];
            document.formularioTurnos.sel2.options[i].text = mis_opts[i];
        }
        }else {
            document.formularioTurnos.sel2.length = 1;
            document.formularioTurnos.sel2.options[0].value = "-"
            document.formularioTurnos.sel2.options[0].text = "Seleccione"
        }
        document.formularioTurnos.sel2.options[0].selected = true ;

    }



//------ validacion turnos ------
function validacion (evt){  
    evt.preventDefault()

    let error = ''

    sel1.value == '0' ? error += `*Seleccionar un tipo de turno<br>` : error += ''

    sel2.value === '-' ? error += `*Seleccionar un especialista<br>` : error += ''

    dia.value === '' ? error += `*Elegi el dia de tu turno<br>` : error += ''

    inputform.value == '' ? error += `*Seleccionar un horario<br>` : error += ''


    if(error.length > 0){
        turnoerror.innerHTML = error
    }else{
    agregarTurn()      
    }
}   


//------ Agregar turno ------
function agregarTurn(){

    const tipoDeTurno = document.formularioTurnos.sel1[document.formularioTurnos.sel1.selectedIndex].id;
    const tuMedico = document.formularioTurnos.sel2[document.formularioTurnos.sel2.selectedIndex].text;
    const tuHorario = document.formularioTurnos.inputform.value
    const tuDia = document.formularioTurnos.dia.value

    const TurnObj = {
        especialidad: tipoDeTurno,
        nombre: tuMedico,
        dia: tuDia,
        horario: tuHorario,
        id: Date.now(),
    }


    turnos.push(TurnObj)

    // location.reload()

    formularioTurnos.reset()
    document.formularioTurnos.sel2[document.formularioTurnos.sel2.selectedIndex].text = 'Seleccione'

    render()

}

//------ Horario turno ------

var fechaTurno = new Date();
var anioTurno = fechaTurno.getFullYear();
var diaTurno = fechaTurno.getDate();
var _mes = fechaTurno.getMonth();
_mes = _mes + 1

if (_mes < 10){
    var mes = '0' + _mes;
} else {
    var mes = _mes.toString;
}

dia.min = anioTurno+'-'+mes+'-'+diaTurno;






//------ Borrar turno ------
function borrarTurn(e){
    e.preventDefault()
    Swal.fire({
        title: 'Seguro que queres cancelar tu turno?',
        text: "De hacerlo, el turno sera asignado a otra persona.",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#46cc8d',
        cancelButtonColor: '#1f4037',
        confirmButtonText: 'Si, deseo cancelarlo.',
        cancelButtonText: 'No quiero cancelarlo.'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Cancelado',
            'Tu turno sera reasignado.',
            'success'
          )
            const id = e.target.parentElement.dataset.TurnId
            turnos = turnos.filter(Turn => Turn.id != id)
            render()  
        }
      })
}


//------ Panel de turnos ------
function render(){

    limpiarHTML()
    if(turnos.length > 0){
        listaturnos.style.display = 'grid'
        turnos.forEach( (Turn) => {
            
            const { especialidad, nombre, dia, horario } = Turn

            const btnBorrar = document.createElement('a');
            btnBorrar.classList = 'borrar-Turn'
            btnBorrar.innerText = " ❌";
            btnBorrar.style = 'cursor : pointer'
            const p = document.createElement('p')
            p.textContent = nombre + ' ' + especialidad + ' ' + dia + ' ' + horario + ' '
            p.appendChild(btnBorrar)
            p.dataset.TurnId = Turn.id

            listaturnos.appendChild(p)
            
        })
    }else{
        listaturnos.style.display = 'none'
    }

    sincronizarStorage()

}


function sincronizarStorage() {
    localStorage.setItem('turnos', JSON.stringify(turnos))
}


function limpiarHTML(){

    while(listaturnos.firstChild) {
        listaturnos.removeChild(listaturnos.firstChild)
    }
}


//------ Saludo personalizado ------
document.addEventListener('DOMContentLoaded', ()=>{
    let nombreRegistrado = localStorage.getItem('nombre')                
    nombreRegistrado && (saludo.innerHTML = `¡Hola ${nombreRegistrado}! Nos alegra verte. <br> Gestiona tus turnos:`)
})
