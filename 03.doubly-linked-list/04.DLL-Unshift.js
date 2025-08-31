class Node {
  constructor( value ) {
    this.value = value
    this.next = null
    this.prev = null
  }
}

class DoublyLinkedList {
  constructor( value ) {
    const newNode = new Node( value )
    this.head = newNode
    this.tail = this.head
    this.length = 1
  }

  push( value ) {
    const newNode = new Node( value )

    if ( !this.head ) {
      this.head = newNode
      this.tail = newNode
    } else {
      newNode.prev = this.tail
      this.tail.next = newNode
      this.tail = newNode
    }

    this.length++
    return this
  }

  pop() {
    if ( this.length === 0 ) return undefined

    let temp = this.tail

    if ( this.length === 1 ) {
      this.tail = null
      this.head = null
    } else {
      this.tail = this.tail.prev
      this.tail.next = null
      temp.prev = null
    }

    this.length--
    return temp
  }

  unshift( value ) {
    const newNode = new Node( value )

    if ( !this.head ) {
      this.head = newNode
      this.tail = newNode
    } else {
      newNode.next = this.head
      this.head.prev = newNode
      this.head = newNode
    }

    this.length++
    return this
  }
}

const myDLL = new DoublyLinkedList(10)
myDLL.push(20)
myDLL.unshift(30)