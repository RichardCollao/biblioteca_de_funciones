#WEBPACK
// construye y empaqueta el proyecto según la configuración del archivo webpack.config.js
npx webpack

#NODE
// ejecuta la aplicación
node app.js



#NPM
// Inicializa un nuevo proyecto de npm 
npm init -y

// dependencias necesarias, como Webpack, Babel y los respectivos loaders
npm install webpack webpack-cli babel-loader @babel/core @babel/preset-env --save-dev
  
// ejecuta la aplicación, requiere definir "start" en el archivo package.json "scripts": {"start": "node app.js"}
npm start

// mostrarán el árbol de dependencias instaladas en tu proyecto. npm list o npm ls
npm list

// mostrará solo las librerías de nivel superior sin las dependencias anidadas.
npm list --depth=0

// desinstalar la librería
npm uninstall nombre-libreria

// actualiza las dependencias
npm update

#NPM_PLUGINS
// 
npm install webpack-node-externals --save-dev
// cargador de CSS para webpack
npm install css-loader style-loader --save-dev

