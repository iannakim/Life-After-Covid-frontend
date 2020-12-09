


let ProductSelectedToAddToCart = (event) => {

    if (valueSelectedFromQuantity == null){
        valueSelectedFromQuantity = 1
    }

    fetch(`https://enigmatic-sands-23765.herokuapp.com/addProducts`, {
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








