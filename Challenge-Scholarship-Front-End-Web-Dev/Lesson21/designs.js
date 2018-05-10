$(document).ready(function() {
    function makeGrid(x,y) {
        console.log('makeGrid Function');
        let grid = "";                                           //sets grid to empty string
        for (a = 1; a <= y; a++) {                               //nested forLoop that builds canvas
            grid += "<tr>";
            for (b = 1; b <= x; b++) {
                grid += "<td></td>"
            }	grid += "</tr>";
        }
        $('#pixelCanvas').append(grid);                         //appends canvas to html

    }
    function clearGrid() {
        console.log('clearGrid Function');                      //clears the canvas
        $('#pixelCanvas tr').remove();
    }

    $('.playSnakeButton').on('click', function() {
        console.log('PlaySnake Button Clicked');
        clearGrid();
        makeGrid(10,10);
        $('.gridSizeContainer').hide("slow", function() {       //hide this container
                                                                //animation complete
        });
        $('.colorContainer').hide("slow", function() {          //hide this container
            //animation complete
        });
        //
        //
        $('.title').replaceWith('<div class="title">S N A K E</div>');
        $('.designCanvas').replaceWith('');                //removes "Design Canvas" text

        $('.title').append('<input type="button" class="pixelArtButton"  id="playSnakeButton" value="Pixel Art">');
    });

//first attempt to have Pixel Button animates back choose grid size/color picker
    $('.borderALL').on('click', '#playSnakeButton', function() {
        console.log('Pixel Art Button Clicked');
        //
        $('.gridSizeContainer').show("slow", function() {       //show this container
                                                                //animation complete
        });
        $('.colorContainer').show("slow", function() {          //show this container
            //animation complete
        });
        //
        //
        //
    });

//
//
//
//
//$('#sizePicker').on('submit', function makeGrid() {
    $('#sizePicker').submit(function(event) {
        event.preventDefault();
        console.log("Submit from Choose Grid Clicked")
        //sets row = user input height
        //sets column = user input width
        let x = $('#inputWidth').val();
        let y = $('#inputHeight').val();
        clearGrid();
        makeGrid(x,y);
    });

//mouse event for painting canvas
    $('#pixelCanvas').on('click', 'td', function() {
        $(this).css('background-color' , $('#colorPicker').val());
    });

// continuous color
    let down = false;
    $(document).mousedown(function() {
        down = true;
    }).mouseup(function() {
        down = false;
    });
    $('#pixelCanvas').on('mousedown mousemove', 'td', function(){
        if(down) {
            let colorPicker = $('#colorPicker').val();
            $(this).css('background-color', colorPicker);
        }
    });


//INCREMENT / DECREMENT VALUE BY 1 TO HEIGHT/WIDTH INPUT

//HEIGHT
//add value by 1 to input
    $('.addHeight').click(function addHeight () {
        const heightValue = $('#inputHeight').val();
        const newHeight = parseInt(heightValue) + 1;
        $('#inputHeight').val(newHeight);
    });
//decrease value by 1
    $('.subtractHeight').click(function subtractHeight () {
        const heightValue = $('#inputHeight').val();
        const newHeight = parseInt(heightValue) - 1;
        $('#inputHeight').val(newHeight);
    });

//WIDTH
//add value by 1 to input
    $('.addWidth').click(function addWidth () {
        let widthValue = $('#inputWidth').val();
        let newWidth = parseInt(widthValue) + 1;
        $('#inputWidth').val(newWidth);
    });
//decrease value by 1 to input
    $('.subtractWidth').click(function subtractWidth () {
        let widthValue = $('#inputWidth').val();
        let newWidth = parseInt(widthValue) - 1;
        $('#inputWidth').val(newWidth);
    });
// erase on double click
    $('#pixelCanvas').on('dblclick', 'td', function() {
        $(this).css('background-color', '');
    });

});



