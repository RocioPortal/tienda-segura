# Evidencias del taller

## Estado actual

Repositorio: https://github.com/RocioPortal/tienda-segura

La implementación está en la etapa 1, en la rama local `paso-1-aplicacion`.
No se avanzó a las etapas posteriores porque la aplicación inicial debe estar
probada y publicada en `main` antes de continuar.

## Registro de etapas

| Etapa | Pull request | Resultado observado |
| --- | --- | --- |
| 1: aplicación | No creada | `npm test`: 1 prueba aprobada, 0 fallidas. HTTP verificado: `/total?p=100&c=2` devuelve estado 200 y `{"total":200}`. Pendiente de commit y publicación. |
| 2: pipeline básico | No creada | No ejecutado. |
| 3: controles de seguridad | No creada | No ejecutado. |

## Fallas intencionales

| Rama prevista | Pull request | Control esperado | Resultado rojo | Corrección y resultado posterior |
| --- | --- | --- | --- | --- |
| `falla-secreto` | No creada | Gitleaks | No ejecutado | Pendiente; debe cerrarse sin fusionar y eliminarse la rama remota. |
| `falla-codigo` | No creada | Semgrep | No ejecutado | Pendiente. |
| `falla-libreria` | No creada | npm audit | No ejecutado | Pendiente. |
| `falla-test` | No creada | npm test | No ejecutado | Pendiente. |

## Ramas

- `main`: conserva el commit inicial `3898105`.
- `paso-1-aplicacion`: rama local con la aplicación en preparación.
- Las ramas de las etapas 2 a 5 todavía no existen.

No se han creado tokens ficticios, rutas inseguras ni dependencias vulnerables.
No hay ejecuciones de GitHub Actions verificadas ni enlaces de PR para registrar.

## Verificación local y bloqueo

- Node.js: `v24.8.0`; npm: `11.6.0`.
- Express instalado con `package-lock.json` generado; npm informó 0 vulnerabilidades
  durante la instalación. Esto no equivale a una ejecución del control en Actions.
- `git ls-remote --symref origin HEAD` confirmó que la rama principal remota es
  `main`, en `38981059d019290d3682bc48c1f18347821beeb3`.
- No hay `user.name` ni `user.email` configurados en Git. Se solicitó al usuario
  la identidad para los commits; no se inventó una identidad de autor.
- `gh` no está instalado y no se encontraron un helper de credenciales de Git,
  configuración de autenticación de `gh` ni variables de token de GitHub.
  Consultar el remoto público no demuestra permisos de escritura.
- Falta configurar la identidad y autenticar el acceso a GitHub para crear las
  PR, observar sus checks y continuar en el orden solicitado.
