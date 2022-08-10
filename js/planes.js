let cardPlanA = document.getElementById('card-plan-a')
let cardPlanB = document.getElementById('card-plan-b')
let cardPlanC = document.getElementById('card-plan-c')

let planA = document.getElementById('form-plan-a')
let planB = document.getElementById('form-plan-b')
let planC = document.getElementById('form-plan-c')

let planACotizar = document.getElementById("button-plan-a")
let planBCotizar = document.getElementById("button-plan-b")
let planCCotizar = document.getElementById("button-plan-c")

let volverA = document.getElementById('back-a')
let volverB = document.getElementById('back-b')
let volverC = document.getElementById('back-c')

let formA = document.getElementById('form-a')
let formB = document.getElementById('form-b')
let formC = document.getElementById('form-c')

let nombreA = document.getElementById('nombreA')
let nombreB = document.getElementById('nombreB')
let nombreC = document.getElementById('nombreC')

let apellidoA = document.getElementById('apellidoA')
let apellidoB = document.getElementById('apellidoB')
let apellidoC = document.getElementById('apellidoC')

let dniA = document.getElementById('dniA')
let dniB = document.getElementById('dniB')
let dniC = document.getElementById('dniC')

let emailA = document.getElementById('emailA')
let emailB = document.getElementById('emailB')
let emailC = document.getElementById('emailC')

let celularA = document.getElementById('celularA')
let celularB = document.getElementById('celularB')
let celularC = document.getElementById('celularC')

let checkA = document.getElementById('checkA')
let checkB = document.getElementById('checkB')
let checkC = document.getElementById('checkC')

planACotizar.addEventListener('click', () => {
    planA.style.display = 'flex';
    cardPlanA.style.display = 'none';
    if (planB.style.display === 'flex'){
        cardPlanB.style.display = 'flex'
        planB.style.display = 'none'
        formB.reset()
        checkB.innerHTML = ''
    }else if (planC.style.display === 'flex'){
        cardPlanC.style.display = 'flex'
        planC.style.display = 'none'
        formC.reset()
        checkC.innerHTML = ''
    }
})

planBCotizar.addEventListener('click', () => {
    planB.style.display = 'flex';
    cardPlanB.style.display = 'none';
    if (planA.style.display === 'flex'){
        cardPlanA.style.display = 'flex'
        planA.style.display = 'none'
        formA.reset()
        checkA.innerHTML = ''
    }else if (planC.style.display === 'flex'){
        cardPlanC.style.display = 'flex'
        planC.style.display = 'none'
        formC.reset()
        checkC.innerHTML = ''
    }
})

planCCotizar.addEventListener('click', () => {
    planC.style.display = 'flex';
    cardPlanC.style.display = 'none';
    if (planA.style.display === 'flex'){
        cardPlanA.style.display = 'flex'
        planA.style.display = 'none'
        formA.reset()
        checkA.innerHTML = ''
    }else if (planB.style.display === 'flex'){
        cardPlanB.style.display = 'flex'
        planB.style.display = 'none'
        formB.reset()
        checkB.innerHTML = ''
    }
})

volverA.addEventListener('click', () => {
    planA.style.display = 'none';
    cardPlanA.style.display = 'flex';
})

volverB.addEventListener('click', () => {
    planB.style.display = 'none';
    cardPlanB.style.display = 'flex';
})

volverC.addEventListener('click', () => {
    planC.style.display = 'none';
    cardPlanC.style.display = 'flex';
})


// ---------- VALIDACIONES ----------

// PLAN A
formA.addEventListener('submit', (e) => {
    e.preventDefault()

    let error = ''
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    if(nombreA.value.length < 1){
        error += `No ingresaste un nombre válido.<br>`
        entrar = true
    }
    if(apellidoA.value.length < 6){
        error+= `No ingresaste un apellido válido.<br>`
        entrar = true
    }
    if(dniA.value.length < 6){
        error+= `DNI/Pasaporte no valido.<br>`
        entrar = true
    }
    if(!regexEmail.test(emailA.value)){
        error+= `El email no es válido.<br>`
        entrar = true
    }
    if(celularA.value.length < 6){
        error+= `Numero de celular no valido.<br>`
        entrar = true
    }
    if(entrar){
        checkA.innerHTML = error
    }else{
        planA.style.display = 'none';
        cardPlanA.style.display = 'flex';
        let nombre = nombreA.value
        Swal.fire(` ${nombre}, un asesor se estara contactando con vos a la brevedad.`)
        formA.reset()
    }

})

// PLAN B
formB.addEventListener('submit', (e) => {
    e.preventDefault()

    let error = ''
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    if(nombreB.value.length < 1){
        error += `No ingresaste un nombre válido.<br>`
        entrar = true
    }
    if(apellidoB.value.length < 6){
        error+= `No ingresaste un apellido válido.<br>`
        entrar = true
    }
    if(dniB.value.length < 6){
        error+= `DNI/Pasaporte no valido.<br>`
        entrar = true
    }
    if(!regexEmail.test(emailB.value)){
        error+= `El email no es válido.<br>`
        entrar = true
    }
    if(celularB.value.length < 6){
        error+= `Numero de celular no valido.<br>`
        entrar = true
    }
    if(entrar){
        checkB.innerHTML = error
    }else{
        planB.style.display = 'none';
        cardPlanB.style.display = 'flex';
        let nombre = nombreB.value
        Swal.fire(` ${nombre}, un asesor se estara contactando con vos a la brevedad.`)
        formB.reset()
    }

})

// PLAN C
formC.addEventListener('submit', (e) => {
    e.preventDefault()

    let error = ''
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    if(nombreC.value.length < 1){
        error += `No ingresaste un nombre válido.<br>`
        entrar = true
    }
    if(apellidoC.value.length < 6){
        error+= `No ingresaste un apellido válido.<br>`
        entrar = true
    }
    if(dniC.value.length < 6){
        error+= `DNI/Pasaporte no valido.<br>`
        entrar = true
    }
    if(!regexEmail.test(emailC.value)){
        error+= `El email no es válido.<br>`
        entrar = true
    }
    if(celularC.value.length < 6){
        error+= `Numero de celular no valido.<br>`
        entrar = true
    }
    if(entrar){
        checkC.innerHTML = error
    }else{
        planC.style.display = 'none';
        cardPlanC.style.display = 'flex';
        let nombre = nombreC.value
        Swal.fire(` ${nombre}, un asesor se estara contactando con vos a la brevedad.`)
        formC.reset()
    }
})