SELECT UPPER('hello') AS Resultado;-- Resultado: "HELLO"
SELECT LOWER('WORLD') AS Resultado;-- Resultado: "world"

SELECT DISTINCT column FROM()
SELECT * FROM table WHERE column IS NOT NULL;

DELETE FROM myTable;
TRUCATE TABLE myTable;// borra todos los registros y resetea el valor del campo autoincrementable
DBCC CHECKIDENT ('myTable', RESEED, 1000);// setea el valor autoincrementable

IF OBJECT_ID('myTable', 'U') IS NOT NULL
    DROP TABLE flow_customer;

SET IDENTITY_INSERT myTable ON 
INSERT INTO ...
SET IDENTITY_INSERT myTable OFF

DATEADD(DAY, -1, CONVERT(DATE, '2023-06-05', 120))
Code |   Result
-----|-----------------
 101 |   mm/dd/yyyy
 102 |   yyyy.mm.dd
 103 |   dd/mm/yyyy
 104 |   dd.mm.yyyy
 105 |   dd-mm-yyyy
 106 |   dd mon yyyy
 107 |   Mon dd, yyyy
 108 |   hh:mi:ss
 109 |   mon dd yyyy hh:mi:ss:mmmAM (or PM)
 110 |   mm-dd-yyyy
 111 |   yyyy/mm/dd
 112 |   yyyymmdd
 113 |   dd mon yyyy hh:mi:ss:mmm(24h)
 114 |   hh:mi:ss:mmm(24h)
 120 |   yyyy-mm-dd hh:mi:ss(24h)
 121 |   yyyy-mm-dd hh:mi:ss.mmm(24h)
 126 |   yyyy-mm-ddThh:mi:ss.mmm (no spaces)
 130 |   dd mon yyyy hh:mi:ss:mmmAM
 131 |   dd/mm/yyyy hh:mi:ss:mmmAM








