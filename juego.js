/*Inicia el Juego*/

let personajesJugables = [legolas, reyMago, bruja, guardiaHielo, soldadoLA]
let largoPersonajesJugables = personajesJugables.length
let personajeMuerto = []
let personajesMuertos = []

/*
legolas.saludar()
reyMago.saludar()
bruja.saludar()
guardiaHielo.saludar()
soldadoLA.saludar()
*/

let i = 1

while(personajesMuertos.length < (largoPersonajesJugables - 1)){
  console.log(`Ronda ${i}`)
  /* Ataque de cada personaje en un turno */
  personajeMuerto = atacarPorTurno(personajesJugables)
  personajesMuertos.push(...personajeMuerto)
  console.log(`Ronda ${i} terminada. Personajes muertos: ${personajesMuertos.length}`)
  i++
}

ganador(personajesJugables, personajesMuertos)

