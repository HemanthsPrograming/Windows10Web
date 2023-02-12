function clickRedirect() {
    document.getElementById('time').style.animation = "fade-in-out 0.2s linear";
    setTimeout(function() {
        document.getElementById('time').style.display = "none";
        document.getElementById('loginPromt').style.display= "block";
        document.getElementById('loginPromt').style.animation= "fades 0.4s ease-in-out";
    }, 190);
};


let inputVal = document.getElementById('profile_promt_input');

let inputCount = 0;

const currentDate = new Date();
let timeHours1 = currentDate.getHours();
let timeMin1 = currentDate.getMinutes();
let date1 = currentDate.getDate();
let sec1 = currentDate.getSeconds();
let dayNames1 = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let monthNames1 = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
let year1 = currentDate.getFullYear();
let yearFromNow = year1+1;

let dateFrom_now_1 = dayNames1[currentDate.getDay()] + ', ' + date1 + ' ' + monthNames1[currentDate.getMonth()] + ' ' + yearFromNow + ', ' + timeHours1 + ':' + timeMin1 + ':' + sec1;
console.log(dateFrom_now_1);

function checkPassword() {
    let getValue = document.getElementById('password_check');
    let enteredPass = getValue.value;
    let correctPassword = 'hemanth@25';

    var countPass = 0;

    if(enteredPass == correctPassword) {
        alert('Welcome!');
        confirm('Redirecting... [Dont Close The Window]'), true;
        setTimeout(function() {
            window.location.href = 'windows10.html';
        }, 3000);
    } else {
        alert('Worng Passowrd');
        countPass+1;
        if(countPass == 5) {
            alert('Your Chances For entering Password Has finished [5/5]. Try After some Time');
            if(true != false) {
                console.log(false);
            };
        } else {
            console.log(false);
        }
    };
};