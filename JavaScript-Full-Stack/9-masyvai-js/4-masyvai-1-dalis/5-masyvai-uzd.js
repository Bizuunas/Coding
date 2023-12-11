console.log();
console.log('1 UŽDUOTIS');

let skaiciai = [3, 7, 2, 9, 6, 4]

let sk = skaiciai.find(s => s % 2 == 0);

console.log(sk);

console.log();
console.log('2 UŽDUOTIS');

let skaiciai1 = [-3, 0, 5, -8, 2, 7];

let sk1 = skaiciai1.find(s => s > 0)

console.log(sk1);

console.log();
console.log('3 UŽDUOTIS');

let skaiciai2 = [8, -2, 3, 4];
let skaiciai21 = [7, 5, 3];

let sk2 = skaiciai2.find(s => s < 0)

console.log(skaiciai2.indexOf(sk2));

let sk21 = skaiciai21.find(s => s < 0)

console.log(skaiciai21.indexOf(sk21));

// Trumpesnis budas
let skaiciai22 = [-8,1,-6,-2,5,7,-6,8,-3]
console.log(skaiciai22.findIndex(sk=>sk>0));

console.log();
console.log('4 UŽDUOTIS');

let skaiciai3 = [8, 12, 5, 3, 10, 15, 9]

let sk3 = skaiciai3.find(s => s >= 10)

console.log(skaiciai3.indexOf(sk3));

// Trumpesnis budas
let set = [8, 1, 15, 3, 15, 9];
console.log(set.findIndex(x => x >=10));

console.log();
console.log('5 UŽDUOTIS');

let skaiciai4 = [5, 9, 12, 7, 18, 4];

let sk4 = skaiciai4.find(s => s % 3 == 0 && s > 10)

console.log(sk4);

console.log();
console.log('6 UŽDUOTIS');

let skaiciai5 = [5, 8, -3, -6, 4, 7]

let sk5 = skaiciai5.find(s => s % 2 == 0 && s < 0)

console.log(sk5);

console.log();
console.log('7 UŽDUOTIS');

let skaiciai6 = [7, 5, 9, 8];
let skaiciai61 = [8, 9, -3, 2];

let sk6 = skaiciai6.every(s => s > 0);
let sk61 = skaiciai61.every(s => s > 0);

console.log(sk6, sk61);

// Trumpesnis budas
let set1 = [3,5,6,4,5,6,-7,-8,9];
console.log(set1.every(x => x > 0));

console.log();
console.log('8 UŽDUOTIS');

let skaiciai7 = [2, 4, 8, 6];
let skaiciai71 = [7, 3, 6, 8, 10];

let sk7 = skaiciai7.every(s => s % 2 == 0);
let sk71 = skaiciai71.every(s => s % 2 == 0);

console.log(sk7, sk71);

console.log();
console.log('9 UŽDUOTIS');

let skaiciai8 = [8, 20, 5, 97, 44];
let skaiciai81 = [20, 3, 7, 9];

let sk8 = skaiciai8.some(s => s > 5);
let sk81 = skaiciai81.some(s => s > 5);

console.log(sk8, sk81);

console.log();
console.log('10 UŽDUOTIS');

let skaiciai9 = [7, 2, -3, -6];
let skaiciai91 = [-8, -6, -4];

let sk9 = skaiciai9.some(function(skaicius9){
    return skaicius9 > 0
});

console.log(sk9);

let sk91 = skaiciai91.some(function(skaicius91){
    return skaicius91 > 0
});

console.log(sk91);

console.log();
console.log('11 UŽDUOTIS');

let zodziai1 = ['antis', 'ožka', 'arklys'];
let zodziai11 = ['abc', 'de', 'fgia'];

let zd1 = zodziai1.every(function(zodziai1){
    return zodziai1.length >= 3
});

console.log(zd1);


let zd11 = zodziai11.every(function(zodziai11){
    return zodziai11.length >= 3
});

console.log(zd11);

console.log();
console.log('12 UŽDUOTIS');

