// ------------------------------------------------ main page stuff here

const screen = document.querySelector("section#screen1")
const navBar = document.querySelector('#nav-bar-items')
const topNav = document.querySelector("div.top-bar")
let CategoryName = ''





// ------------------------------------------------ top nav bar event listener
topNav.addEventListener('click', (evt) => {
    
    screen.className = "hide"
    mainBody.innerText = ''
    formContainer.innerText = ''

        if (evt.target.id == "login"){showLoginForm()}
        if (evt.target.id == "namehere"){renderLogoPage()}
        if (evt.target.id == "logout"){window.location.reload(true)}
        if (evt.target.id == "signup"){showSignUpForm()}
        if (evt.target.id == "cart"){renderCartPage()}
})






screen.addEventListener('click', (event) => {
    screen.className = "hide";
    renderLogoPage()

})




// ----------------------------- accessing products by category from nav bar

navBar.addEventListener('click', (evt) => {
    mainBody.innerText = ''

            CategoryName = evt.target.name
            
        if (evt.target.id == "all"){fetchAllProducts()}
        else if(evt.target.id == "logo"){renderLogoPage()}
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


// default page 
let renderLogoPage = () => {
    formContainer.innerText = ''
    categoryNameh1.innerText = ''
    mainBody.className = 'logoPage-hero'
    
let rightImageHolder = document.createElement('img')
    rightImageHolder.className = 'logo-rightImage'
    rightImageHolder.src = 'image/same2.png'

let leftImageHolder = document.createElement('img')
    leftImageHolder.className = 'logo-leftImage'
    leftImageHolder.src = 'image/sale1.png'


    mainBody.append(rightImageHolder, leftImageHolder)
}