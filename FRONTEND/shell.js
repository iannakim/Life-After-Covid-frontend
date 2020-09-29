
// ---------------------- accessing products by category from side nav bar

let navBar = document.querySelector('div#nav-bar-items')
navBar.addEventListener('click', (evt) => {
    mainBody.innerText = ''
        if (evt.target.id == "all"){fetchAllProducts()}
        else {fetchProductsByCat(evt.target.id)}
})

// user selects all -- array of hashes returned
let fetchAllProducts = () => {
    fetch("http:localhost:3000/categories")
    .then(res => res.json())
    .then(catPOJO => {
        catPOJO.forEach(function (category) {
            let products = category.products;
            products.forEach(function (product) {
                showAllProductsByCat(product)
            })   
        })
    })
}

// user selects specific category -- hash returned
let fetchProductsByCat = (id) => {
    fetch(`${categories_url}/${id}`)
    .then(res => res.json())
    .then(categoryObj => {
        categoryObj.products.forEach((product) => {
            showAllProductsByCat(product)
        }) 
     }) 
}