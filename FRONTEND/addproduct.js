


let ProductSelectedToAddToCart = (event) => {

    if (valueSelectedFromQuantity == null){
        valueSelectedFromQuantity = 1
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
    })
}








