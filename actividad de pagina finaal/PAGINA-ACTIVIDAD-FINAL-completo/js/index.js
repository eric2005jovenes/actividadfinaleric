document.addEventListener('DOMContentLoaded', function() {
    const usuarioGuardado = JSON.parse(localStorage.getItem('usuario'));

    const menuUsuario = document.getElementById('menu-usuario');
    const opcionesUsuario = document.getElementById('opciones-usuario');
    const nombreUsuario = document.getElementById('nombre-usuario');
    const cerrarSesionBtn = document.getElementById('cerrarSesion');

    function mostrarOpcionesUsuario(usuario) {
        nombreUsuario.textContent = `Bienvenido, ${usuario.username}`;
        menuUsuario.style.display = 'block';
        opcionesUsuario.style.display = 'block';
    }

    function ocultarOpcionesUsuario() {
        menuUsuario.style.display = 'none';
        opcionesUsuario.style.display = 'none';
    }

    if (usuarioGuardado) {
        mostrarOpcionesUsuario(usuarioGuardado);

        cerrarSesionBtn.addEventListener('click', function() {
            localStorage.removeItem('usuario');
            ocultarOpcionesUsuario();
            window.location.href = 'login.html';
        });
    } else {
        ocultarOpcionesUsuario();
        window.location.href = 'login.html';
    }
});