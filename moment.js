// moment esta depreciado se recomienta usar otras librerias como: date-fns, Day, Luxon, etc
let f = moment('2022-01-01', "YYYYMMDD");
console.log(f.format('DD-MM-YYYY'));
moment(fecha, "YYYYMMDD").isValid()
let fecha1 = moment('2022-01-01', 'YYYY-MM-DD', true);
let fecha2 = moment('01-01-2000', 'DD-MM-YYYY', true);
let diferencia = fecha1.diff(fecha2, "years");
