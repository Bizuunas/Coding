// Susikurkite masyvą, kuriame būtų saugomi
// mokymų programos temų pavadinimai (pvz:
// kintamieji, išvedimas, aritmetiniai veiksmai).
// Išveskite kiekvieną temą atskiroje eilutėje,
// prieš temos pavadinimą nurodant kuri tai tema.
// pvz:
// 1-a tema: kintamieji
// 2-a tema: išvedimas
// 3-a tema: aritmetiniai veiksmai
// ...

let pavadinimai = ['kintamieji', 'isvedimas', 'aritmetiniai veiksmai', 'ciklai', 'masyvai']

for (let i = 0; i < pavadinimai.length; i++) {
    console.log((i + 1)+'-a tema:', pavadinimai[i]);
    console.log();
}