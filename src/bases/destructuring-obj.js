// Desestructuración
// Asignación desestructurante
const person = {
  name: 'Jesus',
  age: 27,
  key: 'king-beard'
};

const { name, age, key } = person;

const useContext = ({ name, age, key }) => {
  return {
    nameKey: key,
    years: age,
    latlng: {
      lat: 12.87985,
      lng: -16.646498
    }
  }
};

const { nameKey, years, latlng: { lat, lng } } = useContext(person);

console.log(nameKey, years)
console.log(lat, lng)