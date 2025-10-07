// Creamos nuestra clase CuentaBancaria
export class CuentaBancaria {
  #saldo;
  //definimos el constructor de nuestra clase CuentaBancaria con sus atributos: titular, numero, saldo
  constructor(titular, numero, saldoInicial = 0) {
    this.titular = titular;    
    this.numero = numero;       
    this.moneda = 'MXN';            
    this.#saldo = saldoInicial;
  }

  //definimos nuestros métodos: depositar, retirar, consultarSaldo, transferir
  depositar(monto) {            
    if (monto <= 0) throw new Error('Monto inválido');
    this.#saldo += monto;
    return this.#saldo;
  }
  retirar(monto) {            
    if (monto <= 0) throw new Error('Monto inválido');
    if (monto > this.#saldo) throw new Error('Fondos insuficientes');
    this.#saldo -= monto;
    return this.#saldo;
  }
  consultarSaldo() {            
    return this.#saldo;
  }
  static transferir(origen, destino, monto) { 
    origen.retirar(monto);
    destino.depositar(monto);
  }
}
