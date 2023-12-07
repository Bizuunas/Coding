let masyvas1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(masyvas1[0]);
console.log(masyvas1[masyvas1.length -1]);
console.log(masyvas1[5]);
console.log(masyvas1[6]);
console.log(masyvas1.length);

console.log('antra uzduotis');

let masyvas2 = [9, 8, 7, 6, 5, 4, 3, 2, 1];

console.log(masyvas2);

masyvas2[0] = 1;
masyvas2[8] = 9;
masyvas2[4] = 0;

console.log(masyvas2);

console.log('trecia uzduotis');

let masyvas3 = [];

masyvas3.push(6);
masyvas3.push(9);
masyvas3.push(6);

console.log(masyvas3);

console.log('ketvirta uzduotis');

let masyvas4 = [];

for (let i = 0; i < 5; i++) {
    let ats = Math.floor(Math.random() * 10) + 1;
    masyvas4.push(ats);
}

console.log(masyvas4);

console.log('penkta uzduotis');

let pirmPaz = []

let antrPaz = []

for (let i = 0; i < 5; i++) {
    let ats = Math.floor(Math.random() * 10) + 1;
    pirmPaz.push(ats);
}

for (let i = 0; i < 5; i++) {
    let ats = Math.floor(Math.random() * 10) + 1;
    antrPaz.push(ats);
}

let pirmVid = pirmPaz.reduce((suma, skaicius) => suma += skaicius) / pirmPaz.length;
console.log(pirmVid);

let antrVid = antrPaz.reduce((suma, skaicius) => suma += skaicius) / antrPaz.length;
console.log(antrVid);

if (pirmVid > antrVid) {
    console.log('pirmas studentas turi geresni vidurki');
} else if (antrVid > pirmVid) {
    console.log('antras studentas turi geresni vidurki');
} else {
    console.log('abieju studentu vidurkiai vienodi');
}
