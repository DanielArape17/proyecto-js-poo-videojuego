/*Inicia el Juego*/

let personajesJugables = [legolas, reyMago, bruja, guardiaHielo, soldadoLA]
let largoPersonajesJugables = personajesJugables.length

legolas.saludar()
reyMago.saludar()
bruja.saludar()
guardiaHielo.saludar()
soldadoLA.saludar()

turno = 0

let resultadoTurnos = turnos(personajesJugables);
console.log(resultadoTurnos);

/* Ataque de cada personaje en un turno */
while(turno < largoPersonajesJugables){
  do {
    personajeAtacado = numeroAleatorio(largoPersonajesJugables);
  } while (personajeAtacado === resultadoTurnos[turno][1]);
  
  personajesJugables[resultadoTurnos[turno][1]].atacar(personajesJugables[personajeAtacado]);

  if (personajesJugables[personajeAtacado].vida < 1){
    console.log(`ha muerto ${personajesJugables[personajeAtacado].nombre}`)
    personajesJugables.splice(personajeAtacado, 1, "muerto")
    console.log(personajesJugables)
  }


  turno++
}