// FIFO (First In, First Out)

// Para implementarlo en un arreglo no importa que extremo del arreglo
// se tome para agregar a la queue ya que la complejidad en cada extremo
// son opuestas

// Si agrego al final O(1)
// Entonces saco del inicio O(n)

// Si agrego al inicio O(n)
// Entonces saco del final O(1)

// En el caso de las listas ligadas es conveniente hacer

// Si agrego al final O(1) 
// Entonces elimino del inicio O(1) 

class Node {
  constructor( value ) {
    this.value = value
    this.next = null
  }
}

class Queue {

  constructor( value ) {
    const newNode = new Node( value )
    this.first = newNode
    this.last = newNode
    this.length = 1
  }

}