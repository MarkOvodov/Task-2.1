import { catalog } from './catalog.js';

const century = 20;
const search = 'История';

// console.log(catalog);

function allLanguagesInCatalog() {
    let listOfLanguages = []
    for (let i = 0; i < catalog.length; i++) {
        if (listOfLanguages.includes(catalog[i].language) === false) {
            listOfLanguages.push(catalog[i].language)
        }
    }
    return listOfLanguages
}

// console.log(allLanguagesInCatalog())

function allBooksByCentury(century) {
    let listOfBooks = []
    for (let i = 0; i < catalog.length; i++) {
        if (catalog[i].year > ((century - 1) * 100) && catalog[i].year < ((century) * 100)) {
            listOfBooks.push(catalog[i].title)
        }
    }
    return listOfBooks
}

// console.log(allBooksByCentury(century))

function searchByAuthorOrTitle(search) {
    let result = []
    for (let i = 0; i < catalog.length; i++) {
        let author = catalog[i].author
        let title = catalog[i].title
        if (author.includes(search) === true || author.includes(search.toLowerCase()) === true) {
            result.push(`${catalog[i].author} - ${catalog[i].title}`)
        } else if (title.includes(search) === true || title.includes(search.toLowerCase()) === true) {
            result.push(`${catalog[i].author} - ${catalog[i].title}`)
        } 
    }
    return result
}
// Функция принимает только название ИЛИ только автора
console.log(searchByAuthorOrTitle(search))