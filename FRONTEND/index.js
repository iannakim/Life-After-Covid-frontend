const categories_url = "http:localhost:3000/categories"

console.log('hii')

test = document.querySelector("div.container")

 fetch("http:localhost:3000/categories")
    .then(res => res.json())
    .then(catPOJO => {
    // const products_array = 
    catPOJO.forEach(function (category) {
        let category_name = category.name;
        console.log(category_name);
        let products = category.products;
        console.log(products);
        products.forEach(function (prod) {
            let proName = prod.name;
            let proImage = prod.image;
            let proPrice = prod.price;
            let proReviews = prod.reviews;

            let proNameDiv = document.createElement('div')
            proNameDiv.className = "name"
            proNameDiv.innerText = proName
            
            let proImageDiv = document.createElement('img')
            proImageDiv.className = "image"
            proImageDiv.src = proImage

            let proPriceDiv = document.createElement('div')
            proPriceDiv.className = "price"
            proPriceDiv.innerText = `Price: $${proPrice}.00`

            test.append(proImageDiv, proNameDiv, proPriceDiv)

            
            
        })
        
    })
    
})
 
