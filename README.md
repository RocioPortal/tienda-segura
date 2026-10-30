# Tienda segura

Aplicación mínima en Express para el taller **Tu primer pipeline seguro** de
Ingeniería de Software II. Calcula el importe de una compra y permite demostrar
controles de calidad y seguridad en GitHub Actions.

## Uso local

Requiere Node.js 24 y npm.

```sh
npm ci
npm test
npm start
```

La aplicación escucha en `http://localhost:3000`. La petición
`GET /total?p=100&c=2` devuelve `{"total":200}`.

`app.js` exporta la aplicación y la función `total(precio, cant, desc)`.
El test usa `node:test` y `node:assert/strict` para comprobar que una compra
de dos unidades de 100 con 50 % de descuento cuesta exactamente 100.

## Controles previstos para las siguientes etapas

El pipeline todavía no está implementado. El taller incorporará:

| Control | Qué detecta |
| --- | --- |
| `npm test` | Regresiones en el cálculo del descuento. |
| `npm audit --audit-level=high` | Vulnerabilidades conocidas altas o críticas en dependencias. |
| Semgrep | Patrones de código inseguro, como ejecutar entradas del usuario con `eval`. |
| Gitleaks | Patrones de credenciales en archivos e historial de Git. |

Los resultados y las verificaciones pendientes se registran en
[docs/evidencias.md](docs/evidencias.md).
