// Template string

const name = 'Kakaroto'
const lastname = 'Herrera'

const fullname = `${name} ${lastname}`

console.log(fullname)

const getSaludo = (fullname) => `Hello ${fullname}!!!`;

console.log(`Este es un texto: ${getSaludo(fullname)}`)