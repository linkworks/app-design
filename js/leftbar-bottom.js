$(function(){
  $('#leftbar_bottom ul li').live('mousedown', function(){
    $(this).addClass('active');
  }).live('mouseup', function(){
    $(this).removeClass('active');
  });
});