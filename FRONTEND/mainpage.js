// ------------------------------------------------ main page stuff here

const screen = document.querySelector("section#screen1")
const navBar = document.querySelector('#nav-bar-items')
const topNav = document.querySelector("div.top-bar")
let CategoryName = 'all'




// ------------------------------------------------ top nav bar event listener
topNav.addEventListener('click', (evt) => {
    screen.className = "hide"
    mainBody.innerText = ''
    formContainer.innerText = ''
        if (evt.target.id == "cart"){renderCartPage()}
        if (evt.target.id == "login"){showLoginForm()}
        else if (evt.target.id == "signup"){showSignUpForm()}
        else {console.log("hello")}
})



// let toggleIcon = document.querySelector('.navbar-toggler-collapsed')
// let categoryClicked = document.querySelector('.nav-link')
// console.log(categoryClicked)

//     categoryClicked.addEventListener('click', (e) => {
//         console.log(e)

//         toggleIcon.remove()
//     })




screen.addEventListener('click', (event) => {
    screen.className = "hide";
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
        categoryName = 'all'
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
        CategoryName = categoryObj.name
        

        categoryObj.products.forEach((product) => {
            showAllProductsByCat(product)
        }) 
     }) 
}