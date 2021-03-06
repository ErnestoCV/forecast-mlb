function getValueById(id) {
  return document.getElementById(id).value;
}

function buildingValues() {
  const ID_FORECAST = 'forecast';
  const ID_RESULT = 'results';

  const forecast = getValueById(ID_FORECAST);
  const results = getValueById(ID_RESULT);

  let points = [];
  let bonus = [];
  let textareaForecast = '';

  function getArrayById(id) {
    const games = getValueById(id).split('\nBonus\n')[0].split('\n');
    bonus = getValueById(id).split('\nBonus\n')[1].split('\n'); // redeclare here is this intentionally?
    return [games, bonus];
  }

  if (forecast.length === 0 || results.length === 0) {
    alert('Arregle los datos');
  } else {
    const [myGames, myBonus] = getArrayById(ID_FORECAST);
    const [gamesResults, bonusResults] = getArrayById(ID_RESULT);

    // eslint-disable-next-line no-undef
    points = checkPoints(myGames, gamesResults);
    // eslint-disable-next-line no-undef
    bonus = bonusPoints(myBonus, bonusResults);

    // eslint-disable-next-line no-undef
    [points, textareaForecast] = buildingResultValues(points, bonus, myGames, myBonus);
  }

  return [points, textareaForecast];
}

function calculatePoints() {
  const [points, textareaForecast] = buildingValues();

  if (points.length !== 0) {
    document.getElementById('points').innerHTML = points;
    document.getElementById('forecast').value = textareaForecast;
    // eslint-disable-next-line no-undef
    document.getElementById('runs').innerHTML = convertPtsIntoRuns(points);
  }
}

function cleanElement(element, positionToClean, option) {
  const value = element.split(' ')[positionToClean].replace('(', '').replace(')', '');

  if (option === 'game') {
    return Number.parseInt(value, 10);
  }

  return value;
}
