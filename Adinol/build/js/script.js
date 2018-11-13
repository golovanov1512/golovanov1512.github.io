$(document).ready(function() {
  // $(".btn__scroll").on("click", function(event) {
  //   event.preventDefault();
  //   var id = $(this).attr("href"),
  //     top = $(id).offset().top;
  //   $("body,html").animate({ scrollTop: top }, 1000);
  // });
  $(".slide").slick({
    infinite: true,
    arrows: false,
    slidesToShow: 1,
    centerMode: true,
    slidesToScroll: 1,
    variableWidth: true
  });

  $(".price__item .price__title").on("click", vacancies);
  function vacancies() {
    $(this)
      .find(".price__title")
      .toggleClass("vacancies__title__arrow--active");
    $(this)
      .next()
      .slideToggle(100);
  }
});

// dots: true,
//     infinite: true,
//     speed: 500,
//     centerMode: true,
//     slidesToShow: 1,
//     variableWidth: true,
//     focusOnSelect: true,
