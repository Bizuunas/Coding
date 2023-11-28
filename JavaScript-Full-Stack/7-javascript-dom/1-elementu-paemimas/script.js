let pslPavadinimas = document.getElementById('pavadinimas');
console.log('puslapio pavadinimo el:', pslPavadinimas);

console.log('pirmas paragrafas:', document.getElementById('pirmas-tekstas'));

let blokas1 = document.getElementById('blokas1');
console.log('blokas 1:', blokas1);

console.log('saraso elementas:', document.getElementById('saraso-el'));

console.log('pirmas saraso elemntas:', document.querySelector('ul li'));

let pirmasParagrafas = document.querySelector('p');
console.log('paragrafas:', pirmasParagrafas);

let kazkurioSarasoEl = document.querySelector('#blokas2 ul.antras li');
console.log('kazkurio saraso elementas:', kazkurioSarasoEl);

let visiParagrafai = document.querySelectorAll('p');
console.log('visi paragrafai:', visiParagrafai);

let visiLi = document.querySelectorAll('li');
console.log('visi li elementai:', visiLi);

console.log('visi li el, esantys bloke2:', document.querySelectorAll('#blokas2 li'));

let liBlok3Par = document.getElementsByClassName('blok3-par');
console.log('trecio bloko paskutiniai du paragrafai:', liBlok3Par);

let liBlokas3 = document.getElementById('blokas3');
console.log('trecias blokas:', liBlokas3);

let liPar3 = document.getElementById('par3');
console.log('trecio bloko pirmas paragrafas:', liPar3);

let blokas3P = document.querySelector('#blokas3 p');
console.log('trecio bloko pirmas paragrafas:', blokas3P);

let straipsniuBlokas = document.getElementById('straipsniai');
console.log('straipsniu blokas:', straipsniuBlokas);

let straipsniai = straipsniuBlokas.querySelectorAll('article');
console.log('straipsniu bloko articles:', straipsniai);

let strAntrastes = straipsniuBlokas.querySelectorAll('h3');
console.log('straipsniu bloko antrastes:', strAntrastes);

let antrasStr = document.getElementById('antras-str');
console.log('antras straipsnis:', antrasStr);

console.log('prieš antrą straipsnį:', antrasStr.previousElementSibling);

console.log('už antro straipsnio:', antrasStr.nextElementSibling);

console.log('antro straipsnio tėvinis:', antrasStr.parentElement);

console.log('antro straipsnio tėvinio tėvinis:', antrasStr.parentElement.parentElement);

let pirmasStr = document.getElementById('pirmas-str');
console.log('pirmas straipsnis:', pirmasStr);

let treciasStr = pirmasStr.nextElementSibling.nextElementSibling;
console.log('trecias straipsnis', treciasStr);

let paragrafasIsStr = document.getElementById('pirmas-str')
.nextElementSibling
.querySelector('p');
console.log('paragrafas is antro straipsnio:', paragrafasIsStr);
