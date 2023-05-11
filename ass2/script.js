$(document).ready(function () {
  $("#contact-form").submit(function (e) {
    e.preventDefault();
    var name = $("#inp-name").val();
    var email = $("#inp-email").val();
    var message = $("#inp-msg").val();
    var res = $(" #result");
    if (name === "" || email === "" || message === "") {
      $("#result").html(`
            <div class=\"alert alert-danger\">Fill out ALL of the fields</div>
            `);
    } else {
      $("#result").html(`
            <div class=\"alert alert-success\">Thank You</div>
            `);

      $("#inp-name").val("");
      $("#inp-email").val("");
      $("#inp-msg").val("");
    }
  });
});
