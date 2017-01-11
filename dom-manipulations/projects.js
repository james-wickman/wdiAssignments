var productsTable = document.getElementById('productsTable');
var redRadio = document.getElementById('red-radio');
var blueRadio = document.getElementById('blue-radio');
var yellowRadio = document.getElementById('yellow-radio');
var greenRadio = document.getElementById('green-radio');
var eBody = document.querySelector('body');
var totalList = document.querySelectorAll('tr');
var totalSales = document.getElementById('total-sales');
var totalItems = document.getElementById('total-items');
var priceInput = document.getElementById('priceInput');
var itemTotal = 0;
var salesTotal = 0;
totalItems.innerHTML = "Total Rows: " + itemTotal;
totalSales.innerHTML = "Total Amount: " + (salesTotal).toFixed(2);
var eTableRows = document.querySelectorAll('tr');
var eTableRow_td = document.querySelectorAll('tr td');
var existingList = [];
var isthis = -2;
// defining the storage aspect
var autoFillList = [];
var currentItemList = [];
var myList = localStorage.getItem("myList");
var counter = 0;
var adjuster = 0;

// for (var i = 0; i < eTableRow_td.length; i += 3) {
//     existingList.push({
//         name: eTableRow_td[i].innerText,
//         quantity: eTableRow_td[i+1].innerText,
//         price: eTableRow_td[i+2].innerText
//     });
// }
for (var tr = 1;tr < eTableRows.length; tr++) {
    for (var i = (tr * 2) + isthis;i < tr * 3; i += 3){
         existingList.push({
            name: eTableRow_td[i].innerText,
            quantity: eTableRow_td[i+1].innerText,
            price: eTableRow_td[i+2].innerText,
            label: eTableRow_td[i].innerText
        });
    }
    isthis += 1;
}
// setting the storage aspect
storedList  = [];
if (myList == null){
    for (i = 0; i < existingList.length; i++){
    autoFillList.push(existingList[i]);
    }
} else {
    autoFillList = JSON.parse(myList);
}

var aProducts = existingList;
itemTotal = aProducts.length;
console.log(autoFillList);

for (var i = 0; i < aProducts.length; i++) {
    salesTotal += aProducts[i].price * aProducts[i].quantity;
}

totalItems.innerHTML = "Total Rows: " + itemTotal;
totalSales.innerHTML = "Total Amount: " + (salesTotal).toFixed(2);

function red_background() {
    if (redRadio.checked){
        eBody.style.backgroundColor = "red";
    }
    else if (blueRadio.checked) {
        eBody.style.backgroundColor = "blue";
    }
    else if (yellowRadio.checked) {
        eBody.style.backgroundColor = "yellow";
    }
    else if (greenRadio.checked) {
        eBody.style.backgroundColor = "green";
    }
}
function forTotalList(input) {
    for (var i = 0; i < input.length; i++) {
        if ((i + 2)%2 == 0 && i != 0) {
            input[i].style.backgroundColor = "lightgrey";
        } 
        else if ((i + 2)%2 != 0) {
            input[i].style.backgroundColor = "lightblue";
        }
    }
}
var goingThough = function(autoFill) {
    adjuster = 0;
    for (arrayNum = 0; arrayNum < autoFill.length; arrayNum++) {
        counter = 0;
        for ( i = 0; i < autoFill.length; i ++) {

            while (i !== arrayNum - adjuster && i < autoFill.length) {
    
                if (autoFill[arrayNum - adjuster].name == autoFill[i].name) {
                    counter += 1;
                } i++
            } 
            if(counter != 0) {
                settingKey = arrayNum-adjuster;
                // calling a function to remove it and return
                removeDuplicates(autoFill, settingKey);
                adjuster += 1
            }
        }
    }
    console.log(autoFillList.length);
}
forTotalList(totalList);
function addProduct() {
    var productName = document.getElementById('nameInput');
    var productQuantity = document.getElementById('quantityInput');
    var productPrice = document.getElementById('priceInput');
    var labelName = document.getElementById('nameLabel');
    var labelQuantity = document.getElementById('quantityLabel');
    var labelPrice = document.getElementById('priceLabel');
    var eP = document.createElement('p');
    currentObject = {
        'name': productName.value,
        'quantity': productQuantity.value,
        'price': productPrice.value,
        'label': productName.value
    };
    aProducts.push(currentObject);
 
    for (var i = aProducts.length-1; i < aProducts.length; i++) {
        labelName.innerText = aProducts[i]['name'];
        labelQuantity.innerText = aProducts[i]['quantity'];
        labelPrice.innerText = aProducts[i]['price'];
    }
    for (var i = aProducts.length - 1; i < aProducts.length; i++) {
        var eTr = document.createElement('tr');
        var eTd = document.createElement('td');
        var eTd2 = document.createElement('td');
        var eTd3 = document.createElement('td');
        eTd.innerText = aProducts[i].name;
        eTd2.innerText = aProducts[i].quantity;
        eTd3.innerText = aProducts[i].price;
        eTr.appendChild(eTd);
        eTr.appendChild(eTd2);
        eTr.appendChild(eTd3);
        productsTable.appendChild(eTr);
        salesTotal += aProducts[i].price * aProducts[i].quantity;

        //adding current item to the autofill list.
        autoFillList.push(aProducts[aProducts.length-1]);
    }
    var totalList = document.querySelectorAll('tr');
    forTotalList(totalList);
    var rows = totalList.length - 1;
    totalItems.innerHTML = "Total Rows: " + rows;
    totalSales.innerHTML = "Total Amount: " + (salesTotal).toFixed(2);

    //restoring info
    localStorage.setItem("myList",JSON.stringify(autoFillList));
    var settingKey = 0;
    goingThough(autoFillList);
}

function removeDuplicates(autoList, theKey) {
    autoList.splice(theKey, 1);
}
goingThough(autoFillList);

//autocomplete function
$(function() {
    $('#nameInput').autocomplete({
        appendTo: "#nameInputOver",
        position: { my: "left top", at: "left bottom", collision: "none" },
        minLength: 2,
        source: autoFillList,
        select: function(event, ui){
            console.log(ui.item.price);
            $("#priceInput").val(ui.item.price);
            $("#quantityLabels").css('color', 'red');
            $("#quantityLabels").css('font-size', '22px');
            if (priceInput.value == "") {
                $('#priceLabels').css('color', 'red');
                $('#priceLabels').css('font-size', '22px');
            }
        }
    })
});




