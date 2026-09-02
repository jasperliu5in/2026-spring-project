// =========================================
// Weather System v1
// =========================================

const weatherContainer = document.getElementById("weather-container");

// =========================================
// Wind System V4
// =========================================

let wind = Math.random() * 2 - 1;
// -1 = 往左
//  0 = 幾乎沒風
// +1 = 往右

const weatherTypes = [
    "sunny",
    "cloudy",
    "sunset",
    "night",
    "rain",
    "snow",
    "thunder",
    "heavySnow"
];

const weather =
    weatherTypes[Math.floor(Math.random() * weatherTypes.length)];

switch (weather) {

    case "sunny":
        sunny();
        break;

    case "cloudy":
        cloudy();
        break;

    case "sunset":
        sunset();
        break;

    case "night":
        night();
        break;

    case "rain":
        rain();
        break;

    case "snow":
        snow();
        break;

    case "thunder":
        thunder();
        break;

    case "heavySnow":
        heavySnow();
        break;
}

// ----------------------
// Sunny
// ----------------------

function sunny() {

    weatherContainer.classList.add("sky-day");

    createSun();

    createClouds(3);

}

// ----------------------
// Cloudy
// ----------------------

function cloudy() {

    weatherContainer.classList.add("sky-cloudy");

    createClouds(6);

}

// ----------------------
// Sunset
// ----------------------

function sunset() {

    weatherContainer.classList.add("sky-sunset");

    createSun();

    createClouds(4);

}

// ----------------------
// Night
// ----------------------

function night() {

    weatherContainer.classList.add("sky-night");

    createMoon();

    createStars(200);

    setInterval(function () {

        if (Math.random() < 0.5) {

            createMeteor();

        }

    }, 6000);

}

// ----------------------
// Sun
// ----------------------

function createSun() {

    const sun = document.createElement("div");

    sun.id = "sun";

    weatherContainer.appendChild(sun);

}

// ----------------------
// Moon
// ----------------------

function createMoon() {

    const moon = document.createElement("div");

    moon.id = "moon";

    weatherContainer.appendChild(moon);

}

// ----------------------
// Clouds
// ----------------------

function createClouds(number) {

    for (let i = 0; i < number; i++) {

        const cloud = document.createElement("div");

        cloud.className = "cloud";

        cloud.style.top = Math.random() * 250 + "px";

        cloud.style.left = (-250 + Math.random() * 300) + "px";

        cloud.style.animationDuration =
            (25 + Math.random() * 25) + "s";

        cloud.style.animationDelay =
            (Math.random() * 10) + "s";

        const extra = document.createElement("div");

        extra.className = "cloud-extra";

        cloud.appendChild(extra);

        weatherContainer.appendChild(cloud);

        const scale = 0.7 + Math.random() * 0.8;

        cloud.style.scale = scale;

        cloud.style.animationDuration =
            (25 + Math.random() * 25) + "s";
    }

}

// ----------------------
// Stars
// ----------------------

function createStars(number) {

    for (let i = 0; i < number; i++) {

        const star = document.createElement("div");

        star.className = "star";

        if (Math.random() < 0.2) {

            star.classList.add("big");

        }

        star.style.left =
            Math.random() * window.innerWidth + "px";

        star.style.top =
            Math.random() * window.innerHeight + "px";

        star.style.animationDelay =
            Math.random() * 2 + "s";

        weatherContainer.appendChild(star);

        const size = 2 + Math.random() * 4;

        star.style.width = size + "px";
        star.style.height = size + "px";

    }

}

function rain() {

    weatherContainer.classList.add("sky-cloudy");

    createClouds(8);

    createRain(250);

    if (Math.random() < 0.35) {

        createRainbow();

    }

    //if (Math.random() < 0.4) {

        createFog(4);

    //}

}

function snow() {

    weatherContainer.classList.add("sky-cloudy");

    createClouds(4);

    createSnow(180);

    if (Math.random() < 0.5) {

        createFog(5);

    }

}

function lightningLoop() {

    createLightning();

    setTimeout(function () {

        lightningLoop();

    }, 1500 + Math.random() * 3500);

}

