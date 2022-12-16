$( ".draggable" ).draggable({ snap: true, revert:"invalid", helper: 'clone'});
$(".dropzone").droppable({
    drop: function (event, ui) {
        // Move draggable into droppable
        draggable.clone().appendTo(droppable);
        //draggable.css({top: '5px', left: '5px'});
    }
});