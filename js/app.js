// Scroll to Top

$(document).on('click', 'a', function(event){
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
});


// Owl Carousel

$(document).ready(function() {
  $('.owl-carousel').owlCarousel({
    loop: true,
    center:true,
    navText: [$('.owl-next'),$('.owl-prev')],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        center:true,
        nav: false
      },
      600: {
        items: 3,
        center:true,
        nav: false
      },
      2000: {
        items: 3,
        loop: true,
        center:true
      }
    }
  })
})


// wow.js

var html=document.querySelector("html");html.className=html.className.replace(/\bno-js\b/,"js");var wow=new WOW({boxClass:"animate-block",animateClass:"active",offset:1,mobile:!0,live:!0});wow.init();


// email validation

$('#email-field').keyup(function(){
  if(this.value !== '' && !isValidEmailAddress(this.value)) {
    $('#email-validation-message').show();
    $('#email-submit').prop('disabled', true);
  } else {
    $('#email-validation-message').hide();
    $('#email-submit').prop('disabled', false);
  }
});

$('#email-submit').click(function(e){
  e.preventDefault();
  alert('Server unavaliable, try again later!');
});

//Checks if email address is valid.
function isValidEmailAddress(emailAddress) {
    var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
    return pattern.test(emailAddress);
};
