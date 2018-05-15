$(document).ready(function() {
  $(".devour-form").on("submit", function(event){
    event.preventDefault();

    var burger_id = $(this).children(".burger_id").val();
    //  start ajax
    $.ajax({
      method: "PUT",
      url: "/burgers/update/" + burger_id
    }).then(function(data){
      location.reload();
    })
  })
})