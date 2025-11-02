console.log("---- ---- ----")
let day1Burnt = 400
let day1Intake = 1500
let day2Burnt = 450
let day2Intake = 1800
let day3Burnt = 300
let day3Intake = 1600
let day4Burnt = 500
let day4Intake = 2000

let baseCalorieBurn = 1500

let sd = ""
function calculateSurplusDeficit (day , dayBurnt , dayIntake , baseCalorieBurn){
  let daySurplus = dayBurnt - (dayIntake + baseCalorieBurn)
  if ( daySurplus < 0 ){
    sd = "Deficit:"
  } else {
    sd = "Surplus:"
  }
  return daySurplus
}


let day1 = calculateSurplusDeficit ("Day 1" , day1Burnt , day1Intake , baseCalorieBurn)
console.log("Day 1:" , sd , day1 )

let day2 = calculateSurplusDeficit ("Day 2" , day2Burnt , day2Intake , baseCalorieBurn)
console.log("Day 2:" , sd , day2 )

let day3 = calculateSurplusDeficit ("Day 3" , day3Burnt , day3Intake , baseCalorieBurn)
console.log("Day 3:" , sd , day3)

let day4 = calculateSurplusDeficit ("Day 4" , day4Burnt , day4Intake , baseCalorieBurn)
console.log("Day 4:" , sd , day4 )


console.log("---- ---- ----")

/*
function totalBurnt(){
  return day1Burnt + day2Burnt + day3Burnt + day4Burnt
}
let tb = totalBurnt()
console.log("total Calorie Burn: " + tb)
*/


function totalBurnt(day1Burnt , day2Burnt , day3Burnt , day4Burnt){
  return day1Burnt + day2Burnt + day3Burnt + day4Burnt
}

let tb = totalBurnt(day1Burnt , day2Burnt , day3Burnt , day4Burnt)

console.log("Total Calories Burnt:" , tb)


console.log("---- ---- ----")

function totalIntake(day1Intake , day2Intake , day3Intake , day4Intake){
 return day1Intake + day2Intake + day3Intake + day4Intake
}

let ti = totalIntake(day1Intake , day2Intake , day3Intake , day4Intake)

console.log("Total Calories Intake:" , ti)

console.log("---- ---- ----")

function totalSurplus(totalBurnt , totalIntake , baseCalorieBurn){
  return (totalBurnt - (totalIntake + (4 * baseCalorieBurn)))
}

let ts = totalSurplus(tb , ti, baseCalorieBurn)
console.log("Total Surplus/Deficit:" , ts)


console.log("---- ---- ----")

let standingGoalAwards = ""
function generateWeeklySummary(totalBurnt , totalIntake , totalSurplus ){

  if ( totalBurnt > 1000){
    standingGoalAwards = "Congratulations! You have kept moving throughout. Keep it up!"
  } else if ( totalBurnt < 1000){
    standingGoalAwards = "No Award yet"
  }
  return "Total Calories Burnt: " + totalBurnt + "\nTotal Calories Intake: " + totalIntake + "\nTotal Surplus/Deficit: " + totalSurplus
}

// or let weeklySummary = "Total Calories Burnt: " + totalBurnt + "\nTotal Calories Intake: " + totalIntake + "\nTotal Surplus/Deficit: " + totalSurplus
//        return weeklySummary

let weeklysummary = generateWeeklySummary(tb , ti , ts)

console.log("Weekly Summary:" + "\n"+ weeklysummary + "\n\n" + "Standing Goal Award: " + standingGoalAwards )

