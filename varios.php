<?php
// crea un rango de fechas
function createDateRange($start, $end)
{
    $start = new DateTime($start);
    $end = new DateTime($end);
    $interval = new DateInterval('P1D'); // intervalo de un día
    $range = new DatePeriod($start, $interval, $end->modify('+1 day'));
    return array_map(function ($date) {
        return $date->format('Y-m-d');
    }, iterator_to_array($range));
}

print_r(createDateRange('2023-02-01', '2023-03-01'));
// FECHAS
$fecha = DateTime::createFromFormat('d/m/Y', '31/05/2023');// crea un OBJETO con la fecha indicada
$fecha->format('d/m/Y');// devuel un string segun el formato indicado
date('Y-m-d H:i:s'); // devuelve un STRING con la fecha

// Obtener variable de entorno en CI4
getenv('app.baseURLBack');

// Purga todo lo que no sea un numero
$str = preg_replace('/[^0-9]/', '', $str);

// Invertir array
array_reverse(['uno', 'dos', 'tres']);

// verifica si una fecha es valida tanto en formato como siexiste
function validarFecha($fecha) {
    if (!preg_match('/^\d{4}-\d{2}-\d{2}$/', $fecha)) {
        return false; // El formato no es válido
    }
    $componentes = explode('-', $fecha);
    return checkdate($componentes[1], $componentes[2], $componentes[0]));
}



// ERRORES
try {
    // Código que podría generar un error
} catch (Exception $e) {
    echo 'Error en linea:' . $e->getLine() . ' - ' . $e->getMessage();
}

// STRINGS
strtoupper() - Convierte un string a mayúsculas
strtolower() - Convierte un string a minúsculas
ucfirst() - Convierte el primer caracter de una cadena a mayúsculas
ucwords() - Convierte a mayúsculas el primer caracter de cada palabra de una cadena

    
$hash = bin2hex(random_bytes(18));

