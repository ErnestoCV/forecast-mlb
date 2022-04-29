
function bonusPoints(bonus, bonusResults) {

    let index = 0;
    let points = [];

    while (index < bonus.length && bonus[index] !== '') {

        if (cleanElement(bonus[index], bonus[index].split(' ').length - 1, 'bonus').toLowerCase() === cleanElement(bonusResults[index], bonusResults[index].split(' ').length - 1, 'bonus').toLowerCase()) {

            points.push(5);

        } else {

            points.push(0);
        }

        index++;

    }

    return points;

}