let zodziai2 = ['bananas', 'agurkas', 'pomidoras'];
let zodziai21 = ['kaunas', 'vilnius', 'klaipėda'];

let zd2 = zodziai2.some(z => z.startsWith('a', 'A'));
let zd21 = zodziai21.some(z => z.startsWith('a', 'A'));

console.log(zd2,zd21);

// Trumpesnis budas
let setZod = ['ožka', 'Arklys'];
console.log(setZod.some(x => x.toLowerCase().startsWith('a')));

console.log();
console.log('13 UŽDUOTIS');

// Trumpesnis budas
let setSkaic = [3,5,7,9,5,7,1,8,9];
console.log(setSkaic.every(x => x >= 0) && setSkaic.some(x => x % 2 == 0));

console.log();
console.log('14 UŽDUOTIS');

let set14 = [3,5,7,9,5,7,-1,8,9];
console.log(set14.filter(x => x >= 0));

console.log();
console.log('15 UŽDUOTIS');

let set15 = [5, 1, 4, 5, 1, 3, 4, 5, 2];
console.log(set15.filter(x => x <= 2));

console.log();
console.log('16 UŽDUOTIS');

let set16 = [5, -3, 2, 7, 8, -4, 1];
console.log(set16.filter(x => x%2==0 && x > 0));

console.log();
console.log('17 UŽDUOTIS');

let set17 = ['Belgija', 'Lietuva', 'Graikija', 'Bulgarija'];
console.log(set17.filter(x => x.toLowerCase().includes('b')));

console.log();
console.log('18 UŽDUOTIS');

let set18 = [3, 7, 2, 9, 6, 4];
console.log(set18.filter(x => x%2==0).map(x => x*2));

console.log();
console.log('19 UŽDUOTIS');

let set19 = [7, 8, 9, 2, 3];
console.log(set19.map(x => x+1));

console.log();
console.log('20 UŽDUOTIS');

let set20 = ['bananas', 'baba', 'klėtis'];
console.log(set20.map(x => x.toUpperCase()));

console.log();
console.log('21 UŽDUOTIS');

let set21 = [1,2,3,4,5,6];
console.log(set21.reduce((sum, x) => sum + x));

console.log();
console.log('22 UŽDUOTIS');

let set22 = [1, 2, 3, 4, 5];
console.log(set22.filter(x => x%2==0).reduce((sum, x) => sum + x));

console.log();
console.log('23 UŽDUOTIS');

let set23 = ['šuo', 'katė', 'gyvatė'];
console.log(set23.map(x => x[0].toUpperCase()));

console.log();
console.log('24 UŽDUOTIS');

let set24 = ['bananas', 'persikas', 'abc', 'de'];
console.log(set24.filter(x => x.length>5).length);

console.log();
console.log('25 UŽDUOTIS');

let set25 = ['obelis', 'liepa', 'eglė', 'uosis'];
console.log(set25.map(x => x.length));

console.log();
console.log('26 UŽDUOTIS');

let set26 = ['Tomas 34', 'Jonas 20', 'Gintarė 40', 'Inga 24'];
console.log(set26.map(x => x.split(' ')[0]));

console.log();
console.log('27 UŽDUOTIS');

let set27 = ['Tomas 34', 'Jonas 20', 'Gintarė 40', 'Inga 24'];
console.log(set27.map(x => parseInt(x.split(' ')[1])).reduce((sum, x) => sum + x));

console.log();
console.log('28 UŽDUOTIS');

let set28 = [74, 2, 54, 3, 1, 87];
console.log(set28.filter(x => x<5).map(x => -x+5));

console.log();
console.log('29 UŽDUOTIS');

let set29 = [7, 8, 10, 6, 5, 9];
console.log(set29.filter(x => x >= 8).length);

console.log();
console.log('30 UŽDUOTIS');

let set30 = ['bananas', 'obelis', 'automobilis'];
console.log(set30.map(x => (x.toLowerCase()).split('').filter(y => y == 'a').length).reduce((sum, z) => sum + z));
