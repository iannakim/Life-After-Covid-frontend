const categories_url = "http:localhost:3000/categories"

const mainBody = document.querySelector("div#container")

let theProduct;

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


            let productDiv = document.createElement('div')
            productDiv.className = "card"
            mainBody.append(productDiv)

            let proName = document.createElement("h2")
            proName.innerText = prod.name
            productDiv.append(proName)


            let proImage = document.createElement('img')
            proImage.alt = prod.name
            proImage.src = prod.image
            productDiv.append(proImage)


            let proPrice = document.createElement('p')
            proPrice.innerText = `Price: $${prod.price}.00`
            productDiv.append(proPrice)

            productDiv.addEventListener('click', (evt) => {
                console.log(prod)
               // fetch goes here!! SHOW ME THE MONEYYYYYY
            })

            
            
        })
        
    })
    
})
