# 📘 Hash Tables (Tablas Hash)

## 🔹 ¿Qué es una Hash Table?

Una Hash Table es una estructura de datos que almacena pares clave → valor.
Usa una función hash para transformar la clave en un índice dentro de un array subyacente.

📌 Ejemplo:

```
hash("perro") = 2
hash("gato")  = 5
hash("pez")   = 2  ← ¡colisión!
```

## 🔹 Complejidad de operaciones

En el caso promedio (ideal, buena función hash y pocas colisiones):

* Inserción → O(1)
* Búsqueda → O(1)
* Eliminación → O(1)

En el peor caso (todas las claves colisionan):

* Inserción → O(n)
* Búsqueda → O(n)
* Eliminación → O(n)

## 🔹 Colisiones

Ocurren cuando dos claves diferentes producen el mismo índice.

Ejemplo:

```
hash("perro") = 2
hash("pez")   = 2
```

### Métodos para manejar colisiones:

* Separate Chaining (Encadenamiento separado) 

  * Cada celda del array guarda una lista enlazada (o árbol).
  * Fácil de implementar, pero puede degradar a O(n) si hay muchas colisiones.

* Open Addressing (Direcciones abiertas)

  Si una celda está ocupada, se busca otra posición:
    * Linear Probing: se prueba la siguiente posición secuencialmente.
    * Quadratic Probing: saltos cuadráticos (i²).
    * Double Hashing: se usa una segunda función hash.

## 🔹 Load Factor (Factor de carga)

Definición:

```
α = número de elementos / tamaño de la tabla
```

A medida que α se acerca a 1 (o lo sobrepasa), las colisiones aumentan.

Para mantener eficiencia, cuando α es demasiado alto, se hace rehashing (duplicar tamaño del array y reinsertar).

## 🔹 Rehashing

Crear un array más grande (normalmente el doble).

Reinsertar los elementos aplicando la función hash de nuevo. 

Esto mantiene la eficiencia en O(1) promedio.

## 🔹 Complejidades resumen
<table>
  <thead>
    <tr>
      <th>Operación</th>
      <th>Promedio</th>
      <th>Peor caso</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Inserción</td>
      <td>O(1)</td>
      <td>O(n)</td>
    </tr>
    <tr>
      <td>Búsqueda</td>
      <td>O(1)</td>
      <td>O(n)</td>
    </tr>
    <tr>
      <td>Eliminación</td>
      <td>O(1)</td>
      <td>O(n)</td>
    </tr>
  </tbody>
</table>

## 🔹 Pros y Contras

### ✅ Ventajas
* Operaciones rápidas (O(1) promedio).
* Útiles para búsquedas, diccionarios, caches.

### ❌ Desventajas
* Consumen más memoria.
* El orden de elementos no está garantizado.
* Rehashing puede ser costoso temporalmente.
* Peor caso puede degradar a O(n).

## 🔹 Casos de uso

* Diccionarios / Mapas (HashMap en Java, dict en Python, Map en JS).
* Sets.
* Caches (ej. LRU cache).
* Tablas de símbolos en compiladores.
* Índices en bases de datos.
