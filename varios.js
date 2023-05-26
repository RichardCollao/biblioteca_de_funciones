'use strict' // Para habilitar el modo estricto en una función o en todo un archivo, se puede utilizar la cadena "use strict" 

// Tanto call() como apply() son métodos en JavaScript que se utilizan para llamar a una función y establecer su contexto this explícitamente
var resultado = saludar.call(null, 'Hola', 'Juan');
var resultado = sumar.apply(null, valores);

// Eventos
window.addEventListener("load", function (event) {
}, false);

element.onchange = function () { }
element.onclick = () => { }
setTimeout(function () {
    window.location.href = window.location.origin + '/public/firmar_documentos/';
}, 3000);
document.getElementById('elemento').onchange = (event) => {
    let el = event.currentTarget;
    console.log('valor :>> ', el.value);
}
        
// obtener los argumentos pasados a la función
function foo('uno', 'dos') {
    console.log(arguments);// ['uno', 'dos']
}

// LOOPS
for (let i = 0; i < arr.length; i++) {
}

for (const item of arr) {
}

arr.forEach(function (cobertura) {
});

for (const [k, v] of Object.entries(parametros)) {
    console.log('k:', k, ' v:', v);
}

for (const pair of formData.entries()) {
    console.log(pair[0], ' : ', pair[1]);
}

for (const [k, v] of formData.entries()) {
    console.log('k:', k, ' v:', v);
}

// Obtener el texto de un <select> correspondiente a la selección actual
let opt = select.options[select.selectedIndex].text;

// Sumar un arreglo en una linea
console.log([1, 2, 3].reduce((accumulator, current) => accumulator + current, 0));

// CSS
element.className = "form-control";
element.style.margin = '0';
element.style.color = "red";
element.style.cssText = 'width: 100px; height: 100px; background: #afafaf';

// Atributos de datos
document.getElementById().dataset.miParametro = 'Hello world!';
document.getElementById().getAttribute('data-mi-parametro');

// Selectores
const $ = document.querySelector.bind(document);
document.querySelector('select option:selected).text;
document.querySelector('input[data-id-producto-cobertura="1"]'); //:last-child
document.querySelector('input[name="rut_titular"]');
document.querySelector('input[type=checkbox]');
elemento.closest("tr"); // encuentra el ancestro mas cercano

// Estilos CSS
element.className = "form-control";
element.style.margin = '0';
element.style.color = "red";
element.style.cssText = 'width: 100px; height: 100px; background: #afafaf';
element.classList.contains('mi-class'); // comprueba si un objeto contiene una clase
element.classList.toggle("mi-class"); // comprueba si el elemento contiene la clase, en caso afirmativo la elimina o la crea para el caso contrario
element.classList.add("miClase");
element.classList.remove("miClase");

// Funciones equivalentes con PHP
// in_array() comprueba si un elemento existe dentro de un arreglo
const array = ['manzana', 'naranja', 'pera'];
if (array.includes('naranja')) {
    console.log('La naranja está en el array');
}
// strpos() comprueba si una cadena existe dentro de otra cadena
if (cadena.indexOf(subcadena) !== -1) {
    console.log('La subcadena ' + subcadena + ' está presente en la cadena ' + cadena);
}
// empty()
function empty(valor) {
    return (valor == null || valor === '' || valor === 0 || valor === false || valor === undefined);
}

function isEmptyArray(arr) {
    return arr.length === 0;
}

function emptyStr($var) {
    return $var !== null && $var !== undefined && $var !== '';
}

// OBJETOS
// Comprueba si una propiedad existe en un objeto
obj.hasOwnProperty('propiedad');

// Devuelve la cantidad de propiedades de un objeto
Object.keys(parametros).length;

// Copia objeto por valor ya que por defecto en javascript los objetos se copian por referencia.
let newObj = Object.assign({}, obj);// problemas cuando contiene sub-objetos
// solución definitiva
let newObj2 = JSON.parse(JSON.stringify(obj));

// Agrega un nuevo parametro al objeto
Object.assign(obj, { key: value });

// Generar un arreglo a partir de claves o valores de un objeto
const person = { firstName: 'John', lastName: 'Doe' };
const propertyNames = Object.keys(person);// [ 'firstName', 'lastName' ]
const propertyValues = Object.values(person);// [ 'John', 'Doe' ]

// ARREGLOS
// Invertir array
console.log(['one', 'two', 'three']); // expected output: Array ["one", "two", "three"]
console.log(['one', 'two', 'three'].reverse()); // expected output:Array ["three", "two", "one"]
'31-12-2000'.substr(0, 10).split('-').reverse().join('-');// 2000-12-31

// STRING FUNCTIONS 
'cadena'.toLowerCase();
'cadena'.toUpperCase();

//Purga todos los 0 al inicio de una cadena y reemplaza todos los . por nada
str.replaceAll('.', '').replace(/^0+/, '');

// reemplaza algunos caracteres especiales de html
str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

// CAST Y PARSEO
// forzar conversion a entero
miEntero = !isNaN(miNumero) ? parseInt(miNumero) : 0;
miEntero = is_numeric(miNumero) ? (int)miNumero: 0;// PHP equivalent

// Convierte una cadena en nodos
var xmlString = "<div id='foo'><a href='#'>Link</a><span></span></div>";
var doc = new DOMParser().parseFromString(xmlString, "text/xml");

// STORAGE
let page = localStorage.getItem('page') ?? 0;
localStorage.setItem('page', 10);
console.log('page :>> ', page);

// EXPRESIONES REGULARES
/^\d{4}-\d{2}-\d{2}$/.test('2022-01-01'); // return true o false
let partes = fecha.match(/^(\d{2})-(\d{2})-(\d{4})$/g);// Un Array cuyo contenido depende de la presencia de la bandera global (g), o null si no se encuentran coincidencias.
