const mainCartContainer = document.querySelector("div.cart-holder")  
// console.log(mainCartContainer)




let currentCart;

let checkIfCartExists = (user) => {

    let userLoggingIn = user

    fetch("http://localhost:3000/findcart", {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({
            user_id: userLoggingIn.id
        })
    })
        .then(res => res.json())
        .then(cart => {
            if(cart.id){
                console.log(cart, "cart already exists!")
                currentCart = cart;
                //redirect user to homepage
            } else {
                createCartForUser(userLoggingIn)
            }
        })
}


let createCartForUser = (user) => {

    let userLoggingIn = user

    fetch(`http://localhost:3000/cart`, {
        method: "POST",
        headers: { 
            "content-type": "application/json" 
        },
        body: JSON.stringify({
            user_id: userLoggingIn.id
        })
    })
        .then(res => res.json())
        .then((cart) => {
            console.log(cart, "cart created!")
            currentCart = cart;
            //redirect user to homepage
        })

}


// ---------------------------------------------------------------------------


// console.log(mainCartContainer)

//  Once I clicked Cart nav render page gets called 
//  next I will be appending stuff in the DOM to show only on the cart nav page. 




// Template gets created with the renderCartPage function 
// it will be wipe out at the beginning if nothing is render from the fetch 

// first fetch from /carts /:id 
// response = cart 
// cart.add_products   ====> product_id ,     quantity 
// call on product    
// from here call the attributes of the product , image price







let renderCartPage = () => {
    mainBody.innerText = ''


    console.log("Hey this is coming from renderCartPage at cart.js")

    fetch(`http://localhost:3000/carts/${currentCart.id}`)
        .then(res => res.json())
        .then(cart => {
            cart.add_products.forEach((itemInCart)=>{
                displayItemsInCart(itemInCart)
            })
        })

}   




    let basketTitle = document.createElement('h5')
        basketTitle.clasName = 'basket-title'
        basketTitle.innerText = 'My Basket'

    let horizonLine = document.createElement('div')
        horizonLine.id = 'horizontal-line'

    let cardDeck = document.createElement('div')
        cardDeck.className = 'card-deck'

    let productList = document.createElement('div')
        productList.className = 'product-list'

    let singularProduct = document.createElement('div')
        singularProduct.className = 'singular-product'


  //---Slaping information into the DOM-------

  //this can be a function.

  let displayItemsInCart = (item) => {
        let cardGroup = document.createElement('div')
            cardGroup.className = 'card-group'
            cardGroup.id = 'product-info'

        let cardImg = document.createElement('div')
            cardImg.className = 'card'


        let imgTag = document.createElement('img')
            // imgTag.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRcGLtvwxLa0Ns4AudjBgp3LNSM-kpJ9yvh3K4jpcWjXX2y-NEgvB-oyX19dKLM_Rzt2R4Te1g&usqp=CAc'
            imgTag.src = item.product.image


        let cardProdNameQuantity = document.createElement('div')
            cardProdNameQuantity.className = 'card'
        
        let productName = document.createElement('p')
            productName.id = 'product-name'
            // productName.innerText = 'I am Yoda'
            productName.innerText = item.product.name



        let productQuantity = document.createElement('p')
            productQuantity.id = 'product-quantity'
            productQuantity.innerText = `Qty: ${item.quantity}`

        let cardProductPriceRemove = document.createElement('div')
            cardProductPriceRemove.className = 'card'

        let productPrice = document.createElement('p')
            productPrice.id = 'product-price'
            // productPrice.innerText = '$45.87'
            productPrice.innerText = `Price: ${item.product.price}`


        let buttonRemove = document.createElement('button')
            buttonRemove.id = 'product-remove'
            buttonRemove.innerText = 'Remove'
        
        let totalInfo = document.createElement('div')
            totalInfo.className = 'total-info'

        let subtotal = document.createElement('p')
            subtotal.id = 'subtotal'
            subtotal.innerText = "Merchandise Subtotal $ --.00"

        let estimatedTotal = document.createElement('p')
            estimatedTotal.id = 'estimated-total'
            estimatedTotal.innerText = 'Estimated Total: $--.00'

        let checkOut = document.createElement('button')
            checkOut.id = 'check-out'
            checkOut.innerText = 'CHECK OUT'


        totalInfo.append(subtotal, estimatedTotal, checkOut)
        cardProductPriceRemove.append(productPrice, buttonRemove)
        cardProdNameQuantity.append(productName, productQuantity)
        cardImg.append(imgTag)
        cardGroup.append(cardImg, cardProdNameQuantity, cardProductPriceRemove)
        singularProduct.append(cardGroup)
        productList.append(singularProduct)
        cardDeck.append(productList, totalInfo)
        mainBody.append(basketTitle, horizonLine, cardDeck)
        }





// // let cartFunction = () => {
// //     console.log("I am coming from cart.js")
// //     }







