
// filter -> 
let numeros = [23, 4, 67, 89, 12, 18, 9]

let newArr = numeros.filter((num)=>{
    if(num > 20){
        return num
    }
})

console.log(newArr)

let people = [
    {
        name: "Juanpe",
        age: 19
    },
    {
    name: "Borja",
        age: 21
    },
    {
        name: "Lucía",
        age: 12
    },
    {
        name: "Illita",
        age: 2
    },
    {
        name: "Miguel",
        age: 47
    }
]

const filterAge = (arr)=>{

    let newArr = arr.filter((e)=>{
        if(e.age >= 18){
            return e
        }
    })

    return newArr

}

console.log(filterAge(people))


// filter

    // 1. Haz una función que reciba como parámetro un array de números y devuelva un array con los números pares del array anterior.


    // 2. Tomando la función anterior, ahora haz que reciba un segundo parámetro, que será un string con las palabras "par" o "impar". Si la palabra es "par", se debe devolver un array con los números pares. Si la palabras es "impar" se debe devolver un array con los números impares


    // 3. Haz una función que reciba como parámetro un array de strings y devuelva otro array con los strings que tengan una longitud de al menos 6 caracteres.
    let equipos = ["Sevilla", "Betis", "Getafe", "Real Madrid", "Barça", "Espanyol"]


    // 4. Dado un array de objetos, haz una función que devuelva otro array con las personas que tengan 18 años de edad o más.

    let personas = [
        {
            nombre: "Juanpe",
            edad: 19
        },
        {
            nombre: "Pablo",
            edad: 10
        },
        {
            nombre: "Julieta",
            edad: 5
        },
        {
            nombre: "Estrella",
            edad: 21
        },
        {
            nombre: "Miguel Ángel pequeño",
            edad: 15
        },
        {
            nombre: "Lucía",
            edad: 18
        }
    ]


