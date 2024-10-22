document.addEventListener("DOMContentLoaded", () => {
  let monthButtonsContainer = document.getElementById("months-buttons");

  function createMonthButtons(season) {
    let months = [];
    switch (season) {
      case "winter":
        months = ["Декабрь", "Январь", "Февраль"];
        break;
      case "spring":
        months = ["Март", "Апрель", "Май"];
        break;
      case "summer":
        months = ["Июнь", "Июль", "Август"];
        break;
      case "autumn":
        months = ["Сентябрь", "Октябрь", "Ноябрь"];
        break;
    }

    monthButtonsContainer.innerHTML = "";

    let seasonButton = document.getElementById(season);
    let seasonColor = getComputedStyle(seasonButton).backgroundColor;

    months.forEach((month) => {
      let monthButton = document.createElement("button");
      monthButton.innerHTML = month;
      monthButton.classList.add("month-btn");
      monthButton.style.backgroundColor = seasonColor;
      monthButtonsContainer.appendChild(monthButton);
    });
  }

  document.querySelectorAll(".season-btn").forEach((button) => {
    button.addEventListener("click", () => {
      let season = button.id;
      createMonthButtons(season);
    });
  });
});
