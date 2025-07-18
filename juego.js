/*Inicia el Juego*/

let personajesJugables = [legolas, reyMago, bruja, guardiaHielo, soldadoLA]

legolas.saludar()
reyMago.saludar()
bruja.saludar()
guardiaHielo.saludar()
soldadoLA.saludar()

turno = 0

let resultadoTurnos = turnos(personajesJugables);
console.log(resultadoTurnos);

while(turno < personajesJugables.length){
  

  turno++
}