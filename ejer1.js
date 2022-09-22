//1---------------------------------------------------
/*
 * Enunciado: Dado un array de enteros ordenado y sin repetidos, 
 * crea una función que calcule y retorne todos los que faltan entre
 * el mayor y el menor.
 * - Lanza un error si el array de entrada no es correcto.
 */

function numerosfaltantes (arregloNumeros){
 
    let auxArr = [];
    let primerElemento = arregloNumeros[0];
    let ultimoElemento = arregloNumeros[arregloNumeros.length - 1];
    
    for(let i = primerElemento; i <=  ultimoElemento; i++){
         if(!arregloNumeros.includes(i)){
            auxArr.push(i);
         }
    }
    console.log(auxArr);


}
let numerosArr = [1,3,5];
numerosfaltantes(numerosArr)