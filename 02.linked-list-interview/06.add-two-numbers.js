/*
    You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

    You may assume the two numbers do not contain any leading zero, except the number 0 itself.

    Input: l1 = [2,4,3], l2 = [5,6,4]
    Output: [7,0,8]
    Explanation: 342 + 465 = 807.

    Input: l1 = [0], l2 = [0]
    Output: [0]
    
    Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
    Output: [8,9,9,9,0,0,0,1]

    Constraints:

    The number of nodes in each linked list is in the range [1, 100].
    0 <= Node.val <= 9
    It is guaranteed that the list represents a number that does not have leading zeros.
*/


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

    push( value ) {
        const newNode = new Node( value )
        if ( !this.head ) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }
        return this
    }

}   


const l1 = new LinkedList(2)
l1.push(4)
l1.push(3)

const l2 = new LinkedList(5)
l2.push(6)
l2.push(4)

// const addTwoNumbers = function(l1, l2) {
//     let num1 = getNumberFromList(l1)
//     let num2 = getNumberFromList(l2)
//     let total = num1 + num2

//     let totalReversed = String(total).split('').reverse().join('')
//     const l = new LinkedList(totalReversed[0])
//     for ( let i = 1; i < totalReversed.length; i++ ) {
//         l.push(totalReversed[i])
//     }

//     return l
// }

// const getNumberFromList = function(l) {
//     let current = l.head
//     let num = 0
    
//     while ( current !== null ){
//         num = (num * 10) + current.value
//         current = current.next
//     }

//     return Number(String(num).split('').reverse().join(''))
// }

// console.log(addTwoNumbers(l1, l2))


const addTowNumbers = function(l1, l2) {

    const linkedList = new Node(0)
    let current = linkedList
    let carry = 0

    while( l1 !== null || l2 !== null || carry !== 0 ) {
        let x = l1 !== null ? l1.value : 0
        let y = l2 !== null ? l2.value : 0

        let sum = x + y + carry
        carry = Math.floor(sum / 10)

        current.next = new Node(sum % 10)
        current = current.next

        if ( l1 !== null ) l1 = l1.next
        if ( l2 !== null ) l2 = l2.next
    }

    return linkedList
}

const link1 = new Node(2)
link1.next = new Node(4)
link1.next.next = new Node(3)

const link2 = new Node(2)
link2.next = new Node(4)
link2.next.next = new Node(3)

console.log(addTowNumbers(link1, link2))