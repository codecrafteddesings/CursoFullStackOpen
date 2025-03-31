# 0.6: Nueva nota

## sequenceDiagram

- participant Usuario

- participant Navegador

- participant Sevidor

Usuario->> Navegador: Escribe la nota y hace clic en "Guardar"

Navegador->> Servidor: Post  / nwe_nota (con el contenido de la nota).

Servidor-->> Navegador: Responde con 201 Created (nota creada).

Navegador-->> Navegador: Actualiza dinamicamente la vista de la pagina con la nueva nota.