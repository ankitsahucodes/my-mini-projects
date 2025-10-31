console.log("Indian Movie Ticket Sales Report")
console.log("--------------------------------")

let movie1TicketsSold = 150
let movie2TicketsSold = 120
let movie3TicketsSold = 80

let movie1TicketPrice = 250
let movie2TicketPrice = 180
let movie3TicketPrice = 150

let movie1Revenue = movie1TicketsSold * movie1TicketPrice 
let movie2Revenue = movie2TicketsSold * movie2TicketPrice 
let movie3Revenue = movie3TicketsSold * movie3TicketPrice

let isMovie1Superhit = movie1Revenue > 50000
let isMovie2Superhit = movie2Revenue > 50000
let isMovie3Superhit = movie3Revenue > 50000

let totalRevenue = movie1Revenue + movie2Revenue + movie3Revenue

console.log("Movie 1: Dilwale Dulhania Le Jayenge")
console.log("- Tickets Sold:" , movie1TicketsSold)
console.log("- Ticket Price:" , "₹" , movie1TicketPrice)
console.log("- Revenue:" , "₹" , movie1Revenue)
console.log("Superhit:" , isMovie1Superhit + "\n")


console.log("Movie 2: Kabhi Khushi Kabhie Gham")
console.log("- Tickets Sold:" , movie2TicketsSold)
console.log("- Ticket Price:" , "₹" , movie2TicketPrice)
console.log("- Revenue:" , "₹" , movie2Revenue)
console.log("Superhit:" , isMovie2Superhit + "\n")

console.log("Movie 3: 3 Idiots")
console.log("- Tickets Sold:" , movie3TicketsSold)
console.log("- Ticket Price:" , "₹" , movie3TicketPrice)
console.log("- Revenue:" , "₹" , movie3Revenue)
console.log("Superhit:" , isMovie3Superhit + "\n")

console.log("Total Revenue:" ,"₹", totalRevenue)