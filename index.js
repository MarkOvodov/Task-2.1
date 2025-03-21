import { catalog } from './catalog.js';

const century = 20;
const search = 'История';

// console.log(catalog);

let listOfLanguages = []
catalog.forEach((elem) => {
    if (listOfLanguages.includes(elem.language) === false) {
        listOfLanguages.push(elem.language)
    }
})

console.log(listOfLanguages)

let listOfBooks = []
catalog.forEach((elem) => {
    if (elem.year > ((century - 1) * 100) && elem.year < ((century) * 100))
        listOfBooks.push(elem.title)
})

console.log(listOfBooks)


let result = []
catalog.forEach(function (elem) {
    if (elem.author.includes(search) === true || elem.author.includes(search.toLowerCase()) === true) 
        result.push(`${elem.author} - ${elem.title}`)
    else if (elem.title.includes(search) === true || elem.title.includes(search.toLowerCase()) === true)
        result.push(`${elem.author} - ${elem.title}`)
})

// Функция принимает только название ИЛИ только автора
console.log(result)