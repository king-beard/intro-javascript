import { getHeroeById } from './bases/imp-exp'

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const heroe = getHeroeById(2)
    resolve(heroe)
  }, 2000)
})

promise.then((heroe) => {
  console.log(heroe)
}).catch(() => console.warn('No se encontro el heroe!!!'))


const getHeroeByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    const heroe = getHeroeById(id)
    if (heroe === undefined)
      reject()

    setTimeout(() => {
      resolve(heroe)
    }, 2000)
  })
}

getHeroeByIdAsync(12).then(heroe => console.log(heroe)).catch(() => console.warn('Heroe no encontrado!!!'))