//5-----------------------------------------------------
/*
 * Crea una función que reciba días, horas, minutos y segundos (como enteros)
 * y retorne su resultado en milisegundos.
 */

function tiempoMilisegundos (day,hours,min,seg){
    let dia = day * 86400000.000000000;
    let hora = hours * 3600000;
    let minutos = min * 60000;
    let segundos = seg * 1000;
    
    console.log(`${day} dia/s equivalen a ${dia} ms -
     ${hours} hora/s equivalen a ${hora} ms -
      ${min} minuto/s equivalen a ${minutos} ms -
       ${seg} segundo/s equivalen a ${segundos} ms`);
    }
    
tiempoMilisegundos(2,5,30,53);