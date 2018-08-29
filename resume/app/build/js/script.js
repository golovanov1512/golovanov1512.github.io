$(document).ready(function() {
  $(".btn__scroll").on("click", function(event) {
    event.preventDefault();
    var id = $(this).attr("href"),
      top = $(id).offset().top;
    $("body,html").animate({ scrollTop: top }, 1000);
  });

  $(".promo__slide").slick({
    arrows: false,
    fade: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000
  });
});
