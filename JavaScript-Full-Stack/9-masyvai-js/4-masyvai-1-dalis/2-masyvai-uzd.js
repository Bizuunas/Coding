console.log();
console.log('PIRMA UŽDUOTIS');

let masyvas1 = ['medis', 'tvora', 'pieva', 'akmuo', 'krumas', 'upe', 'ezeras'];

for (let i = 0; i < masyvas1.length; i++) {
    console.log((i+0) + '-' + masyvas1[i]);
}

console.log();
console.log('ANTRA UŽDUOTIS');

let pirkiniai = ['pienas', 'duona', 'bulka', 'kiausiniai', 'sviestas', 'mesa', 'drazoves'];

console.log('Pirkinių kiekis- ', pirkiniai.length);

for (let i = 0; i < pirkiniai.length; i++) {
    console.log((i+1) + '-/-' + pirkiniai[i]);
}

console.log();
console.log('TREČIA UŽDUOTIS');

let studentoPaz = [];

for (let i = 0; i < 10; i++) {
    let ats = Math.floor(Math.random() * 10) + 1;
    studentoPaz.push(ats);
}

for (let i = 0; i < studentoPaz.length; i++) {
    console.log('Pažimys:', studentoPaz[i]);
}

let pazVid = studentoPaz.reduce((suma, skaicius) => suma += skaicius) / studentoPaz.length;
console.log('Studento pažymių vidurkis:', pazVid);

console.log();
console.log('KETVIRTA UŽDUOTIS');

let kilometrai = [120,125,130,135,140,145,150,155,160,165,170,175,180,185,190,195,200];

for (let i = 0; i < kilometrai.length; i++) {
    if (kilometrai[i] > 150) {
        console.log('Nuvažiuota', kilometrai[i], ', tai yra daugiau negu 150 kilometrų');
    }
    
}


console.log();
console.log('PENKTA UŽDUOTIS');

let skaiciai2 = [];

for (let i = 0; i < 10; i++) {
    let ats = Math.floor(Math.random() * 100) + 1;
    skaiciai2.push(ats)
}

let skaiciaiKurie4Suma = 0

for (let i = 0; i < skaiciai2.length; i++) {
    if (skaiciai2[i] % 4 == 0) {
        console.log('Skaičius', skaiciai2[i], 'dalinasi iš keturių');
        skaiciaiKurie4Suma += skaiciai2[i]
    }
}

console.log('Skaičių kurie dalinasi iš keturių suma-', skaiciaiKurie4Suma);
