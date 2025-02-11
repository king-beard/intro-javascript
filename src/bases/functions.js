//Functions
const saludar = function (name) {
  return `Hola ${name}`
}

const saludar2 = (name) => {
  return `Hola ${name}`
}

const saludar3 = (name) => `Hola ${name}`;

console.log(saludar('Kakaroto'))
console.log(saludar2('Gohan'))
console.log(saludar3('Vegeta'))


const getUser = () => ({
  uid: 'ABC123',
  username: 'king-beard'
})

console.log(getUser())

//Task
//1. Transformar a una funcióon de flecha
//2. Tiene que retornar un objeto implícito
//3. Pruebas

const getUserActive = (username) => (
  {
    uid: 'ABC123',
    username
  }
)

console.log(getUserActive('jesus'))