// Funciones standar que aplican a cualquier proyecto

function isEmpty(value) {
  if (typeof value === 'undefined' || value === null) {
    return true;
  }
  if (typeof value === 'string' && value.trim() === '') {
    return true;
  }
  if (typeof value === 'boolean' && !value) {
    return true;
  }
  if (Array.isArray(value) && value.length === 0) {
    return true;
  }
  if (typeof value === 'object' && Object.keys(value).length === 0) {
    return true;
  }
  return false;
}

// Blockear select a falta de readOnly
function lockSelect(id, option) {
  document.querySelectorAll(`#${id} option`).forEach(option => option.disabled = true);
  document.querySelector(`#${id} option[value="${option}"]`).disabled = false;
  document.getElementById(id).value = option;
  document.getElementById(id).style.backgroundColor = '#f6f6ff';
}

function unlockSelect(id) {
  document.querySelectorAll(`#${id} option`).forEach(option => option.disabled = false);
  document.getElementById(id).style.backgroundColor = 'white';
}

function poblarSelect(items){
  let select = document.querySelector('#mySelect');
  let options = items.map(item => `<option value="${item.usu_id}">${item.usu_nombre}</option>`);
  options.unshift(`<option value="-1" selected>Todos</option>`);
  select.innerHTML = options.join('\n');
  select.disabled = select.length > 1 ? false : true;
}
