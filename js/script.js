let b = document.body;
let a = document.querySelector("#audio");


let radio = document.querySelector("#radio")
let playert = document.querySelector("#playert")
let disc = document.querySelector("#disc")
let control = document.querySelector("#control")
let needle = document.querySelector("#needle")
let shadows = document.querySelector("#shadows")
let shadowsb = document.querySelector("#shadowsb")
let shadowsc = document.querySelector("#shadowsc")
let text = document.querySelector("#text")

let sca = document.querySelectorAll(".speaker-ca");
let scb = document.querySelectorAll(".speaker-cb");


let sfa = document.querySelectorAll(".speaker__front");
let sta = document.querySelectorAll(".speaker__top");
let sba = document.querySelectorAll(".speaker__back");
let sla = document.querySelectorAll(".speaker__left");
let sra = document.querySelectorAll(".speaker__right");

/*******************/

let tf = () => {
    radio.classList.toggle('is-radio-active')
    playert.classList.toggle('is-playert-active')
    disc.classList.toggle('is-disc-active')
    control.classList.toggle('is-control-active')
    needle.classList.toggle('is-needle-active')
    shadows.classList.toggle('is-shadows-active')
    shadowsb.classList.toggle('is-shadowsb-active')
    shadowsc.classList.toggle('is-shadowsc-active')

    sca.forEach( f => f.classList.toggle("is-sca-active") );
    scb.forEach( f => f.classList.toggle("is-scb-active") );


    sfa.forEach( f => f.classList.toggle("sfa") );
    sta.forEach( f => f.classList.toggle("sta") );
    sba.forEach( f => f.classList.toggle("sba") );
    sla.forEach( f => f.classList.toggle("sla") );
    sra.forEach( f => f.classList.toggle("sra") );
}

let af = () => {
    if (!playing) {
        a.play();
        playing = true;
    }
    else {
        a.pause();
        a.currentTime = 0;
        playing = false;
    }
}

let pl = () => {
    tf()

    setTimeout(function(){
        af()
    }, 1000);
}

/*
 * 0 - hmbb
 * 1 - wdxhnnhzd
 * 2 - wyyl
 * 3 - wll
 * 4 - ttd
 * 5 - gz
 * 6 - wxqznds
 * 7 - nn
 * 8 - dx
 * 9 - xjl
 */

var stop_timer, egg_timer;
var playing = false;
var song_index = 0;
var song_index_max = 9;
let radioPlaying = () => {
    b.removeEventListener("click", radioPlaying)
    text.classList.toggle('is-text-active')

    clearTimeout(egg_timer);
    clearInterval(stop_timer);

    if (!playing)
    {
        a.src = "song/bgm" + song_index + ".aac";
        song_index++;
        if (song_index > song_index_max)
        {
            song_index = 0;
        }
    }

    pl()

    stop_timer = setInterval(function() {
        if (playing && a.paused)
        {
            tf()
            af()
        }
    }, 2000);

    egg_timer = setTimeout(function() {
        a.src = "luck.aac";
        pl()
    }, 600000); // guofan - egg wait time

    setTimeout(function() {
        text.classList.toggle('is-text-active')
        b.addEventListener("click", radioPlaying)
    }, 2500);
}

/*******************/
b.addEventListener("click", radioPlaying)