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
          newRequestForm.reset();
        //   window.location.reload(true);
        }
      },
      error: function (response) {
        console.log("Error: ", response);
      },
    });


  });


  const loadTutorialRequests = () => {
      $.ajax({
          type: "GET",
          url: `${apiBaseUrl}tutorial-requests/show`,
          data: {},
          dataType: "JSON",
          success: function (response) {
              if(response.Error){
                return $('.content').append(
                    "<ul class='request-list'>"+ 
                        "<li>"+
                            "<span class='text'>No Tutorial Requests Found.</span>"+
                            "<div>"+
                            "<span class='votes'>-</span>"+
                            "<i class='material-icons upvote'>arrow_upward</i>"+
                            "</div>"+
                        "</li>"+
                    "</ul>"
              );
              }else {
                response.tutorialRequests.map(({_id, title, vote}) => {
                    return $('.content').append(
                        "<ul class='request-list'>"+ 
                            "<li>"+
                                "<span class='text'>"+title+"</span>"+
                                "<div>"+
                                "<span class='votes'>"+vote+"</span>"+
                                "<i class='material-icons upvote'>arrow_upward</i>"+
                                "</div>"+
                            "</li>"+
                        "</ul>"
                  );
              })
            
            }
          },
        error: function (response) {
            console.log('Error: ', response);
        }
      });
  }

  loadTutorialRequests();
});
