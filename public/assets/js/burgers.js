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

    $(".btn").on("click",function(event){
        let id = $(this).data("id");
        let newDevoured = $(this).data("newdevoured");
        console.log(newDevoured);

        let newBurgerDevoured = {
            devoured: newDevoured

        };
        console.log(newBurgerDevoured);
        $.ajax("/api/burgers/"+id,{
            type: "PUT",
            data: newBurgerDevoured
        }).then(function(){
            console.log("Burger has been devoured");
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

