
// menu.map((element) => {
    //     element.item = 'CHANGED'
    // })
    
let menu = [
    {id: 1, item: "Tacos", category: "Meal", price: 12.29},
    {id: 2, item: "Burger", category: "Meal", price: 7.29},
    {id: 3, item: "Salad", category: "Meal", price: 8.29},
    {id: 4, item: "Ice tea", category: "Drink", price: 2.19},
    {id: 5, item: "Coke", category: "Drink", price: 2.29},
];
const newMenu = menu.filter(e => {
    console.log(e.category)
    return e.category === 'Meal'
})

console.log(newMenu, menu)