// Call the dataTables jQuery plugin
$(document).ready(function() {
    cargarUsuario()
  $('#usuarios').DataTable();
});


async function cargarUsuario() {
  const request = await fetch('api/usuarios', {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  });
  const usuarios = await request.json();



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

document.querySelector('#Usuarios tbody').outerHTML = listadoHtml;
}

async function eliminarUsuario(id){

  if (!confirm('¿Desea eliminar el usuario?')){

    return;
  }
  const request = await fetch('api/usuarios/' + id, {
    method: 'Delete',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  });
}