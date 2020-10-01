let currentCart;
let currentTotal = [];

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


// ------------------------------------ DOM elements
mainBody.innerText = ''
mainBody.className = 'none'

let basketTitle = document.createElement('h5')
    basketTitle.className = 'basket-title'
    basketTitle.innerText = 'My Basket'

let horizonLine = document.createElement('div')
    horizonLine.id = 'horizontal-line'

let cardDeck = document.createElement('div')
    cardDeck.className = 'card-deck-2'

let productList = document.createElement('div')
    productList.className = 'product-list'

let singularProduct = document.createElement('div')
    singularProduct.className = 'singular-product'

let totalInfo = document.createElement('div')
    totalInfo.className = 'total-info'

let subtotal = document.createElement('p')
    subtotal.id = 'subtotal'
    // subtotal.innerText = `Merchandise Subtotal $${currentTotal}.00`


let estimatedTotal = document.createElement('p')
    estimatedTotal.id = 'estimated-total'
    // estimatedTotal.innerText = `Estimated Total $${currentTotal}.00`

let checkOut = document.createElement('button')
    checkOut.className =  'btn btn-danger btn-lg'
    checkOut.id = 'check-out'
    checkOut.innerText = 'CHECK OUT'

productList.append(basketTitle)
totalInfo.append(subtotal, estimatedTotal, checkOut)




let renderCartPage = () => {
    categoryNameh1.innerText = ''
    mainBody.className = ''


    while (singularProduct.hasChildNodes()) {
        singularProduct.removeChild(singularProduct.lastChild);
    }

    if (!currentCart){
        alert("PEASE LOG IN FIRST! :D")
        showLoginForm()
        currentTotal = [0];
    }
    else{
    fetch(`http://localhost:3000/carts/${currentCart.id}`)
        .then(res => res.json())
        .then(cart => {
            currentTotal = [0];
            cart.add_products.forEach((itemInCart)=>{
                displayItemsInCart(itemInCart)

            let totalPriceOfItem = (itemInCart.quantity * itemInCart.product.price)
            currentTotal.push(totalPriceOfItem)

            let sum = currentTotal.reduce((a, b) => {
                return a + b;
              });
            subtotal.innerText = `Merchandise Subtotal $${sum}.00`
            estimatedTotal.innerText = `Estimated Total $${sum}.00`
            })
        })   
    }   
}



//----------------------------- display current items in cart

let displayItemsInCart = (item) => {
    let cardGroup = document.createElement('div')
        cardGroup.className = 'card-group'
        cardGroup.id = 'product-info'

    let cardImg = document.createElement('div')
        cardImg.className = 'card'

    let imgTag = document.createElement('img')
        imgTag.src = item.product.image
        imgTag.alt = item.product.name

    let cardProdNameQuantity = document.createElement('div')
        cardProdNameQuantity.className = 'card'
    
    let productName = document.createElement('p')
        productName.id = 'product-name'
        productName.innerText = item.product.name


    let productQuantity = document.createElement('p')
        productQuantity.id = 'product-quantity'
        productQuantity.innerText = `Qty: ${item.quantity}`

    let cardProductPriceRemove = document.createElement('div')
        cardProductPriceRemove.className = 'card'

    let productPrice = document.createElement('p')
        productPrice.id = 'product-price'
        productPrice.innerText = `Unit Price: $${item.product.price}.00`

    let buttonRemove = document.createElement('button')
        buttonRemove.id = 'product-remove'
        buttonRemove.className = 'btn btn-secondary'
        buttonRemove.innerText = 'Remove'
    


    // let totalPriceOfItem = (item.quantity * item.product.price)
    // currentTotal += totalPriceOfItem




    cardProductPriceRemove.append(productPrice, buttonRemove)
    cardProdNameQuantity.append(productName, productQuantity)
    cardImg.append(imgTag)
    cardGroup.append(cardImg, cardProdNameQuantity, cardProductPriceRemove)
    singularProduct.append(cardGroup)
    productList.append(singularProduct)
    cardDeck.append(productList, totalInfo)
    mainBody.append(cardDeck)

    
    
    buttonRemove.addEventListener('click', (event)=>{

        fetch(`http://localhost:3000/removeitem`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: item.id
            })
        })
        .then(resp => {renderCartPage()});
        currentTotal = 0
    })
}




    





