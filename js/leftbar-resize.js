$(function(){
  /* Left bar resizing */
  (function(){
    var started_dragging = false,
        start_x;
    
    $('#leftbar_bottom .resizer').mousedown(function(e){
      e.preventDefault();
      started_dragging = true;
      start_x = e.pageX;
    });
    
    $('*').mouseup(function(e){
      e.preventDefault();
      started_dragging = false;
    });
    
    $('*').mousemove(function(e){
      e.preventDefault();
      if (started_dragging && e.pageX >= 190 && e.pageX <= ($(document).width()/2)) {
        var newX = e.pageX - start_x;
        start_x = e.pageX;
        $('#leftbar').css('width', $('#leftbar').width() + newX);
        $('#leftbar_bottom').css('width', $('#leftbar_bottom').width() + newX);
      }
    });
  })();
});