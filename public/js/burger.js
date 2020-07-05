// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".devoured").on("click", function(event) {
      var id = $(this).attr("id");
      var burgerData = $(this).data("devour");
        console.log("Update",id);
      var data = {
        devoured: true
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: data
      }).then(
        function() {
          console.log("Burger has been updated", data);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurger = {
        name: $("#burger").val().trim(),
       devoured: $("[name=devour]:checked").val().trim()
       
      };
      console.log(newBurger);
      if (newBurger.name != ""){

      
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("Placed an Order");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    }
    else{
        alert("Burger name cannot be empty")
    }
    });

    $(".delete-burger").on("click", function(event) {
      var id = $(this).attr("id");
    console.log("delete",id)
      // Send the DELETE request.
      $.ajax("/api/burgers/" + id, {
        type: "DELETE"
      }).then(
        function() {
          console.log("deleted a Burger", id);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  