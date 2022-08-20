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
