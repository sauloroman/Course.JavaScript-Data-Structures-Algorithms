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

    get( index ) {
        if ( index < 0  || index >= this.length ) return undefined

        let temp = this.head

        for ( let i = 0; i < index; i++ ) {
            temp = temp.next
        }

        return temp
    }

}