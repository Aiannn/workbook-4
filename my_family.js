//ex1
// let arr = ['Aian', 'Jack', 'Leo', 'Mbappe']

// for (let i=0; i<arr.length;i++) {
//     console.log(arr[i])
// }

//ex2
// let myScores = [92, 98, 84, 76, 89, 99, 100];
// let yourScores = [82, 98, 94, 88, 92, 100, 100];

// function getAverage(array) {
//     let sum = 0
//     for (let i=0; i<array.length; i++) {
//         sum = sum + array[i]
//     }
//     return sum/array.length
// }

// console.log(getAverage(yourScores))

//ex3
// let lunch = [
//     {item: "Steak Fajitas", price: 9.95},
//     {item: "Chips and Guacamole", price: 5.25},
//     {item: "Sweet Tea", price: 2.79}
// ];

// let subtotal = 0
// for (let i=0; i<lunch.length; i++) {
//     subtotal = subtotal + lunch[i].price 
// }
// let total = subtotal + subtotal*0.08 + subtotal*0.18
// console.log(total)

//ex4
let students = [
    {name: "Zephaniah", scores: [100, 96, 99, 92]},
    {name: "Pursalane", scores: [92, 89, 96, 100, 94]},
    {name: "Siddalee", scores: [86, 72, 92]},
    {name: "Ian", scores: [98, 84, 89, 100, 100, 76]},
    {name: "Elisha", scores: [89, 100]},
    {name: "Ezra", scores: [100, 99, 100, 87]}
];

//find students' average score

let totalOfAverageScores = 0
for (let i=0; i<students.length; i++) {
    let oneStudentTotalScore = 0
    for (let j=0; j<students[i].scores.length; j++) {
        oneStudentTotalScore = oneStudentTotalScore + students[i].scores[j]
        // console.log(students[i].scores[j])
    }
    let oneStudentAvgScore = oneStudentTotalScore/students[i].scores.length

    // console.log(oneStudentAvgScore)
    totalOfAverageScores = totalOfAverageScores + oneStudentAvgScore
    // console.log(totalOfAverageScores)
}

let studentsAverageScore = totalOfAverageScores/students.length
console.log(totalOfAverageScores)
console.log(studentsAverageScore)