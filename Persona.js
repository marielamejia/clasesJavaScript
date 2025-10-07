// Creamos nuestra clase Persona
export class Persona {
  #id;                        // creamos un atributo privado llamado id

  constructor(nombre, edad, ciudad, id) {
    this.nombre = nombre;     
    this.edad = edad;         
    this.ciudad = ciudad;     
    this.#id = id;            
  }

  saludar() {                 
    return `Hola, soy ${this.nombre} de ${this.ciudad}`;
  }

  cumplirAnios() {            
    this.edad += 1;
    return this.edad;
  }

  cambiarCiudad(nueva) {      
    this.ciudad = nueva;
    return this.ciudad;
  }

  get id() {                  
    return this.#id;
  }
  set id(nuevo) {             
    if (typeof nuevo !== 'string' || nuevo.length < 3) {
      throw new Error('ID inválido');
    }
    this.#id = nuevo;
  }

  static esMayorDeEdad(edad) {  
    return edad >= 18;
  }
}
