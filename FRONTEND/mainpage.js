// ------------------------------------------------ main page stuff here

const screen = document.querySelector("section#screen1")
const navBar = document.querySelector('div#nav-bar-items')
const topNav = document.querySelector("div.top-bar")


// ------------------------------------------------ top nav bar event listener
topNav.addEventListener('click', (evt) => {
    screen.className = "hide"
    mainBody.innerText = ''
    formContainer.innerText = ''
        if (evt.target.id == "cart"){renderCartPage()}
        if (evt.target.id == "login"){showLoginForm()}
        if (evt.target.id == "signup"){showSignUpForm()}
})


screen.addEventListener('click', (event) => {
    screen.className = "hide";
    //invoke some method here that goes to page with 2 images.
})




// ---------------------- accessing products by category from nav bar

// let navBar = document.querySelector('div#nav-bar-items')
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



let defaultPage = () => {

    
}