/*****
- Si no son números?  - hecho
- Si el divisor es 0?  - hecho
- Si queremos resetear - hecho 1/2,f falta mejora

- Mejoras a realizar ahora
-- solo habilitemos el control si los operandos son correctos
-- el resultado, si es negativo, mostrarlo en rojo, si es positivo, en verde (modificando el atributo "style")
*****/
function calcula(operacion) {
  var operando1 = document.getElementById("op1").value;
  var operando2 = document.getElementById("op2").value;
  var result = eval(operando1 + operacion + operando2);
  document.getElementById("resultado").innerHTML = result;
  }

//validacion de dividir por cero
function validacion() {
    if (document.getElementById("op2").value == 0) {
      alert('[ERROR] No puedes dividir por cero');
      return false;
    }
    else{
      calcula('/');
    }
  }

//validar que el operando 1 y operando 2 sean solo numeros.-
function validarSiNumero(numero){
    if (!/^([0-9])*$/.test(numero))
      alert("El valor " + numero + " no es un número");
}

//funcion para resetear
function borrar() {
    document.getElementById("myForm").reset();
    //aca tengo problemas para limpiar el <p>
    document.getElementById("resultado").reset();
}
