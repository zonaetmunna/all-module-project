
function updateProductsNumber(product, price, incressing) {
     const productInput = document.getElementById(product + '-number');
     let productNumber = productInput.value;
     if (incressing == true) {
          productNumber = parseInt(productNumber) + 1;
     }
     else if (productNumber > 0) {
          productNumber = parseInt(productNumber) - 1;
     }

     productInput.value = productNumber;

     // update case total
     const productTotal = document.getElementById(product + '-total');
     productTotal.innerText = productNumber * price;

     // 
     calculateTotal();

}


function getInputValue(product) {
     const productInput = document.getElementById(product + '-number');
     const productNumber = parseInt(productInput.value);
     return productNumber;

}


function calculateTotal() {
     const phoneTotal = getInputValue('phone') * 1219;
     const caseTotal = getInputValue('case') * 59;
     const subTotal = phoneTotal + caseTotal;

     const tax = subTotal / 10;

     const totalPrice = subTotal + tax;

     document.getElementById("sub-total").innerText = subTotal;
     document.getElementById("tax-amount").innerText = tax;
     document.getElementById("total-price").innerText = totalPrice;

}





// phone incress decress event handler
document.getElementById("phone-plus").addEventListener('click', function () {
     updateProductsNumber('phone', 1219, true);

});



document.getElementById("phone-minus").addEventListener('click', function () {
     updateProductsNumber('phone', 1219, false);

})




//case increase decress event handler

document.getElementById("case-plus").addEventListener('click', function () {
     updateProductsNumber('case', 59, true);


});

document.getElementById("case-minus").addEventListener('click', function () {

     updateProductsNumber('case', 59, false);

});