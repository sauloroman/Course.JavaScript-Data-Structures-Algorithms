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

    push( value ) {
        const newNode = new Node( value )

        if ( !this.head ) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }

        this.length++
        return this
    }

    pop() {
        if ( !this.head ) return undefined
        
        let temp = this.head
        let prev = this.head 

        while ( temp.next !== null ) {
            prev = temp
            temp = temp.next
        }

        this.tail = prev
        this.tail.next = null
        this.length--

        if ( this.length === 0 ) {
            this.head = null
            this.tail = null
        }

        return temp
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

    shift() {
        if ( !this.head ) return undefined

        let temp = this.head
        this.head = this.head.next
        temp.next = null
        this.length--

        if ( this.length === 0 ) {
            this.tail = null
        }

        return temp
    }

    get( index ) {
        if ( index < 0 || index >= this.length ) return undefined

        let temp = this.head

        for ( let i = 0; i < index; i++ ) {
            temp = temp.next
        }

        return temp
    }

    set(index, value) {
        let temp = this.get(index)
        if ( temp ) {
            temp.value = value
            return true
        }
        return false
    }

    insert(index, value) {
        if ( index < 0 || index > this.length ) return false
        if ( index === 0 ) return this.unshift( value )
        if ( index === this.length ) return this.push( value )

        let temp = this.get( index - 1 )
        const node = new Node( value )
        node.next = temp.next
        temp.next = node
        this.length++

        return true
    }

    remove(index) {
        if ( index < 0 || index >= this.length ) return undefined
        if ( index === 0 ) return this.shift()
        if ( index === this.length - 1 ) return this.pop()

        let before = this.get( index - 1 )
        let temp = before.next
        before.next = temp.next
        temp.next = null
        this.length--

        return temp
    }

    reverse() {

        if ( !this.head ) return null
        
        let temp = this.head
        this.head = this.tail
        this.tail = temp

        let prev = null
        let next = temp.next

        for ( let i = 0; i < this.length; i++ ) {
            next = temp.next
            temp.next = prev
            prev = temp
            temp = next
        }

        return this
    }

    findMiddleNode() {

        if ( !this.head ) return undefined

        let fast = this.head
        let slow = this.head

        while ( fast !== null && fast.next !== null ) {
            fast = fast.next.next
            slow = slow.next
        }

        return slow
    }

    hasLoop() {

        if ( !this.head ) return false

        let fast = this.head
        let slow = this.head 

        while ( fast !== null && fast.next !== null ) {
            fast = fast.next.next
            slow = slow.next

            if ( fast === slow ) return true
        }

        return false
    }

    findKthNodeFromEnd( index ) {
        if ( !this.head ) return undefined

        let fast = this.head
        let slow = this.head

        for( let i = 0; i < index; i++ ) {
            if ( fast === null ) return undefined
            fast = fast.next
        }

        while ( fast !== null ) {
            slow = slow.next
            fast = fast.next
        }

        return slow
    }

    removeDuplicatesEff() {
        if ( !this.head ) return this

        let values = new Set()

        let current = this.head
        let prev = null

        while ( current !== null ) {

            if ( !values.has( current.value ) ) {
                values.add( current.value )
                prev = current
            } else {
                prev.next = current.next
                this.length--
            }

            current = current.next
        }

        return this
    }

    removeDuplicates() {
        if ( !this.head ) return this
        let current = this.head
        let runner = current
        
        while ( current !== null ) {
            runner = current
            while ( runner.next !== null ) {
                if ( runner.next.value === current.value ) {
                    runner.next = runner.next.next
                    this.length--
                } else {
                    runner = runner.next
                }
            }
            current = current.next
        }

        return this
    }

    binaryToDecimal() {
        if ( !this.head ) return null
        
        let current = this.head
        let number = 0

        while ( current !== null ) {
            number = number * 2 + current.value 
            current = current.next
        }

        return number
    }

}

const myLinkedList = new LinkedList(1)
myLinkedList.push(0)
myLinkedList.push(1)
myLinkedList.push(1)
myLinkedList.push(1)
myLinkedList.push(0)

console.log(myLinkedList.binaryToDecimal())