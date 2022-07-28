let selectAuthors = document.querySelector('#authors')

fetch('books.json')
.then(res => res.json())
.then(json => app(json))

function app(data){
    let allData = data
    let authors = getAuthors(allData)
    displaySelectAuthors(authors.sort())
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

    });
    return listAuthors
}
function displaySelectAuthors(authors){
    let authorsList = authors
    authorsList.forEach(author =>{
        if(author!=""){
            selectAuthors.innerHTML += `<option value="${author}">${author}</option>`
        }
    })
}
