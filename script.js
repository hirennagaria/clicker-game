let money = 0;
let invest = 0;

function make() {
  money++;
  renderMoney(money);
}

function buy() {
  if (money >= 5) {
    money -= 5;
    invest++;
    renderInvest(invest);
  }
}

/*
function render() {
  money_output.innerHTML = money;
  invest_output.innerHTML = invest;
}
*/

function update() {
  if (invest) {
    money += invest;
  }
}



// loop
setInterval(() => {
  update()
  renderMoney(money);
  renderInvest(invest);

}, 500) // 500ms = twice a second


//var logEl = document.querySelector('.battery-log');

var totalWorth = {
  money: 0,
  invest: 0
}



var renderMoney = function(moneyTarget){

anime({
  targets: totalWorth,
  money: moneyTarget,
  //invest: investTarget,
  round: 1,
  easing: 'linear',
  update: function() {
    money_output.innerHTML = totalWorth.money;
    //invest_output.innerHTML = totalWorth.invest;
  }
});
}

var renderInvest = function(investTarget){

anime({
  targets: totalWorth,
  //money: moneyTarget,
  invest: investTarget,
  round: 1,
  easing: 'linear',
  update: function() {
    //money_output.innerHTML = totalWorth.money;
    invest_output.innerHTML = totalWorth.invest;
  }
});
}


//render(0, 0);