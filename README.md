# Tota Tota Baked

## Requisitos
- Node.js 20 o superior
- npm (incluido con Node.js)

## Instalar y ejecutar
Desde esta carpeta, abre una terminal y ejecuta:

```powershell
npm ci
npm run dev
```

Abre la dirección local que muestre Vite, normalmente http://localhost:5173/.

## Compilar para producción

```powershell
npm run build
npm run preview
```

Las imágenes del catálogo están en `public/images/products`. No se incluye `node_modules` ni `dist`: npm los instala y el build los genera en el equipo destino.
