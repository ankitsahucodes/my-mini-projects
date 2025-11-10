console.log("Product Data Analyzer")
console.log("---- ---- ----")
console.log("1.1")
console.log("---- ---- ----")


const productsData = [
  {
    id: 1,
    productName: "Laptop",
    price2021: 19999,
    price2022: 18999,
    price2023: 15090,
    brand: "Dell",
    productRating: 5
  },
  {
    id: 2,
    productName: "Smartphone",
    price2021: 18999,
    price2022: 17999,
    price2023: 16999,
    brand: "Samsung",
    productRating: 4
  },
  {
    id: 3,
    productName: "Smartwatch",
    price2021: 36999,
    price2022: 32999,
    price2023: 29999,
    brand: "Apple",
    productRating: 4
  }
];

function printDetailCard(id){
  let product = printDetailusingid(id)
  console.log("===== Details Card for " + product.productName + " =====\n" + "ID : " + product.id + "\n------\nDetails: \n------\n" + "Product name: " + product.productName + "\nPrice in 2021: " + product.price2021 + "\nPrice in 2022: " + product.price2022 + "\nPrice in 2023: " + product.price2023 + "\nBrand: " + product.brand + "\nProduct Rating: " + product.productRating + "\n" + "------ ------ ------\n")
}

function printDetailusingid(id){
  for ( let i = 0 ; i < productsData.length ; i++){
    if ( productsData[i].id === id){
      return productsData[i]
    }
  }
}

printDetailCard(1)
printDetailCard(2)
printDetailCard(3)

console.log("---- ---- ----")
console.log("1.2")
console.log("---- ---- ----")

function getPricesGreaterThanCutOff (yearPrice , minimumPrice){
  let result = []
  for ( let  i = 0 ; i < productsData.length ; i++){
    if (productsData[i][yearPrice] >= minimumPrice){
      result.push(productsData[i])
    }
  }
  return result
}

console.log("Products with price in 2021 >= 25000")
console.log( getPricesGreaterThanCutOff ("price2021" , 25000))

console.log("Products with price in 2023 >= 16000")
console.log( getPricesGreaterThanCutOff ("price2023" , 16000))

console.log("---- ---- ----")
console.log("1.3")
console.log("---- ---- ----")


for (let i = 0 ; i < productsData.length ; i++){
  let totalYear = 3
  let totalPrice = productsData[i].price2021 + productsData[i].price2022 + productsData[i].price2023

productsData[i].totalPrice = totalPrice
productsData[i].avgPrice = productsData[i].totalPrice / totalYear
}


function printProductsAboveAverage(avg){
  for ( let i = 0 ; i < productsData.length ; i++){
    if (productsData[i].avgPrice > avg){
      console.log("Average Price of 3 years for " + productsData[i].productName + " is " + productsData[i].avgPrice )
  }
}
}
printProductsAboveAverage(12000)

console.log("---- ---- ----")
console.log("1.4")
console.log("---- ---- ----")

function getHighestAveragePrice(data){
  let highestAvgPrice = data[0].avgPrice
  let highestAvgProduct = data[0]
  for ( let i = 1 ; i < data.length ; i++){
    if ( data[i].avgPrice > highestAvgPrice){
      highestAvgPrice = data[i].avgPrice
      highestAvgProduct = data[i]
    }
  }
  return highestAvgProduct
}

console.log(getHighestAveragePrice(productsData))