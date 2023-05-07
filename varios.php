<script>
    // Obtienes los argumentos pasados a la función
    function foo('uno', 'dos') {
        console.log(arguments); // ['uno', 'dos']
    }

    // EVENTOS
    window.addEventListener("load", function(event) {
        //...
    }, false);
    element.onchange = function() {}
    element.onclick = () => {}

    // LOOPS
    for (let i = 0; i < arr.length; i++) {}

    for (const item of arr) {}

    arr.forEach(function(cobertura) {});

    for (const [k, v] of Object.entries(parametros)) {
        console.log('k:', k, ' v:', v);
    }

    for (const pair of formData.entries()) {
        console.log(pair[0], ' : ', pair[1]);
    }

    for (const [k, v] of formData.entries()) {
        console.log('k:', k, ' v:', v);
    }

    // obtener texto de un SELECT
    select.options[select.selectedIndex].text

    // Sumar un arreglo en una linea
    console.log([1, 2, 3].reduce((accumulator, current) => accumulator + current, 0));

    // STRING FUNCTIONS
    str.toLowerCase();
    str.toUpperCase();
    str.replaceAll('.', '').replaceAll('-', '').replace(/^0+/, '');
    str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

    // EQUIVALENCIAS CON PHP
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


    // Atributos de datos
    document.getElementById().dataset.miParametro = 'Hello world!';
    document.getElementById().getAttribute('data-mi-parametro');

    // Selectores
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

    // comprueba si una propiedad existe en un objeto
    obj.hasOwnProperty('propiedad');

    // devuelve la cantidad de propiedades de un objeto
    Object.keys(parametros).length;

    // Copia objeto por valor ya que por defecto en javascript los objetos se copian por referencia.
    let newObj = Object.assign({}, obj); // problemas cuando contiene sub-objetos
    // solución definitiva
    let newObj2 = JSON.parse(JSON.stringify(obj));

    // Agrega un nuevo parámetro al objeto
    Object.assign(obj, {
        key: value
    });

    // forzar conversion a entero
    let n = 10.5;
    miEntero = !isNaN(n) ? parseInt(n) : 0;
    miEntero = is_numeric(n) ? (int) n : 0; // PHP equivalent

    // Obtener Keys y Values
    let person = {
        firstName: 'John',
        lastName: 'Doe'
    };
    arr = Object.keys(person); // [ 'firstName', 'lastName' ]
    arr = Object.values(person); // [ 'John', 'Doe' ]

    // Convierte una cadena en nodos
    var xmlString = "<div id='foo'><a href='#'>Link</a><span></span></div>";
    var doc = new DOMParser().parseFromString(xmlString, "text/xml");

    // Invertir array
    console.log(['one', 'two', 'three']); // expected output: Array ["one", "two", "three"]
    console.log(['one', 'two', 'three'].reverse()); // expected output:Array ["three", "two", "one"]

    // Local Storage
    let page = localStorage.getItem('page') ?? 0;
    localStorage.setItem('page', 10);
    console.log('page :>> ', page);

    fecha.substr(0, 10).split('-').reverse().join('-');
    /^\d{4}-\d{2}-\d{2}$/.test('2022-01-01'); // return true o false
    let partes = fecha.match(/^(\d{2})-(\d{2})-(\d{4})$/g); // Un Array cuyo contenido depende de la presencia de la bandera global (g), o null si no se encuentran coincidencias.

    setTimeout(function() {
        window.location.href = window.location.origin + '/public/firmar_documentos/';
    }, 3000);
</script>

<script>
    // MomentsJS
    let f = moment('2022-01-01', "YYYYMMDD");
    console.log(f.format('DD-MM-YYYY'));
    moment(fecha, "YYYYMMDD").isValid()
    let fecha1 = moment('2022-01-01', 'YYYY-MM-DD', true);
    let fecha2 = moment('01-01-2000', 'DD-MM-YYYY', true);
    let diferencia = fecha1.diff(fecha2, "years");

    // Parsley
    $('#carga_fecha_nacimiento').attr('data-parsley-errors-messages-disabled', true);
    $('#email').parsley().removeConstraint('required');
    $('#email').parsley().removeConstraint('pattern');
</script>


<style>
    div {
        /* evita que las palabras se rompan en cualquier partes         */
        white-space: normal;
        word-break: normal;

        /* corta y muestra 3 puntos cuando la palabra sobrepasa el borde del contenedor*/
        text-overflow: ellipsis;
    }
</style>


<?php
// CI4
getenv('app.baseURLBack');

$str = preg_replace('/[^0-9]/', '', $str);

// Invertir array
array_reverse(['uno', 'dos', 'tres']);

?>