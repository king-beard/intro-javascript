// Desestructuración Arrays
// Asignación desestructurante
const personajes = ['Kakaroto', 'Vegeta', 'Broly']
const [, , p3] = personajes

console.log(p3)

const returnArray = () => {
  return ['ABC', 123]
}

const [letters, numbers] = returnArray()
console.log(letters, numbers)


//Task
//1. El primer valor de arr se llamará name
//2. El segundo valor de arr se llamará setName

const useState = (value) => {
  return [value, () => { console.log('Hello World!!!') }]
}

const [name, setName] = useState('Kakaroto')
console.log(name)
setName()