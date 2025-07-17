document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const user = document.getElementById("username").value.trim().toLowerCase();
  const pass = document.getElementById("password").value.trim();

  const encontrado = usuarios.find(u => u.usuario === user && u.clave === pass);

  if (!encontrado) {
    alert("Usuario o contraseña incorrectos");
    return;
  }

  // Redireccionar por rol
  switch (encontrado.rol) {
    case "representante":
      window.location.href = "dashboard_representante.html";
      break;
    case "tesorero":
      window.location.href = "dashboard_tesorero.html";
      break;
    case "disciplina":
      window.location.href = "dashboard_comite.html";
      break;
    case "directiva":
      window.location.href = "dashboard_directiva.html";
      break;
    default:
      alert("Rol no reconocido");
  }
});
