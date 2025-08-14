class Node {
    constructor( value ) {
        this.value = value
        this.next = null
    }
}

class LinkedList {

    constructor( value ) {
        const node = new Node(value)
        this.head = node
        this.tail = this.head
        this.length = 1
    }

    insert( index, value ) {
        if ( index < 0 || index > this.length ) return false
        if ( index === this.length ) return this.push( value )
        if ( index === 0 ) return this.unshift( value )

        let newNode = new Node( value )
        let temp = this.get( index - 1)
        
        newNode.next = temp.next
        temp.next = newNode
        this.length++

        return true
    }

}