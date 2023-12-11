console.log();
console.log('PIRMA UŽDUOTIS');

let valgiai = ['mesainis', 'steakas', 'makaronai', 'ryziai', 'plovas', 'troskinys'];

valgiai.push('KOTLETAS');
valgiai.unshift('BURGERIS');
valgiai.splice(4, -4, 'LAZANIJA');

for (let i = 0; i < valgiai.length; i++) {
    console.log('Maistas-', valgiai[i]);
}


valgiai.pop('KOTLETAS');
valgiai.shift('BURGERIS');
valgiai.splice(3, 1);

for (let i = 0; i < valgiai.length; i++) {
    console.log('Apdorotas maistas-', valgiai[i]);
}

console.log();
console.log('ANTRA UŽDUOTIS');

let masyvas = [];

for (let i = 0; i < 10; i++) {
    let ats = Math.floor(Math.random() * 10) + 1;
    masyvas.push(ats);
}

for (let i = 0; i < masyvas.length; i++) {
    console.log('Aštuonetas-', masyvas[i], masyvas[i] == 8);
}

console.log('Masyvas aštuoneto reikšmę:', masyvas.includes(8));


console.log();
console.log('TREČIA UŽDUOTIS');

let masyvas2 = ['namas', 'lapas', 'pusis', 'kaktusas', 'vabalas', 'gaidys', 'kiskis', 'paukstis']

console.log(masyvas2);

console.log();

let tekstas = masyvas2.join(', ');
console.log(tekstas);

console.log();
console.log('KETVIRTA UŽDUOTIS');

let sakinys = "greitai visi sves kaledas ir gaus dovanu";
let zodziai = [];

zodziai = sakinys.split(' ');

console.log(sakinys);

for (let i = 0; i < zodziai.length; i++) {
    console.log(zodziai[i]);
}

console.log();
console.log('PENKTA UŽDUOTIS');

let pazymiai = [7,5,6,3,8,4,9,2,5,6,9,10,10,8,4,5,7,10,3,2,1,8,9,5,4,10]

pazymiai.sort(function(a, b){return a - b});

console.log(pazymiai);

let geriausiPaz = pazymiai.slice(-3);

console.log(geriausiPaz);

console.log();
console.log('ŠEŠTA UŽDUOTIS');

let bioMok = ['petras', 'luka', 'lukas', 'antanas', 'karolis', 'kostas', 'alisa', 'antanina']
let matMok = ['rimas', 'haroldas', 'tomas', 'mantas', 'martynas', 'karolina', 'atene', 'martyna']

let mokVardai = [...bioMok, ...matMok];

console.log(mokVardai);

console.log();
console.log('SEPTINTA UŽDUOTIS');

let pirmoSem = ['matematika', 'anglu', 'lietuviu', 'rusu', 'biologija', 'fizika', 'chemija']
let antroSem = ['istorija', 'geografija', 'ekonomika', 'psichologija', 'etika', 'vokieciu', 'IT']

let visosPask = [...pirmoSem, ...antroSem]

console.log(visosPask);

console.log();
console.log('AŠTUNTA UŽDUOTIS');

let spalva = ['raudona','žalia','geltona','balta',]
let spalva2 = [...spalva]

spalva.splice(0,100)
console.log('spalva-',spalva,'spalva2-',spalva2);

console.log();
console.log('DEVINTA UŽDUOTIS');

let array = ['Vilnius', 'Kaunas', 'Klaipėda', 'Šiauliai'];
let city = 'Klaipėda';
let position = array.indexOf(city)+1;
console.log(`Reikšmės "${city}" pozicija masyve: ${position} (techniškai ${position-1})`);

console.log();
console.log('DEŠIMTA UŽDUOTIS');

let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3, 4, 2];

const hasDuplicates = (array) => {
    if ((new Set(array)).size !== array.length) {
        console.log('Array has duplicates');
    } else {
        console.log('Array does NOT have duplicates');
    }
}

hasDuplicates(arr1);
hasDuplicates(arr2);

console.log();
console.log('VIENUOLIKTA UŽDUOTIS');

let arr = [1, 2, 3, 4, 5, 6];
let arrhalf = arr.length / 2
let newArr = [];

for (let i = 1; i <= arrhalf; i++) {
    newArr.push(arr.splice(0, 2))
}

console.log(newArr);

console.log();
console.log('DVYLIKTA UŽDUOTIS');

let someStr = '01410';

let someStrArr = someStr.split('');
let someStrArrReverse = someStrArr.slice().reverse();
let isPolindrom = true;

for (let i = 0; i <= someStr.length; i++) {
    if (someStrArr[i] != someStrArrReverse[i]) {
        console.log('Skaicius NERA yra palindromis');
        isPolindrom = false;
        break;
    }
}

if (isPolindrom) {
    console.log('Skaicius yra palindromis');
}

console.log();
console.log('TRYLIKTA UŽDUOTIS');

let arr131 = [1, 5, 6, 9, 5, 4, 3, 6, 8, 4, 5, 2, 1, 78, 2];
let arr132 = [5, 8, 9, 6, 3, 25, 6, 8, 7, 4, 1, 2, 3, 5, 2, 10];
let arr133 = [];

arr133 = new Set([...arr131, ...arr132]);

console.log(arr133);

console.log();
console.log('KETURIOLIKTA UŽDUOTIS');

let arr141 = [1, 5, 6, 9, 5, 4, 3, 6, 8, 4, 5, 2, 1, 78, 2];
let arr142 = [5, 8, 9, 6, 3, 25, 6, 8, 7, 4, 1, 3, 5, 10];
let arr143 = [];

arr143 = [...new Set(arr141.filter(value => arr142.includes(value)))];

console.log(arr143);

console.log();
console.log('PENKIOLIKTA UŽDUOTIS');

let arr15 = [1, 2, 5, 6, 8, 4, 5, 69, 3, 4, 5, 4];
let smallestNum = 1;

arr15.sort((a, b) => a - b);

while (arr15.includes(smallestNum)) {
    smallestNum++
}

console.log(smallestNum);

console.log();
console.log('ŠEŠIOLIKTA UŽDUOTIS');

let arr161 = [1, 2, 5, 6, 8, 4, 5, 69, 3, 4, 5, 4];
let arr162 = [];
let arr163 = [];

console.log("Pirmas arejus");
console.log(arr161);

//su for ciklu
console.log("Reversed arejus su for ciklu");
for (let i = arr161.length-1; i >= 0; i--) {
    arr162.push(arr161[i])
}

console.log(arr162);

//be ciklo
console.log("Reversed arejus BE ciklo");
arr163 = [...arr161].reverse();

console.log(arr163);