function createLightning() {

    const bolt = document.createElement("div");

    bolt.className = "lightning";

    bolt.style.left =
        Math.random() * window.innerWidth + "px";

    bolt.style.top = "0px";

    bolt.style.rotate =
        (Math.random() * 20 - 10) + "deg";

    weatherContainer.appendChild(bolt);

    const flash = document.createElement("div");

    flash.className = "flash";

    document.body.appendChild(flash);

    setTimeout(function () {

        bolt.remove();

        flash.remove();

    }, 300);

}

function thunder() {

    weatherContainer.classList.add("sky-cloudy");

    createClouds(8);

    createRain(250);

    createFog(6);

    lightningLoop();

}

function heavySnow() {

    weatherContainer.classList.add("sky-cloudy");

    createClouds(6);

    createSnow(350);

}

function createRain(number) {

    for (let i = 0; i < number; i++) {

        const rain = document.createElement("div");

        rain.className = "raindrop";

        const width = 1 + Math.random() * 2;
        const height = 12 + Math.random() * 18;

        rain.style.width = width + "px";
        rain.style.height = height + "px";

        rain.style.left =
            Math.random() * window.innerWidth + "px";

        rain.style.top =
            -Math.random() * window.innerHeight + "px";

        rain.style.animationDuration =
            (0.35 + Math.random() * 0.5) + "s";

        rain.style.animationDelay =
            Math.random() * 5 + "s";

        weatherContainer.appendChild(rain);

        const duration =
            parseFloat(rain.style.animationDuration) * 1000;

        setInterval(function () {

            createSplash(parseFloat(rain.style.left));

        }, duration);

        rain.style.setProperty(
            "--wind",
            (wind * 80) + "px"
        );
    }

}

function createSnow(number) {

    for (let i = 0; i < number; i++) {

        const snow = document.createElement("div");

        snow.className = "snowflake";

        const size = 3 + Math.random() * 10;

        snow.style.width = size + "px";
        snow.style.height = size + "px";

        snow.style.left =
            Math.random() * window.innerWidth + "px";

        snow.style.top =
            -Math.random() * window.innerHeight + "px";

        snow.style.animationDuration =
            (4 + Math.random() * 7) + "s";

        snow.style.animationDelay =
            Math.random() * 8 + "s";

        weatherContainer.appendChild(snow);

        snow.style.opacity = 0.4 + Math.random() * 0.6;

        snow.style.filter = "blur(" + (Math.random() * 1.5) + "px)";

        snow.style.setProperty(
            "--wind",
            (wind * 40) + "px"
        );

    }

}

function flashLightning() {

    const flash = document.createElement("div");

    flash.className = "lightning";

    weatherContainer.appendChild(flash);

    setTimeout(function () {

        flash.remove();

    }, 250);

}

function createRainbow() {

    const rainbow = document.createElement("div");

    rainbow.id = "rainbow";

    weatherContainer.appendChild(rainbow);

}

function createMeteor() {

    const meteor = document.createElement("div");

    meteor.className = "meteor";

    meteor.style.left =
        Math.random() * window.innerWidth + "px";

    meteor.style.top =
        Math.random() * 250 + "px";

    weatherContainer.appendChild(meteor);

    setTimeout(function () {

        meteor.remove();

    }, 1200);

}

function createSplash(x) {

    const splash = document.createElement("div");

    splash.className = "splash";

    splash.style.left = x + "px";

    splash.style.top =
        (window.innerHeight - 12) + "px";

    weatherContainer.appendChild(splash);

    setTimeout(function () {

        splash.remove();

    }, 350);

}

function createFog(number) {

    for (let i = 0; i < number; i++) {

        const fog = document.createElement("div");

        fog.className = "fog";

        fog.style.top =
            (100 + Math.random() * 250) + "px";

        fog.style.left =
            (-400 + Math.random() * 400) + "px";

        fog.style.animationDuration =
            (40 + Math.random() * 30) + "s";

        fog.style.animationDelay =
            (Math.random() * 10) + "s";

        fog.style.opacity =
            0.25 + Math.random() * 0.35;

        weatherContainer.appendChild(fog);

        console.log("🌫 Fog Created");

    }

}

console.log("Wind =", wind);