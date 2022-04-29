
function buildingResultValues(points, bonus, myGames, myBonus) {
    let [totalPoints, textareaGames] = buildingPoints(points, myGames);
    let [totalBonusPoints, textareaBonus] = buildingBonus(bonus, myBonus);


    return [totalPoints + totalBonusPoints, textareaGames + "\nBonus\n" + textareaBonus];

}


function buildingPoints(points, description) {

    let sumPoints = 0;
    let textareaForecast = '';

    let index = 0;

    while (index < description.length && description[index] !== '') {

        textareaForecast += description[index] + " [" + points[index] + "]\n";
        sumPoints += points[index];

        index++;

    }

    return [sumPoints, textareaForecast];
}

function buildingBonus(bonus, description) {
    let sumPoints = 0;
    let textareaForecast = '';

    let index = 0;

    while (index < description.length && description[index] !== '') {

        textareaForecast += description[index] + " [" + bonus[index] + "]\n";
        sumPoints += bonus[index];

        index++;

    }

    return [sumPoints, textareaForecast];
}

function buildingTextarea(points, game) {
    return game + " [" + points + "]\n";
}
