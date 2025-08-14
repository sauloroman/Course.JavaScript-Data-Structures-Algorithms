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

    remove( index ) {
        if ( index === 0 ) return this.shift()
        if ( index === this.length - 1 ) return this.pop()
        if ( index < 0 || index >= this.length ) return undefined

        let before = this.get( index - 1 )
        let temp = before.next

        before.next = temp.next
        temp.next = null
        this.length--
        return temp
    }

}