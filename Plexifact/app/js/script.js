$(window).scroll(function() {
  var Scroll = $(this).scrollTop();
  if (Scroll > 20) {
    $(".header").addClass("header--scroll");
  } else {
    $(".header").removeClass("header--scroll");
  }
});

$(".navigation").on("click", function(e) {
  e.preventDefault();
  $(this).addClass("open");
  $(".mobile").toggleClass("open");

  if ($(".mobile").hasClass("open")) {
    $(".menu__close").on("click", function(e) {
      e.preventDefault();
      $(".mobile").removeClass("open");
    });
  }
});

$(document).ready(function() {
  $(".menu, .main").on("click", "a", function(event) {
    event.preventDefault();
    var id = $(this).attr("href"),
      top = $(id).offset().top;
    $("body,html").animate({ scrollTop: top }, 1500);
  });
});

$(".arrow__left").on("click", function() {
  goSlider();
});

$(".arrow__right").on("click", function() {
  goSlider("plus");
});

$(".vacancies__title").on("click", vacancies);
function vacancies() {
  $(this)
    .find(".vacancies__title__arrow")
    .toggleClass("vacancies__title__arrow--active");
  $(this)
    .next()
    .slideToggle(1000);
}

function goSlider(znak) {
  var array = $(".advantages").children(".advantages__slide");
  $.each(array, function(index, value) {
    el_value = $(value).hasClass("advantages__slide--active");
    var array_length = array.length - 1;
    if (el_value == true) {
      if (znak == "plus") {
        var next__active = index == array_length ? 0 : index + 1;
      } else {
        var next__active = index == 0 ? array_length : index - 1;
      }

      left_number = next__active == array_length ? 0 : next__active + 1;
      right_number = next__active == 0 ? array_length : next__active - 1;
      change_text(next__active);
      active_el(next__active);
      change_title(next__active, left_number, right_number);
      $(".advantages")
        .children(".advantages__slide--active")
        .removeClass("advantages__slide--active");
      $(".advantages")
        .children(".advantages__slide")
        [next__active].classList.add("advantages__slide--active");
      return false;
    }
  });
}

function change_text(number) {
  var text_array = $(".advantages__methodology__item");
  $(
    ".advantages__methodology__item.advantages__methodology__item--active"
  ).removeClass("advantages__methodology__item--active");
  text_array[number].classList.add("advantages__methodology__item--active");
}

function active_el(number) {
  var number_array = $(".advantages__methodology__circle--small li");
  $(".advantages__methodology__circle--small li.active").removeClass("active");
  number_array[number].classList.add("active");
}

function change_title(center, left, right) {
  $(".circle__item").removeClass("circle__item--top");
  $(".circle__item").removeClass("circle__item--left");
  $(".circle__item").removeClass("circle__item--right");
  $(".circle__item").removeClass("active");
  var title_array = $(".circle__item");
  title_array[center].classList.add("circle__item--top");
  title_array[center].classList.add("active");
  title_array[left].classList.add("circle__item--left");
  title_array[left].classList.add("active");
  title_array[right].classList.add("circle__item--right");
  title_array[right].classList.add("active");
}
