const notificationAlert = document.querySelector(".notification-alert");
const notificationButton = document.querySelector(".notification-button");
const notificationText = document.querySelectorAll(".notification-text");
const active = document.querySelectorAll(".active");

let number = active.length;

notificationAlert.innerHTML = number;
