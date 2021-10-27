// Usa un bucle for...of para recorrer todos los juguetes y elimina los que incluyan la palabra gato.
// Recuerda que puedes usar la función.includes() para comprobarlo.Puedes usar este array:
const toys = [
    { id: 5, name: 'Buzz MyYear' },
    { id: 11, name: 'Action Woman' },
    { id: 23, name: 'Barbie Man' },
    { id: 40, name: 'El gato con Guantes' },
    { id: 40, name: 'El gato felix' }
]

function eliminarPalabra(array, palabra) {
    let i = 0;
    while (i < array.length) {
        if (array[i].name.includes(palabra)) {
            array.splice(i, 1);
        } else {
            ++i;
        }
    }
    return array;
}

eliminarPalabra(toys, "gato");
console.log(toys);
