let mygtukai = document.querySelectorAll('#kuris button');
console.log(mygtukai);

mygtukai.forEach(mygtukas => {
    // console.log(mygtukas);
    mygtukas.addEventListener('click', event => {
        // console.dir(event.target.textContent);
        let spanEl = document.querySelector('#kuris p span');
        spanEl.textContent = event.target.textContent
    })
});

let mygDidinti = document.getElementById('didinti');
let mygMazinti = document.getElementById('mazinti');
let counterEl = document.querySelector('#counteris p strong'); 

mygDidinti.addEventListener('click', () => {
    counterEl.textContent = parseInt(counterEl.textContent) + 1;
});

mygMazinti.addEventListener('click', () => {
    counterEl.textContent = parseInt(counterEl.textContent) - 1;
});

let blokas = document.getElementById('blokas')
blokas.addEventListener('click', () => {
    alert('labuka ;)')
})
blokas.addEventListener('mouseover', () => {
    // console.log('veikia');
    document.getElementById('slaptas').textContent = 'O_O'
})