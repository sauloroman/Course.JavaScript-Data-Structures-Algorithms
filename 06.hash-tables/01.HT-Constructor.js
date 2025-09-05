class HashTable {
  constructor( size = 7 ) {
    this.dataMap = new Array(size)
  }

  _hash(key) {
    let hash = 0
    for ( let i = 0; i < key.length; i++ ) {
      hash = ( hash + key.charCodeAt(i) * 23 ) % this.dataMap.length
    }
    return hash
  }

}

/*

  class HashTable {
  constructor(size = 7) {
    this.dataMap = new Array(size);
  }

  constructor(size = 7):

  Cuando creas una nueva tabla hash (new HashTable()), se inicializa un array vacío de tamaño 7 por defecto.

  Ese array (dataMap) es la base de almacenamiento donde se van a guardar las claves y valores.

  El tamaño 7 es arbitrario (pero se suele recomendar un número primo, como ya vimos).
*/

/*
  _hash(key) {
    let hash = 0
    for ( let i = 0; i < key.length; i++ ) {
      hash = ( hash + key.charCodeAt(i) * 23 ) % this.dataMap.length
    }
    return hash
  }

  Inicializa hash = 0.

  Recorre cada caracter de la clave (key).

  Obtiene el código ASCII de ese caracter con key.charCodeAt(i).

  Ejemplo: "a".charCodeAt(0) = 97

  Multiplica por 23 (un número primo, para dispersar mejor los valores).

  Suma al hash actual.

  Hace módulo (% this.dataMap.length) para asegurarse de que el índice esté dentro de los límites del array.

  Al final devuelve un número que será el índice donde guardar la clave-valor.

*/