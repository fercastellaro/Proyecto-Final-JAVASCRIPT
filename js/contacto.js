const btn = document.getElementById('button');
const form = document.getElementById('form')
const tuName = document.getElementById('from_name')
const tuEmail = document.getElementById('reply_to')
const mensaje = document.getElementById('message')
const check = document.getElementById('check')

form.addEventListener('submit', function(event) {
   event.preventDefault();

   let error = ''
   let entrar = false
   let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/


  if(tuName.value.length < 2){
    error += `No ingresaste un nombre válido.<br>`
    entrar = true
  }

  if(!regexEmail.test(tuEmail.value)){
    error+= `El email no es válido.<br>`
    entrar = true
  }

  if(mensaje.value.length < 10){
    error += `El comentario ingresado es muy corto.<br>`
    entrar = true
  }  
  
  if(entrar){
    form.style.height='550px'
    check.style.color = 'red'
    check.innerHTML = error
  } else {

    btn.value = 'Enviando...';

    const serviceID = 'default_service';
    const templateID = 'template_q8w95qh';
 
    emailjs.sendForm(serviceID, templateID, this)
     .then(() => {
       btn.value = 'Enviar comentario';
       Swal.fire(
         'Tu consulta fue enviada!',
         'En breve te responderemos por email',
         'success'
       )
       form.reset()
     }, (err) => {
       btn.value = 'Enviar comentario';
       alert(JSON.stringify(err));
     });
 }
}
);





