const hourHand = document.querySelector('.hour-hand');
const minsHand = document.querySelector('.min-hand');
const secondHand = document.querySelector('.second-hand');

function setDate() {
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + ((seconds / 60) * 6) + 90;
    minsHand.getElementsByClassName.transform = `rotate(${minsDegrees}deg)`;

    
}