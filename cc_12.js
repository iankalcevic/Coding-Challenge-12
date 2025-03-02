// Task 1 - Business Dashboard - DOM Element Selection and Creation

const dashboardId = document.getElementById("dashboard"); //Set Id
const dashboardQuery = document.querySelector("#dashboard"); //Dashboard query selector

const revenueCard = document.createElement("div"); //Set div element

revenueCard.setAttribute("class", "metric-card"); //Set class attribute
revenueCard.setAttribute("id", "revenue-card"); //Set Id attribute

revenueCard.innerHTML = '
  <h3>Revenue</h3>
  <p>$0</p> 
'; //Populate the card

dashboardId.appendChild(revenueCard); //Append the card

// Task 2 - Updating Dashboard Metrics

const metricCards = document.querySelectorAll("metric-card");

metricCardsArray.forEach(card => {
    card.innerText += ' - Updated'; //Updated card text
    card.style.backgroundColor = 'orange'; //Add background color
}); //Update each cards inner text

// Task 3 - Dynamic Inventory Management

function addProductItem(productName) {
    const inventoryList = document.getElementById("inventoryList");
    const newProductItem = document.createElement("li");

    newProductItem.setAttribute("class", "product-item");
    newProductItem.setAttribute("data-product", productName);
    newProductItem.innertext = productName;

    newProductItem.addEventListener("click", () => {
        removeProductItem(newProductItem);
    }); //Click event that removes items

    inventoryList.appendChild(newProductItem);
};

function removeProductItem(item) {
    const inventoryList = document.getElementById("inventoryList");
    inventoryList.removeChild(item);
}; //Remove product item

document.getElementById("addProductButton").addEventListener("click", () => {
  addProductItem("New Product");
});

//Example product items
addProductItem("Milk");
addProductItem("Paper");

// Task 4 - Business Customer Section

const customerSection = document.getElementById("customerSection");

customerSelection.addEventListener("click", () => {
    console.log("Customer Card Selected");
}); //Add click event listener

const customerCards = document.querySelectorAll ("customer-card");
customerCards.forEach((card) => {
    card.style.backgroundColor = "yellow"; //Set background color
    card.addEventListener("click", (event) => {
        console.log("Customer Card Selected");
        event.stopPropagation();
    });
}); //Test cases
