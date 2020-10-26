// Const var's for calculator .

const balance = document.getElementById('balance');
const money_plus = document.getElementById('money-plus');
const money_minus = document.getElementById('money-minus');
const list = document.getElementById('list');
const form = document.getElementById('form');
const text = document.getElementById('text');
const amount = document.getElementById('amount');

// Local storage const.

const localStorageTransactions = 
JSON.parse(localStorage.getItem('transactions')); 

// Local storage transactions. 

let transactions = localStorage.getItem('transactions')
!== null ? localStorageTransactions : [];

// Add transaction function.

function addTransaction (e) {
    e.preventDefault();
    if ( text.value.trim() === '' || amount.value.trim() === '' ) { // trim removes whitespace from the strings
        alert('Please add a text and amount') // alert displays a alert popup with text inside
    } else {
        const transaction = {
            id: generateID(), 
            text: text.value, 
            amount: +amount.value
        } 
        transactions.push(transaction)
    }
};

// Generate Id, throws random id, between 0 - 1000000.
// The Math.floor() function returns the largest integer less than or equal to a given number.
// The Math.random() function returns a floating-point, pseudo-random number in the range 0 to less than 1 (inclusive of 0, but not 1) with approximately uniform distribution over that range — which you can then scale to your desired range. The implementation selects the initial seed to the random number generation algorithm; it cannot be chosen or reset by the user.

function generateID() {
    return Math.floor(Math.random() * 1000000)
};


// add transaction to the list.

function addTransactionList(transaction) {
    const sign = transaction.amount < 0 ? '-' : '+' // Get sign.
    const item = document.createElement('li')
        item.classList.add(transaction.amount < 0 ? 'minus' : 'plus') // Add class based on the value of amount.
        //The Math.abs() function returns the absolute value of a number, that is.
        item.innerHTML = `${transaction.text} <span>${sign}${math.abs(transaction.amount)}</span> 
        <button class="delete-btn" onclick="removeItem(${transaction.id})">x</button>` // The Element property innerHTML gets or sets the HTML or XML markup contained within the element.
        list.appendChild(item) // appendChild() moves it from its current position to the new position (there is no requirement to remove the node from its parent node before appending it to some other node).
    };


