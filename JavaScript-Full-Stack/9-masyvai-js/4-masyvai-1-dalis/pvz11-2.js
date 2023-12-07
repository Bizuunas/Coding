let skaiciai = [3, 4, 6, 3, 7, 1, 2, 5, 9];

let lyginiuSuma = 0;
let lyginiuKiekis = 0;


for (let i = 0; i < skaiciai.length; i++) {
    if (skaiciai[i] % 2 == 0 && skaiciai[i] !=0) {
        lyginiuSuma += skaiciai[i];
        lyginiuKiekis++;
    }
    
}

let vidurkis = lyginiuSuma / lyginiuKiekis;

console.log('lygyniu skaiciu vidurkis:', vidurkis);