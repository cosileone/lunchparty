$(function sm_init() {
  StackMob.init({
  publicKey: '7f111c65-e4b7-4c0b-9055-111b77194954',
  apiVersion : 0
  })
});

$(function dragDrop() {
  $( "#token" ).draggable();
  $( ".graphBar" ).droppable({
    drop: function( event, ui ) {
  	$(this).animate({"height": "+=30px"});
    }
  });
});