function convertPtsIntoRuns(points) {
  if (points <= 10) {
    return 0;
  }

  if (points <= 13) {
    return 1;
  }

  if (points <= 16) {
    return 2;
  }

  if (points <= 19) {
    return 3;
  }

  if (points <= 22) {
    return 4;
  }

  if (points <= 25) {
    return 5;
  }

  if (points <= 28) {
    return 6;
  }

  if (points <= 31) {
    return 7;
  }

  if (points <= 34) {
    return 8;
  }

  if (points <= 37) {
    return 9;
  }

  return 13;
}
