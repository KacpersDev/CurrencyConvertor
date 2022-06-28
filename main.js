let input = require('sync-input');

console.log("Welcome to Currency Converter!");
console.log("1 USD equals  1 USD");
console.log("1 USD equals  113.5 JPY");
console.log("1 USD equals  0.89 EUR");
console.log("1 USD equals  74.36 RUB");
console.log("1 USD equals  0.75 GBP");
console.log("What do you want to do?");
console.log("1-Convert currencies 2-Exit program");
let action = input();
let currencies = [113.5, 0.89, 74.36, 0.75, 1];
if (action === 1 || action === "1") {
    do {
        console.log("What do you want to convert?");
        let convertFrom = input("From: ");
        if (convertFrom.toUpperCase() === "JPY" || convertFrom.toUpperCase() === "EUR" || convertFrom.toUpperCase() === "RUB" 
            || convertFrom.toUpperCase() === "GBP" || convertFrom.toUpperCase() === "USD") {
        } else {
            console.log("Unknown currency");
            console.log("What do you want to convert?");
            do {
                convertFrom = input("From: ");
            } while ((convertFrom.toUpperCase() !== "JPY" || convertFrom.toUpperCase() !== "EUR" || convertFrom.toUpperCase() !== "RUB" 
            || convertFrom.toUpperCase() !== "GBP" || convertFrom.toUpperCase() !== "USD"))
        }
        let convertTo = input("To: ");
        if (convertTo.toUpperCase() === "JPY" || convertTo.toUpperCase() === "EUR" || convertTo.toUpperCase() === "RUB" 
        || convertTo.toUpperCase() === "GBP" || convertTo.toUpperCase() === "USD") {
        } else {
            console.log("Unknown currency");
            console.log("What do you want to convert?");
            do {
                convertFrom = input("From: ");
            } while ((convertFrom.toUpperCase() !== "JPY" || convertFrom.toUpperCase() !== "EUR" || convertFrom.toUpperCase() !== "RUB" 
            || convertFrom.toUpperCase() !== "GBP" || convertFrom.toUpperCase() !== "USD"))
        }
        var amount = input("Amount: ");


        if (amount < 1) {
            console.log("The amount can not be less than 1");
            do {
                var amount = input("Amount: ");
            } while (amount < 1);
        }       
        if (isNaN(amount)) {
        console.log("The amount has to be a number");
        do {
            var amount = input("Amount: ");   
        } while (NaN(amount));
    }
    converter(convertFrom.toUpperCase(), convertTo.toUpperCase(), amount);
    
    } while (action !== 2);
} else if (action === 2 || action === "2") {
    console.log("Have a nice day!");
    return;
} else {
    console.log("Unknown input");
    console.log("What do you want to do?");
    console.log("1-Convert currencies 2-Exit program");
    do {
        action = input();
    } while (action !== 2 || action !== "2" || action !== 1 || action !== "1");
}

