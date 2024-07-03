function open_card() {
  document.getElementById('outside').className = 'open-card';
}

function close_card() {
  document.getElementById('outside').className = '';
}

function open_secret() {
  document.getElementById('secret').className = 'open-secret';
}
function close_secret() {
  document.getElementById('inside').className = '';
}