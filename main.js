function calculatePoints() {

    const [points, textareaForecast] = buildingValues();

    if (points.length !== 0) {
        document.getElementById('points').innerHTML = points;
        document.getElementById('forecast').value = textareaForecast;
        document.getElementById('runs').innerHTML = convertPtsIntoRuns(points);
    }

}

function buildingValues() {
    const ID_FORECAST = 'forecast';
    const ID_RESULT = 'results';

    const forecast = getValueById(ID_FORECAST);
    const results = getValueById(ID_RESULT);

    let points = [];
    let bonus = [];
    let textareaForecast = '';    


    if (forecast.length === 0 || results.length === 0) {
        alert('Arregle los datos')
    } else {

        const [myGames, myBonus] = getArrayById(ID_FORECAST);
        const [gamesResults, bonusResults] = getArrayById(ID_RESULT);

        points = checkPoints(myGames, gamesResults);
        bonus = bonusPoints(myBonus, bonusResults);

        [points, textareaForecast] = buildingResultValues(points, bonus, myGames, myBonus);


    }

    return [points, textareaForecast];
}

function getArrayById(id) {
    let games = getValueById(id).split('\nBonus\n')[0].split('\n');
    let bonus = getValueById(id).split('\nBonus\n')[1].split('\n');

    return [games, bonus];

}

function getValueById(id) {
    return document.getElementById(id).value;
}

function cleanElement(element, positionToClean, option) {

    const value = element.split(' ')[positionToClean].replace('(', '').replace(')', '');

    if (option === 'game') {
        return Number.parseInt(value);
    }

    return value;

}



