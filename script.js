let player = {
  name: '',
  age: 0,
  color: '',
  strength: 0,
  agility: 0,
  days: 0,
};

// Обработчик события для кнопки "начать игру"
document.querySelector("#start-button").addEventListener("click", function () {
  // Получение информации о пользователе из формы
  const userName = document.querySelector("#user-name").value;
  const userAge = document.querySelector("#user-age").value;
  const userColor = document.querySelector("#user-color").value;

  // Скрытие формы и отображение игровой страницы
  document.querySelector("#user-form").classList.add("hidden");
  window.location.href = "game";
  document.querySelector("#game-page").classList.remove("hidden");

  // Инициализация данных игрока
  player.name = userName;
  player.age = userAge;
  player.color = userColor;
  player.strength = 0;
  player.agility = 0;
  player.days = 0;

  // Отображение информации о игроке на странице
  updatePlayerInfo(player);
});

// Функция для отображения информации о игроке на странице
function updatePlayerInfo(player) {
  document.querySelector("#name").textContent = player.name;
  document.querySelector("#fox_color").textContent = player.color;
  document.querySelector("#age").textContent = player.age;
  document.querySelector("#strength").textContent = player.strength;
  document.querySelector("#agility").textContent = player.agility;
}

// Обработчик события для кнопки "тренироваться"
document.querySelector("#train-button").addEventListener("click", function () {
  // Обновление данных игрока
  player.strength += 10;
  player.days += 10;

  // Проверка, достиг ли игрок 360 дней
  if (player.days >= 360) {
    player.days = 0;
    player.age++;
  }

  // Обновление информации о игроке на странице
  updatePlayerInfo(player);
});

// Обработчик события для кнопки "охотиться"
document.querySelector("#hunt-button").addEventListener("click", function () {
  // Обновление данных игрока
  player.agility += 10;
  player.days += 10;

  // Проверка, достиг ли игрок 360 дней
  if (player.days >= 360) {
    player.days = 0;
    player.age++;
  }

  // Обновление информации о игроке на странице
  updatePlayerInfo(player);
});