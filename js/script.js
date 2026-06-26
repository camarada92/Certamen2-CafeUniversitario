// 1. Arreglo principal donde se guardan todas las solicitudes (en memoria)
let solicitudes = [];

// 2. Función principal: se ejecuta al presionar "Enviar Solicitud"
function registrarSolicitud() {
  // 3. Capturamos los datos que escribió el usuario
  let nombre = document.getElementById("nombre").value.trim();
  let correo = document.getElementById("correo").value.trim();
  let telefono = document.getElementById("telefono").value.trim();
  let producto = document.getElementById("producto").value;
  let comentario = document.getElementById("comentario").value.trim();

  let mensaje = document.getElementById("mensaje");

  // 4. Validamos que no haya campos vacíos
  if (
    nombre === "" ||
    correo === "" ||
    telefono === "" ||
    producto === "" ||
    comentario === ""
  ) {
    mensaje.innerHTML = "⚠ Debe completar todos los campos.";
    mensaje.className = "error";
    return;
  }

  // 5. Validamos un formato básico de correo
  if (!correo.includes("@")) {
    mensaje.innerHTML = "Correo electrónico inválido.";
    mensaje.className = "error";
    return;
  }

  // 6. Creamos el objeto solicitud con los datos capturados
  let solicitud = {
    nombre: nombre,
    correo: correo,
    telefono: telefono,
    producto: producto,
    comentario: comentario,
  };

  // 7. Guardamos la solicitud dentro del arreglo
  solicitudes.push(solicitud);

  // 8. Mensaje de éxito
  mensaje.innerHTML = "Solicitud registrada correctamente.";
  mensaje.className = "exito";

  // 9. Actualizamos la tabla y limpiamos el formulario
  mostrarSolicitudes();
  limpiarFormulario();
}

// 10. Función que dibuja la tabla con todas las solicitudes registradas
function mostrarSolicitudes() {
  let tabla = document.getElementById("tablaSolicitudes");
  tabla.innerHTML = "";

  // Si no hay registros, mostramos una fila informativa
  if (solicitudes.length === 0) {
    tabla.innerHTML =
      '<tr class="fila-vacia"><td colspan="5">Aún no hay solicitudes registradas.</td></tr>';
    return;
  }

  // Recorremos el arreglo y agregamos una fila por cada solicitud
  solicitudes.forEach((solicitud) => {
    tabla.innerHTML += `
      <tr>
        <td>${solicitud.nombre}</td>
        <td>${solicitud.producto}</td>
        <td>${solicitud.correo}</td>
        <td>${solicitud.telefono}</td>
        <td>${solicitud.comentario}</td>
      </tr>
    `;
  });
}

// 11. Función para dejar todos los campos vacíos
function limpiarFormulario() {
  document.getElementById("nombre").value = "";
  document.getElementById("correo").value = "";
  document.getElementById("telefono").value = "";
  document.getElementById("producto").value = "";
  document.getElementById("comentario").value = "";
}
