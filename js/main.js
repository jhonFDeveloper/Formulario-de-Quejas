// Atajos

const $ = id => document.getElementById(id);
const tamañoMaximoArchivo = 2 * 1024 * 1024; //2MB

// Elementos Formulario

const form = $("complaintFomr");
const nombre = $("nombre");
const email = $("email");
const guia = $("guia");
const problema = $("tipoProblema");
const producto = $("tipoProducto");
const fecha = $("fechaEncio");
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

function validarNombre(){
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
    if (!regex.test(v)){
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

 if (!v){
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
    const file = archivo.file[0];

    if (!file) {
        errArchivo.textContent = "";
        return true;
    }

    const formatoPermitido = ["image/jpeg","image/png","application/pdf"];

    if (!formatoPermitido.includes (file.type)) {
        errArchivo.textContent = "Tipo de archivo no permitido. Usa jpeg, png o pdf.";
        return false;
    }

    if (file.size > tamañoMaximoArchivo) {
        errArchivo.textContent = "El archivo supera el tamaño máximo 2MB";
        return false;
    }

    errArchivo.textContent = "";
    return true;
}

