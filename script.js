async function validateLogin() {
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

    // Enviar datos al backend
    try {
        const response = await fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        const data = await response.json();

        if (data.success) {
            alert('Inicio de sesión exitoso!');
        } else {
            alert('Error en el inicio de sesión. Verifica tus credenciales.');
        }
    } catch (error) {
        console.error('Error al enviar datos al backend:', error);
        alert('Ocurrió un error al intentar iniciar sesión. Por favor, inténtalo de nuevo.');
    }
}
