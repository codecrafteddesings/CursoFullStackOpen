# 0.5: Nuevo diagrama de nota

## sequenceDiagram

- participant Usuario

- participant Navegador

- participant Sevidor

Usuario->> Navegador: Hace clic en el boton del formulario

Navegador->> Servidor: Post  / nwe_nota (con el contenido de la nota).

Servidor-->> Navegador: Respuesta 201 Created

Navegador-->> Servidor: Get / note (para actualizar la lista de la notas).

Servidor-->> Navegador: Json con todas las notas

Navegador-->> Usuarios: Mustra la nueva nota en la pagina