/*Funciones*/

function numeroAleatorio(max){
  return Math.floor(Math.random() * (max));
}

function turnos(personajesJugables){
  let velocidadesUsadas = []
  
  personajesJugables.forEach((personaje, i) => {
    let velocidadUsada = [numeroAleatorio(personaje.velocidad) + 1, i]
    velocidadesUsadas.push(velocidadUsada)
    console.log(`La velocidad de ${personaje.nombre} es de ${velocidadUsada[0]}`)    
  });
  
  return velocidadesUsadas.sort().reverse()
}

