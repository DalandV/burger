//
//
//
// User inputs burger into text box.
// user clicks submit button and the burger populates the left side of the screen along with a
// "Devour It" button that will move the burger to the right side of the screen.

$(function() {
  // Add a new burger to the database
  $(".create-form").on("submit", function(event) {
    event.preventDefault();
    console.log(
      $("#burger-input")
        .val()
        .trim()
    );
    var newBurger = {
      burger_name: $("#burger-input")
        .val()
        .trim(),
      devoured: 0
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(function() {
      console.log("created new burger");
      // Reload the page to get the updated list
      location.reload();
    });
  });
  $(".devour-btn").on("click", function(event) {
    event.preventDefault();

    var id = $(this).data("id");
    var devouredState = {
      devoured: 1
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: devouredState
    }).then(function() {
      console.log("Burger devoured");
      location.reload();
    });
  });
});
