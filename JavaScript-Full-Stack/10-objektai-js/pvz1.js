let automobilis = {
    marke: 'Audi',
    modelis: '80',
    metai: '1990',
    rida: 346020,
    darbinisTuris: 1.8,
};

console.log(automobilis);
console.log(automobilis.marke);
console.log(automobilis.modelis);
console.log(automobilis.metai);
console.log(automobilis.rida);
console.log(automobilis.darbinisTuris);

// KITAS BUDAS PASIEKTI OBJEKTO 'RAKTA'
// console.log(automobilis['marke']);
// console.log(automobilis['modelis']);
// console.log(automobilis['metai']);
// console.log(automobilis['rida']);
// console.log(automobilis['darbinisTuris']);

let raktas = 'marke';
// automobilis.raktas
console.log(automobilis[raktas]); // is auto trauktu marke

let knyga = {
    pavadinimas:'Titanu irankiai',
    autorius: 'Nezinau',
    kaina: '39 eur',
    puslapiai: 800
};

console.log(knyga);
console.log(knyga.pavadinimas);
console.log(knyga.autorius);
console.log(knyga.kaina);
console.log(knyga.puslapiai);

let salis = {
    pavadinimas:'Lietuva',
    prezidentas:'Gitanas Nausėda',
    zmoniuSk:'2.8 mln.',
    valdymoForma: 'Demokratinė Respublika',
    plotas: '65300 km2',
    BVP: '78,346 mlrd.',
    sostine: 'Vilnius',
    laikoZona: 'UTC+3'
}

console.log(salis);

let nuvaziuotaVidPerMetus = automobilis.rida / (2023 - automobilis.metai);
console.log('Auto rida:', automobilis.rida);
console.log('Auto metai:', automobilis.metai);
console.log('Auto amzius:', 2023 - automobilis.metai);
console.log('Vidutiniskai nuvaziuota per metus:', nuvaziuotaVidPerMetus);

let dabarMetai = new Date().getFullYear();
let nuvaziuotaVidPerMetus2 = automobilis.rida / (dabarMetai - automobilis.metai);
console.log('Vidutiniskai nuvaziuota per metus:', nuvaziuotaVidPerMetus2);

// let nuvaziuotaVidPerMetus2 = automobilis.rida / (dabarMetai - automobilis.metai);
let nuvaziuotaVidPerMetus21 = (automobilis.rida / (dabarMetai - automobilis.metai)).toFixed(3);

let preke1 = {
    pavadinimas: 'Flomasteriai',
    kaina: 5,
    sku: 'FL935',
    kiekis: 34,
    spalvuKiekis: 30
};

let preke2 = {
    pavadinimas: 'Knyga',
    kaina: 10,
    sku: 'K32',
    kiekis: 15
};

console.log('PREKE 1');
console.log(preke1);
console.log('PREKE 2');
console.log(preke2);

if (preke1.kiekis > preke2.kiekis) {
    console.log('preke1 didesnis kiekis');
} else if (preke2.kiekis > preke1.kiekis) {
    console.log('preke2 didesnis kiekis');
} else {
    console.log('abieju prekiu kiekis vienodas');
}

let studentas = {
    vardas: 'Tomas',
    pavarde: 'Tomauskas',
    mokykla: {
        pavadinimas: 'KTU',
        adresas: 'Gedimino g. 45',
        ikurta: 1800
    },
    pazymiai: [10, 9, 9, 8, 10, 9]
};

console.log(studentas);
console.log(studentas.vardas);
console.log(studentas.pavarde);
console.log(studentas.mokykla);
console.log(studentas.mokykla.pavadinimas);
console.log(studentas.mokykla.adresas);
console.log(studentas.mokykla.ikurta);

console.log(studentas['mokykla']['pavadinimas']);

console.log(studentas.pazymiai);
console.log(studentas.pazymiai[3]);

for (const pazymys of studentas.pazymiai) {
    console.log('studento pazymys', pazymys);
}

let suma = studentas.pazymiai.reduce((sum,paz) => sum + paz);
let vidurkis = suma / studentas.pazymiai.length;

console.log('studento vidurkis:', vidurkis);