function updateproductNumber(product, price, isIncreasing) {
    const productInput = document.getElementById(product + '-number');
    let productNumber = productInput.value;
    if (isIncreasing == true) {
        productNumber = parseInt(productNumber) + 1;
    }
    else if (productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productNumber * price;
    calculateTotal();
}

function calculateTotal() {
    const phoneInput = document.getElementById('phone-number');
    const phoneNumber = parseInt(phoneInput.value);
    const phoneTotal = phoneNumber * 1219;
    const caseInput = document.getElementById('case-number');
    const caseNumber = parseInt(caseInput.value);
    const caseTotal = caseNumber * 59;
    console.log(caseTotal);
    const subTotal = phoneTotal + caseTotal;
    const taxAmount = subTotal / 10;
    const totalPrice = subTotal + taxAmount;
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = taxAmount;
    document.getElementById('total-price').innerText = totalPrice;

}

document.getElementById('phone-plus').addEventListener('click', function () {
    updateproductNumber('phone', 1219, true);
})

document.getElementById('phone-minus').addEventListener('click', function () {
    updateproductNumber('phone', 59, false);
})

document.getElementById('case-plus').addEventListener('click', function () {
    updateproductNumber('case', 59, true);
})

document.getElementById('case-minus').addEventListener('click', function () {
    updateproductNumber('case', 59, false);
})

