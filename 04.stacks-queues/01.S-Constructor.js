// Stack LIFO - Head is the Top
// En el caso de los arreglos la mejor manera de implementar un Stack
// es tomando el top como el final del arreglo, las complejidades
// al final son O(1)

// Para el caso de las listas ligadas es mejor tomar el top como la 
// head ya que ahi las complejidades para agregar y eliminar es O(1)

class Node {
  constructor( value ) {
    this.value = value
    this.next = null
  }
}

class Stack {
  constructor( value ) {
    const newNode = new Node(value)
    this.top = newNode
    this.length = 1
  }
}