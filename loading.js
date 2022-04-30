function saveResults() {
  localStorage.setItem('results', document.getElementById('results').value);
}

function loaded() {
  document.getElementById('results').value = localStorage.getItem('results');
}
