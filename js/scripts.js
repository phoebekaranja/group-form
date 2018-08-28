$(document).ready(function() {
    $("#blanks form").submit(function() {
        $("#person1").text("");
        $("#level").text("");
        $("#address").text("");
        event.preventDefault();
    });
})
