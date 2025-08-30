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

    binaryToDecimal() {
        let num = 0;
        let current = this.head;
        while (current !== null) {
            num = num * 2 + current.value;
            current = current.next;
        }
        return num;
    }

}

const myLinkedList = new LinkedList(1)
myLinkedList.push(0)
myLinkedList.push(1)
myLinkedList.push(1)

console.log(myLinkedList.binaryToDecimal())