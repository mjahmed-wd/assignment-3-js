// Question 1 Ans

function kilometerToMeter(kilometer) {
    parseFloat(kilometer) //convertiong to a float number for bypassing errors
    if (isNaN(kilometer)) {
        return "Input has to be a number"
    } else if (kilometer < 0) {
        return "Kilometer can not be negative"
    } else {
        return kilometer * 1000
    }
}




// Question 2 Ans

function budgetCalculator(clockPrice, mobilePrice, laptopPrice) {
    var clockCost = 50 * clockPrice
    var mobileCost = 100 * mobilePrice
    var laptopCost = 500 * laptopPrice
    var totalCost = clockCost + mobileCost + laptopCost
    return totalCost
}



// Qeustion 3 Ans

function hotelCost(days) {
    var bill = 0
    parseFloat(days)
    days = Math.ceil(days) //Half or fraction day will be counted as full day while making bill
    if (isNaN(days)) {
        return "Input has to be a number"
    } else if (days < 0) {
        return "Days can not be negative"
    } else {
        if (days <= 10) {
            bill = bill + days * 100
        } else if (days > 10 && days <= 20) {

            bill = bill + 10 * 100 + (days - 10) * 80
        } else {
            bill = bill + 10 * 100 + 10 * 80 + (days - 20) * 50
        }
    }
    return bill
}





// Question 4 Ans

function megaFriend(name) {
    let element = ""
    let longest = ""
    for (let i = 0; i < name.length; i++) {
        element = name[i]; // Taking the Name
        if (element.length > longest.length) { // Checking the length
            longest = element;
        }
    }
    return longest;
}


// console.log(kilometerToMeter("ok"))
// console.log(budgetCalculator(5, 6, 7))
// console.log(hotelCost("15"))
// console.log(megaFriend(["Sakib", "Tamim", "Mushfiqur", "Mahmudullah", "Mashrafi"]))