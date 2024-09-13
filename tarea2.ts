// Miguel Alfonzo Macario Velasquez - 1597421
// Estructura de Datos 2

class Nodo {
    public valor: number;
    public siguiente: Nodo | null;
    public anterior: Nodo | null;

    constructor() {
        this.valor = Math.floor(Math.random() * 9) + 1; // Genera un número aleatorio
        this.siguiente = null;
        this.anterior = null;
    }
}

class ListaDobleEnlazada {
    private cabeza: Nodo | null;
    private cola: Nodo | null;

    constructor() {
        this.cabeza = null;
        this.cola = null;
    }

    // Insetar al final de la lista
    public insertarNodo(): void {
        const nuevoNodo = new Nodo();
        if (!this.cabeza) {
            this.cabeza = nuevoNodo;
            this.cola = nuevoNodo;
        } else {
            nuevoNodo.anterior = this.cola;
            if (this.cola) {
                this.cola.siguiente = nuevoNodo;
            }
            this.cola = nuevoNodo;
        }
    }

    // Imprimir Pares
    public imprimirNodos(): void {
        let actual = this.cabeza;
        while (actual) {
            if (actual.valor % 2 == 0) {
                console.log(actual.valor);
            }
            actual = actual.siguiente;
        }
    }
}

const lista = new ListaDobleEnlazada();

for (let i = 0; i <= 5; i++) {
    lista.insertarNodo();
}

lista.imprimirNodos();
