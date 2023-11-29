let blokas3Span = document.querySelector('#blokas3 p span');
let blokas3Mygtukas = document.querySelector('#blokas3 button');
let skaicius = blokas3Span

blokas3Mygtukas.addEventListener('click', event => {
    // console.log('paspaudziau');
    if (skaicius % 2 == 0) {
        blokas3Span.style.backgroundColor = 'green';
        blokas3Span.style.color = 'white';
    } else {
        blokas3Span.style.backgroundColor = 'red';
        blokas3Span.style.color = 'white';
    }
});

let blokas4input = document.querySelector('#blokas4 input');

blokas4input.addEventListener('input', event => {
    // console.log('ivyko pokytis');
    document.getElementById('rangeReiksme').textContent = blokas4input.valueAsNumber;

    let rangeKoks = document.getElementById('rangeKoks');

    if (blokas4input.valueAsNumber % 2 == 0) {
        rangeKoks.textContent = 'Lyginis';
        rangeKoks.style.color = 'green';
    } else {
        rangeKoks.textContent = 'Nelyginis';
        rangeKoks.style.color = 'red';
    }
})
