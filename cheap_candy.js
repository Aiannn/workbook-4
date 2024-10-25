let products = [
    {product: "Gummy Worms", price: 5.79},
    {product: "Plain M&Ms", price: 2.89},
    {product: "Peanut M&Ms", price: 2.89},
    {product: "Swedish Fish", price: 3.79},
    // TODO: fill the array with 10 candies of various
    // price ranges
];

// populating array with items
// for (let i=0; i<6; i++) {
//     let product = {

//     }
//     product.product = `Name${i}`
//     product.price = `${i+1}`
//     products.push(product)
// }

// console.log(products, products.length)

// function findItemsMoreThan4Dollars(products) {
//     let arr = []
//     for (product of products) {
//         if (product.price > 4) {
//             arr.push(product)
//         }
//     }
//     console.log(arr)
// }
// findItemsMoreThan4Dollars(products)

let arr = []
for (product of products) {
    if (product.product.includes('M&M')) {
        arr.push(product)
    }
}
console.log(arr)
