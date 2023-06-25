#WEBPACK
#  construye y empaqueta el proyecto según la configuración del archivo webpack.config.js
npx webpack

#NODE
# ejecuta la aplicación
node app.js

#NPM
#  ejecuta la aplicación, requiere definir "start" en el archivo package.json "scripts": {"start": "node app.js"}
npm start

# mostrarán el árbol de dependencias instaladas en tu proyecto. npm list o npm ls
npm list

# mostrará solo las librerías de nivel superior sin las dependencias anidadas.
npm list --depth=0
