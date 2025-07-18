class Personaje {
  constructor(nombre, clase, vida, ataque, defensa, velocidad){
    this.nombre = nombre;
    this.clase = clase;
    this.vida = vida;
    this.ataque = ataque;
    this.defensa = defensa;
    this.velocidad = velocidad;
  }

  atacar(atacado) {
    atacado.vida = atacado.vida - this.ataque 
    console.log(`${this.nombre} a atacado a ${atacado.nombre}. Vida de ${atacado.nombre} a bajado a ${atacado.vida}`)
  }

  saludar() { 
    console.log(`Hola, mi nombre es ${this.nombre} y soy un ${this.clase}`)
  }
}

/*
guerrero tiene las siguientes propiedades y metodos:
  - array_de_armas: Armas que puede usar el guerrero.
  - atacar_con_arma(): Método utilizado para atacar con un arma aleatoria del array.
  - Crear 2 guerreros.
*/

class Guerrero extends Personaje{
  constructor(nombre, clase, vida, ataque, defensa, velocidad, armas){
    super(nombre, clase, vida, ataque, defensa, velocidad);
    this.armas = armas;
  }

  atacarArma() {
    console.log(`${this.nombre} ataca con ${this.armas}`);
  }
}

const guardiaHielo = new Guerrero("Guardia de Hielo", "Guerrero", 145, 45, 90, 5, ["Hacha", "Dagas"])
const soldadoLA = new Guerrero("Soldado de LA", "Guerrero", 150, 60, 75, 4, ["Espada, Onda de Luz Azul"])

/*
  mago tiene las siguientes propiedades y metodos:
  - array_de_hechizos: Hechizos que puede usar el mago.
  - atacar_con_hechizo(): Método utilizado para atacar con un hechizo aleatorio del array.
  - Crear 2 magos.
*/

class Mago extends Personaje{
  constructor(nombre, clase, vida, ataque, defensa, velocidad, hechizos){
    super(nombre, clase, vida, ataque, defensa, velocidad);
    this.hechizos = hechizos;
  }

  atacarHechizos() {
    console.log(`${this.nombre} ataca con ${this.hechizos}`);
  }
}

const reyMago = new Mago("Rey Mago", "Mago", 85, 85, 50, 9, ["fuego", "hielo", "agua", "veneno"])
const bruja = new Mago("Bruja", "Mago", 145, 55, 55, 7, ["veneno", "cuervos"])

/*
  arquero tiene las siguientes propiedades y metodos:
  - array_de_flechas: Flechas que puede usar el arquero.
  - disparar(): Método utilizado para disparar una flecha aleatoria del array.
  - Crear 1 arquero.
*/

class Arquero extends Personaje{
  constructor(nombre, clase, vida, ataque, defensa, velocidad, flechas){
    super(nombre, clase, vida, ataque, defensa, velocidad);
    this.flechas = flechas;
  }

  disparar() {
    console.log(`${this.nombre} ataca con arco`);
  }
}

const legolas = new Arquero("Legolas", "Arquero", 120, 55, 40, 10, ["potente", "normal"]);