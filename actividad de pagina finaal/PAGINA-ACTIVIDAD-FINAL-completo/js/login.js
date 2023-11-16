//script.js

// Función para mostrar el estado de inicio de sesión
function mostrarEstadoInicioSesion() {
    var Usuario= localStorage.getItem('usuario');
    var menuUsuario = document.getElementById('menu-usuario');
    var opcionesUsuario = document.getElementById('opciones-usuario');
    var menuVisitante = document.getElementById('menu-visitante');

    if (Usuario) {
        var usuario = JSON.parse(Usuario);
        console.log('Usuario almacenado:', Usuario);
        mostrarNombreUsuario(Usuario.nombre);
    } else {
        console.log('No hay Usuario almacenado en localStorage');
        ocultarElementosUsuario();
    }
}

// Función para mostrar el nombre del usuario
function mostrarNombreUsuario(nombre) {
    var mensajeBienvenida = document.getElementById('mensaje-bienvenida');

    if (mensajeBienvenida) {
        mensajeBienvenida.innerText = '¡Bienvenido, ' + nombre + '!';
    }

    mostrarElementosUsuario();
}

// Función para ocultar elementos del usuario
function ocultarElementosUsuario() {
    var menuUsuario = document.getElementById('menu-Usuario');
    var opcionesUsuario = document.getElementById('opciones-usuario');
    var menuVisitante = document.getElementById('menu-visitante');

    if (menuUsuario && opcionesUsuario && menuVisitante) {
        menuUsuario.style.display = 'none';
        opcionesUsuario.style.display = 'none';
        menuVisitante.style.display = 'block';
    }
}

// Función para mostrar elementos del usuario
function mostrarElementosUsuario() {
    var menuUsuario = document.getElementById('menu-usuario');
    var opcionesUsuario = document.getElementById('opciones-usuario');
    var menuVisitante = document.getElementById('menu-visitante');

    if (menuUsuario && opcionesUsuario && menuVisitante) {
        menuUsuario.style.display = 'block';
        opcionesUsuario.style.display = 'block';
        menuVisitante.style.display = 'none';
    }
}

// Función para cerrar sesión
function cerrarSesion() {
    localStorage.removeItem('usuario'); // Elimina el usuario almacenado en localStorage
    window.location.href = "login.html"; // Redirige a la página de inicio de sesión
}
try {
    console.log('Script ejecutado correctamente');

    // Muestra el estado de inicio de sesión al cargar la página
    mostrarEstadoInicioSesion();
} catch (error) {
    console.error('Error en el script:', error);
}