// Oculta los mensajes
$('#carga_fecha_nacimiento').attr('data-parsley-errors-messages-disabled', true);

// Quitar un tipo de validación
$('#email').parsley().removeConstraint('required');
$('#email').parsley().removeConstraint('pattern');