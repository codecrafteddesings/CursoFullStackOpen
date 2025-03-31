# 0.5: Aplicacion de una sola  pagina

## Mermaid

### sequenceDiagram

- participant Usuario

- participant Navegador

- participant Sevidor

Usuario->> Navegador: Accede a la ULR SPA ( https://studies.cs.helsinki.fi/exampleapp/spa).

Navegador->> Servidor: Get  / exampleapp/spa (solicita el html de la spa).

Servidor-->> Navegador: Devuelve al html de la spa.

Note right of Navegator: en navegador ejecuta JavaScript y carga la vista de la spa

Navegador-->> Servidor: Get / example/main.css (solicita la hoja de estilo).

Servidor-->> Navegador: Devuelve la hoja de estilo(css).

Navegador-->> Servidor: Get / exampleapp/data.json (solicita en archivo JavaScript).

Servidor-->Navegador: Devuelve las notas en formato Json.

Note right of Navegator: El navegador renderiza las notas en la vista.