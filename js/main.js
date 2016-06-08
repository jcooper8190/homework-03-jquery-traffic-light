$('#stopButton').click(illuminateRed);
$('#slowButton').click(illuminateYellow);
$('#goButton').click(illuminateGreen);

function illuminateGreen() {
  clearLights();
  $('#goLight').css('backgroundColor', 'green');
}

function illuminateRed() {
  clearLights();
  $('#stopLight').css('backgroundColor', 'red');
}

function illuminateYellow() {
  clearLights();
  $('#slowLight').css('backgroundColor', 'yellow');
}

function clearLights() {
  $('#stopLight').css('backgroundColor', 'black');
  $('#slowLight').css('backgroundColor', 'black');
  $('#goLight').css('backgroundColor', 'black');
}