export function itemsCount( times ) {
  for ( let i = 1; i <= times; i++ ) { // O(n)
    console.log(`i: ${i}`)
  }

  for ( let j = 1; j <= times; j++ ) { // O(n)
    console.log(`j: ${j}`)
  }
}

// Drop the constants
// O(n) + O(n) ? O(2n)
// O(n) + O(n) = O(n)
