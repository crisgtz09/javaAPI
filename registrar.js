$(document).ready(function() {
    //On Ready
});
// -----> se le pone el "async" porque abajo en el fetch tiene "await"<-----
async function registrarUsuario() {
    let datos = {};
//------>se seleccionan los datos mediante el id en el html<-----
    datos.nombre = document.getElementById('txtNombre').value;
    datos.apellido = document.getElementById('txtApellido').value;
    datos.telefono = document.getElementById('txtTelefono').value;
    datos.email = document.getElementById('txtEmail').value;
    datos.password = document.getElementById('txtPassword').value;
//----->la contraseña repetida se asigna como variable para comprobar que es la misma<-----
    let repetirPassword = document.getElementById('txtRepetirPassword').value;
//----->mediante un if se comprueba y se manda alerta en caso de que no<-----
    if (repetirPassword != datos.password){
        alert("la contraseña que escribiste es diferente");
    }
    //----------->metodo<-------------
    const request = await fetch('api/usuarios', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
    
    //----->Stringify se encarga de convertir los datos a JSON para mandarlos<-----
    body: JSON.stringify(datos)
    });
    const usuario = await request.json();
}


//Si un campo es nulo y no se quiere que aparezca asi en la base de datos se puede hacer la siguiente linea
//let <nuevaVariable> = <datoObtenido> == null ? '-' : <datoObtenido>;
// donde "?" sirve como un if para comprobar que lo que se encuentra a la izquierda se comprueba  y si se comprueba se asigna lo que esta a la derecha
//en este caso si es nulo regresara un guion en el campo en lugar de la palabra null, y el ":" sirve para un else, que en caso de que no se cumpla la condición
//te regrese el valor que si se obtiene
