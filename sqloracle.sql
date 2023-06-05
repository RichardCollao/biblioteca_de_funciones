SELECT TO_DATE('01/06/2023', 'dd/mm/yyyy') - INTERVAL '6' MONTH AS result FROM dual;
SELECT DISTINCT column FROM()
SELECT * FROM table WHERE column IS NOT NULL;

DELETE FROM myTable;
TRUCATE TABLE myTable;// borra todos los registros y resetea el valor del campo autoincrementable
DBCC CHECKIDENT ('myTable', RESEED, 1000);// setea el valor autoincrementable
