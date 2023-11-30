document.getElementById('calculate').addEventListener('click', function () {
    // console.log('clicked');
    let employeesCount = parseInt(document.getElementById('employees-count').value);
    let employeeMakesPerDay = parseInt(document.getElementById('employee-makes-per-day').value);
    let dayReservations = parseInt(document.getElementById('day-reservations').value);

    // console.log('employees-count', employeesCount);
    // console.log('employee-makes-per-day', employeeMakesPerDay);
    // console.log('day-reservations', dayReservations);

    let bakeryTotal = employeesCount * employeeMakesPerDay;
    let isBakeryGonnaMakeIt = bakeryTotal >= dayReservations;

    // let logInfo = {
    //     bakeryTotal,
    //     isBakeryGonnaMakeIt
    // };
    // console.log(logInfo);

    let resultsDiv = document.getElementById('results');
    // console.log(resultsDiv);
    resultsDiv.innerHTML = `<p><strong>Kepykla per dieną spės pagaminti:</strong> ${bakeryTotal} kepalų </p>`;
    resultsDiv.innerHTML += `<p><strong>Kepyklai reikia spėti pagaminti:</strong> ${dayReservations} kepalų </p>`;
    resultsDiv.innerHTML += `<p><strong>Ar spės pagaminti?</strong> ${isBakeryGonnaMakeIt ? 'Taip' : 'Ne'} </p>`;
});

document.getElementById('employees-count').addEventListener('keyup', function(event) {
    let inputValue = event.target.valueAsNumber;

    if (inputValue < 0) {
        event.target.classList.add('error');
        event.target.nextElementSibling.classList.add('show');
    } else {
        event.target.classList.remove('error');
        event.target.nextElementSibling.classList.remove('show');
    }
});

document.getElementById('employee-makes-per-day').addEventListener('keyup', function(event) {
    let inputValue = event.target.valueAsNumber;

    if (inputValue < 0) {
        event.target.classList.add('error');
        event.target.nextElementSibling.classList.add('show');
    } else {
        event.target.classList.remove('error');
        event.target.nextElementSibling.classList.remove('show');
    }
});

document.getElementById('day-reservations').addEventListener('keyup', function(event) {
    let inputValue = event.target.valueAsNumber;

    if (inputValue < 0) {
        event.target.classList.add('error');
        event.target.nextElementSibling.classList.add('show');
    } else {
        event.target.classList.remove('error');
        event.target.nextElementSibling.classList.remove('show');
    }
});

document.getElementById('reset').addEventListener('click', function() {
    // console.log("clicked");
    document.getElementById('employees-count').value = 0;
    document.getElementById('employee-makes-per-day').value = 0;
    document.getElementById('day-reservations').value = 0;
    document.getElementById('results').innerHTML = '<p>Kol kas nieko nėra.</p>'
});
