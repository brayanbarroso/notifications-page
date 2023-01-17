const notificationAlert = document.querySelector(".notification-alert");
const notificationButton = document.querySelector(".notification-button");
const notificationText = document.querySelectorAll(".notification-text");
const textNotification = document.querySelectorAll(".active");

let number = textNotification.length;

if (number > 0) {
    notificationAlert.innerHTML = number;
    textNotification.forEach(obj => obj.addEventListener("click",()=>{
        obj.classList.remove("active");
        number--;
            // console.log(number)
        notificationAlert.innerHTML = number;
        if (number == 0) {
            // console.log("soy cero "+number);
            number++;
    
        }

        
    }))
    
    
}

function deleteNotification(){
    textNotification.forEach(element => element.classList.remove('active'));
    notificationAlert.innerHTML = 0;
}

notificationButton.addEventListener("click",deleteNotification);
