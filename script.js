let money = 0;
let stocks = 0;
let bonds = 0;
let property = 0;

function make() {
  money++;
  renderMoney();
}

function buyStocks() {
  if (money >= 5) {
    money -= 5;
    stocks++;
    renderStocks();
  }
}

function buyBonds() {
  if (money >= 100 && stocks >= 5) {
    money -= 100;
    stocks -= 5;
    bonds++;
    renderBonds();
  }
}

function buyPropperty() {
  if (money >= 5000 && stocks >= 200 && bonds >= 50) {
    money -= 5000;
    stocks -= 200;
    bonds -= 50;
    property++;
    renderProperty();
  }
}


function renderMoney() {
  money_output.innerHTML = money;
  //stocks_output.innerHTML = stocks;
}

function renderStocks() {
  //money_output.innerHTML = money;
  stocks_output.innerHTML = stocks;
}

function renderBonds() {
  //money_output.innerHTML = money;
  bonds_output.innerHTML = bonds;
}

function renderProperty() {
  //money_output.innerHTML = money;
  property_output.innerHTML = property;
}



function update() {
  if (stocks) {
    money += stocks;
  }
  if(bonds) {
    money += bonds * 3;
  }
  if(property) {
    money += property * 20;
  }
}

// Where el is the DOM element you'd like to test for visibility
function isHidden(element) {
  var el = document.getElementById(element);
    return (el.offsetParent === null)
}

function checkNotifications() {
  if (money >= 100 && stocks >= 5 && isHidden("buyBonds")) {
    document.getElementById("buyBonds").style.display = 'block';
    document.getElementById("bondsProgress").style.display = 'none';
    document.getElementById("propertyProgress").style.display = 'block';
    document.getElementById("bondsNotification").style.display = 'block';
  }

  if (money >= 5000 && stocks >= 200 && bonds >= 50 && isHidden("buyProperty")) {
    document.getElementById("buyProperty").style.display = 'block';
    document.getElementById("propertyProgress").style.display = 'none';
    document.getElementById("propertyNotification").style.display = 'block';
  }
}

function renderProgress() {
  if(!isHidden('bondsProgress')){
    let progressValue = 0;
    let moneyValue = money/2;
    moneyValue = (moneyValue>50) ? 50 : moneyValue;

   let stockValue = stocks * 10;
   stockValue = (stockValue>50) ? 50 : stockValue;
   progressValue = moneyValue + stockValue;
    bondsProgress.value = progressValue;
  }
  if(!isHidden('propertyProgress')){
    let progressValue = 0;
    let moneyValue = money/150.01;
    moneyValue = (moneyValue>33.33) ? 33.33 : moneyValue;

   let stockValue = stocks / 6;
   stockValue = (stockValue>33.33) ? 33.33 : stockValue;

   let bondValue = bonds / 1.5;
   bondValue = (bondValue>33.34) ? 33.34 : bondValue;
   progressValue = moneyValue + stockValue + bondValue;
    propertyProgress.value = progressValue;
  }
}

// loop
setInterval(() => {
  update()
  renderMoney();
  renderStocks();
  renderBonds();
  renderProperty();
  checkNotifications();
  renderProgress();
}, 500) // 500ms = twice a second


document.addEventListener('DOMContentLoaded', () => {

  (document.querySelectorAll('.notification .delete') || []).forEach(($delete) => {
    $notification = $delete.parentNode;

    $delete.addEventListener('click', () => {
      $notification.parentNode.removeChild($notification);
    });
  });
});



