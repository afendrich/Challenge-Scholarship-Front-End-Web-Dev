// Select color input
// Select size input
// When size is submitted by the user, call makeGrid()

//$('#sizePicker').on('submit', function makeGrid() {
$('#sizePicker').submit(function makeGrid() {
		event.preventDefault();

		//clears the canvas
		$('#pixelCanvas tr').remove();

		//sets row = user input height
		var row = $('#inputHeight').val();

		//sets column = user input width
		var column = $('#inputWidth').val();

		//sets grid to empty string
		var grid = "";

		//nested forLoop that builds canvas
		for (x = 1; x <= row; x++) {
				grid += "<tr>";
						for (y = 1; y <= column; y++) {
							grid += "<td></td>"
						}	grid += "</tr>";
		}
		//appends canvas to html
		$('#pixelCanvas').append(grid);
});

//Click event to adjust td css to color selected
$('#pixelCanvas').on('click', 'td', function() {
		$(this).css('background-color' , $('#colorPicker').val());
});
//not sure why this does not work, vs the above code
//it changes the entire canvas to the color chosen
//$('#pixelCanvas').click('td', function () {
//	$(this).css('background-color' , $('#colorPicker').val());
//});
