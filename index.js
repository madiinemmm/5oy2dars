const startMinut = 30;
let time = startMinut * 60;
const countDown = document.getElementById('countdown');

setInterval(updateCountDown, 1000);


function updateCountDown() { 
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    countDown.innerHTML = `${minutes}: ${seconds}`;

    time--;
};
