$(function () {
  const newRequestForm = document.querySelector("#new-request-form");

  newRequestForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const submitBtn = e.target[3];

    const tutorialRequestData = {
      title: $("#request").val(),
      vote: Number($("#vote").val()),
      user_id: $("#user_id").val(),
    };

    $.ajax({
      type: "POST",
      url: `${apiBaseUrl}tutorial-requests/create`,
      data: tutorialRequestData,
      dataType: "JSON",
      success: function (response) {
        submitBtn.disabled = true;

        if (response.Error) {
          // errorDiv.removeClass("error");
          errorDiv.addClass("show");
          response.code === 11000
            ? errorDiv.text("Request name must be unique.")
            : errorDiv.text(response.Error);

          hideErrorDiv();
          toggleDisable(submitBtn);
          
        } else {
          hideErrorDiv();
          errorDiv.addClass("success");
          errorDiv.text(response.Success);
          window.location.reload(true);
        }
      },
      error: function (response) {
        console.log("Error: ", response);
      },
    });
  });
});
