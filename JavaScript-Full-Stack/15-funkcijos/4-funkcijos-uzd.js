console.log();
console.log('1 UŽDUOTIS');

function sakinys() {
    console.log('as esu junior programuotojas');
}

sakinys();

console.log();
console.log('2 UŽDUOTIS');

function randomSkaicius(skaicius) {
    console.log(skaicius);
}

let skaiciai = [];

for (let i = 0; i < 1; i++) {
     let ats = Math.floor(Math.random()*10)+1;
     skaiciai.push(ats)
}

randomSkaicius(skaiciai[0])

console.log();
console.log('3 UŽDUOTIS');

function studentoSakinys(vardas, vidurkis) {
    console.log('Studentas', vardas, 'turi vidurkį', vidurkis);
}

let studentas = {
    vidurkis: 8.5,
    vardas: 'Tomas'
}

let studentas2 = {
    vidurkis: 9,
    vardas: 'Laura'
}

let studentas3 = {
    vidurkis: 9.5,
    vardas: 'Milana'
}

studentoSakinys(studentas.vardas, studentas.vidurkis);
studentoSakinys(studentas2.vardas, studentas2.vidurkis);
studentoSakinys(studentas3.vardas, studentas3.vidurkis);

console.log();
console.log('4 UŽDUOTIS');

let skaiciai1 = [];

function log4(skaiciai) {
    for (let i = 10; i < 31; i++) {
        skaiciai.push(i)
    }
}

log4(skaiciai1)

function tikrinimas(skaicius) {
    for (let daliklis = 2; daliklis <= skaicius; daliklis++) {
        if (skaicius % daliklis == 0) {
            return daliklis;
        }
    }
}

for (let i = 0; i < skaiciai1.length; i++) {
    let mazDaliklis = tikrinimas(skaiciai1[i])
    console.log(skaiciai1[i], 'skaiciaus mažiausias daliklis yra', mazDaliklis);
}

console.log();
console.log('5 UŽDUOTIS');
// Susikurkite funkciją, kuri per argumentus gautų skaičių. Ji turėtų patikrinti ar šis 
// skaičius yra pirminis (grąžina true jei pirminis, ir false jei ne pirminis). Už funkcijos 
// ribų sukite ciklą nuo 2 iki 15, kiekvienoje ciklo iteracijoje išveskite tikrinamą skaičių 
// ir šalia jo iškviestos funkcijos atsakymą (pvz 10 false, 11 true, ...).

let skaiciai5 = [];

function log5(skaiciai) {
    for (let i = 2; i < 15; i++) {
        let ats = Math.floor(Math.random()*15)+1;
        skaiciai.push(ats)
    } 
}

log5(skaiciai5);

function tikrinimas5(skaicius) {
    for (let daliklis = 2; daliklis < skaicius; daliklis++) {
        if (skaicius % daliklis == 0) {
            return skaicius+' nera pirminis';
        }
    }
    return skaicius+' yra pirminis';
}

for (let i = 0; i < skaiciai5.length; i++) {
    console.log(tikrinimas5(skaiciai5[i]));
}