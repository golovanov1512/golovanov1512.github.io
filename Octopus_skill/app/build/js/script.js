$(function() {
  var mouseX = 10,
    mouseY = 60,
    limitX = 10,
    limitY = 60;
  $(window).mousemove(function(e) {
    var offset = $(".octopus__eye").offset();
    mouseX = Math.min(e.pageX - offset.left, limitX);
    mouseY = Math.min(e.pageY - offset.top, limitY);
    if (mouseX < 0) mouseX = 0;
    if (mouseY < 0) mouseY = 0;
  });

  var follower = $(".octopus__pupil");
  var xp = 50,
    yp = 0;
  var loop = setInterval(function() {
    xp += (mouseX - xp) / 30;
    yp += (mouseY - yp) / 30;
    follower.css({ left: xp, top: yp });
  }, 10);
});
