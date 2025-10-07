//importamos la clase Producto
import { Producto } from './Producto.js';

//importamos la clase CuentaBancaria
import { CuentaBancaria } from './CuentaBancaria.js'; 

//importamos la clase Persona
import { Persona } from './Persona.js';


// ------------------------------------------------------------------------------
// --------- PROBAMOS FUNCIONAMIENTO DE CLASE PRODUCTO Y SUS MÉTODOS ------------
// ------------------------------------------------------------------------------

//definimos dos productos (creamos instancias)
const p1 = new Producto('Laptop', 15000, 3);
const p2 = new Producto('Mouse', 500, 10);

//probamos los métodos
console.log('-------------------------------');
console.log('PRUEBAS DE LA CLASE PRODUCTO')
console.log('-------------------------------');
console.log(`${p1.nombre}: total = $${p1.calcularTotal()}`);
p1.aplicarDescuento(10);
console.log(`Nuevo precio con descuento: $${p1.precio}`);
//agregamos 5 unidades al inventario de laptops
p1.reabastecer(5);
console.log(`Unidades disponibles: ${p1.cantidad}`);

console.log(Producto.compararPrecios(p1, p2));



// ------------------------------------------------------------------------------
// --------- PROBAMOS FUNCIONAMIENTO DE CLASE PERSONA Y SUS MÉTODOS ------------
// ------------------------------------------------------------------------------

//definimos una persona (creamos una instancia)
const regina = new Persona('Regina', 21, 'CDMX', 'ABC123');

//probamos los métodos
console.log('-------------------------------');
console.log('PRUEBAS DE LA CLASE PERSONA')
console.log('-------------------------------');
console.log(regina.saludar());
console.log('Mayor de edad?', Persona.esMayorDeEdad(regina.edad));
regina.cumplirAnios();
regina.cambiarCiudad('Guadalajara');
console.log(regina.saludar());


// ------------------------------------------------------------------------------
// --------- PROBAMOS FUNCIONAMIENTO DE CLASE CUENTABANCARIA Y SUS MÉTODOS ------------
// ------------------------------------------------------------------------------

//instanciamos dos cuentas bancarias
const c1 = new CuentaBancaria('Regina', '001', 500);
const c2 = new CuentaBancaria('Alex', '002', 100);

//probamos los métodos
console.log('-------------------------------');
console.log('PRUEBAS DE LA CLASE CUENTA BANCARIA')
console.log('-------------------------------');
c1.depositar(200);
CuentaBancaria.transferir(c1, c2, 300);
console.log('Saldo c1:', c1.consultarSaldo(), 'Saldo c2:', c2.consultarSaldo());  
