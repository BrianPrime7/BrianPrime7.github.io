function validateLogin() {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var passwordRegex = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,}$/;

    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    if (!emailRegex.test(email)) {
        alert('Ingresa un correo electrónico válido.');
        return;
    }

    if (!passwordRegex.test(password)) {
        alert('La contraseña debe contener al menos 8 caracteres, incluyendo al menos un número y una letra.');
        return;
    }

    alert('Inicio de sesión exitoso!');
    // Aquí puedes agregar la lógica para enviar los datos al backend y verificar la autenticación.
}
