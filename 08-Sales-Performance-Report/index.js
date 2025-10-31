console.log("------------------------")
console.log("Sales Performance Report")
console.log("------------------------")

let salesPerson1 = "Rahul"
let salesPerson2 = "Priya"
let salesPerson3 = "Amit"

let rahulSalesTarget = 100
let priyaSalesTarget = 200
let amitSalesTarget = 150
let rahulActualSales = 85
let priyaActualSales = 180
let amitActualSales = 120

let rahulSalesPercentage = ( rahulActualSales/rahulSalesTarget ) * 100

let priyaSalesPercentage = ( priyaActualSales / priyaSalesTarget ) * 100

let amitSalesPercentage = ( amitActualSales / amitSalesTarget ) * 100


let rahulBonus = ""
let rahulPerformance = ""
if ( rahulSalesPercentage >= 90 ){
  rahulPerformance = "Higher Performer"
  rahulBonus = 0.2
} else if ( rahulSalesPercentage >=70 ){
  rahulPerformance = "Average Performer"
  rahulBonus = 0.1
} else if ( rahulSalesPercentage < 70 ){
  rahulPerformance = "Low Performer"
  rahulBonus = 0
}



let priyaBonus = ""
let priyaPerformance = ""
if ( priyaSalesPercentage >= 90 ){
  priyaPerformance = "Higher Performer"
  priyaBonus = 0.2
} else if ( priyaSalesPercentage >=70 ){
  priyaPerformance = "Average Performer"
  priyaBonus = 0.1
} else if ( priyaSalesPercentage < 70 ){
  priyaPerformance = "Low Performer"
  priyaBonus = 0
}



let amitBonus = ""
let amitPerformance = ""
if ( amitSalesPercentage >= 90 ){
  amitPerformance = "Higher Performer"
  amitBonus = 0.2
} else if ( amitSalesPercentage >=70 ){
  amitPerformance = "Average Performer"
  amitBonus = 0.1
} else if ( amitSalesPercentage < 70 ){
  amitPerformance = "Low Performer"
  amitBonus = 0
}



let rahulBonusAmount = rahulActualSales * rahulBonus
let priyaBonusAmount = priyaActualSales * priyaBonus
let amitBonusAmount = amitActualSales * amitBonus


console.log(salesPerson1)
console.log("Sales Target:" , rahulSalesTarget , "units")
console.log("Units Sold:" , rahulActualSales , "units")
console.log("Sales Percentage:" , rahulSalesPercentage + "%")
console.log("Performance:" , rahulPerformance)
console.log("Bonus Amount:" , rahulBonusAmount , "units" , "\n")


console.log(salesPerson2)
console.log("Sales Target:" , priyaSalesTarget , "units")
console.log("Units Sold:" , priyaActualSales , "units")
console.log("Sales Percentage:" , priyaSalesPercentage + "%")
console.log("Performance:" , priyaPerformance)
console.log("Bonus Amount:" , priyaBonusAmount , "units" , "\n")



console.log(salesPerson3)
console.log("Sales Target:" , amitSalesTarget , "units")
console.log("Units Sold:" , amitActualSales , "units")
console.log("Sales Percentage:" , amitSalesPercentage + "%")
console.log("Performance:" , amitPerformance)
console.log("Bonus Amount:" , amitBonusAmount , "units")