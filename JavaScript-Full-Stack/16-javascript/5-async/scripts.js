let mygtukai = document.querySelectorAll('.informacija .mygtukai button');
let atsakymoBlokas = document.querySelector('.informacija .turinys');

mygtukai.forEach((mygtukas) => {
    // console.log(mygtukas);
    mygtukas.addEventListener('click', () => {
        // console.log(mygtukas.attributes['data-file'].value);
        let failas = mygtukas.attributes['data-file'].value;
        fetch(failas).then(atsakymas => {
            // console.log("gautas atsakymas:", atsakymas);
            return atsakymas.json();
        }).then(duomenys => {
            console.log('atsakymas geras:', duomenys);
            switch (failas) {
                case 'projektai.json': spausdintiProjektus(duomenys); break;
            }
        }).catch(klaida => {
            console.log('atsakymas blogas:', klaida);
            atsakymoBlokas.innerHTML = `<p>Įvyko klaida.</p>`;
        });
    });
});

function spausdintiProjektus(projektai) {
    let html = '';
    for (const projektas of projektai) {
        // console.log(projektas);
        html += `<div class="projektas">
                    <h3>${projektas.pavadinimas}</h3>
                    <p>${projektas.aprasymas}</p>
                    <p><strong>Kaina:</strong> ${projektas.kaina} €</p>
                    <p>
                        <strong>Ar įgyvendintas:</strong>
                        ${projektas.ar_igyvendintas ? 'Taip': 'Ne'}
                    </p>
                </div>`;
        // html += '<div class="projektas">';
        // html += '<h3>' + projektas.pavadinimas + '</h3>';
        // html += '</div>';
    }
    atsakymoBlokas.innerHTML = html;
}
