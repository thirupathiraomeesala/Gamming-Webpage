let game_bx_1 = document.getElementById('game_bx_1');
let game_bx_1_left_btn = document.getElementById('game_bx_1_left_btn');
let game_bx_1_right_btn = document.getElementById('game_bx_1_right_btn');

game_bx_1_left_btn.addEventListener('click', () =>{
    game_bx_1.scrollLeft -= 250;
});
game_bx_1_right_btn.addEventListener('click', () =>{
    game_bx_1.scrollLeft += 250;
});

let day_night = document.getElementById('day_night');
let day_night2 = document.getElementById('day_night2');
day_night2.style.display = 'none';

day_night.addEventListener('click', () => {
    document.documentElement.style.setProperty('--color-1', 'rgb(184, 184, 184, .5)');
    document.documentElement.style.setProperty('--color-2', '#000');
    document.documentElement.style.setProperty('--color-3', '#fff');
    document.documentElement.style.setProperty('--color-4', 'rgb(0, 0, 0, .5');
    document.documentElement.style.setProperty('--color-5', '#663da6');
    day_night.style.display = 'none';
    day_night2.style.display = 'unset';
});

day_night2.addEventListener('click', ()=>{

    document.documentElement.style.setProperty('--color-1', '#262b3f');
    document.documentElement.style.setProperty('--color-2', '#fff');
    document.documentElement.style.setProperty('--color-3', '#le2337');
    document.documentElement.style.setProperty('--color-3', '#rgb(255, 255, 255, .5)');
    document.documentElement.style.setProperty('--color-5', '#greenyellow');
    day_night.style.display = "unset";
    day_night2.style.display = "none";
});

let active_battery = document.getElementById('active_battery');
let battery_icon = document.getElementById('battery_icon');
let battery_level = document.getElementById('battery_level');
let audio1 = new Audio('audio/charging.mp3');
// audio.paly()

navigator.getBattery().then(battery => {
    const battery_level_charge = () => {
        battery_level.innerText = (battery.level * 100) + "%";
    }

    setInterval(battery_level_charge, 1000);
    battery_level_charge();

    battery_icon.value = battery.charging;
    //alert(battery_icon.value);

    battery.addEventListener('chargingchange', () =>{
        switch (battery.charging) {
            case true:
                battery_icon.classList.remove('bi-battery-half');
                battery_icon.classList.add('bi-battery-charging');
                active_battery.classList.add('active_battery');
                battery_icon.style.color = "#fff";
                audio1.play();
                break;
            case false:
                battery_icon.classList.add('bi-battery-half');
                battery_icon.classList.remove('bi-battery-charging');
                active_battery.classList.remove('active_battery');
                battery_icon.style.color = "unset";
                break;
        }
    })
})

function updateWifiSymbol(){
let wifiSymbol = document.getElementById('wifi_symbol');

if (navigator.onLine){
    
    wifiSymbol.style.color = '#262b3f';
}
else {
    wifiSymbol.style.color = 'off';
}

updateWifiSymbol();
}
window.addEventListener('online', updateWifiSymbol)
window.addEventListener('offline', updateWifiSymbol)