function converter(from, to, amount) {
    if (from.toUpperCase() === "USD") {
        switch(to.toUpperCase()) {
            case "JPY":
                var currencyAmount = (amount * currencies[0]);
                console.log("Result: " + amount + " " + from + " equals " + (currencyAmount.toFixed(4)) + " " + to);
            break;
            case "EUR":
                var currencyAmount = (amount * currencies[1]);
                console.log("Result: " + amount + " " + from + " equals " + (currencyAmount.toFixed(4)) + " " + to);
            break;
            case "RUB":
                var currencyAmount = (amount * currencies[2]);
                console.log("Result: " + amount + " " + from + " equals " + (currencyAmount.toFixed(4)) + " " + to);
            break;      
            case "USD":
                var currencyAmount = (amount * currencies[4]);
                console.log("Result: " + amount + " " + from + " equals " + (currencyAmount.toFixed(4)) + " " + to);
            break;  
            case "GBP":
                var currencyAmount = (amount * currencies[3]);
                console.log("Result: " + amount + " " + from + " equals " + (currencyAmount.toFixed(4)) + " " + to);
            break; 
        }
    } else if (from.toUpperCase() === "EUR") {
        switch (to.toUpperCase()) {
            case "JPY":
                var currencyAmount = ((amount / 0.89) * currencies[0]);
                console.log("Result: " + amount + " " + from + " equals " + (currencyAmount.toFixed(4)) + " " + to);
            break;
            case "EUR":
                var currencyAmount = ((amount / 0.89) * currencies[1]);
                console.log("Result: " + amount + " " + from + " equals " + (currencyAmount.toFixed(4)) + " " + to);
            break;
            case "RUB":
                var currencyAmount = ((amount / 0.89) * currencies[2]);
                console.log("Result: " + amount + " " + from + " equals " + (currencyAmount.toFixed(4)) + " " + to);
            break;      
            case "USD":
                var currencyAmount = ((amount / 0.89) * currencies[4]);
                console.log("Result: " + amount + " " + from + " equals " + (currencyAmount.toFixed(4)) + " " + to);
            break;  
            case "GBP":
                var currencyAmount = ((amount / 0.89) * currencies[3]);
                console.log("Result: " + amount + " " + from + " equals " + (currencyAmount.toFixed(4)) + " " + to);
            break; 
        }
    } else if (from.toUpperCase() === "GBP") {
        switch (to.toUpperCase()) {
            case "JPY":
                var currencyAmount = ((amount / 0.75) * currencies[0]);
                console.log("Result: " + amount + " " + from + " equals " + (currencyAmount.toFixed(4)) + " " + to);
            break;
            case "EUR":
                var currencyAmount = ((amount / 0.75) * currencies[1]);
                console.log("Result: " + amount + " " + from + " equals " + (currencyAmount.toFixed(4)) + " " + to);
            break;
            case "RUB":
                var currencyAmount = ((amount / 0.75) * currencies[2]);
                console.log("Result: " + amount + " " + from + " equals " + (currencyAmount.toFixed(4)) + " " + to);
            break;      
            case "USD":
                var currencyAmount = ((amount / 0.75) * currencies[4]);
                console.log("Result: " + amount + " " + from + " equals " + (currencyAmount.toFixed(4)) + " " + to);
            break;  
            case "GBP":
                var currencyAmount = ((amount / 0.75) * currencies[3]);
                console.log("Result: " + amount + " " + from + " equals " + (currencyAmount.toFixed(4)) + " " + to);
            break; 
        }
    } else if (from.toUpperCase() === "JPY") {
        switch (to.toUpperCase()) {
            case "JPY":
                var currencyAmount = ((amount / 113.5) * currencies[0]);
                console.log("Result: " + amount + " " + from + " equals " + (currencyAmount.toFixed(4)) + " " + to);
            break;
            case "EUR":
                var currencyAmount = ((amount / 113.5) * currencies[1]);
                console.log("Result: " + amount + " " + from + " equals " + (currencyAmount.toFixed(4)) + " " + to);
            break;
            case "RUB":
                var currencyAmount = ((amount / 113.5) * currencies[2]);
                console.log("Result: " + amount + " " + from + " equals " + (currencyAmount.toFixed(4)) + " " + to);
            break;      
            case "USD":
                var currencyAmount = ((amount / 113.5) * currencies[4]);
                console.log("Result: " + amount + " " + from + " equals " + (currencyAmount.toFixed(4)) + " " + to);
            break;  
            case "GBP":
                var currencyAmount = ((amount / 113.5) * currencies[3]);
                console.log("Result: " + amount + " " + from + " equals " + (currencyAmount.toFixed(4)) + " " + to);
            break; 
        }
    } else if (from.toUpperCase() === "RUB") {
        switch (to.toUpperCase()) {
            case "JPY":
                var currencyAmount = ((amount / 74.36) * currencies[0]);
                console.log("Result: " + amount + " " + from + " equals " + (currencyAmount.toFixed(4)) + " " + to);
            break;
            case "EUR":
                var currencyAmount = ((amount / 74.36) * currencies[1]);
                console.log("Result: " + amount + " " + from + " equals " + (currencyAmount.toFixed(4)) + " " + to);
            break;
            case "RUB":
                var currencyAmount = ((amount / 74.36) * currencies[2]);
                console.log("Result: " + amount + " " + from + " equals " + (currencyAmount.toFixed(4)) + " " + to);
            break;      
            case "USD":
                var currencyAmount = ((amount / 74.36) * currencies[4]);
                console.log("Result: " + amount + " " + from + " equals " + (currencyAmount.toFixed(4)) + " " + to);
            break;  
            case "GBP":
                var currencyAmount = ((amount / 74.36) * currencies[3]);
                console.log("Result: " + amount + " " + from + " equals " + (currencyAmount.toFixed(4)) + " " + to);
            break; 
        }
    }

}
