window.addEventListener("load", function (event) {
}, false);
element.onchange = function () { }
element.onclick = () => { }

function emptyStr($var) {
    return $var !== null && $var !== undefined && $var !== '';
}

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

// for (const pair of formData.entries()) {
//     console.log(pair[0], ' : ', pair[1]);
// }
for (const [k, v] of formData.entries()) {
    console.log('k:', k, ' v:', v);
}

select.options[select.selectedIndex].text

// Sumar un arreglo en una linea
console.log([1, 2, 3].reduce((accumulator, current) => accumulator + current, 0));

// CSS
element.className = "form-control";
element.style.margin = '0';
element.style.color = "red";
element.style.cssText = 'width: 100px; height: 100px; background: #afafaf';

// FUNCIONES
document.getElementById().dataset.miParametro = 'Hello world!';
document.getElementById().getAttribute('data-mi-parametro');

// selectores
document.querySelector('input[data-id-producto-cobertura="1"]');//:last-child
document.querySelector('input[name="rut_titular"]');
document.querySelector('input[type=checkbox]');
elemento.closest("tr");// encuentra el ancestro mas cercano

element.classList.contains('mi-class');// comprueba si un objeto contiene una clase

element.classList.toggle("mi-class");// comprueba si el elemento contiene la clase, en caso afirmativo la elimina o la crea para el caso contrario


// comprueba si una propiedad existe en un objeto
obj.has
OwnProperty('propiedad')

// devuelve la cantidad de propiedades de un objeto
Object.keys(parametros).length

// Copia objeto por valor ya que por defecto en javascript los objetos se copian por referencia.
let newObj = Object.assign({}, obj);// problemas cuando contiene sub-objetos
// solucion definitiva
let newObj2 = JSON.parse(JSON.stringify(obj));

// Agrega un nuevo parametro al objeto
Object.assign(obj, { key: value });

// forzar convercion a entero
miEntero = !isNaN(miNumero) ? parseInt(miNumero) : 0;
miEntero = is_numeric(miNumero) ? (int)miNumero: 0;// PHP equivalent
// Subrutina parsear objetos javascript
const person = { firstName: 'John', lastName: 'Doe' };
const propertyNames = Object.keys(person);// [ 'firstName', 'lastName' ]
const propertyValues = Object.values(person);// [ 'John', 'Doe' ]


// convierte una cadena en nodos 
var xmlString = "<div id='foo'><a href='#'>Link</a><span></span></div>";
var doc = new DOMParser().parseFromString(xmlString, "text/xml");


// invertir array
console.log(['one', 'two', 'three']);// expected output: Array ["one", "two", "three"]
console.log(['one', 'two', 'three'].reverse());// expected output:Array ["three", "two", "one"]

let page = localStorage.getItem('page') ?? 0;
localStorage.setItem('page', 10);
console.log('page :>> ', page);

fecha.substr(0, 10).split('-').reverse().join('-');
/^\d{4}-\d{2}-\d{2}$/.test('2022-01-01'); // return true o false
let partes = fecha.match(/^(\d{2})-(\d{2})-(\d{4})$/g);// Un Array cuyo contenido depende de la presencia de la bandera global (g), o null si no se encuentran coincidencias.
// STRING FUNCTIONS 
'cadena'.toLowerCase();
'cadena'.toUpperCase();
str.toLowerCase().replaceAll('.', '').replaceAll('-', '').replace(/^0+/, '');

setTimeout(function () {
    window.location.href = window.location.origin + '/public/firmar_documentos/';
    // window.location.href = 'www.google.com';
}, 3000);


let radData = 'My NaMe Is MuD';
radData.toLowerCase();
radData.toUpperCase();

.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

// MomentsJS
let f = moment('2022-01-01', "YYYYMMDD");
console.log(f.format('DD-MM-YYYY'));
moment(fecha, "YYYYMMDD").isValid()
let fecha1 = moment('2022-01-01', 'YYYY-MM-DD', true);
let fecha2 = moment('01-01-2000', 'DD-MM-YYYY', true);
let diferencia = fecha1.diff(fecha2, "years");

// Parsley
$('#carga_fecha_nacimiento').attr('data-parsley-errors-messages-disabled', true);

// Select
let opt = select.options[select.selectedIndex];
console.log(opt.text);
//HTML
'<option value="-1" selected disabled hidden>Seleccione una opción</option>'
    // evitar que el modal se cierre al hacer click fuera
    < div class="modal fade" id = "cargas_modal" data - backdrop="static" >


        echo '<pre>';
print_r($dataDetalle);
echo '</pre>';
return;

$this -> load -> database('IAXIS, TRUE);
$this -> load -> model('IAXIS_WR/CsSinObligaciones');




<? php
$start = new DateTime('2023-02-01');
$end = new DateTime('2023-03-01');
$interval = new DateInterval('P1D'); // intervalo de un día
$range = new DatePeriod($start, $interval, $end -> modify('+1 day'));

$dates = array_map(function ($date) {
    return $date -> format('Y-m-d');
}, iterator_to_array($range));

print_r($dates);
?>

    /* CSS  */
    /* evita que las palabras se rompan en cualquier partes         */
    white - space: normal;
word -break: normal;

/* corta y muestra 3 puntos cuando la palabra sobrepasa el borde del contenedor*/
text - overflow: ellipsis;