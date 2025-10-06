// Atajos

const $ = (id) => document.getElementById(id);
const tamañoMaximoArchivo = 2 * 1024 * 1024; //2MB

// Elementos Formulario

const form = $("completarFromulario");
const nombre = $("nombre");
const email = $("email");
const guia = $("guia");
const problema = $("tipoProblema");
const producto = $("tipoProducto");
const fecha = $("fechaEnvio");
const archivo = $("archivo");
const descripcion = $("descripcion");

// Contenedor Errores

const errNombre = $("error-nombre");
const errEmail = $("error-email");
const errGuia = $("error-guia");
const errFecha = $("error-fecha");
const errArchivo = $("error-archivo");
const errDescripcion = $("error-descripcion");

const estadoFormulario = $("estadoFormulario");
const btnLimpiar = $("btnLimpiar");
const jsonPreview = $("jsonPreview");

// Validaciones

function validarNombre() {
  const v = nombre.value.trim();
  if (!v) {
    errNombre.textContent = "El nombre es obligatorio";
    return false;
  }
  errNombre.textContent = "";
  return true;
}

function validarEmail() {
  const v = email.value.trim();
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!v) {
    errEmail.textContent = "El email es obligatorio";
    return false;
  }
  if (!regex.test(v)) {
    errEmail.textContent = "El email no tiene un formato válido";
    return false;
  }
  errEmail.textContent = "";
  return true;
}

function validarGuia() {
  const v = guia.value.trim();

  if (!v) {
    errGuia.textContent = "El número de guía es obligatorio";
    return false;
  }
  errGuia.textContent = "";
  return true;
}

function validarFecha() {
  const v = fecha.value;

  if (!v) {
    errFecha.textContent = "La fecha del envío es obligatoria";
    return false;
  }
  errFecha.textContent = "";
  return true;
}

function validarDescripcion() {
  const v = descripcion.value.trim();

  if (!v) {
    errDescripcion.textContent = "La descripción es obligatoria";
    return false;
  }

  if (v.length < 20) {
    errDescripcion.textContent = `La descripción debe tener al menos 20 caracteres. (actual: ${v.length})`;
    return false;
  }
  errDescripcion.textContent = "";
  return true;
}

function validarArchivo() {
  const file = archivo.files[0];

  if (!file) {
    errArchivo.textContent = "";
    return true;
  }

  const formatoPermitido = ["image/jpeg", "image/png", "application/pdf"];

  if (!formatoPermitido.includes(file.type)) {
    errArchivo.textContent =
      "Tipo de archivo no permitido. Usa jpeg, png o pdf.";
    return false;
  }

  if (file.size > tamañoMaximoArchivo) {
    errArchivo.textContent = "El archivo supera el tamaño máximo 2MB";
    return false;
  }

  errArchivo.textContent = "";
  return true;
}

// Listeners en tiempo real

nombre.addEventListener("input", validarNombre);
email.addEventListener("input", validarEmail);
guia.addEventListener("input", validarGuia);
fecha.addEventListener("change", validarFecha);
descripcion.addEventListener("input", validarDescripcion);
archivo.addEventListener("change", validarArchivo);

// Construimos JSON

function construirJson() {
  const file = archivo.files[0];
  const json = {
    nombre: nombre.value.trim(),
    email: email.value.trim(),
    guia: guia.value.trim(),
    problema: problema.value,
    producto: producto.value,
    fecha: fecha.value,
    descripcion: descripcion.value.trim(),
    archivo: file ? file.name : null,
  };
  return json;
}

// Mostramos el JSON generado en pantalla

function mostrarJson(json) {
  jsonPreview.textContent = JSON.stringify(json, null, 2);
}

// Limpiar errores

function limpiarErrores() {
  errNombre.textContent = "";
  errEmail.textContent = "";
  errGuia.textContent = "";
  errFecha.textContent = "";
  errDescripcion.textContent = "";
  errArchivo.textContent = "";
}

// limpiar datos

btnLimpiar.addEventListener("click", () => {
  form.reset();
  mostrarJson({});
  limpiarErrores();
  jsonPreview.textContent = "{}";
});

// Enviando

form.addEventListener("submit", (e) => {
  e.preventDefault();
  limpiarErrores();
  const v1 = validarNombre();
  const v2 = validarEmail();
  const v3 = validarGuia();
  const v4 = validarFecha();
  const v5 = validarDescripcion();
  const v6 = validarArchivo();

  if (!(v1 && v2 && v3 && v4 && v5 && v6)) {
    estadoFormulario.textContent = "Corrige los errores antes de generar el JSON.";
    return;
  }

  const json = construirJson();
  mostrarJson(json);
  estadoFormulario.textContent = "JSON generado correctamente.";
});
