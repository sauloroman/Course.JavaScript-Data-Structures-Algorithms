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

    set( index, value ) {
        let temp = this.get( index ) 
        if ( temp ) {
            temp.value = value
            return true
        }
        return false
    }

}