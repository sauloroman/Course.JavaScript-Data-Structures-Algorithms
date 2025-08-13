export function logItems( times ) { // O(n^2)
  for ( let i = 1; i <= times; i++ ) { // O(n)
    for ( let j = 1; j <= times; j++ ) { // O(n)
      console.log(i, j)
    }
  }
}

// O(n) * O(n) = O(n^2)