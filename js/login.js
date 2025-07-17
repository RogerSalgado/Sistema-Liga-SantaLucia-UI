function iniciarSesion() {
  const usuarioInput = document.getElementById("usuario").value.trim();
  const contrasenaInput = document.getElementById("contrasena").value.trim();
  const mensajeError = document.getElementById("mensajeError");

  const usuarioEncontrado = usuarios.find(
    (u) => u.usuario === usuarioInput && u.contrasena === contrasenaInput
  );

  if (usuarioEncontrado) {
    localStorage.setItem("usuarioActivo", JSON.stringify(usuarioEncontrado));

    if (usuarioEncontrado.rol === "representante") {
      window.location.href = "dashboard_representante.html";
    } else if (usuarioEncontrado.rol === "tesorero") {
      window.location.href = "dashboard_tesorero.html";
    }
  } else {
    mensajeError.style.display = "block";
  }
}
