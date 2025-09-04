// Binary tree
/*
Un árbol binario es una estructura de datos jerárquica que se compone de nodos conectados entre sí.

🔑 Características principales:

Cada nodo puede tener como máximo dos hijos:

Hijo izquierdo (left child)

Hijo derecho (right child)

El nodo más alto se llama raíz (root).

Los nodos que no tienen hijos se llaman hojas (leaf nodes).

Cada subárbol también es, en sí mismo, un árbol binario.

📌 Ejemplo visual de un árbol binario:

        (10)        ← raíz
       /    \
    (5)      (15)
   /  \      /
 (2)  (7)  (12)


➡️ Aquí:

10 es la raíz.

5 es hijo izquierdo de 10, y 15 es hijo derecho.

2 y 7 son hijos de 5.

12 es hijo izquierdo de 15.

2, 7 y 12 son hojas porque no tienen hijos.

⚡ Tipos comunes de árboles binarios:

Árbol binario lleno: cada nodo tiene o 2 o 0 hijos

Árbol binario completo: todos los niveles están llenos, excepto quizá el último, que se llena de izquierda a derecha.

Árbol binario perfecto: todos los nodos tienen 2 hijos y todas las hojas están en el mismo nivel.

Árbol binario de búsqueda (Binary Search Tree, BST): los valores del subárbol izquierdo son menores que el nodo, y los del derecho son mayores.

Árbol binario balanceado: intenta mantener las ramas de igual altura para mejorar la eficiencia en búsquedas.
*/

/*
  ⏳ Operaciones comunes en un Árbol Binario de Búsqueda (BST):

  Búsqueda (Search)

  Inserción (Insert)

  Eliminación (Delete)

  ✅ Caso ideal: Árbol binario balanceado

  Cada vez que bajas de un nodo, descartas la mitad de los elementos (parecido a búsqueda binaria).

  La altura del árbol es log₂(n), donde n es el número de nodos.

  Entonces:

  Búsqueda → O(log n)

  Inserción → O(log n)

  Eliminación → O(log n)

 ❌ Peor caso: Árbol desbalanceado (degenerado)

  Si siempre insertas valores en orden (ejemplo: 1, 2, 3, 4, 5...), el árbol se convierte en una lista enlazada:

  1
    \
      2
      \
        3
        \
          4
          \
            5

  Aquí la altura es n.
  Entonces:

  Búsqueda → O(n)

  Inserción → O(n)

  Eliminación → O(n)

  ⚡ Árboles especiales que mantienen el balanceo automáticamente

  AVL Tree

  Red-Black Tree

  B-Tree (para bases de datos)

  En estos, siempre garantizan:

  Búsqueda → O(log n)

  Inserción → O(log n)

  Eliminación → O(log n)
*/