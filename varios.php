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

// Obtener variable de entorno en CI4
getenv('app.baseURLBack');

// Purga todo lo que no sea un numero
$str = preg_replace('/[^0-9]/', '', $str);

// Invertir array
array_reverse(['uno', 'dos', 'tres']);
