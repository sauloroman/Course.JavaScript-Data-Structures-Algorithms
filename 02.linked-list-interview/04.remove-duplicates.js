/* 
    LL: Remove Duplicates ( ** Interview Question)
    Implement a member function called removeDuplicates() that removes all duplicate nodes from the linked list based on their values.

    Note: this linked list class does NOT have a tail which will make this method easier to implement.

    Output:

    The function should modify the linked list in-place, removing all nodes with duplicate values.

    Constraints:

    You are allowed to use the JavaScript Set data structure to keep track of unique node values.

    Example 1:

    Suppose you have a LinkedList object, list, with the following values:
    1 -> 2 -> 3 -> 2 -> 1 -> 4

    After calling the removeDuplicates() function:

    list.removeDuplicates();
    The linked list should now have the following values: 1 -> 2 -> 3 -> 4

    Example 2:

    Now suppose you have a LinkedList object, list, with the following values:
    3 -> 3 -> 3


    After calling the removeDuplicates() function:

    list.removeDuplicates();
    The linked list should now have the following value: 3

    Remember to update the length.
*/

class Node {
    constructor( value ) {
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor( value ) {
        const newNode = new Node( value )
        this.head = newNode
        this.tail = this.head
        this.length = 1
    }

    push( value ) {
        const newNode = new Node( value )

        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }

        this.length++

        return this
    }

    removeDuplicatesSet() {

        const values = new Set()

        let current = this.head
        let previous = null

        while( current !== null ) {
            if ( !values.has( current.value ) ) {
                values.add( current.value )
                previous = current
            } else {
                previous.next = current.next
                this.length--
            }
            current = current.next
        }

        return this
    }

    removeDuplicatesUn() {

        if ( !this.head ) return this

        let current = this.head
        let runner  = current

        while( current !== null ) {
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

}

const myLinkedList = new LinkedList(10)
myLinkedList.push(10)
myLinkedList.push(40)
myLinkedList.push(50)
myLinkedList.push(50)
myLinkedList.push(10)
myLinkedList.push(10)

console.log(myLinkedList.removeDuplicatesUn())
console.log(myLinkedList.removeDuplicatesSet())