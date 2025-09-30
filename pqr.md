📦 Formulario de Quejas - Paquetería Express

### 🎯 Objetivo
Crear un formulario web para recibir quejas de clientes y generar un JSON para enviar a la API.

---

## 📋 Campos Requeridos

- **Nombre completo** (requerido)
- **Email** (requerido, validar formato)  
- **Número de guía** (requerido)
- **Tipo de problema** (select):
  - Retraso en entrega
  - Paquete dañado  
  - Paquete perdido
  - Otro
- **Tipo de producto** (select):
  - Documentos
  - Electrónicos
  - Otros
- **Fecha del envío** (requerido)
- **Descripción** (textarea, mín 20 caracteres)
- **Adjuntar archivo** (opcional, jpg/png/pdf, máx 2MB)

---

## 🎨 Requisitos

**Técnicos:**
- HTML5, CSS3, JavaScript vanilla
- Responsive design
- Validaciones en tiempo real

**UI/UX:**
- Diseño limpio y moderno
- Mensajes de error claros
- Indicar campos obligatorios

---

## 📤 JSON Esperado
```json
{
  "nombre": "Juan Pérez",
  "email": "juan@email.com", 
  "numeroGuia": "ABC123",
  "tipoProblema": "retraso",
  "tipoProducto": "electronicos",
  "fechaEnvio": "2024-03-10",
  "descripcion": "El paquete no ha llegado...",
  "archivo": "nombre_archivo.jpg"
}
```

---

## 📁 Entrega

**Repositorio con:**
- Código fuente
- README con instrucciones de ejecución
- Ramas: `master` y `dev` mínimo

---

## ✅ Se Evalúa
- Formulario funcional con validaciones
- JSON generado correctamente
- Código limpio y organizado
- Diseño responsive