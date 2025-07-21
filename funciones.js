/*Funciones*/

//Crea un numero aleatorio
function numeroAleatorio(max){
  return Math.floor(Math.random() * (max));
}

//Creo las velocidades random de cada personaje en una respectiva ronda
function turnos(personajesJugables){
  let velocidadesUsadas = []
  
  personajesJugables.forEach((personaje, i) => {
    let velocidadUsada = [numeroAleatorio(personaje.velocidad) + 1, i]
    velocidadesUsadas.push(velocidadUsada)
    //console.log(`La velocidad de ${personaje.nombre} es de ${velocidadUsada[0]}`)    
  });
  
  return velocidadesUsadas.sort().reverse()
}

//Los personajes atacan ordenadamente en una ronda
function atacarPorTurno(personajesJugables){
  let turno = 0
  let resultadoTurnos = turnos(personajesJugables);
  let personajesMuertos = []

  while(turno < largoPersonajesJugables){
    do {
      personajeAtacado = numeroAleatorio(largoPersonajesJugables);
    } while (personajeAtacado === resultadoTurnos[turno][1] || personajesJugables[personajeAtacado].muerto === true);

    if(personajesJugables[resultadoTurnos[turno][1]].muerto === false){
      //Hacer un if para aplicar la defensa aqui para saber si el ataque es exitoso o fallido
      personajesJugables[resultadoTurnos[turno][1]].atacar(personajesJugables[personajeAtacado]);
    }
    
    if (personajesJugables[personajeAtacado].vida < 1){
      console.log(`ha muerto ${personajesJugables[personajeAtacado].nombre}`)
      personajesJugables[personajeAtacado].muerto = true
      personajesMuertos.push(personajesJugables[personajeAtacado])
    }

    turno++
}
return personajesMuertos
}

//Anuncia el Ganador
function ganador(personajesJugables, personajesJugables){
  let ganador = personajesJugables

  personajesMuertos.forEach((personaje) => {
    ganador.forEach((gano, j) => {
      if(personaje === gano){
        ganador.splice(j, 1)
      }
    })
  })

  console.log("El ganador es")
  console.log(ganador[0].nombre)

  return ganador[0].nombre
}