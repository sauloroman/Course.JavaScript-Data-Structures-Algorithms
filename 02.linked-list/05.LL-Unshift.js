class Node {
    constructor( value ) {
        this.value = value
        this.next = null
    } 
}

class LinkedList {

    constructor( value ) {
        const node = new Node( value )
        this.head = node
        this.tail = this.head
        this.length = 1
    }

    unshift( value ) {

        const newNode = new Node( value )

        if ( !this.head ) {
            this.head = newNode
            this.tail = newNode
        } else {
            newNode.next = this.head
            this.head = newNode
        }

        this.length++
        return this
    }

}