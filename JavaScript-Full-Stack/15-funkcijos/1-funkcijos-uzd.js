console.log();
console.log('1 UŽDUOTIS');

function aprasymas() {
    console.log('Kostas');
    console.log('nes noriu isbandyti kazka naujo');
}

aprasymas();
aprasymas();
aprasymas();

console.log();
console.log('2 UŽDUOTIS');

function eilerastis() {
    console.log('lalalal');
    console.log('lalalal');
    console.log('lalalal');
    console.log('lalalal');
    console.log('lalalal');
    console.log();
}

eilerastis();
eilerastis();
eilerastis();
eilerastis();
eilerastis();

console.log();
console.log('3 UŽDUOTIS');

function isvedimas() {
    console.log('bimbam');
}

function isvedimas1() {
    console.log('balialia');
}

function isvedimas2() {
    console.log('bilabam');
}

isvedimas();
isvedimas1();
isvedimas2();

console.log();
console.log('4 UŽDUOTIS');

function pirmaEilute() {
    console.log('ejo briedis takeliu');
}

function antraEilute() {
    console.log('ir numire');   
}

function isvedimasKonsoleje() {
    pirmaEilute();
    antraEilute();
}

isvedimasKonsoleje();

console.log();
console.log('5 UŽDUOTIS');

function skaiciai() {
    let skaiciai1 = [];
    let sum = 0;
    for (let i = 0; i < 2; i++) {
        let ats = Math.floor(Math.random() * 10) + 1;
        skaiciai1.push(ats);
        sum += skaiciai1[i]
    }
    console.log(skaiciai1[0], '+', skaiciai1[1], '=', sum);
}

skaiciai()

console.log();
console.log('6 UŽDUOTIS');

function info() {
    let policininkas = {
        vardas: 'Antanas',
        pavarde: 'Antanaitis',
        amzius: 25,
        alga: 1500,
        etatas: 1,
        specializacija: 'greitis'
    }
    console.log(policininkas.vardas, policininkas.pavarde, 'yra', policininkas.amzius, 'metu amziaus ir labai megsta savo darba, kuri dirba', policininkas.etatas, 'etatu ir gauna', policininkas.alga, 'eurus i rankas jo specializacija yra', policininkas.specializacija);
}

info()