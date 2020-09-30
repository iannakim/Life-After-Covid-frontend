


let ProductSelectedToAddToCart = (event) => {

    if (valueSelectedFromQuantity == null){
        valueSelectedFromQuantity == 1
    }

    fetch(`http://localhost:3000/addProducts`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            cart_id: currentCart.id,
            product_id: globalProduct.id,
            quantity: valueSelectedFromQuantity
        })
    })

    .then(res => res.json())
    .then((addedProduct) => {
        console.log(addedProduct)
        renderCartPage(addedProduct)



        // console.log('This is a list of all added products:')
        // console.log(addedProduct)
        // console.log(currentCart)
        // add logic for the cart count at top in here
        // renderCartPage
    })
}



let cartNav = document.querySelector('#cart')
// let mainCartContainer = document.querySelector('div.cart-holder')  
cartNav.addEventListener('click', () => {
    renderCartPage()
})







