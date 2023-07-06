<?php
// QUERY BUILDER
$builder->getCompiledSelect();// devuelve un string de la consulta sql
$db->getLastQuery();
  
// [emergency, alert, critical, error, warning, notice, info, or debug] ($level (string), $message (string), $context (array))
log_message('debug', $sql . PHP_EOL);

// 
Services::logger()->info('Este es un mensaje de información');
