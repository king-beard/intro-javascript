// Objetos Literales

const people = {
  name: 'Jesus',
  lastname: 'Herrera',
  age: 27,
  address: {
    city: 'Qro',
    postalCode: 76708,
    lat: 46.23423432,
    lng: 54.5454,
  }
}

const people2 = { ...people }
people2.name = 'Kakaroto'

console.log(people)
console.log(people2)