console.log();
console.log('PIRMA UŽDUOTIS');

let programos = ['Ekonomika', 'Lietuviu kalba', 'Matematika', 'Fizika', 'Geografija', 'Biologija', 'Chemija']

for (let i = 0; i < programos.length; i++) {
    console.log('Programa:',programos[i]);
}

console.log();
console.log('ANTRA UŽDUOTIS');

let salys = ['Lietuva', 'Latvija', 'Estija', 'Vokietija', 'Suomija', 'Albanija', 'Jordanija', 'Italija']

for (let i = 0; i < salys.length; i++) {
    console.log('Šalis:',salys[i]);
}

console.log();
console.log('TREČIA UŽDUOTIS');

let projektai = ['Namas', 'Butas', 'Teatras', 'Daugiabutis', 'Mokykla', 'Darželis']

for (let i = 0; i < projektai.length; i++) {
    console.log((i+1) + '-as projektas', projektai[i]);
}

console.log();
console.log('KETVIRTA UŽDUOTIS');

let skaiciai1 = [1, 2, 5, 10, 70, 85, 96, 3, 4, 7, 52, 22, 33, 46, 79, 100];

for (let i = 0; i < skaiciai1.length; i++) {
    if (skaiciai1[i] > 5) {
        console.log('skaicius', skaiciai1[i], 'yra didesnis uz 5');
    } else {
        console.log('skaicius', skaiciai1[i], 'yra mazesnis uz 5');
    }
}

console.log();
console.log('PENKTA UŽDUOTIS');

let skaiciai2 = [1, 2, 5, 10, 70, 85, 96, 3, 4, 7, 52, 22, 33, 46, 79, 100];

let dalinasiIs4 = 0

for (let i = 0; i < skaiciai2.length; i++) {
    if (skaiciai2[i] % 4 == 0) {
        dalinasiIs4 += skaiciai2[i]; 
    }
}

console.log('skaiciu, kurie dalinasi is 4 suma:', dalinasiIs4);

console.log();
console.log('ŠEŠTA UŽDUOTIS');

let pazymiai = [];

for (let i = 0; i < 10; i++) {
    let ats = Math.floor(Math.random() * 10) + 1;
    pazymiai.push(ats);
}

let pazVid = pazymiai.reduce((suma, skaicius) => suma += skaicius) / pazymiai.length;

for (let i = 0; i < pazymiai.length; i++) {
    console.log('Mokinio pažymiai:', pazymiai[i]);
}

console.log('Mokinio pažymių vidurkis:', pazVid);

console.log();
console.log('SEPTINTA UŽDUOTIS');

let pazymiai2 = [];

for (let i = 0; i < 10; i++) {
    let ats = Math.floor(Math.random() * 10) + 1;
    pazymiai2.push(ats);
}

let pazVid2 = pazymiai2.reduce((suma, skaicius) => suma += skaicius) / pazymiai.length;

for (let i = 0; i < pazymiai2.length; i++) {
    if (pazymiai2[i] > pazVid2) {
        console.log(pazymiai2[i], 'didesnis uz vidurki');
    }
}

console.log('Mokinio pažymių vidurkis:', pazVid2);

console.log();
console.log('AŠTUNTA UŽDUOTIS');

let skaiciai3 = [];

for (let i = 0; i < 10; i++) {
    let ats = Math.floor(Math.random() * 10) + 1;
    skaiciai3.push(ats);
}

for (let i = 0; i < skaiciai3.length; i++) {
    console.log();
    console.log('Skaičius:', skaiciai3[i]);
    console.log('Skaičiaus kvadratai:', skaiciai3[i]**2);
}

console.log();
console.log('DEVINTA UŽDUOTIS');

let pazymiai3 = [];

for (let i = 0; i < 10; i++) {
    let ats = Math.floor(Math.random() * 10) + 1;
    pazymiai3.push(ats);
}

for (let i = 0; i < pazymiai3.length; i++) {
    console.log('Pažimys:', pazymiai3[i]);
    if (pazymiai3[i] >= 5) {
        console.log('Pažimys', pazymiai3[i], 'yra teigiamas');
        console.log();
    } else {
        console.log('Pažimys', pazymiai3[i], 'yra neigiamas');
        let trukstaIkiTeigiamo = 5 - pazymiai3[i];
        console.log('Iki teigiamo trūksta', trukstaIkiTeigiamo, 'balų');
        console.log();
    }
}