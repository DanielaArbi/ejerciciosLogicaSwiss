/*
 * Crea una función que ordene y retorne una matriz de números.
 * - La función recibirá un listado (por ejemplo [2, 4, 6, 8, 9]) y un parámetro
 *   adicional "Asc" o "Desc" para indicar si debe ordenarse de menor a mayor
 *   o de mayor a menor.
 * - No se pueden utilizar funciones propias del lenguaje que lo resuelvan
 *   automáticamente.
 */
//2-------------------------------------------------
function ordenar(arrNumeros, orden) {
    let aux = 0;
    for (let i = 0; i < arrNumeros.length; i++) {
        for (let j = i; j < arrNumeros.length; j++) {

            switch (orden) {
                case 'asc':
                    if (arrNumeros[i] > arrNumeros[j]) {
                        aux = arrNumeros[i];
                        arrNumeros[i] = arrNumeros[j];
                        arrNumeros[j] = aux;
                    }
                    break;
                case 'desc':
                    if (arrNumeros[i] < arrNumeros[j]) {
                        aux = arrNumeros[j];
                        arrNumeros[j] = arrNumeros[i];
                        arrNumeros[i] = aux;
                    }
                    break;
                default:
                    console.log("dato incorrecto");
            }
        }
    }
    console.log(arrNumeros);


}
let arregloNumeros = [1, 8, 5, 9, 2];
ordenar(arregloNumeros, 'desc')