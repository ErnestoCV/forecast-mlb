function buildingPoints(points, description) {
  let sumPoints = 0;
  let textareaForecast = '';

  let index = 0;

  while (index < description.length && description[index] !== '') {
    textareaForecast += `${description[index]} [${points[index]}]\n`;
    sumPoints += points[index];

    index += 1;
  }

  return [sumPoints, textareaForecast];
}

function buildingBonus(bonus, description) {
  let sumPoints = 0;
  let textareaForecast = '';

  let index = 0;

  while (index < description.length && description[index] !== '') {
    textareaForecast += `${description[index]} [${bonus[index]}]\n`;
    sumPoints += bonus[index];

    index += 1;
  }

  return [sumPoints, textareaForecast];
}

function buildingResultValues(points, bonus, myGames, myBonus) {
  const [totalPoints, textareaGames] = buildingPoints(points, myGames);
  const [totalBonusPoints, textareaBonus] = buildingBonus(bonus, myBonus);

  return [totalPoints + totalBonusPoints, `${textareaGames}\nBonus\n${textareaBonus}`];
}

function buildingTextarea(points, game) {
  return `${game} [${points}]\n`;
}
