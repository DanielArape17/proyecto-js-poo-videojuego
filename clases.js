class Personaje {
  constructor(nombre, clase, vida, ataque, defensa, velocidad, muerto){
    this.nombre = nombre;
    this.clase = clase;
    this.vida = vida;
    this.ataque = ataque;
    this.defensa = defensa;
    this.velocidad = velocidad;
    this.muerto = muerto;
  }

  saludar() { 
    console.log(`Hola, mi nombre es ${this.nombre} y soy un ${this.clase}`)
  }

  atacarConManos(atacado) {
    atacado.vida = atacado.vida - this.ataque 
    console.log(` ${this.nombre} a atacado con puños a ${atacado.nombre}. Vida de ${atacado.nombre} a bajado a ${atacado.vida}`)
  }

  defenderse(ataque) {
    let posibilidadDeDefensa = numeroAleatorio(this.defensa) + 1;
    if(posibilidadDeDefensa > ataque){
      console.log(`${this.nombre} ha hecho una defensa existosa. Defensa: ${posibilidadDeDefensa}. Ataque Fallido: ${ataque}`);
      return true;
    }
    return false;
  }
}

/*
guerrero tiene las siguientes propiedades y metodos:
  - array_de_armas: Armas que puede usar el guerrero.
  - atacar_con_arma(): Método utilizado para atacar con un arma aleatoria del array.
  - Crear 2 guerreros.
*/

class Guerrero extends Personaje{
  constructor(nombre, clase, vida, ataque, defensa, velocidad, muerto, armas){
    super(nombre, clase, vida, ataque, defensa, velocidad, muerto);
    this.armas = armas;
  }


  //No se que estoy haciendo aqui
  especial(){
    let habilidadUsada = false;
    if(habilidadUsada === false){
      console.log(`${this.nombre} ha utilizado su movimiento especial de ${this.clase}. Atacar X3`);
      for(let i = 0; i < 3; i++){
        atacarPorTurno();
      }
      habilidadUsada = true;
    }
  }

  atacar(atacado){
    let posibilidadDeAtaque = numeroAleatorio(6) + 1
    if(posibilidadDeAtaque < 3){
      if(atacado.defenderse(this.ataque) === false){
        super.atacarConManos(atacado)
      }
      else{
        console.log(`${this.nombre} ha fallado su ataque ${this.ataque}`)
      }
    }
    else{
      let totalArmas = Object.keys(this.armas).length
      let elegirArma = numeroAleatorio(totalArmas)
      if(atacado.defenderse(this.armas[elegirArma].dañoArma) === false){
        atacado.vida = atacado.vida - this.armas[elegirArma].dañoArma
        console.log(` ${this.nombre} a atacado con ${this.armas[elegirArma].nombreArma} a ${atacado.nombre}. Vida de ${atacado.nombre} a bajado a ${atacado.vida}`)
      }
      else{
        console.log(`${this.nombre} ha fallado su ataque ${this.armas[elegirArma].nombreArma}: ${this.armas[elegirArma].dañoArma}`)
      }
      
    }
  }
}

const guardiaHielo = new Guerrero("Guardia de Hielo", "Guerrero", 160, 40, 85, 6, false, [ 
  {nombreArma:"Hacha", dañoArma: 70},
  {nombreArma:"Dagas", dañoArma: 55}
]);

const soldadoLA = new Guerrero("Soldado de LA", "Guerrero", 170, 45, 80, 5, false, [
  {nombreArma:"Espada", dañoArma: 65},
  {nombreArma:"Onda de Luz Azul", dañoArma: 85}
]);

/*
  mago tiene las siguientes propiedades y metodos:
  - array_de_hechizos: Hechizos que puede usar el mago.
  - atacar_con_hechizo(): Método utilizado para atacar con un hechizo aleatorio del array.
  - Crear 2 magos.
*/

