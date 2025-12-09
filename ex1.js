
let totalPrice = "5.99"
let totalquantity = "3 bags"

priceFloat = parseFloat(totalPrice)
quantityInt = parseInt(totalquantity)

chipsPrice = priceFloat / quantityInt
console.log("Each bag of chips costs $" + chipsPrice)

console.log("Each bag of chips costs $" + chipsPrice.toFixed(2))


