const CORRECT_CASE = 2;
const WRONG_CASE = 0;

function checkTeamWin(myResult, result) {
  // eslint-disable-next-line no-undef
  return cleanElement(myResult, 0, 'game') === cleanElement(result, 0, 'game') ? CORRECT_CASE : WRONG_CASE;
}

function getMyRunsAndResultRuns(myResult, result) {
  // eslint-disable-next-line no-undef
  return [cleanElement(myResult, myResult.split(' ').length - 1, 'game'), cleanElement(result, result.split(' ').length - 1, 'game')];
}

function checkEqualNumberOfRuns(myResult, result) {
  const [myRuns, resultRuns] = getMyRunsAndResultRuns(myResult, result);

  return myRuns === resultRuns ? CORRECT_CASE : WRONG_CASE;
}

function checkRunUpOrDown(myResult, result) {
  const [myRuns, resultRuns] = getMyRunsAndResultRuns(myResult, result);

  if (myRuns <= 8 && resultRuns <= 8) {
    return CORRECT_CASE;
  }

  if (myRuns >= 9 && resultRuns >= 9) {
    return CORRECT_CASE;
  }

  return WRONG_CASE;
}

function checkPoints(games, gamesResults) {
  let index = 0;
  const points = [];

  while (index < games.length && games[index] !== '') {
    points[index] = checkTeamWin(games[index], gamesResults[index])
            + checkRunUpOrDown(games[index], gamesResults[index])
            + checkEqualNumberOfRuns(games[index], gamesResults[index]);

    index += 1;
  }

  return points;
}
