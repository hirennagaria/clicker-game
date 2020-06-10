let money = 0;
let stocks = 0;
let bonds = 0;
let property = 0;
let mansion = 0;

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

function buyMansion() {
  if (money >= 100000 && stocks >= 4000 && bonds >= 1000 && property >= 30) {
    money -= 100000;
    stocks -= 4000;
    bonds -= 1000;
    property -= 30;
    mansion++;
    renderMansion();
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

function renderMansion() {
  //money_output.innerHTML = money;
  property_output.innerHTML = mansion;
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
  if(mansion) {
    money += mansion * 500
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
    //document.getElementById("propertyProgress").style.display = 'block';
    document.getElementById("bondsNotification").style.display = 'block';
  }

  if (money >= 5000 && stocks >= 200 && bonds >= 50 && isHidden("buyProperty")) {
    document.getElementById("buyProperty").style.display = 'block';
    document.getElementById("propertyProgress").style.display = 'none';
    document.getElementById("propertyNotification").style.display = 'block';
  }
  if (money >= 100000 && stocks >= 4000 && bonds >= 1000 && property >= 30 && isHidden("buyMansion")) {
    document.getElementById("buyMansion").style.display = 'block';
    document.getElementById("mansionProgress").style.display = 'none';
    document.getElementById("mansionNotification").style.display = 'block';
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
  if(!isHidden('mansionProgress')) {
    let progressValue = 0;
    let moneyValue = money/4000;
    moneyValue = (moneyValue>25) ? 25 : moneyValue;

   let stockValue = stocks / 160;
   stockValue = (stockValue>25) ? 25 : stockValue;

   let bondValue = bonds / 40;
   bondValue = (bondValue>25) ? 25 : bondValue;

   let propertyValue = bonds / 1.2;
   propertyValue = (propertyValue>25) ? 25 : propertyValue;
   progressValue = moneyValue + stockValue + bondValue + propertyValue;
    mansionProgress.value = progressValue;
  }
}

// loop
setInterval(() => {
  update()
  renderMoney();
  renderStocks();
  renderBonds();
  renderProperty();
  renderMansion();
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



