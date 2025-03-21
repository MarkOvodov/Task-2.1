import { catalog } from './catalog.js';

const century = 20;
const search = 'История';

// console.log(catalog);

let listOfLanguages = []
catalog.forEach((elem) => {
    if (!listOfLanguages.includes(elem.language)) {
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
catalog.forEach((elem) => {
    let searchArray = search.split(' ')
    searchArray.forEach((elemSearch) => {
        if ((elem.author.toLowerCase().includes(elemSearch.toLowerCase()) ||
        elem.title.toLowerCase().includes(elemSearch.toLowerCase())) &&
        !result.includes(`${elem.author} - ${elem.title}`))
            result.push(`${elem.author} - ${elem.title}`)
})})

// search должен содержать только название ИЛИ только автора
console.log(result)