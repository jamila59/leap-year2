$(document).ready(function() {

  $("#submit").click(function(event) {

    var yearInput = parseInt($("input#year").val());

    event.preventDefault();

    var leapYear =  function leap() {
      if (yearInput % 4 === 0 || yearInput % 400 === 0) {
       return true;
      } else  {
        return false;
      };
    };

    $(".results").text(leapYear);

  });

});
