let selectAuthors = document.querySelector('#authors')
let selectCategories = document.querySelector('#categories')
fetch('books.json')
.then(res => res.json())
.then(json => app(json))

function app(data){
    let allData = data
    let authors = getAuthors(allData)
    let categories = getCategories(allData)
    displaySelectAuthors(authors)
    displaySelectCategories(categories)
}

function getAuthors(data){
    let Allbooks = data
    let listAuthors = []

    Allbooks.forEach(element => {
       let authors = element.authors
       authors.forEach(author=>{
        if(!listAuthors.includes(author)){
            listAuthors.push(author)
        }
       })

    })
    return listAuthors.sort()
}
function displaySelectAuthors(authors){
    let authorsList = authors
    authorsList.forEach(author =>{
        if(author!=""){
            selectAuthors.innerHTML += `<option value="${author}">${author}</option>`
        }
    })
}
function getCategories(data){
    let allData = data
    let listCategories = []
    allData.forEach(element => {
        
       let categories = element.categories
       categories.forEach(category=>{
        if(!listCategories.includes(category)){
            listCategories.push(category)
        }
       })

    })
    return listCategories
}
function displaySelectCategories(categories){
    let categoriesList = categories
    categoriesList.forEach(category =>{
        if(category!=""){
            selectCategories.innerHTML += `<option value="${category}">${category}</option>`
        }
    })
}
