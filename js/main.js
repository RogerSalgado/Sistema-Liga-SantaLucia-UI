const equipos = [
  { nombre: "Zelaya", logo: "zelaya.jpg" },
  { nombre: "Estanzuela", logo: "estanzuela.jpg" },
  { nombre: "Leones", logo: "leones.jpg" },
  { nombre: "Fraternidad", logo: "fraternidad.jpg" },
  { nombre: "Honduras", logo: "honduras.jpg" },
  { nombre: "Juventud", logo: "juventud.jpg" },
  { nombre: "Spartanos", logo: "spartanos.jpg" },
  { nombre: "William", logo: "william.jpg" },
  { nombre: "Atlas", logo: "atlas.jpg" },
  { nombre: "Cebollas", logo: "cebollas.jpg" },
  { nombre: "Sabaneta", logo: "sabaneta.jpg" }
];

function mostrarLogosEquipos() {
  const contenedor = document.getElementById("logosEquipos");

  equipos.forEach(eq => {
    const div = document.createElement("div");
    div.className = "text-center mx-2";

    const img = document.createElement("img");
    img.src = `img/equipos/${eq.logo}`;
    img.alt = eq.nombre;
    img.title = eq.nombre;
    img.className = "rounded-circle border border-primary";
    img.style.width = "60px";
    img.style.height = "60px";

    const label = document.createElement("div");
    label.innerText = eq.nombre;
    label.style.fontSize = "0.75rem";
    label.style.marginTop = "0.25rem";

    div.appendChild(img);
    div.appendChild(label);
    contenedor.appendChild(div);
  });
}

const posiciones = [
  { equipo: "Spartanos", puntos: 27, pj: 10, pg: 9, pe: 0, pp: 1 },
  { equipo: "C.D. Zelaya", puntos: 24, pj: 10, pg: 8, pe: 0, pp: 2 },
  { equipo: "Fraternidad", puntos: 20, pj: 10, pg: 6, pe: 2, pp: 2 },
  { equipo: "Estanzuela", puntos: 18, pj: 10, pg: 5, pe: 3, pp: 2 }
];

function mostrarTablaPosiciones() {
  const contenedor = document.getElementById("tablaPosiciones");
  let html = `<table class="table table-sm table-striped">
    <thead><tr>
      <th>Equipo</th><th>Pts</th><th>PJ</th><th>PG</th><th>PE</th><th>PP</th>
    </tr></thead><tbody>`;

  posiciones.forEach(eq => {
    html += `<tr>
      <td>${eq.equipo}</td>
      <td>${eq.puntos}</td>
      <td>${eq.pj}</td>
      <td>${eq.pg}</td>
      <td>${eq.pe}</td>
      <td>${eq.pp}</td>
    </tr>`;
  });

  html += "</tbody></table>";
  contenedor.innerHTML = html;
}

document.addEventListener("DOMContentLoaded", () => {
  mostrarLogosEquipos();
  mostrarTablaPosiciones();
});
