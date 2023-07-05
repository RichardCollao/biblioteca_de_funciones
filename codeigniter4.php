<?php
// QUERY BUILDER
->getCompiledSelect();// devuelve un string de la consulta sql

// [emergency, alert, critical, error, warning, notice, info, or debug] ($level (string), $message (string), $context (array))
log_message('debug', $sql . PHP_EOL);
