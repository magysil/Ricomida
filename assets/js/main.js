const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))


$(document).ready(function(){

    /*Evento “click” de jquery para mostrar una alerta al hacer un clicK
sobre el botón de "Enviar por Correo" mediante el uso de los selectores por Id*/
    $("#enviarCorreo").click(function(){
      alert("El correo fue enviado correctamente...");
    });

    /*Selectores de etiqueta y el método de 
`on` con el evento `dblclick`, para modificar el color del texto */

    $("p.ingredientes").on("dblclick", function(){
        $(this).css("color", "red");
    });

    $("p.preparacion").on("dblclick", function(){
        $(this).css("color", "red");        
    });

    



  });