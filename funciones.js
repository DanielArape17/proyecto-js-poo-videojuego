/*Funciones*/

function numeroAleatorio(max){
  return Math.floor(Math.random() * (max));
}

function turnos(personajesJugables){
  let velocidadesUsadas = []
  
  personajesJugables.forEach((personaje, i) => {
    let velocidadUsada = [numeroAleatorio(personaje.velocidad) + 1, i]
    velocidadesUsadas.push(velocidadUsada)
    //console.log(`La velocidad de ${personaje.nombre} es de ${velocidadUsada[0]}`)    
  });
  
  return velocidadesUsadas.sort().reverse()
}

function atacarPorTurno(personajesJugables){
  let turno = 0
  let resultadoTurnos = turnos(personajesJugables);
  let personajesMuertos = []

  while(turno < largoPersonajesJugables){
    do {
      personajeAtacado = numeroAleatorio(largoPersonajesJugables);
    } while (personajeAtacado === resultadoTurnos[turno][1] || personajesJugables[personajeAtacado].muerto === true);

    if(personajesJugables[resultadoTurnos[turno][1]].muerto === false){
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