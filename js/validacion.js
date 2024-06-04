// JavaScript: Función para validar la contraseña y actualizar el ícono
function validatePassword() {
    var password = document.getElementById('password');
    var icon = document.getElementById('password-icon');
    var validationMessage = document.getElementById('mensaje-validacion');
    if (password.value.match(/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@!%&?])(?!\s)[a-zA-Z\d$@!%&?]{8,16}/)) {
        icon.className = 'ok';
        password.classList.remove('invalid');
        password.classList.add('valid');
        validationMessage.style.visibility = 'hidden'; // Ocultar el mensaje de validación
    } else {
        icon.className = 'error';
        password.classList.remove('valid');
        password.classList.add('invalid');
        validationMessage.style.visibility = 'visible'; // Mostrar el mensaje de validación
    }
}

// JavaScript: Función para validar la confirmación de contraseña y actualizar el ícono
function validateConfirmPassword() {
    var confirmPassword = document.getElementById('confirm_password');
    var icon = document.getElementById('confirm-password-icon');
    var validationMessage = document.getElementById('mensaje-validacion');

    // Check if the confirmPassword field is empty
    if (confirmPassword.value === '') {
        icon.className = 'error';
        confirmPassword.classList.remove('valid');
        confirmPassword.classList.add('invalid');
        validationMessage.style.visibility = 'visible'; // Mostrar el mensaje de validación
    } else if (confirmPassword.value === document.getElementById('password').value) {
        icon.className = 'ok';
        confirmPassword.classList.remove('invalid');
        confirmPassword.classList.add('valid');
        validationMessage.style.visibility = 'hidden'; // Ocultar el mensaje de validación
    } else {
        icon.className = 'error';
        confirmPassword.classList.remove('valid');
        confirmPassword.classList.add('invalid');
        validationMessage.style.visibility = 'visible'; // Mostrar el mensaje de validación
    }
}


// JavaScript: Función para validar el correo electrónico y actualizar el ícono
function validateEmail() {
    var email = document.getElementById('email');
    var icon = document.getElementById('email-icon');
    if (email.validity.valid) {
        icon.className = 'ok';
        email.classList.remove('invalid');
        email.classList.add('valid');
    } else {
        icon.className = 'error';
        email.classList.remove('valid');
        email.classList.add('invalid');
    }
}
// Añadir evento de entrada, blur y focus al campo de correo electrónico
var emailField = document.getElementById('email');
emailField.addEventListener('input', validateEmail);
emailField.addEventListener('blur', validateEmail);
emailField.addEventListener('focus', validateEmail); 

// Añadir evento de entrada, blur y focus al campo de la contraseña
var passwordField = document.getElementById('password');
passwordField.addEventListener('input', function() {
    validatePassword();
    validateConfirmPassword(); // Validar la confirmación de contraseña cada vez que la contraseña cambia
});
passwordField.addEventListener('blur', validatePassword);
passwordField.addEventListener('focus', validatePassword); // Nuevo evento para prevenir errores de validación

// Añadir evento de entrada, blur y focus al campo de confirmar contraseña
var confirmPasswordField = document.getElementById('confirm_password');
confirmPasswordField.addEventListener('input', validateConfirmPassword);
confirmPasswordField.addEventListener('blur', validateConfirmPassword);
confirmPasswordField.addEventListener('focus', validateConfirmPassword); 


// Añadir evento de envío al formulario
document.getElementById('enviarFormulario').addEventListener('click', function(event) {
    event.preventDefault();

    var nombre = document.getElementById('nombre');
    var telefono = document.getElementById('telefono');
    var email = document.getElementById('email');
    var password = document.getElementById('password');
    var confirm_password = document.getElementById('confirm_password');
    var politica = document.getElementById('politica');

    // Verificar si las contraseñas coinciden
    if (password.value !== confirm_password.value) {
        swal('Error', 'Las contraseñas no coinciden.', 'error');
        return;
    }

    if (!nombre.validity.valid || !telefono.validity.valid || !email.validity.valid || !password.validity.valid || !confirm_password.validity.valid) {
        swal('Error', 'Por favor, rellena todos los campos correctamente.', 'error');
        return;
    }



    if (!politica.checked) {
        swal('Error', 'Debes aceptar la política de privacidad.', 'error');
        return;
    }

    var data = {
        nombre: nombre.value,
        telefono: telefono.value,
        email: email.value,
        password: password.value
    };

    console.log(JSON.stringify(data));

    swal('Éxito', 'Formulario enviado con éxito. Datos: ' + JSON.stringify(data), 'success');

});