console.log("We are linked")

$(document).ready(function() {
  //  on click events for #text-enter button aka submit
  $("#text-enter").on("click", function(e) {
    e.preventDefault()
    var newBurger = {
      burger_name: $("#enter_text").val()
    }
    console.log(newBurger.burger_name)
  })

  $("#devour-btn").on("click", function() {
    updateDevoured()
  })
//  pseudo code for updating devoured status 
  function updateDevoured(Burger) {
    $.ajax({
      method: "UPDATE",
      url: "/burgers/update/:id " + id,
      data: Burger
    })
  }
})
