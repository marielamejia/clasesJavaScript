# Clases en JavaScript
### Mariela Mejía Gutiérrez - 201373
En este repositorio se encuentra la tarea sobre investigación de las distintas clases de JavaScript. Específicamente, el ReadMe contiene la información previa a la creación de clases (con sus distintas funciones) para su entendimiento completo y correcto.

## ¿Qué son las clases en JavaScript?
Una clase es una forma de organizar código de manera entendible y estructurada con el objetivo de simplificar el funcionamiento del programa que deseamos hacer. Las clases son conceptos "abstractos" de lo que se pueden crear objetos, cada uno con sus propios atributos [1].
En general, las clases son un modelo para crear objetos que definen las propiedades (datos) y métodos (funciones) que tendrán los objetos creados a partir de ella.
En general, las partes de una clase:
- constructor(...): inicializa atributos al crear una instancia con new.
- Atributos: públicos (this.x), privados (#x) y estáticos (pertenecen a la clase, no a la instancia).
- Métodos:
    - de instancia (usan this)
    - estáticos (static)
    - getters/setters (get, set).
## ¿Cómo se usan?
Para usar clases en JavaScript, primero se define una plantilla de objeto con la palabra clave class, la cual contiene un método constructor para inicializar propiedades y otros métodos para definir el comportamiento. 

Después, creamos objetos a partir de esta clase usando new, y accedemos o modificamos sus propiedades y métodos utilizando "this" dentro de la clase y el nombre del objeto fuera de ella [1]. 

1. Declarar la clase: Utiliza la palabra clave class seguida del nombre de la clase, que suele empezar con mayúscula, y encierra el contenido entre llaves {}. A continuación, se presenta un ejemplo: 
    // Declaración de una clase
    class Animal {}

    // Instanciamos un objeto
    const pato = new Animal();

2. Definir el constructor: 

3. Agregar métodos: Los métodos son aquellos que definen el comportamiento de los objetos de dicha clase. Ejemplo:
    class Animal {
    constructor(nombre, sonido) {
        this.nombre = nombre;
        this.sonido = sonido;
    }

    hablar() {
        return `${this.nombre} dice: ${this.sonido}`;
    }
    }
4. Crear instancias: Este apartado lo veremos en la siguiente sección

## ¿Cómo se crean instancias?
Para crear un objeto a partir de una clase, usa la palabra clave new seguida del nombre de la clase y los argumentos para el constructor. Ejemplo:

    const miPato = new Animal("Pato Lucas", "Cuac cuac");

    const miRatón = new Animal("Jerry", "Chirrido");

## ¿Cómo se hacen métodos y funciones?

## Investigación extra

### Campos privados, ¿Cuándo usarlos? 

### Clases vs. funciones constructoras 

## Referencias
La información anterior fue tomada de las siguientes ligas 

[1] https://lenguajejs.com/javascript/oop/clases

[2]

[3]
