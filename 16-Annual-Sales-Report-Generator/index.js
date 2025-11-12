console.log("Annual Sales Report")
console.log("---- ---- ----")
console.log("1.1")
console.log("---- ---- ----")

const salesData = [
  {
    name: "Rajesh",
    location: "Mumbai",
    q1Sales: 120000,
    q2Sales: 145000,
    q3Sales: 130000,
    q4Sales: 155000
  },{
    name: "Sneha",
    location: "Delhi",
    q1Sales: 90000,
    q2Sales: 110000,
    q3Sales: 95000,
    q4Sales: 120000
  },{
    name: "Arun",
    location: "Chennai",
    q1Sales: 100000,
    q2Sales: 125000,
    q3Sales: 115000,
    q4Sales: 135000
  },{
    name: "Kavita",
    location: "Kolkata",
    q1Sales: 85000,
    q2Sales: 95000,
    q3Sales: 88000,
    q4Sales: 105000
  },{
    name: "Sanjay",
    location: "Mumbai",
    q1Sales: 110000,
    q2Sales: 135000,
    q3Sales: 120000,
    q4Sales: 140000
  },{
    name: "Divya",
    location: "Chennai",
    q1Sales: 95000,
    q2Sales: 120000,
    q3Sales: 110000,
    q4Sales: 130000
  }
]

console.log(salesData)

console.log("---- ---- ----")
console.log("1.2")
console.log("---- ---- ----")



for ( let i = 0 ; i < salesData.length ; i++){
  let numOfQuarter = 4
  let total = salesData[i].q1Sales + salesData[i].q2Sales + salesData[i].q3Sales + salesData[i].q4Sales

  salesData[i].totalSales = total
  salesData[i].averageSales = salesData[i].totalSales / numOfQuarter
  }

console.log(salesData)

console.log("---- ---- ----")
console.log("1.3")
console.log("---- ---- ----")
console.log("===== Performance Report =====\n")

for ( let i = 0 ; i < salesData.length ; i++ ){
  generateReport(salesData[i])
}

function generateReport (data){
  console.log("Name: " + data.name + "\nLocation: " + data.location + "\nTotal Sales: " + data.totalSales + "\nAverage Sales: " + data.averageSales + "\nPerformance Grade: " + getGrade(data.averageSales) + "\n------")
}

function getGrade(avgSales){
  if (avgSales >= 140000){
    return "Top Performer"
  } else if ( avgSales >= 120000 && avgSales < 140000){
    return "Medium Performer"
  } else {
    return "Low Performer"
  }
}

console.log("---- ---- ----")
console.log("1.4")
console.log("---- ---- ----")

console.log("===== Annual Sales Report =====\n")



function best(data){
  let highestSale = data[0]
  for (let i = 1 ; i < data.length ; i++){
    if (data[i].totalSales > highestSale.totalSales){
      highestSale = data[i]
    }

  }
  return highestSale
}
console.log("------\nBest Performer: \n------\n")


let x = best(salesData)

console.log("Name: " + x.name + "\nLocation: " + x.location + "\nTotalSales by Best Performer: " + x.totalSales)

console.log("\n------\nTop Performers:\n------")

function topPerformer (data){
for ( let i = 0 ; i < data.length ; i++){
  let count = 0
  if (data[i].averageSales >= 137000 ){
    count += 1
  }
  return count
}
}

console.log("Total No. of Top Performers: " + topPerformer(salesData))

for (let i = 0; i < salesData.length ; i++){
  generateTopPerformer(salesData[i])
}

function generateTopPerformer(data){
  if (data.averageSales >= 137000){
  console.log("Name: " + data.name + "\nLocation: " + data.location + "\nTotal Sales: " + data.totalSales + "\n") 
}
}

console.log("------\nSales Averages\n------")

function averageSalesinEveryQ(data , qno){
  let totalSalesQ = 0
  let totalPerson = 6
  for (let i = 0 ; i < data.length ; i++){
    totalSalesQ += data[i][qno]
  }
  return totalSalesQ / totalPerson
}



let q1 = averageSalesinEveryQ (salesData , "q1Sales")

let q2 = averageSalesinEveryQ (salesData , "q2Sales")

let q3 = averageSalesinEveryQ (salesData , "q3Sales")

let q4 = averageSalesinEveryQ (salesData , "q4Sales")

console.log("Q1 Average Sales: " + q1)
console.log("Q2 Average Sales: " + q2)
console.log("Q3 Average Sales: " + q3)
console.log("Q4 Average Sales: " + q4)

function totalSalesSum(salesData){
  let sum = 0
  for ( let i = 0 ; i < salesData.length ; i++){
    sum  += salesData[i].totalSales
  }
  return sum
}

let totalAverageSales = q1 + q2 + q3 + q4


console.log("------")
console.log("Total Sales: " + totalSalesSum(salesData))
console.log("Total Average Sales: " + totalAverageSales)
console.log("------")

