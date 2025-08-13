export function logItems(a, b) { // a = 10, b = 100000000000
  for ( let i = 1; i <= a; i++ ) { // O (a)
    console.log(i)
  }

  for ( let j = 1; j <= b; j++ ) { // O(b)
    console.log(j)
  }

}

// R: O(a) + O(b) = O(a + b)

export function logItems(a, b) { // a = 10, b = 100000000000
  for ( let i = 1; i <= a; i++ ) { // O (a)
    for ( let j = 1; j <= b; j++ ) { // O(b)
      console.log(i, j) 
    }
  }
}

// R: O(a) * O(b) = O(a * b)
