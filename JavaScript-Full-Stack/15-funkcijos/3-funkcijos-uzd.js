console.log();
console.log('1 UŽDUOTIS');


let zodziai = ['lapas', 'namas', 'pusis', 'azuolas', 'medis', 'plyta']

function isvedimas(masyvas) {
    for (let i = 0; i < masyvas.length; i++) {
            let dom = masyvas[i];
            console.log(dom+'-'+dom.length);
        }
}

isvedimas(zodziai)

console.log();
console.log('2 UŽDUOTIS');

function skaiciuIsvedimas(masyvas) {
    for (let i = 0; i < masyvas.length; i++) {
        let dom = masyvas[i];
        let skKvadratas = masyvas[i].map(sk => sk**2);
        let skDalyba = masyvas[i].map(sk => sk/2);
        console.log(dom, '-', skKvadratas, skDalyba);
        
    }
}

let skaiciai1 = [];
let skaiciai2 = [];

for (let i = 0; i < 10; i++) {
    let ats = Math.floor(Math.random() * 10) + 1;
    skaiciai1.push(ats);
}

skaiciuIsvedimas(skaiciai1);






