// Call the dataTables jQuery plugin
$(document).ready(function() {
    cargarUsuario()
  $('#usuarios').DataTable();
});

//----->metodo GET<-----
async function cargarUsuario() {
  const request = await fetch('api/usuarios', {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  });
  const usuarios = await request.json();


//----->se declara el listado para que vaya metiendo los datos que obtiene de la API<-----
  let listadoHtml = '';
  for (let usuario of usuarios) {
    let botonEliminar = '<a href="#" onclick="eliminarUsuario(' + usuario.id + ')" class="btn btn-danger btn-circle btn-sm"><i class="fas fa-trash"></i></a>';
    let usuarioHtml = '<tr><td>' + usuario.id+'</td><td>' + usuario.nombre + '</td><td>'
                        + usuario.apellido
                        + '</td><td>' + usuario.email
                        + '</td><td>' + usuario.telefono
                        + '</td><td>'+usuario.password+'</td><td>' + botonEliminar + '</td></tr>'
    listadoHtml+= usuarioHtml;
    }
//----> se selecciona el campo donde se va a inyectar para la tabla<-----
document.querySelector('#Usuarios tbody').outerHTML = listadoHtml;
}
//------>pregunta de confirmacion se asigna como falso para que no se
//------>borre aun si se reponde que no
async function eliminarUsuario(id){

  if (!confirm('¿Desea eliminar el usuario?')){
//---->Se mete un return para que se corte ahi la ejecutacion de codigo
//---->mientras se mantenga en "False"
    return;
  }
//-----> metodo delete que se le asigna al boton<-----
  const request = await fetch('api/usuarios/' + id, {
    method: 'Delete',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  });
}