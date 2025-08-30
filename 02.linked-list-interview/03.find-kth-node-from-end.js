/*
    LL: Find Kth Node From End ( ** Interview Question)
    Implement a member function called findKthFromEnd(k) that finds and returns the kth node from the end of the linked list.

    Note: this LinkedList implementation does not have a length member variable.

    Output:

    Return the kth node from the end of the linked list.

    If the value of k is greater than or equal to the number of nodes in the list, return null.

    Constraints:

    You are not allowed to use any additional data structures (such as arrays) or modify the existing data structure.

    You can only traverse the linked list once.


    Example 1:

    Suppose you have a LinkedList object, list, with the following values:
    1 -> 2 -> 3 -> 4 -> 5


    After calling the findKthFromEnd(2) function:

    let kthNode = list.findKthFromEnd(2);
    The kthNode should have the value 4.

    Example 2:

    Now suppose you have a LinkedList object, list, with the following values: 1 -> 2 -> 3 -> 4 -> 5 -> 6


    After calling the findKthFromEnd(4) function:

    let kthNode = list.findKthFromEnd(4);
    The kthNode should have the value 3.
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

    findKthNodeFromEnd( k ) {

        if ( !this.head ) return undefined
        let fast = this.head
        let slow = this.head
        
        for ( let i = 0; i < k; i++ ) {
            if ( fast === null ) return undefined
            fast = fast.next
        }
        
        while ( fast !== null ) {
            slow = slow.next
            fast = fast.next
        }
        
        return slow
    }

}
