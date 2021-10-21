// Usa un bucle for para recorrer todos los destinos del array y elimina los elementos que tengan el id 11 y 40. 
//Imprime en un console log el array.Puedes usar este array:
const placesToTravel = [
    { id: 5, name: 'Japan' },
    { id: 11, name: 'Venecia' },
    { id: 23, name: 'Murcia' },
    { id: 40, name: 'Santander' },
    { id: 44, name: 'Filipinas' },
    { id: 59, name: 'Madagascar' }]

function removeId(array, value) {
    for (let index = 0; index < array.length; index++) {
        if (array[index].id === value) {
            //En la posicion index, quita 1
            array.splice(index, 1);
        }
    }
    return array;
}

let resultado = [];
resultado = removeId(placesToTravel, 11);
resultado = removeId(placesToTravel, 40);
console.log(resultado);
