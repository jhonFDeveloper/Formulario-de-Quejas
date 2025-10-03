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

