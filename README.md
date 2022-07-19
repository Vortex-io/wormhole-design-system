# Worm–Hole
Worm–Hole es el design system de Vor-Tex

# Development

Instalar de manera global:
- Node: [https://nodejs.org/en/download/](https://nodejs.org/en/download/)
- Gulp: `sudo npm install --global gulp-cli`

Instalar paquetes de desarrollo con:
- `npm install`

Para desarrollo usando live reload de browserSync:
- `npm run dev`

Para compilar carpeta `build` lista para producción:
- `npm run build`

# Para publicar el paquete
- en el `package.json` el nombre del paquete debe ser `@vor-tex/XXX`, donde `XXX` será el nombre del paquete alojado en la organización Vor-Tex
- `npm init --scope=vor-tex` (solo la primera vez, sino se ha publicado nunca)
- Si ya se ha publicado, previo a publicar cambios, se debe cambiar el número de la version del paquete, ej: de `1.0.0` a `1.0.1` en el archivo `package.json`
- `npm publish --access public`

# Instalar via NPM para uso del design system
- Comando: `npm install @vor-tex/wormhole-design-system`