// pirmas div

document.getElementById('pirma-antraste').innerHTML = 'Naujas pirmos antrastes tekstas';
document.getElementById('pirmas-paragrafas').innerHTML = 'Naujas pakeistas pirmo paragrafo tekstas';

// antras div

console.log('ANTRAS DIV');

let tekstasIsParagrafo = document.getElementById('paragrafo-tekstas').innerHTML;
console.log('paimtas su innerHTML tekstas:', tekstasIsParagrafo);

let tekstasIsParagrafo2 = document.getElementById('paragrafo-tekstas').innerText;
console.log('paimtas su innerText tekstas:', tekstasIsParagrafo2);

console.log();

// trecias div

console.log('TRECIAS DIV');

console.log('innerHTML turinys:', document.getElementById('trecias').innerHTML);
console.log('innerText turinys:', document.getElementById('trecias').innerText);

console.log();

// septintas div

function pakeisti() {
    document.getElementById("septinto-tekstas").innerHTML = "Lorem, ipsum dolorem libero fugiat";
}

// astuntas div

function pakeisti2(elementas, tekstas) {
    document.getElementById(elementas).innerHTML = tekstas;
}


//devintas div

function pakeisti3(elementas, tekstas) {
    document.getElementById(elementas).innerHTML = tekstas;
}

function kitaSpalva(elementas, spalva) {
    document.getElementById(elementas).style.color = spalva;
}

//desimtas div

let pirmas = 8;
let antras = 9;

let suma = pirmas + antras;
let skirtumas = pirmas - antras;
let sandauga = pirmas * antras;
let dalmuo = pirmas / antras;

document.getElementById("suma").innerHTML = pirmas + " + " + antras + " = " + suma;
document.getElementById("skirtumas").innerHTML = pirmas + " - " + antras + " = " + skirtumas;
document.getElementById("sandauga").innerHTML = pirmas + " * " + antras + " = " + sandauga;
document.getElementById("dalmuo").innerHTML = pirmas + " / " + antras + " = " + dalmuo;

// vienuoliktas div

pirmas = 7;
antras = 5;

let isvedimui = `<p>${pirmas} + ${antras} = ${pirmas + antras} </p>
                <p>${pirmas} - ${antras} = ${pirmas - antras} </p>
                <p>${pirmas} * ${antras} = ${pirmas * antras} </p>
                <p>${pirmas} / ${antras} = ${pirmas / antras} </p>`;

document.getElementById('vienuolikto-turinys').innerHTML = isvedimui;

// dvyliktas div

function keistiDydi(elementas, dydis) {
    document.getElementById(elementas).style.fontSize = dydis + 'px'
}

// tryliktas div

let divKeitimui = document.getElementById('div-keitimui');

let plocioSlider = document.getElementById("plocio-slider");
let aukscioSlider = document.getElementById("aukscio-slider");

plocioSlider.oninput = function () {
    divKeitimui.style.width = this.value + 'px';
}

aukscioSlider.oninput = function () {
    divKeitimui.style.height = this.value + 'px'
}

let spalvosPasirinkimas = document.getElementById('spalvos-pasirinkimas');

spalvosPasirinkimas.oninput = function () {
    divKeitimui.style.backgroundColor = this.value;
}

let tekstoKeitimas = document.getElementById('tekstas-divui');

tekstoKeitimas.oninput = function () {
    divKeitimui.innerHTML = this.value;
}

let tekstoSpalvosPasirinikimas = document.getElementById('teksto-spalvos-pasirinkimas')

tekstoSpalvosPasirinikimas.oninput = function () {
    divKeitimui.style.color = this.value;
}

// keturioliktas div

function pridetiZodi(elementas, zodis) {
    document.getElementById(elementas).value += zodis + " ";
}

function isvalyti(elementas) {
    document.getElementById(elementas).value = " ";
}

// penkioliktas div

let penkioliktoTekstas = document.getElementById('penkiolikto-tekstas');

function zodziuKiekis() {
    let tekstas = penkioliktoTekstas.value;
    let zodziai = tekstas.trim().split(' ');
    document.getElementById('penkiolikto-atsakymai').innerHTML = `<p>Zodziu kiekis: ${zodziai.length}</p>`;
}

