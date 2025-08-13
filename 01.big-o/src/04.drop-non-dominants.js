export function logItems( times ) {
  
  // O(n^2)
  for( let i = 1; i <= times; i++ ) {
    for ( let j = 1; j <= times; j++ ) {
      console.log(i, j)
    }
  }

  // O(n)
  for ( let k = 1; k <= times; k++ ) {
    console.log(k)
  }

}

// Drop non dominants
// O(n^2) + O(n) = O(n^2 + n) 
// O(n^2) + O(n) = O(n^2) 