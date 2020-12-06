var LdNombre = [];
var LdSalario = [];
var LDDiasLiquidados = [];
var LDHorasExtra = [];

const salariominvig = 828116;
var bPreguntar = true;
var contador = 0;
 
window.onbeforeunload = preguntarAntesDeSalir;

function VerTabla(){
  var formu = document.getElementById("Forms")
  formu.style.display = 'none';
  var resultado = document.getElementById("Tabla")
  resultado.style.display = 'block'; 
}

function CalcularNomina()
{
  if(confirmardatos() == true){
  var formu = document.getElementById("Forms")
  formu.style.display = 'none';
  var resultado = document.getElementById("Tabla")
  resultado.style.display = 'block'; 
  Calcular(contador)
  }else{
  }
}

function impiar(){
    var formu = document.getElementById("Forms")
    formu.style.display = 'block'; 
    var resultado = document.getElementById("Tabla")
    resultado.style.display = 'none'; 
    document.getElementById("Nombre").value = "";
    document.getElementById("SalarioBasico").value = "";
    document.getElementById("DiasLiquidados").value = "";
    document.getElementById("HorasExtra").value = "";
}

function confirmardatos(){
    var nombre = document.getElementById("Nombre").value;
    var salario = document.getElementById("SalarioBasico").value;
    var dias = document.getElementById("DiasLiquidados").value;
    var horasdia = document.getElementById("HorasExtra").value;

    if (nombre != "" && salario != "" && dias != "" && horasdia != "") {
        return true;
    }else{
        return false;
    }
}

function Calcular(Contador)
{
    LdNombre[Contador] = document.getElementById("Nombre").value;
    LdSalario[Contador] = document.getElementById("SalarioBasico").value;
    LDDiasLiquidados[Contador] = document.getElementById("DiasLiquidados").value;
    LDHorasExtra[Contador] = document.getElementById("HorasExtra").value;
    llenarTabla(Contador);
    Contador ++;
}

function llenarTabla(Contador){
    // Creamos un elemento <table> y un elemento <tbody>
    var tabla = document.getElementById("tabla");
    var tblBody = document.getElementById("mybody");

    // Creamos las celdas
    for (var i = 0; i < Contador + 1; i++) {
    // Creamos las hileras de la tabla
    var fila = document.createElement("tr");

        // Crea un elemento <td> y un nodo de texto, hace que el nodo de
        // texto sea el contenido de <td>, ubica el elemento <td> al final
        // de la hilera de la tabla

        //Nombre
        var celda = document.createElement("th");
        var textoCelda = document.createTextNode(LdNombre[i]);
        celda.appendChild(textoCelda);
        fila.appendChild(celda);

        //Salario basico
        var celda = document.createElement("th");
        var textoCelda = document.createTextNode(LdSalario[i]);
        celda.appendChild(textoCelda);
        fila.appendChild(celda);

        //Dias liquidado
        var celda = document.createElement("th");
        var textoCelda = document.createTextNode(LDDiasLiquidados[i]);
        celda.appendChild(textoCelda);
        fila.appendChild(celda);

        //salario devengado
        var celda = document.createElement("th");
        var salariodevengado = (LdSalario[i]/30) * LDDiasLiquidados[i];
        var textoCelda = document.createTextNode(salariodevengado);
        celda.appendChild(textoCelda);
        fila.appendChild(celda);

        //Horas Extra
        var celda = document.createElement("th");
        var HorasExtra = LDHorasExtra[i] * 4572;
        var textoCelda = document.createTextNode(HorasExtra);
        celda.appendChild(textoCelda);
        fila.appendChild(celda);

        //auxilio transporte
        var celda = document.createElement("th");
        var auxTrans;
        if(LdSalario[i] > (salariominvig * 2))
        {auxTrans = 0}else{
        auxTrans = LDDiasLiquidados[i] * 3428;
        }
        var textoCelda = document.createTextNode(auxTrans);
        celda.appendChild(textoCelda);
        fila.appendChild(celda);

        //Total Devengado
        var celda = document.createElement("th");
        var TotaDev = salariodevengado + HorasExtra + auxTrans;
        var textoCelda = document.createTextNode(TotaDev);
        celda.appendChild(textoCelda);
        fila.appendChild(celda);

        //Salud
        var celda = document.createElement("th");
        var Salud = (TotaDev - auxTrans)*0.04;
        var textoCelda = document.createTextNode(Salud);
        celda.appendChild(textoCelda);
        fila.appendChild(celda);

        //Pension
        var celda = document.createElement("th");
        var pension = (TotaDev - auxTrans)*0.04;
        var textoCelda = document.createTextNode(pension);
        celda.appendChild(textoCelda);
        fila.appendChild(celda);

        //Total neto
        var celda = document.createElement("th");
        var neto = TotaDev - Salud - pension;
        var textoCelda = document.createTextNode(neto);
        celda.appendChild(textoCelda);
        fila.appendChild(celda);
    
    // agregamos la hilera al final de la tabla (al final del elemento tblbody)
    tblBody.appendChild(fila);
    }
    // posicionamos el <tbody> debajo del elemento <table>
    tabla.appendChild(tblBody);
    result.appendChild(tabla);
}


 