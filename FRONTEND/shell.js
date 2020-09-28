// ---------------------- side nav bar elements

function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("sandwich-menu").style.display = 'none'
    // document.getElementById("main").style.marginLeft = "250px";
}

function slimNav() {
    document.getElementById("mySidebar").style.width = "30px";
    document.getElementById("sandwich-menu").style.display = 'block'
    // document.getElementById("main").style.marginLeft= "10px";
    document.querySelector(".container").style.marginLeft = "250px";
}

function setBackToOriginal() {
    document.querySelector(".container").style.marginLeft = "30px";
}




// ---------------------- accessing products by category from side nav bar

let sideBar = document.querySelector('div#mySidebar')
sideBar.addEventListener('click', (evt) => {
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