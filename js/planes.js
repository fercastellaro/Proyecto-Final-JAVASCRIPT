let cardPlanB = document.getElementById('card-plan-b')
let cardPlanC = document.getElementById('card-plan-c')

let planB = document.getElementById('form-plan-b')
let planC = document.getElementById('form-plan-c')

let planBCotizar = document.getElementById("button-plan-b")
let planCCotizar = document.getElementById("button-plan-c")

let volverB = document.getElementById('back-b')
let volverC = document.getElementById('back-c')

let formB = document.getElementById('form-b')
let formC = document.getElementById('form-c')

let nombreB = document.getElementById('nombreB')
let nombreC = document.getElementById('nombreC')

let apellidoB = document.getElementById('apellidoB')
let apellidoC = document.getElementById('apellidoC')

let dniB = document.getElementById('dniB')
let dniC = document.getElementById('dniC')

let emailB = document.getElementById('emailB')
let emailC = document.getElementById('emailC')

let celularB = document.getElementById('celularB')
let celularC = document.getElementById('celularC')

let checkB = document.getElementById('checkB')
let checkC = document.getElementById('checkC')



planBCotizar.addEventListener('click', () => {
    planB.style.display = 'flex';
    cardPlanB.style.display = 'none';
    if (planC.style.display === 'flex'){
        cardPlanC.style.display = 'flex'
        planC.style.display = 'none'
        formC.reset()
        checkC.innerHTML = ''
    }
})

planCCotizar.addEventListener('click', () => {
    planC.style.display = 'flex';
    cardPlanC.style.display = 'none';
    if (planB.style.display === 'flex'){
        cardPlanB.style.display = 'flex'
        planB.style.display = 'none'
        formB.reset()
        checkB.innerHTML = ''
    }
})


volverB.addEventListener('click', () => {
    planB.style.display = 'none';
    cardPlanB.style.display = 'flex';
    checkB.innerHTML = ''
})

volverC.addEventListener('click', () => {
    planC.style.display = 'none';
    cardPlanC.style.display = 'flex';
    checkC.innerHTML = ''
})


// ---------- VALIDACIONES ----------

// PLAN B
formB.addEventListener('submit', function(e){
    e.preventDefault()

    let error = ''
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    if(nombreB.value.length < 1){
        error += `No ingresaste un nombre válido.<br>`
        entrar = true
    }
    if(apellidoB.value.length < 2){
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
        checkB.style.color = 'red'
        checkB.innerHTML = error
    }else{
        const btnB = document.getElementById('buttonB');


        
        btnB.value = 'Enviando...';
        
        const serviceID = 'default_service';
        const templateID = 'template_rnxfxw1';
        
        emailjs.sendForm(serviceID, templateID, this)
         .then(() => {
            btnB.value = 'Solicitar informacion';
            planB.style.display = 'none';
            cardPlanB.style.display = 'flex';
            let nombre = nombreB.value
            Swal.fire(` ${nombre}, te enviamos un email con la informacion de tu plan!
            <small>Por favor, en caso de no recibir el email, revisar carpeta Spam.</small>`)
            formB.reset()
        },)
    }

})

// PLAN C
formC.addEventListener('submit', function(e){
    e.preventDefault()

    let error = ''
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    if(nombreC.value.length < 1){
        error += `No ingresaste un nombre válido.<br>`
        entrar = true
    }
    if(apellidoC.value.length < 2){
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
        checkC.style.color = 'red'
        checkC.innerHTML = error
    }else{
        const btnC = document.getElementById('buttonC');


        btnC.value = 'Enviando...';
        
        const serviceID = 'default_service';
        const templateID = 'template_8ezon09';
        
        emailjs.sendForm(serviceID, templateID, this)
         .then(() => {
            btnC.value = 'Solicitar informacion';
            planC.style.display = 'none';
            cardPlanC.style.display = 'flex';
            let nombre = nombreC.value
            Swal.fire(` ${nombre}, te enviamos un email con la informacion de tu plan!
            <small>Por favor, en caso de no recibir el email, revisar carpeta Spam.</small>`)
            formC.reset()
        },);
    }
})