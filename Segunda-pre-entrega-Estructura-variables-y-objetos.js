var depositos=[];
var nro,monto;
do {
nro=prompt('Ingrese nro de cliente','');
nro=parseInt(nro);
if (nro!=0)
{
monto=prompt('Ingrese monto a depositar','');
monto=parseInt(monto);
depositos[nro]=monto;
}
} while (nro!=0);
var suma=0;
var canti=0;
for(var f=0;f<depositos.length;f++)
{
if (depositos[f]!==undefined)
{
suma=suma+depositos[f];
canti++;
}
}
document.write('Cantidad de depósitos:'+canti+'<br>');
document.write('Total depositado por todos los clientes:'+suma);
 
