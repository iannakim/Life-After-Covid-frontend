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
// const mainBody = document.querySelector("div.row.row-cols-1.row-cols-md-2.row-cols-lg-3")
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
    mainBody.className = 'row row-cols-1 row-cols-md-2 row-cols-lg-3'

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

// let showTheProductPage = (product) => {
//     mainBody.innerText = ''


//     let productDiv = document.createElement('div')
//     productDiv.className = "col mb-4"
//     mainBody.append(productDiv)

//     let cardHolder = document.createElement("div")
//     cardHolder.className = 'card'

//     let proName = document.createElement("h5")
//     proName.className = 'card-title'
//     proName.innerText = product.name


//     let proImage = document.createElement('img')
//     proImage.className = 'card-img-top'
//     proImage.alt = product.name
//     proImage.src = product.image


//     let proPrice = document.createElement('p')
//     proPrice.className = 'card-text'
//     proPrice.innerText = `Price: $${product.price}.00`


//     let proDescription = document.createElement('p')
//     proDescription.className = 'card-text'
//     proDescription.innerText = product.description

//     productDiv.append(cardHolder, proImage, proName, proPrice, proDescription)

//     // --------------------------- REVIEW -------------------------------------

//     let allProReviews = document.createElement('div')
//     allProReviews.className = 'reviews'
//     allProReviews.innerText = "Ratings & Reviews"
//     // mainBody.append(reviewForm, allProReviews)



//     let reviewForm = document.querySelector('div#form-container')
//     console.log(reviewForm)
//     let formContainer = document.createElement('div')
//         // formContainer.innerHTML = `<form id="new-review">
//         //                             <div class="form-group">
//         //                             <textarea class="form-control" name="form_name" id="review-content" rows="3"></textarea>
//         //                             <input type="submit" class="btn btn-primary"></input>
//         //                             </div>
//         //                             </form> `


//           // Creating the form 
          
//         formContainer.innerHTML = `<form class="review">
//                                     <h3>Create a Review!</h3>

//                                     <input
//                                     type="text"
//                                     name="user_id"
//                                     value=""
//                                     placeholder="user_id..."
//                                     class="input-text"
//                                     />
//                                     <br />
//                                     <input
//                                     type="text"
//                                     name="product_id"
//                                     value=""
//                                     placeholder="product_id..."
//                                     class="input-text"
//                                     />
//                                     <br />
//                                     <input
//                                     type="text"
//                                     name="content"
//                                     value=""
//                                     placeholder="content..."
//                                     class="input-text"
//                                     />
//                                     <br />
//                                     <input
//                                     type="text"
//                                     name="rating"
//                                     value=""
//                                     placeholder="rating.."
//                                     class="input-text"
//                                     />
//                                     <br />
//                                     <input
//                                     type="text"
//                                     name="nickname"
//                                     value=""
//                                     placeholder="nickname..."
//                                     class="input-text"
//                                     />
//                                     <br />
//                                     <input
//                                     type="submit"
//                                     name="submit"
//                                     value="Create Review"
//                                     class="submit"
//                                     />
//                                 </form>`


//     console.log(reviewForm)
//     reviewForm.append(formContainer)
//     mainBody.append(reviewForm, allProReviews)
//     // mainBody.append(reviewForm)


//     reviewForm.addEventListener('submit', (evt) => {
//         evt.preventDefault()
//         let user_id = evt.target.user_id.value
//         let product_id = evt.target.product_id.value
//         let content = evt.target.content.value
//         let rating = evt.target.rating.value
//         let nickname = evt.target.nickname.value



//         // console.log(newReview)
//     fetch(`http://localhost:3000/reviews`, {
//         // fetch(`http://localhost:3000/products/${product.id}/reviews`, {

