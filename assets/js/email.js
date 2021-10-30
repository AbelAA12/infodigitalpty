//Controlar evento del formulario de contacto /Footer

const formcontacto = document.querySelector("#form-contacto");

formcontacto.addEventListener("submit", (e) => {
    e.preventDefault();

});

//Enviar email en formulario de contacto by EmailJS



function enviarEmail() {
    var nombre = document.getElementById('name').value;
    var correo = document.getElementById('email').value;
    var cliente = document.getElementById('cliente').value;
    var asignacion;

    document.getElementById("tarea").checked.true = asignacion = "Tarea";
    document.getElementById("proyecto").checked.true = asignacion = "Proyecto";
    document.getElementById("trabajo").checked.true = asignacion = "Trabajo Profesional";

  
    var mensaje = document.getElementById('descripcion').value;
    var fecha = document.getElementById('fecha').value;

    //var resultado = "Tipo de cliente:\n "+cliente+" Asignación:\n "+asignacion+" Descripción:\n "+mensaje+" Fecha de Entrega:\n "+fecha;

    var templateParams = {
        to_name: nombre,
        from_name: correo,
        to_client: cliente,
        to_assignment: asignacion,
        to_message: mensaje,
        to_date: fecha,
        reply_to: "EmailJS"
    };

    emailjs.init("user_tzubTebjVZFCg99Q96QOg");

    emailjs.send('Gmail', 'form-contacto', templateParams)
        .then(function (response) {
            console.log('SUCCESS!', response.status, response.text);
            formcontacto.reset();
            alert("Correo envidado correctamente!");
        }, function (error) {
            console.log('FAILED...', error);
        });

}