fetch('books.json')
.then(res => res.json())
.then(json => app(json))

function app(data){
    let Authors = getAuthors(data)
    console.log(Authors)
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