class Mago extends Personaje{
  constructor(nombre, clase, vida, ataque, defensa, velocidad, muerto, hechizos){
    super(nombre, clase, vida, ataque, defensa, velocidad, muerto);
    this.hechizos = hechizos;
  }

  //atacarHechizos() {
  //  console.log(`${this.nombre} ataca con ${this.hechizos}`);
  //}

  atacar(atacado){
    let posibilidadDeAtaque = numeroAleatorio(6) + 1
    if(posibilidadDeAtaque < 3){
      if(atacado.defenderse(this.ataque) === false){
        super.atacarConManos(atacado)
      }
      else{
        console.log(`${this.nombre} ha fallado su ataque ${this.ataque}`)
      }
    }
    else{
      let totalHechizos = Object.keys(this.hechizos).length
      let elegirHechizos = numeroAleatorio(totalHechizos)
      
      if(atacado.defenderse(this.hechizos[elegirHechizos].dañoHechizos) === false){
        atacado.vida = atacado.vida - this.hechizos[elegirHechizos].dañoHechizos
        console.log(` ${this.nombre} a atacado con ${this.hechizos[elegirHechizos].nombreHechizos} a ${atacado.nombre}. Vida de ${atacado.nombre} a bajado a ${atacado.vida}`)      
      }
      else{
        console.log(`${this.nombre} ha fallado su ataque ${this.hechizos[elegirHechizos].nombreHechizos}: ${this.hechizos[elegirHechizos].dañoHechizos}`)
      }
    }
  }
}

const reyMago = new Mago("Rey Mago", "Mago", 90, 10, 50, 8, false, [
  {nombreHechizos: "Fuego", dañoHechizos: 80},
  {nombreHechizos: "Hielo", dañoHechizos: 75},
  {nombreHechizos: "Agua", dañoHechizos: 90},
  {nombreHechizos: "Veneno", dañoHechizos: 70}
])

const bruja = new Mago("Bruja", "Mago", 100, 25, 50, 7, false, [
  {nombreHechizos: "Veneno", dañoHechizos: 70},
  {nombreHechizos: "Cuervos", dañoHechizos: 85}
]);

/*
  arquero tiene las siguientes propiedades y metodos:
  - array_de_flechas: Flechas que puede usar el arquero.
  - disparar(): Método utilizado para disparar una flecha aleatoria del array.
  - Crear 1 arquero.
*/

class Arquero extends Personaje{
  constructor(nombre, clase, vida, ataque, defensa, velocidad, muerto, flechas){
    super(nombre, clase, vida, ataque, defensa, velocidad, muerto);
    this.flechas = flechas;
  }

  atacar(atacado){
    let posibilidadDeAtaque = numeroAleatorio(6) + 1
    if(posibilidadDeAtaque < 3){
      if(atacado.defenderse(this.ataque) === false){
        super.atacarConManos(atacado)
      }
      else{
        console.log(`${this.nombre} ha fallado su ataque ${this.ataque}`)
      }
    }
    else{
      let totalFlechas = Object.keys(this.flechas).length
      let elegirFlechas = numeroAleatorio(totalFlechas)   
      if(atacado.defenderse(this.flechas[elegirFlechas].dañoFlecha) === false){
        atacado.vida = atacado.vida - this.flechas[elegirFlechas].dañoFlecha
        console.log(` ${this.nombre} a atacado con ${this.flechas[elegirFlechas].nombreFlecha} a ${atacado.nombre}. Vida de ${atacado.nombre} a bajado a ${atacado.vida}`)
      }
      else{
        console.log(`${this.nombre} ha fallado su ataque ${this.flechas[elegirFlechas].nombreFlecha}: ${this.flechas[elegirFlechas].dañoFlecha}`)
      }
    }
  }
}

const legolas = new Arquero("Legolas", "Arquero", 130, 40, 45, 12, false, [
  {nombreFlecha: "Potente", dañoFlecha: 80},
  {nombreFlecha: "Normal", dañoFlecha: 60}
]);