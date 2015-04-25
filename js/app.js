$(document).ready(function() {
  var height = $(window).height();
  var width = $(window).width();

  if (width < 600)
    $('.Layout-sidebar').height(height * 0.9);
});
