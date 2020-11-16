$(function(){
    $(".create-form").on("submit", function(event){
        event.preventDefault();
        var newBurger = {
            burger_name: $("#bu").val().trim(),
            devoured : 0
        };
        $.ajax("/api/burgers",{
            type: "POST",
            data: newBurger
        }).then(function(){
            console.log("Burger has been created");
            location.reload();
        });
    });    
});

// <form class="create-form">

// <div class="form-group">
//   <label for="bu">Burger Name:</label>
//   <input type="text" id="bu" name="burger_name">
// </div>
// <button type="submit">Add Burger</button>
// </form>

