document.addEventListener("DOMContentLoaded", () => {
  let monthButtonsContainer = document.getElementById("months-buttons");

  function createMonthButtons(season) {
    let months = [];
    let backgroundImage = "";

    switch (season) {
      case "winter":
        months = ["Декабрь", "Январь", "Февраль"];
        backgroundImage = "url('images/winter.jpg')";
        break;
      case "spring":
        months = ["Март", "Апрель", "Май"];
        backgroundImage = "url('images/spring.jpg')";
        break;
      case "summer":
        months = ["Июнь", "Июль", "Август"];
        backgroundImage = "url('images/summer.jpg')";
        break;
      case "autumn":
        months = ["Сентябрь", "Октябрь", "Ноябрь"];
        backgroundImage = "url('images/autumn.jpg')";
        break;
    }

    monthButtonsContainer.innerHTML = "";

    document.body.style.backgroundImage = backgroundImage;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";

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
