// ---------- Functionality for the sidebar ---------------------------------
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






// --------- CARD FETCH FOR ALL PRODUCTS   --------------------------------

const categories_url = "http:localhost:3000/categories"
const mainBody = document.querySelector("div.row.row-cols-1.row-cols-md-2.row-cols-lg-3")
// let theProduct;


 fetch("http:localhost:3000/categories")
    .then(res => res.json())
    .then(catPOJO => {
    // const products_array = 
    catPOJO.forEach(function (category) {
        let category_name = category.name;
        // console.log(category_name);
        let products = category.products;
        // console.log(products);
        products.forEach(function (prod) {
            prodPojo = prod

            cardOfProduct(prodPojo)
            
        })
        
    })
    
})


// ---------HELPER METHOD ---------------

let cardOfProduct = (prodPojo) => {

    let productDiv = document.createElement('div')
    productDiv.className = "col mb-4"
    mainBody.append(productDiv)

    let cardHolder = document.createElement("div")
    cardHolder.className = 'card'

    let proName = document.createElement("h5")
    proName.className = 'card-title'
    proName.innerText = prodPojo.name


    let proImage = document.createElement('img')
    proImage.className = 'card-img-top'
    proImage.alt = prodPojo.name
    proImage.src = prodPojo.image


    let proPrice = document.createElement('p')
    proPrice.className = 'card-text'
    proPrice.innerText = `Price: $${prodPojo.price}.00`
    productDiv.append(cardHolder, proImage, proName, proPrice)


            // // ---EVENTLISTENER-----
            productDiv.addEventListener('click', (evt) => {
                showTheProductPage(prodPojo)
            // fetch goes here!! SHOW ME THE MONEYYYYYY
            })

    
}



// ------Accessing the links from the the sidebar------ 

let sideBar = document.querySelector('div#mySidebar')
sideBar.addEventListener('click', (evt) => {
    mainBody.innerText = ''
    showSelectedCatOfProducts(evt)  
})

let showSelectedCatOfProducts = (evt) => {
    fetch(`${categories_url}/${evt.target.id}`)
    .then(res => res.json())
    .then(productPOJO => {
            productPOJO.products.forEach((soloProduct) => {
                ProductsBYCategory(soloProduct)
            }) 
        }) 
}

// ---------- helper method for category filter  ---------------------
let ProductsBYCategory = (CatProduct) => {

    // prodPojo = CatProduct

    


    let productDiv = document.createElement('div')
    productDiv.className = "col mb-4"
    mainBody.append(productDiv)

    let cardHolder = document.createElement("div")
    cardHolder.className = 'card'

    let proName = document.createElement("h5")
    proName.className = 'card-title'
    proName.innerText = CatProduct.name


    let proImage = document.createElement('img')
    proImage.className = 'card-img-top'
    proImage.alt = CatProduct.name
    proImage.src = CatProduct.image


    let proPrice = document.createElement('p')
    proPrice.className = 'card-text'
    proPrice.innerText = `Price: $${CatProduct.price}.00`
    productDiv.append(cardHolder, proImage, proName, proPrice)

            // // ---EVENTLISTENER-----
            productDiv.addEventListener('click', (evt) => {
                showTheProductPage(CatProduct)
            // fetch goes here!! SHOW ME THE MONEYYYYYY
            })


}

let showTheProductPage = (product) => {
    mainBody.innerText = ''


    let productDiv = document.createElement('div')
    productDiv.className = "col mb-4"
    mainBody.append(productDiv)

    let cardHolder = document.createElement("div")
    cardHolder.className = 'card'

    let proName = document.createElement("h5")
    proName.className = 'card-title'
    proName.innerText = product.name


    let proImage = document.createElement('img')
    proImage.className = 'card-img-top'
    proImage.alt = product.name
    proImage.src = product.image


    let proPrice = document.createElement('p')
    proPrice.className = 'card-text'
    proPrice.innerText = `Price: $${product.price}.00`


    let proDescription = document.createElement('p')
    proDescription.className = 'card-text'
    proDescription.innerText = product.description

    productDiv.append(cardHolder, proImage, proName, proPrice, proDescription)

    // --------------------------- REVIEW -------------------------------------

    let allProReviews = document.createElement('div')
    allProReviews.className = 'reviews'
    allProReviews.innerText = "Ratings & Reviews"
    // mainBody.append(reviewForm, allProReviews)



    let reviewForm = document.querySelector('div#form-container')
    console.log(reviewForm)
    let formContainer = document.createElement('div')
        formContainer.innerHTML = `<form id="new-review">
                                    <div class="form-group">
                                    <textarea class="form-control" name="form_name" id="review-content" rows="3"></textarea>
                                    <input type="submit" class="btn btn-primary"></input>
                                    </div>
                                    </form> `
    reviewForm.append(formContainer)
    mainBody.append(reviewForm, allProReviews)
    // mainBody.append(reviewForm)


    reviewForm.addEventListener('submit', (evt) => {
        evt.preventDefault()
        let newReview = evt.target.form_name.value
    fetch(`http://localhost:3000/products/${product.id}/reviews`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                content: newReview
            })
        })
        .then(res => res.json())
        .then((productPOJO) => {
            showTheProductPage(productPOJO)
        })
        evt.target.reset()
    })





    // ----------------------------------------------- Single reviews -----------------------------------------
    let proReview = document.createElement('div')
    proReview.className = 'single-review'

    console.log(product.reviews)

    product.reviews.forEach((review)=>{

    let reviewNickname = document.createElement('h5')
    reviewNickname.className = 'nickname'
    reviewNickname.innerText = `Username: ${review.nickname}`
    

    let reviewContent = document.createElement('p')
    reviewContent.className = 'content'
    reviewContent.innerText = `Comment: ${review.content}`

    let starRating = document.createElement('span')
    starRating.className = 'stars'
    starRating.innerText = `No. of stars: ${review.star_rating}`

    

    proReview.append(reviewNickname, reviewContent, starRating)
    allProReviews.append(proReview)

    

    })
  
}


   //create a space (parent-div) to render all the pre-existing reviews of that product
    // create a p tag that holds a single review and slap it under parent-div
    // slap this parent-div under product div

    //when a new review gets created (form), append it to the parent div.
    //fetch(post) happens here and we update the review database.


 







 

































