let selectAuthors = document.querySelector('#authors')
let selectCategories = document.querySelector('#categories')
let htmlListBooks = document.querySelector('#listBooks')

fetch('books.json')
.then(res => res.json())
.then(json => app(json))

function app(data){
    let allData = data
    let authors = getAuthors(allData)
    let categories = getCategories(allData)
    htmlSelectAuthors(authors)
    htmlSelectCategories(categories)
    htmlAllBook(allData)
    selectAuthors.addEventListener("change",()=>sortByAuthor());
    selectCategories.addEventListener("change", ()=>sortByCategories())
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
function htmlSelectAuthors(authors){
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
function htmlSelectCategories(categories){
    let categoriesList = categories
    categoriesList.forEach(category =>{
        if(category!=""){
            selectCategories.innerHTML += `<option value="${category}">${category}</option>`
        }
    })
}
function getDateFormat(date){
    return date
}
function htmlAllBook(allbooks){
    let allBooks =allbooks
    let defaultThumbmailUrl = "https://p1.storage.canalblog.com/14/48/1145642/91330992_o.png"
    allBooks.forEach(book => {

        htmlListBooks.innerHTML += `
        <div class="card" style="width: 18rem;"
        data-authors="${book.authors}"
        data-title="${book.title}"
        data-categories="${book.categories}"
        >
        <img class="card-img-top" src="${book.thumbnailUrl ? book.thumbnailUrl : defaultThumbmailUrl }" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">${book.title}</h5>
               <p class="card-text"><strong>ISBN</strong>${book.isbn}</p>
               <p class="card-text"><strong>Date publication</strong>${getDateFormat(book.publishedDate?.dt_txt)}</p>
            </div>
        </div>`
    })
    // 
    // <p class="card-text"><strong>Nbr Pages</strong>${book.pageCount}</p>
}

function sortByAuthor(){
    let author = selectAuthors.value
    let htmlBooks = document.querySelectorAll("[data-authors]")
    htmlBooks.forEach(book =>{
        if(!book.dataset.authors.includes(author)){
            book.style.display = "none"
        }else{
            book.style.display = 'inline'
        }
    })
}
function sortByCategories(){
    let categories = selectCategories.value
    let htmlBooks = document.querySelectorAll("[data-categories]")
    htmlBooks.forEach(book =>{
        if(!book.dataset.categories.includes(categories)){
            book.style.display = "none"
        }else{
            book.style.display = 'inline'
            console.log(book.book.dataset.categories)
        }
    })
}