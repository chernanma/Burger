$(function(){
    // Onclick event when creating a new burger
    $(".create-form").on("submit", function(event){
        event.preventDefault();
        var newBurger = {
            burger_name: $("#bu").val().trim(),
            devoured : 0
        };
        // POST Call to create a new burger API
        $.ajax("/api/burgers",{
            type: "POST",
            data: newBurger
        }).then(function(){
            console.log("Burger has been created");
            location.reload();
        });
    });    

    // Onclick event when devouring burger
    $(".btn").on("click",function(event){
        let id = $(this).data("id");
        let newDevoured = $(this).data("newdevoured");
        console.log(newDevoured);

        let newBurgerDevoured = {
            devoured: newDevoured

        };
        console.log(newBurgerDevoured);

        // PUT call to API to update status of the burger
        $.ajax("/api/burgers/"+id,{
            type: "PUT",
            data: newBurgerDevoured
        }).then(function(){
            console.log("Burger has been devoured");
            location.reload();
        });
        
    });
});


