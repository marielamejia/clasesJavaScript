# Clases en JavaScript
### Mariela Mejía Gutiérrez - 201373
En este repositorio se encuentra la tarea de investigación sobre las clases en JavaScript. Específicamente, el ReadMe contiene la información previa a la creación de clases (con sus distintas funciones) para su entendimiento completo y correcto.

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
    ```js
    // Declaración de una clase
    class Animal {}

    // Instanciamos un objeto
    const pato = new Animal();
    ```
2. Definir el constructor: El constructor es un método especial que se ejecuta automáticamente cuando se crea un nuevo objeto de la clase. Se utiliza para establecer los atributos (propiedades) iniciales del objeto
    ```js
    class Animal {

        constructor(nombre, sonido) {
            this.nombre = nombre;
            this.sonido = sonido;
        }
    }
    ```

3. Agregar métodos: Los métodos son aquellos que definen el comportamiento de los objetos de dicha clase. 
Ejemplo:
    ```js
    class Animal {
        constructor(nombre, sonido) {
            this.nombre = nombre;
            this.sonido = sonido;
        }
        hablar() {
            return `${this.nombre} dice: ${this.sonido}`;
        }
    }
    ```

4. Crear instancias: Este apartado lo veremos en la siguiente sección

## ¿Cómo se crean instancias?
Una instancia es un objeto que se crea a partir de una clase. Para hacerlo, usamos la palabra clave new seguida del nombre de la clase y los argumentos para el constructor. 
Ejemplo:
 ```js
    const miPato = new Animal("Pato Lucas", "Cuac cuac");

    const miRatón = new Animal("Jerry", "Chirrido");
```
En general, cada que se ejecuta "new", se ejecuta el constructor de la clase (visto arriba) y se crea un nuevo objeto con sus propios valores.

## ¿Cómo se hacen métodos y funciones?
Los métodos son funciones que se definen dentro de una clase y se usan para describir las acciones que las instancias pueden realizar. Los métodos se declaran sin la palabra clave function dentro de la clase.
Ejemplo:
```js
class Coche {
  constructor(marca, velocidad) {
    this.marca = marca;
    this.velocidad = velocidad;
  }

  acelerar() {
    this.velocidad += 10;
  }

  frenar() {
    this.velocidad -= 10;
  }

  mostrarVelocidad() {
    console.log(`El coche ${this.marca} va a ${this.velocidad} km/h`);
  }
}

const miCoche = new Coche("Toyota", 100);
miCoche.acelerar();
miCoche.mostrarVelocidad(); 
```

## Investigación extra

### Campos privados, ¿Cuándo usarlos? 
Los campos privados se declaran con un símbolo # y solo se pueden acceder desde dentro de la clase. Sirven para proteger datos sensibles o internos y evitar que otros accedan o modifiquen información directamente.

Los usamos cuando:
- Quieres encapsular la información y controlar cómo se accede o modifica.
- Deseas mantener la integridad de los datos, como una contraseña.
- Buscas evitar errores por accesos externos no controlados.

Ejemplo: 
```js
class CuentaBancaria {
  #saldo;

  constructor(titular, saldoInicial) {
    this.titular = titular;
    this.#saldo = saldoInicial;
  }

  depositar(monto) {
    this.#saldo += monto;
  }

  verSaldo() {
    console.log(`Saldo: $${this.#saldo}`);
  }
}

const cuenta = new CuentaBancaria("Mariela", 1000);
cuenta.depositar(500);
cuenta.verSaldo(); 
console.log(cuenta.#saldo); 
```
Tomando el ejemplo anterior, se declaró "saldo" como un campo privado. Por ello, se manda un error al tratar de acceder a el por medio del comando: 
```js
console.log (cuenta.#saldo); 
```

### Clases vs. funciones constructoras 
Tanto las clases como las funciones constructoras sirven como plantillas para poder crear objetos. En la siguiente tabla, se presentan las mayores diferencias de ambas. 

<table>
  <thead>
    <tr>
      <th>Aspecto</th>
      <th>Clases (ES6)</th>
      <th>Funciones constructoras (pre-ES6)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><b>Sintaxis</b></td>
      <td>Usa la palabra clave <code>class</code> y el método especial <code>constructor()</code>.</td>
      <td>Usa una función normal que se invoca con <code>new</code>.</td>
    </tr>
    <tr>
      <td><b>Claridad</b></td>
      <td>Más clara, estructurada y similar a otros lenguajes orientados a objetos.</td>
      <td>Más técnica y menos intuitiva para principiantes.</td>
    </tr>
    <tr>
      <td><b>Definición de métodos</b></td>
      <td>Los métodos se declaran dentro de la clase sin la palabra <code>function</code>.</td>
      <td>Los métodos deben agregarse manualmente al <code>prototype</code>.</td>
    </tr>
    <tr>
      <td><b>Herencia</b></td>
      <td>Se usa <code>extends</code> y <code>super()</code> para heredar propiedades y métodos.</td>
      <td>Se usa <code>Object.create()</code> o <code>call()</code> para simular herencia.</td>
    </tr>
    <tr>
      <td><b>Campos privados</b></td>
      <td>Permiten usar <code>#</code> para definir atributos privados.</td>
      <td>No tienen soporte directo para atributos privados.</td>
    </tr>
    <tr>
      <td><b>Compatibilidad</b></td>
      <td>Disponible desde ES6 (2015) en adelante.</td>
      <td>Funciona en versiones más antiguas de JavaScript.</td>
    </tr>
    <tr>
      <td><b>Recomendación actual</b></td>
      <td>Recomendada por su legibilidad y soporte moderno.</td>
      <td>Obsoleta, solo útil para compatibilidad con código antiguo.</td>
    </tr>
  </tbody>
</table>

## Ejercicio práctico
Para esta tarea, se utilizaron las siguientes clases: 
- Persona.js
- CuentaBancaria.js
- Producto.js
- main.js --> aquí hacemos las pruebas para ver el correcto funcionamiento de las clases
- index.html --> usamos esta clase para correr nuestro main y ver los resultados en la consola

## Referencias
La información anterior fue tomada de las siguientes ligas 

[1] https://lenguajejs.com/javascript/oop/clases

[2] https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Classes 

[3] https://www-w3schools-com.translate.goog/js/js_classes.asp?_x_tr_sl=en&_x_tr_tl=es&_x_tr_hl=es&_x_tr_pto=tc
