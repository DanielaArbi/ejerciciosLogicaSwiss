//3-----------------------------------------------------------------
/*
 * Crea un programa que calcule quien gana más partidas al piedra,
 * papel, tijera.
 * - El resultado puede ser: "Jugador 1", "Jugador 2", "Empate" 
 * - La función recibe un listado que contiene pares, representando cada jugada.
 * - El par puede contener combinaciones de "R" (piedra), "P" (papel)
 *   o "S" (tijera).
 * - Ejemplo. Entrada: [("R","S"), ("S","R"), ("P","S")]. Resultado: "Jugador 2".
 */

function piedraPapelTijera(jugador1, jugador2) {
    let ganador;
       if (jugador1.toUpperCase() === 'R' && jugador2.toUpperCase() === 'R' || jugador1.toUpperCase() === 'S' && jugador2.toUpperCase() === 'S' || jugador1.toUpperCase() === 'P' && jugador2.toUpperCase() === 'P') {
   
           ganador="Empate";
       }
       if (jugador1.toUpperCase() === 'R' && jugador2.toUpperCase() === 'S') {
           ganador = "Ganador: jugador 1";
       }else if(jugador1.toUpperCase() === 'S' && jugador2.toUpperCase() === 'R'){
           ganador = "Ganador: jugador 2";
       }
   
       if (jugador1.toUpperCase() === 'P' && jugador2.toUpperCase() === 'R') {
           ganador = "Ganador: jugador 1";
       }else if(jugador1.toUpperCase() === 'R' && jugador2.toUpperCase() === 'P'){
           ganador = "Ganador: jugador 2";
       }
   
       if (jugador1.toUpperCase() === 'S' && jugador2.toUpperCase() === 'P') {
           ganador = "Ganador: jugador 1";
       }else if(jugador1.toUpperCase() === 'P' && jugador2.toUpperCase() === 'S'){
           ganador = "Ganador: jugador 2";
       }
   
       return ganador;
   }
   
   console.log(piedraPapelTijera('R','P'));