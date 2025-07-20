/*Inicia el Juego*/

let personajesJugables = [legolas, reyMago, bruja, guardiaHielo, soldadoLA]
let largoPersonajesJugables = personajesJugables.length
let personajesMuertos = []

legolas.saludar()
reyMago.saludar()
bruja.saludar()
guardiaHielo.saludar()
soldadoLA.saludar()


/* Ataque de cada personaje en un turno */
personajesMuertos = atacarPorTurno(personajesJugables)
