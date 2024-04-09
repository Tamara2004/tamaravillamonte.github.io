
  // Codigo de la galeria

  // variables para el arreglo
  var imagenes =[1,2,3,4,5,6,7];
  var galeria = document.getElementById('galeria');
  
  for(imagen of imagenes){
  // templade para el Html
      galeria.innerHTML += ` 
      <div class="card">
       <a href="#" data-toggle="modal"data-target="#id${imagen}">
       <img src="Imagenes/img/${imagen}.jpg" alt="" class="card-img-top">
       </a>
       </div>`
   }

// Codigo del modal

  $('#exampleModal').on('show.bs.modal', function (event) {
    // Button que activa el modal
    var button = $(event.relatedTarget) 
    var recipient = button.data('whatever') // Extraer información de datos-* attributes
    // Si es necesario, puede iniciar una solicitud AJAX aquí (y luego realizar la actualización en una devolución de llamada).
    // Actualiza el contenido del modal. Use jQuery aquí.
    var modal = $(this)
    modal.find('.modal-title').text('Susbcripción de ' + recipient)
    modal.find('.modal-body input').val(recipient)
  })