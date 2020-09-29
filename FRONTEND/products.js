
const categories_url = "http://localhost:3000/categories"
// const categories_url = `http://localhost:3000/product/${product.id}/reviews`

const mainBody = document.querySelector("div.row.row-cols-1.row-cols-md-2.row-cols-lg-3")

let formContainer = document.querySelector('div#form-container')

let newRating = []
let allProReviews = document.createElement('div')
let proReview = document.createElement('div')

let allReviews = []


// ----------------------  display all products

let showAllProductsByCat = (product) => {

    // --clearing the cart object-- 
    mainCartContainer.innerText = ''

    mainBody.className = 'row row-cols-1 row-cols-md-2 row-cols-lg-3'

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

    productDiv.append(cardHolder, proImage, proName, proPrice)

    // // ----EVENTLISTENER----- // //
    productDiv.addEventListener('click', (evt) => {
        productCurrentlyInDisplay = product
    showTheProductPage(product)
    })

}

// ------------DISPLAY ONE SINGLE PRODUCT --------------------

let showTheProductPage = (product) => {



    globalProduct = product

    mainBody.className = 'none'
    mainBody.innerText = ''

    // ------Outer div card-deck ---------------
    let productDiv = document.createElement('div')
        productDiv.className = "card-deck"
        mainBody.append(productDiv)
    
    // -----card div to hold just the image ---------
    let cardHolder = document.createElement("div")
        cardHolder.className = 'card'
        cardHolder.id = 'image-holder'

    let proImage = document.createElement('img')
        proImage.alt = product.name
        proImage.src = product.image
        proImage.id = 'image_in_glass'

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

        buttonHolder.append(button)
        price.append(priceContent)
        cardHolder.append(proImage)
        contentDescription.append(productDescription)
        cardOfProductInfo.append(reviewProduct)
        reviewContHolder.append(cardOfProductInfo)
        reviewProduct.append(rating, nameOfProduct, price, quantity, buttonHolder, description, contentDescription)
        productDiv.append( cardHolder, reviewContHolder)


    
    // ---------------- REVIEWS HOLDER-------------------
        // ratingAndReview.innerText = ''
        allProReviews.innerText = ''

    
        allProReviews.className = 'reviews'
        let ratingAndReview = document.createElement('h5')
            ratingAndReview.id ='ratingAndReview'
            ratingAndReview.innerText = "Ratings & Reviews"
        allProReviews.append(ratingAndReview)

        singleReviewCard(product)

    // ------------Review Form --------------------------


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

    let star_holder = document.createElement('div')
        star_holder.className = 'star-holder'
        star_holder.id = 'containerOFstars'

    let rateThisProduct = document.createElement('p')
        rateThisProduct.className = 'rateThisProduct'
        rateThisProduct.innerText = 'Rate this product'

    let star_1 = document.createElement('span')
        star_1.className = 'fa fa-star-o'
        star_1.id = 1
    
    let star_2 = document.createElement('span')
        star_2.className = 'fa fa-star-o'
        star_2.id = 2

    let star_3 = document.createElement('span')
        star_3.className = 'fa fa-star-o'
        star_3.id = 3

    let star_4 = document.createElement('span')
        star_4.className = 'fa fa-star-o'
        star_4.id = 4

    let star_5 = document.createElement('span')
        star_5.className = 'fa fa-star-o'
        star_5.id = 5


    let reviewArea = document.createElement('textarea')
        reviewArea.className = 'form-control'
        reviewArea.id = 'review-content'
        reviewArea.setAttribute("placeholder", "Write your comment here...");

    let reviewInput = document.createElement('input')
        reviewInput.type = 'submit'
        reviewInput.className = 'btn btn-primary'
        formContainer.innerHTML = ''

    mainBody.append(reviewForm, allProReviews)

    formContainer.append(reviewForm)
    reviewForm.append(reviewDiv)
    reviewDiv.append(nickNameArea, reviewArea, rateThisProduct, star_holder, userArea)
    star_holder.append(star_1, star_2, star_3, star_4, star_5)


    // ---Event Listener for Stars -----------
    star_holder.addEventListener('click', (rating)=> {
        newRating = rating.target.id
        rating.target.style.color = 'red'
    })

    reviewDiv.append(reviewInput)
    mainBody.append(formContainer)


    // -----Event Listener for button add to cart --------------
    // button.addEventListener('click', () => {
    //     cartFunction()
    // })


    //------FOR CONNECTING FRONTEND BACKEND------------

    reviewForm.addEventListener('submit', (event) => {
        event.preventDefault()
        let newNickName = event.target['review-nickname'].value
        let newReviewContent = event.target['review-content'].value
        let newUser = parseInt(event.target['review-user'].value)
    
    fetch(`http://localhost:3000/reviews`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            content: newReviewContent,
            nickname: newNickName,
            user_id: newUser,
            product_id: product.id,
            star_rating: newRating
        })
    })

    .then(res => res.json())
    .then((reviewPOJO) => {
        slapingReviewOnDom(reviewPOJO)
    })

    // evt.target does not reset the form back to no input for stars
    event.target.reset()
        
    })
    

}

     // ----------------------  DISPLAYS ALL REVIEWS UNDER THE FORM!-------------------------

    // ------div for all reviews  ---------
    let singleReviewCard = (product) => {
        proReview.className = 'single-review'
        displayALLReviews(product)
    }

    // ---------Review Handlers----------------- 
    let displayALLReviews = (product) => {


        const categories_url_review = `http://localhost:3000/products/${product.id}`
        fetch(categories_url_review)
        .then(res => res.json())
        .then(productPOJO => {
            productPOJO.reviews.forEach(slapingReviewOnDom)

        })
        
        proReview.innerText = ''
        // product.reviews.forEach((review)=>{
        //     slapingReviewOnDom(review)
        // })
    }

    let slapingReviewOnDom = (review) => {

        let reviewHolderSection = document.createElement('div')
            reviewHolderSection.className = 'card-deck'
            reviewHolderSection.id = 'review-holder'
        
        let nicknameCard = document.createElement('div')
            nicknameCard.className = 'card'
            nicknameCard.id ='nickname'

        let reviewNickname = document.createElement('p')
            reviewNickname.className = 'mx-auto'
            reviewNickname.innerText = `${review.nickname}`

        let reviewSkeleton = document.createElement('div')
            reviewSkeleton.className = 'card'

        let reviewContent = document.createElement('p')
            reviewContent.className = "card-text"
            reviewContent.innerText = `Comment: ${review.content}`

        let starRating = document.createElement('p')
            starRating.className = 'card-text'
            starRating.id = 'rating-star-content'

        let starCount = document.createElement('small')
            starCount.className = 'text-muted'
            starCount.innerText = `No. of stars: ${review.star_rating}`

        nicknameCard.append(reviewNickname)
        reviewSkeleton.append(starRating, reviewContent)
        starRating.append(starCount)

        reviewHolderSection.append(nicknameCard, reviewSkeleton)
        allProReviews.append(proReview)
        proReview.append(reviewHolderSection)

    }

        

    






