//             method: "POST",
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({
//                 user_id: user_id,
//                 product_id: product_id,
//                 content: content,
//                 star_rating: rating,
//                 nickname: nickname
            
//             })
//         })
//         .then(res => res.json())
//         .then((productPOJO) => {
//             showTheProductPage(productPOJO)
//         })
//         evt.target.reset()
//     })





//     // ----------------------------------------------- Single reviews -----------------------------------------
//     let proReview = document.createElement('div')
//     proReview.className = 'single-review'

//     console.log(product.reviews)

//     product.reviews.forEach((review)=>{

//     let reviewNickname = document.createElement('h5')
//     reviewNickname.className = 'nickname'
//     reviewNickname.innerText = `Username: ${review.nickname}`
    

//     let reviewContent = document.createElement('p')
//     reviewContent.className = 'content'
//     reviewContent.innerText = `Comment: ${review.content}`

//     let starRating = document.createElement('span')
//     starRating.className = 'stars'
//     starRating.innerText = `No. of stars: ${review.star_rating}`

    

//     proReview.append(reviewNickname, reviewContent, starRating)
//     allProReviews.append(proReview)

    

//     })
  
// }


   //create a space (parent-div) to render all the pre-existing reviews of that product
    // create a p tag that holds a single review and slap it under parent-div
    // slap this parent-div under product div

    //when a new review gets created (form), append it to the parent div.
    //fetch(post) happens here and we update the review database.


 

    // let showTheProductPage2 = (product) => {
    
    //     let allProReviews = document.createElement('div')
    //     // mainBody.append(reviewForm, allProReviews)
    
    
    
    //     let reviewForm = document.querySelector('div#form-container')
    //     console.log(reviewForm)
    //     let formContainer = document.createElement('div')

    //         // Creating the form 
    //         let user_id = document.createElement('p')
    //         let product_id = document.createElement('p')
    //         let content = document.createElement('p')
    //         let rating = document.createElement('p')
    //         let nickname = document.createElement('p')
    //         let button = document.createElement('button')
    //     formContainer.append(user_id, product_id, content, rating, nickname, button)

        


    //         // formContainer.innerHTML = `<form id="new-review">
    //         //                             <div class="form-group">
    //         //                             <textarea class="form-control" name="form_name" id="review-content" rows="3"></textarea>
    //         //                             <textarea class="form-control" name="form_user" rows="3"></textarea>
    //         //                             <textarea class="form-control" name="form_product" rows="3"></textarea>
    //         //                             <textarea class="form-control" name="form_rating" rows="3"></textarea>
    //         //                             <textarea class="form-control" name="form_content" rows="3"></textarea>

    //         //                             <input type="submit" class="btn btn-primary"></input>
    //         //                             </div>
    //         //                             </form> `
    
    //     console.log(reviewForm)
    //     reviewForm.append(formContainer)
    //     mainBody.append(reviewForm, allProReviews)
    //     // productDiv.append(cardHolder, proImage, proName, proPrice, proDescription)

    // }
    






 




































    // let productOnShowPage = document.querySelector('.reviewContainer')

    let showTheProductPage = (product) => {
        mainBody.className = 'none'
        mainBody.innerText = ''

        
    
        // ------Outthere div card-deck ---------------
        let productDiv = document.createElement('div')
        productDiv.className = "card-deck"
        mainBody.append(productDiv)
    
        // ------card div to hold just the image ---------
        let cardHolder = document.createElement("div")
            cardHolder.className = 'card'

        let proImage = document.createElement('img')
            proImage.alt = product.name
            proImage.src = product.image

        // ---card div to hold all the info regarding the product----
        let reviewContHolder = document.createElement('div')
            reviewContHolder.className = 'reviewContainer'

        let cardOfProductInfo = document.createElement('div')
            cardOfProductInfo.className = 'card'  

        let reviewProduct = document.createElement('div')
            reviewProduct.className = 'card-body'

        let rating = document.createElement('p')
            rating.className = 'card-title'
            rating.innerText = 'Rating stars'

        let nameOfProduct = document.createElement('h5')
            nameOfProduct.className = 'card-title'
            nameOfProduct.innerText = product.name

        let price = document.createElement('p')
            price.className = 'card-title'

        let priceContent = document.createElement('small')
            priceContent.className = 'text-small'
            priceContent.innerText = `$ ${product.price}.00`

        let quantity = document.createElement('p')
            quantity.className = 'card-title'
            quantity.innerText = 'qty: _____'

        let buttonHolder = document.createElement('div')
            buttonHolder.className = 'mx-auto'

        let button = document.createElement('button')
            button.className = '.btn btn-secondary btn-lg'
            button.type = 'button'
            button.innerText = 'Add to Cart'

        let description = document.createElement('h5')
            description.className = 'card-title'
            description.innerText = 'Product Description:'

        let contentDescription = document.createElement('p')
            contentDescription.className = 'card-text'

        let productDescription = document.createElement('small')
            productDescription.className = 'text-muted'
            productDescription.innerText = product.description      
            // productDescription.innerText = "blah blah"

        buttonHolder.append(button)
        price.append(priceContent)
        cardHolder.append(proImage)
        contentDescription.append(productDescription)
        cardOfProductInfo.append(reviewProduct)
        reviewContHolder.append(cardOfProductInfo)
        reviewProduct.append(rating, nameOfProduct, price, quantity, buttonHolder, description, contentDescription)
        productDiv.append( cardHolder, reviewContHolder)
    
        // --------------------------- REVIEW -------------------------------------
    
        let allProReviews = document.createElement('div')
        allProReviews.className = 'reviews'
        allProReviews.innerText = "Ratings & Reviews"
        // mainBody.append(reviewForm, allProReviews)
    
        console.log(product)

        const formContainer = document.querySelector('div#form-container')

    let reviewForm = document.createElement('form')
        reviewForm.id = 'new-review'

    let reviewDiv = document.createElement('div')
        reviewDiv.className = 'form-group'

    let nickNameArea = document.createElement('input')
        nickNameArea.className = 'form-control'
        nickNameArea.id = 'review-nickname'
        nickNameArea.setAttribute("placeholder", "Create a nickname");

    let userArea = document.createElement('input')
        userArea.className = 'form-control'
        userArea.id = 'review-user'
        userArea.setAttribute("placeholder", "Create a user_id");

    // let productArea = document.createElement('input')
    //     productArea.className = 'form-control'
    //     productArea.id = 'review-product'
    //     productArea.setAttribute("placeholder", "Create a product_id");
    
    let star_ratingVar = document.createElement('input')
        star_ratingVar.className = 'form-control'
        star_ratingVar.id = 'review-rating'
        star_ratingVar.setAttribute("placeholder", "Create start_rating");

    let reviewArea = document.createElement('textarea')
        reviewArea.className = 'form-control'
        reviewArea.id = 'review-content'
        reviewArea.setAttribute("placeholder", "Write your comment here...");

    let reviewInput = document.createElement('input')
    reviewInput.type = 'submit'
    reviewInput.className = 'btn btn-primary'
    formContainer.innerHTML = ''
    formContainer.append(reviewForm)
    reviewForm.append(reviewDiv)
    reviewDiv.append(nickNameArea)
    reviewDiv.append(reviewArea)
    reviewDiv.append(star_ratingVar)
    // reviewDiv.append(productArea)
    reviewDiv.append(userArea)



    reviewDiv.append(reviewInput)
    mainBody.append(formContainer)
    reviewForm.addEventListener('submit', (event) => {
        event.preventDefault()
        let newNickName = event.target['review-nickname'].value
        let newReviewContent = event.target['review-content'].value
        let newuser = parseInt(event.target['review-user'].value)
        // let newproduct = parseInt(event.target['review-product'].value)
        let newRating = parseInt(event.target['review-rating'].value)



        console.log(`Nickname: ${newNickName}`)
        console.log(`Content: ${newReviewContent}`)
        console.log(`User: ${newuser}`)
        console.log(`rating: ${newRating}`)
        console.log(`product id: ${product.id}`)



    fetch(`http://localhost:3000/reviews`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                content: newReviewContent,
                nickname: newNickName,
                user_id: newuser,
                product_id: product.id,
                star_rating: newRating

            })
        })
        .then(res => res.json())
        .then((productPOJO) => {
            showTheProductPage(productPOJO)
        })
        event.target.reset()
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
    





























