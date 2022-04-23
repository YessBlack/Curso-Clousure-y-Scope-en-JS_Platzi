//alcancia

const moneyBox = (coins) => {
    var saveCoins = 0
    saveCoins += coins
    console.log(`MoneyBox: ${saveCoins}`)
}

moneyBox(5)
moneyBox(10)

const moneyBoxClosure = () => {
    var saveCoins1 = 0
    const countCoins = (coinsC) => {
        saveCoins1 += coinsC
        console.log(`MoneyBox1: ${saveCoins1}`)
    }
    return countCoins
}

let mymoneyBox = moneyBoxClosure()
mymoneyBox(5)
mymoneyBox(10)
mymoneyBox(5)