let moneyCounter = document.getElementById("moneyCounter");
let energyCounter = document.getElementById("energyCounter");
let hamsterClickButton = document.getElementById("hamsterClick");

let money = 0;
let energy = 200;
const maxEnergy = 200;

hamsterClickButton.addEventListener("click", hamsterClickMoneyCounter);

function hamsterClickMoneyCounter() {
  if (energy > 0) {
    money += 5;
    updateMoneyCounter();

    energy -= 5;
    updateEnergyCounter();
  } else {
    alert("Хомяк устал !");
  }
}

function updateMoneyCounter() {
  moneyCounter.querySelector("span").innerText = money;
}

function updateEnergyCounter() {
  energyCounter.querySelector("span").innerText = energy;
}

setInterval(function () {
  if (energy < maxEnergy) {
    energy += 5;
    if (energy > maxEnergy) {
      energy = maxEnergy;
    }
    updateEnergyCounter();
  }
}, 1000);
