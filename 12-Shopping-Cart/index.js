console.log("====== Cart Summary ======")

let product1 = "Laptop"
let price1 = 999
let category1 = "Electronics"
let product2 = "Running Shoes"
let price2 = 799
let category2 = "Footwear"
let product3 = "T-shirt"
let price3 = 199
let category3 = "Clothing"

function getTotalPrice (){
  return price1 + price2 + price3
}

let totalPrice = getTotalPrice()
console.log("Total Price before discount: $" + totalPrice + "\n") 




let discount = 0.1

function calculateDiscount(category, price, discount){
  let discountAmount = 0
  let finalPrice = price
  if (category === "Electronics"){
    discountAmount = price * discount
    finalPrice = price - discountAmount

  } else {
    discount = 0
    finalPrice = price - discountAmount
  }
  return [ finalPrice, discount ]
}

console.log("Product 1:" , product1)
console.log("Price of Product 1: $" + price1 )


let p1 = calculateDiscount (category1 , price1 , discount)
console.log("Discount: " + p1[1] + "\n"+ "Final Price of Product 1: $" + p1[0] + "\n")


console.log("Product 2:" , product2)
console.log("Price of Product 2: $" + price2 )

let p2 = calculateDiscount ( category2 , price2 , discount)

console.log("Discount: " + p2[1] + "\n" + "Final Price of Product 2: $" + p2[0] + "\n")

console.log("Product 3:" , product3)
console.log("Price of Product 3: $" + price3 )


let p3 = calculateDiscount(  category3 , price3 , discount)
console.log("Discount: " + p3[1] + "\n" +"Final Price of Product 3: $" + p3[0] + "\n")

let finalTotalPrice = p1[0] + p2[0] + p3[0]
console.log("Total Cart Price: $" + finalTotalPrice)