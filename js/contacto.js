const btn = document.getElementById('button');
const form = document.getElementById('form')


document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Enviando...';

   const serviceID = 'default_service';
   const templateID = 'template_q8w95qh';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
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
});