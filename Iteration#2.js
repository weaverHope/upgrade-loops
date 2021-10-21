// Comprueba en cada uno de los usuarios que tenga al menos dos trimestres aprobados y añade la propiedad isApproved a true o false en consecuencia.Una vez lo tengas compruébalo con un console.log.

// Puedes usar este array para probar tu función:
const alumns = [
    { name: 'Pepe Viruela', T1: false, T2: false, T3: true },
    { name: 'Lucia Aranda', T1: true, T2: false, T3: true },
    { name: 'Juan Miranda', T1: false, T2: true, T3: true },
    { name: 'Alfredo Blanco', T1: false, T2: false, T3: false },
    { name: 'Raquel Benito', T1: true, T2: true, T3: true }
]

//Agrega una propiedad nueva al array entero
alumns.forEach(function (element) {
    element.isApproved = false;
});
for (let index = 0; index < alumns.length; index++) {
    if ((alumns[index].T2 && alumns[index].T3)
        || (alumns[index].T1 && alumns[index].T3)
        || (alumns[index].T1 && alumns[index].T2)) {
        //console.log(alumns[index].name);
        alumns[index].isApproved = true;
    }
}
console.log(alumns);
