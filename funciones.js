// CAPTURAR INFORMACION

function validarInformacion(){
    let nombre = document.getElementById("inputNombre").value;
    let apellidos = document.getElementById("inputApellidos").value;
    let sexo = document.getElementsByName("rsexo");
    let correo = document.getElementById("inputCorreo").value;
    let poblacion = document.getElementById("selectPoblacion");
    let descripcion = document.getElementById("txtDesc").value;
    let infromacion = document.getElementById("checkInfo");
    let condicioens = document.getElementById("checkCondicion");
    let valSexo = "";
    let valPermisos = "";

    for (let contador = 0; contador<sexo.length; contador++){
        if (sexo[contador].checked){
            valSexo = sexo[contador].value;
        }
    }

    let poblacionSelect = poblacion.value

    if (infromacion.checked && condicioens.checked){
        valPermisos = "El usuario a seleccionado las dos codiciones";
    }
    else if(infromacion.checked || condicioens.checked){
        valPermisos = "El usuarios solo acepto una condicion"
    }
    else{
        valPermisos = "El usuario no acepto nignuna condicion"
    }


    console.log("\n Nombre: " + nombre + "\n Apellidos: " + apellidos + "\n Sexo: " + valSexo + "\n Correo: " + correo + "\n Poblacion: " + poblacionSelect + "\n Descripcion: " + descripcion + "\n Permisos: " + valPermisos);

    limpiarFormulario()

}

// LIMPIAR DATOS DEL FORMULARIO UNA VEZ QUE SE ENVIEN

function limpiarFormulario(){
    document.getElementById("inputNombre").value = "";
    document.getElementById("inputApellidos").value = "";
    let sexo = document.getElementsByName("rsexo");
    document.getElementById("inputCorreo").value = "";
    let poblacion = document.getElementById("selectPoblacion");
    document.getElementById("txtDesc").value = "";


    for (let contador = 0; contador<sexo.length; contador++){
        if (sexo[contador].checked){
            sexo[contador].checked = false;
        }
    }

    poblacion.value = "";

    let infromacion = document.getElementById("checkInfo");
    let condicioens = document.getElementById("checkCondicion");
    infromacion.checked = false;
    condicioens.checked = false;
}


// TRADUCCION A INGLES y CAMBIO DE FONDO
function traduccionIngles(){

    let eneInlges = true;


    if (eneInlges){

        //TRADUCCION DE LOS LABELS
        document.getElementById("titulo").innerHTML = "REGISTRATION FORM"
        document.getElementById("nombre").innerHTML = "Name";
        document.getElementById("apellidos").innerHTML = "Last Name";
        document.getElementById("labelSex").innerHTML = "Sex";
        document.getElementById("correo").innerHTML = "Mail";
        document.getElementById("poblacion").innerHTML = "Poblation";
        document.getElementById("descripcion").innerHTML = "Description";
        document.getElementById("muj").innerHTML = "Woman"
        document.getElementById("hom").innerHTML = "Man"
        document.getElementById("info").innerHTML = "I want to receive information about news and offers";
        document.getElementById("condicioens").innerHTML = "I declare that I have read and accept the general conditions of the program and the regulations on data protection";

        // TRADUCCION DE LOS BOTONES
        document.getElementById("btnEnviar").innerHTML = "Send";
        document.getElementById("botonTraduccion").innerHTML = "Traduction to Spanish";

        // CAMBIO DE FODNO DE COLOR EN EL ELEMENTO DIV QUE CONTIENE EL FORMULARIO
        let contenedor  = document.getElementById("contenedorForm");
        contenedor.style.background = "orange";
    }

}
