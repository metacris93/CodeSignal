const reducer = (accumulator, currentValue) => accumulator + currentValue

function isAdmissibleOverpayment(prices, notes, x)
{
    const regex = /([\d\.?]+|Same)\%?\s(higher|lower)?/ig
    let originalPrice = 0
    let higher = []
    let lower = []
    let price = 0
    for(const [i,v] of prices.entries())
    {
      price = Number(prices[i])
      const str = notes[i].match(regex).join().toLowerCase()
      const arr = str.split("% ")
      if (arr.length > 1)
      {
        const value = Number(arr[0])
        const indicator = arr[1]
        switch(indicator)
        {
          case "higher":
            originalPrice = price / (1 + (value / 100))
            higher.push(originalPrice * (value / 100))
            break
          case "lower":
            originalPrice = price / (1 - (value / 100))
            lower.push(originalPrice * (value / 100))
            break
        }
      }
    }
    const high = higher.length > 0 ? higher.reduce(reducer) : 0
    const low = lower.length > 0 ? lower.reduce(reducer) : 0
    return (high - low) <= x
}
const prices = [40, 40, 40, 40]
const notes = ["0.001% higher than in-store",
 "0.0% lower than in-store",
 "0.0% higher than in-store",
 "0.0% lower than in-store"]
const x = 0
const isAdmissible = isAdmissibleOverpayment(prices, notes, x)
console.log(isAdmissible)
