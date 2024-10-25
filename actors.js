let academyMembers = [
    {
    memID: 101,
    name: "Bob Brown",
    films: ["ABob I", "Bob II", "Bob III", "Bob IV"]
    },
    {
    memID: 142,
    name: "Sallie Smith",
    films: ["A Good Day", "A Better Day"]
    },
    {
    memID: 187,
    name: "Fred Flanders",
    films: ["Who is Fred?", "Where is Fred?",
    "What is Fred?", "Why Fred?"]
    },
    {
    memID: 203,
    name: "Bobbie Boots",
    films: ["Walking Boots", "Hiking Boots",
    "ACowboy Boots"]
    },
];

// for (let i=0; i<academyMembers.length; i++) {
//     if (academyMembers[i].memID === 187) {
//         console.log(academyMembers[i])
//         return academyMembers[i]
//     }
// }

// let arr = []
// for (actor of academyMembers) {
//     if (actor.films.length > 3) {
//         arr.push(actor)
//     }
// }
// console.log(arr)

// let arr1 = []
// for (actor of academyMembers) {
//     // console.log(actor.name.substring(0,4))
//     if (actor.name.substring(0, 4) === 'Bob ') {
//         // console.log(actor.name.substring(0,4))
//         // console.log(actor.name)
//         // console.log(actor)
//         arr1.push(actor)
//     }
// }
// console.log(arr1)

let arr = []
for (actor of academyMembers) {
    for (let i=0; i<actor.films.length; i++) {
        if (actor.films[i].startsWith('A')) {
            arr.push(actor)
            break;
             // in order to not go further in movie array,
                                  // since we already catch the actor
        }

    }
}
console.log(arr)

