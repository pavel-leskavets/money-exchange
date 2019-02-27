// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    let arrayOfCoins = [50, 25, 10, 5, 1];
    let arrayOfNominals = ['H', 'Q', 'D', 'N', 'P'];
    let objOfCoins = {};
    

    for(let i = 0; i < arrayOfCoins.length; i++) {
        if(currency == 0 ) {
            return objOfCoins;
        }
        if(currency > 10000) {
            return {error: "You are rich, my friend! We don't have so much coins for exchange"}
        }
        if(currency / arrayOfCoins[i] >= 1) {
            let count = Math.floor(currency / arrayOfCoins[i]);
            currency = currency - count * arrayOfCoins[i];
            objOfCoins[arrayOfNominals[i]]  = count;
        }
        else if (currency / arrayOfCoins[i] < 1) {
            continue;
        }
    }
    return objOfCoins;
}
