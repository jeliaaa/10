$(document).ready(function(){
    $('#contact-form').submit(function(e){
        e.preventDefault();

        var name = $('#inp-name').val();
        var email = $('#inp-email').val();
        var message = $('#inp-message').val();
        
        if (name === "" || email ==="" || message === "") {
            $('#form-result').html(`
            <div class=\"alert alert-danger\">Fill out ALL of the fields</div>
            `);
        } else{
            $('#form-result').html(`
            <div class=\"alert alert-success\">Thank you for your feedback!</div>
            `);
            $('#inp-name').val('');
            $('#inp-email').val('');
            $('#inp-message').val('');
        }
    });
});