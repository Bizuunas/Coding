fetch('./duomenys.json').then(response => {
    console.log(response);
    return response.json();
}).then(data => {
    console.log('resolved', data);
    document.querySelector('#uzduotys p').style.display = 'none';
    let liitems = data.map(item => `<li>${item.uzduotis}</li>`);
    let liZmones = data.map(zmogus => `<li>${zmogus.kas}</li>`);
    // console.log(liitems);
    let html = `<ul>${liitems.join('')} turi ${liZmones.join('')}</ul>`;
    // let htmlZmones = `<ul>${liZmones.join('')}</ul>`
    console.log(html);
    document.querySelector('#uzduotys').innerHTML += html;
}).catch(error => {
    console.log('rejected', error);
});

