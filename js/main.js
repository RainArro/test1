var scrolled = 0;
$(document).ready(function() {

  $(".navbar-toggle").click(function() {
    $(this).toggleClass('open');

  });

  $(".form-control").focus(function() {
    $(this).parent().addClass("focus")
  });
  $(".form-control").blur(function() {
    $(this).parent().removeClass("focus")
  });


});
$('.sidebar-inner').css("height", ($('.article').height() - 115));
$(window).resize(function() {
  $('.sidebar-inner').css("height", ($('.article').height() - 115));
});