function ilgiausiasZodis() {
    let tekstas = penkioliktoTekstas.value;
    let zodziai = tekstas.trim().split(' ');

    let ilgiausias = ' ';

    for (let zodis of zodziai) {
        if (zodis.length > ilgiausias.length) (
            ilgiausias = zodis
        );
    }

    document.getElementById('penkiolikto-atsakymai').innerHTML =
        `<p>Ilgiausias zodis: ${ilgiausias}</p>
        <p>Jo ilgis: ${ilgiausias.length} simboliu </p>`;
}

function trumpiausiasZodis() {
    let tekstas1 = penkioliktoTekstas.value;
    let zodziai1 = tekstas1.trim().split(' ');

    let trumpiausias = '------------------------------------------------------------';

    for (let zodis of zodziai1) {
        if (zodis.length <= trumpiausias.length) (
            trumpiausias = zodis
        );
    }

    document.getElementById('penkiolikto-atsakymai').innerHTML =
        `<p>Trumpiausias zodis: ${trumpiausias}</p>
        <p>Jo ilgis: ${trumpiausias.length} simboliu </p>`;
}

// sesioliktas div

let pirmoSkirtukoTurinys = document.getElementById('pirmas-skirtukas');
let antroSkirtukoTurinys = document.getElementById('antras-skirtukas');

function pirmasSkirtukas() {
    pirmoSkirtukoTurinys.style.display = 'block';
    antroSkirtukoTurinys.style.display = 'none';
}

function antrasSkirtukas() {
    pirmoSkirtukoTurinys.style.display = 'none';
    antroSkirtukoTurinys.style.display = 'block';
}

// septyniolkitas div

let perjungtiMygtukas = document.getElementById('perjungti-mygtukas');
let perjungtiTekstas = document.getElementById('perjungti-tekstas');

perjungtiMygtukas.onclick = function () {
    if (this.innerText == "Rodyti") {
        this.innerText = "Nerodyti";
        perjungtiTekstas.style.display = "block";
    } else {
        this.innerText = "Rodyti";
        perjungtiTekstas.style.display = "none";
    }
}

// astuonioliktas div

let kitasPerjungtiTekstas = document.getElementById('kitas-perjungti-tekstas');

document.getElementById('kitas-perjungti-mygtukas').onclick = function () {
    if (kitasPerjungtiTekstas.style.display == 'block') {
        this.innerText = 'Rodyti';
        kitasPerjungtiTekstas.style.display = 'none';
    } else {
        this.innerText = 'Nerodyti';
        kitasPerjungtiTekstas.style.display = 'block';
    }
}

// devynioliktas div 


document.getElementById('devynioliktas').onclick = function () {
    let devynioliktoTekstas = document.getElementById('devyniolikto-tekstas');
    if (devynioliktoTekstas.style.display == 'block') {
        devynioliktoTekstas.style.display = 'none';
    } else {
        devynioliktoTekstas.style.display = 'block';
    }
}

// dvidesimtas div


function textColorChange(elementas, spalva) {

    let dvidesimtasTekstas = document.querySelectorAll(elementas);

    dvidesimtasTekstas.forEach(blokelis => {
        if (blokelis.textContent.length > 100) {
            blokelis.style.color = spalva;
        }
    })
}

// dvidesimtPirmas div
let skaicius1 = document.getElementById('skaicius1')
let skaicius2 = document.getElementById('skaicius2')

function add() {
    let ats = Number(skaicius1.value) + Number(skaicius2.value)
    document.getElementById('dvidesimtPirmoAtsakymai').innerHTML =
        `<p>Skaiciu suma: ${ats}</p>`;
}

function subtract() {
    let ats = Number(skaicius1.value) - Number(skaicius2.value)
    document.getElementById('dvidesimtPirmoAtsakymai').innerHTML =
        `<p>Skaiciu skirtumas: ${ats}</p>`;
}

function multiply() {
    let ats = Number(skaicius1.value) * Number(skaicius2.value)
    document.getElementById('dvidesimtPirmoAtsakymai').innerHTML =
        `<p>Skaiciu daugyba: ${ats}</p>`;
}

function divide() {
    let ats = Number(skaicius1.value) / Number(skaicius2.value)
    document.getElementById('dvidesimtPirmoAtsakymai').innerHTML =
        `<p>Skaiciu dalyba: ${ats}</p>`;
}

// dvidesimtantras div

let langelis = document.getElementById('langelis')

let body = document.getElementById('body')

function Atidaryti() {
    if (langelis.style.display == 'none') {
        langelis.style.display = 'block';
        body.style.background = 'grey';
    } else {
        langelis.style.display = 'none';
        body.style.background = 'bisque'
    }
}