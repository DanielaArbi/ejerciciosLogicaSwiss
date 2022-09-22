//6-----------------------
/* Crea una función que reciba un String de cualquier tipo y se encargue de
 * poner en mayúscula la primera letra de cada palabra.
 * - No se pueden utilizar operaciones del lenguaje que
 *   lo resuelvan directamente.
 */

const palabraMayuscula= (palabra) =>{
    let max = palabra.length;
    let auxPalabra = palabra.charAt(0).toUpperCase();
    
    palabra = auxPalabra + palabra.substring(1,max)
    
    console.log(palabra);
    }
    palabraMayuscula('hola');