

function start(hints, images, config) {
    console.log("Images:")
    console.log(images);
    console.log("Hints:")
    console.log(hints);
    console.log("Config:")
    console.log(config);
    change_hint(hints, images, config);
    change_slide(hints, images, config);
    const hintIntervalID = window.setInterval(() => {change_hint(hints, images, config)}, config["hintTime"] * 1000);
    const slideIntervalID = window.setInterval(() => {change_slide(hints, images, config)}, config["slideTime"] * 1000);
}

function rand_from(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function change_slide(hints, images, config) {
    const img = rand_from(images)["file"];
    document.documentElement.style.backgroundImage = `url("${img}")`;
}


// https://www.drivethrurpg.com/product/190631/White-Box--Fantastic-Medieval-Adventure-Game
// https://www.drivethrurpg.com/product/252934/tomb-of-the-serpent-kings--deluxe-print-edition
// TODO: https://www.dropbox.com/sh/9sr53snngzgu668/AAB7TGrjTrsqHvVD5hSimeLea?dl=0
//       https://old.reddit.com/r/DnD/comments/49g3j0/
//       https://www.youtube.com/watch?v=NTPCiUwinLU
function change_hint(hints, images, config) {
    const hint = rand_from(hints).replace(/\n/g, '<br/>');
    const hintText = document.getElementById("hint-text");
    hintText.innerHTML = hint;
}

function get(where) {
    return fetch(where)
        .then((response) => response.json())
        .then((json) => json);
}

(async () => {
    const hints = await get('./hints.json');
    const images = await get('./images.json');
    const config = await get('./config.json');
    start(hints, images, config);
})()










