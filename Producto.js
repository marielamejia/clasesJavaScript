// Creamos clase producto 
export class Producto {
    //definimos el constructor de nuestra clase Producto con sus atributos: nombre, precio, cantidad
    constructor(nombre, precio, cantidad) {
        this.nombre = nombre;     
        this.precio = precio;     
        this.cantidad = cantidad; 
    }

    //definimos nuestros métodos: calcularTotal, aplicarDescuento, compararPrecios
    calcularTotal() {           
        return this.precio * this.cantidad;
    }
    aplicarDescuento(porcentaje) {
        if (porcentaje < 0 || porcentaje > 100) {
        throw new Error('Descuento inválido');
        }
        const descuento = this.precio * (porcentaje / 100);
        this.precio -= descuento;
        return this.precio;
    }
    //Usamos este método para aumentar el inventario disponible de un producto --> agregamos más unidades cuando se recibe nueva mercancía
    reabastecer(unidades) {    
        if (unidades <= 0) throw new Error('Cantidad inválida');
        this.cantidad += unidades;
        return this.cantidad;
    }
    static compararPrecios(prod1, prod2) { 
        return prod1.precio > prod2.precio
        ? `${prod1.nombre} es más caro que ${prod2.nombre}`
        : `${prod2.nombre} es más caro que ${prod1.nombre}`;
    }
}
