console.log();
console.log('1 UŽDUOTIS');

let skaiciai1 = [];

let skaiciai2 = [];

for (let i = 0; i < 10; i++) {
    let ats1 = Math.floor(Math.random() * 10) + 1;
    let ats2 = Math.floor(Math.random() * 10) + 1;
    skaiciai1.push(ats1);
    skaiciai2.push(ats2);
}

function skaiciuSuma(masyvas) {
    let suma = 0;
    for (let sk of masyvas) {
        suma += sk;
    }
    return suma;
}

console.log('pirmas skaiciu masyvas-', skaiciuSuma(skaiciai1));
console.log('antras skaiciu masyvas-', skaiciuSuma(skaiciai2));

let skaiciu1Suma = skaiciuSuma(skaiciai1);
let skaiciu2Suma = skaiciuSuma(skaiciai2);

if (skaiciu1Suma > skaiciu2Suma) { 
    console.log('pirmas skaiciu masyvas yra didesnis negu antras skaiciu masyvas');
} else { 
    console.log('antras skaiciu masyvas yra didesnis negu pirmas skaiciu masyvas');
};

console.log();
console.log('2 UŽDUOTIS');

let zodziai = ['bananas', 'ananasas', 'basasananasas',  'besikiskiakopusteliaudamasis', 'kopustas'];

const longestWord = zodziai.reduce((longest, current) => {
    return current.length > longest.length ? current : longest;
});

console.log(longestWord, 'yra ilgiausias zodis siame masyve');