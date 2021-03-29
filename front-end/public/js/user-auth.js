$(function () {
  const authSwitchLinks = document.querySelectorAll(".switch");
  const authModals = document.querySelectorAll(".auth .modal");
  const authWrapper = document.querySelector(".auth");
  const signOut = document.querySelector(".sign-out");
  const registerForm = $("form#register");
  const loginForm = $("form#login");
  let userLogged = localStorage.getItem("isLoggedIn");

  // toggle auth modals
  authSwitchLinks.forEach((link) => {
    link.addEventListener("click", () => {
      authModals.forEach((modal) => modal.classList.toggle("active"));
    });
  });

  const register = () => {
    registerForm.on("submit", function (e) {
      e.preventDefault();
      const registerBtn = e.target[2];
      registerBtn.disabled = true;

      const userData = {
        email: $("#email-register").val(),
        password: $("#password-register").val(),
      };

      $.ajax({
        type: "POST",
        url: `${apiBaseUrl}auth/create`,
        data: userData,
        dataType: "json",
        success: function (response) {
          console.log("success: ", response);

          if (response.Error) {
            errorDiv.addClass("show");
            errorDiv.text(response.Error);

            toggleDisable(registerBtn);
            // Hide error Div after 10 secs
            hideErrorDiv();
          } else {
            localStorage.setItem("isLoggedIn", true);
            errorDiv.removeClass("show");
          }
        },
        error: function (response) {
          console.log("error: ", response);
        },
      });
    });
  };

  const login = () => {
    loginForm.on("submit", function (e) {
      e.preventDefault();
      const loginBtn = e.target[2];
      loginBtn.disabled = true;

      const userData = {
        email: $("#email-login").val(),
        password: $("#password-login").val(),
      };

      $.ajax({
        type: "POST",
        url: `${apiBaseUrl}auth/login`,
        data: userData,
        dataType: "json",
        success: function (response) {
          console.log("success: ", response);

          if (response.Error) {
            errorDiv.addClass("show");
            response.code === 11000
            ? errorDiv.text('Email must be unique.')
            : errorDiv.text(response.Error);
            toggleDisable(loginBtn);
            // Hide error Div after 10 secs
            hideErrorDiv();

          } else {
            localStorage.setItem("isLoggedIn", true);
            errorDiv.removeClass("show");
            window.location.reload(true);
          }

          isAuthenticated();
        },
        error: function (response) {
          console.log("error: ", response);
        },
      });
    });
  };

  const logout = () => {
    signOut.addEventListener("click", () => {
      localStorage.setItem("isLoggedIn", false);
      window.location.reload(true);
    });
  };

  console.log("User Logged In: ", userLogged);

  const isAuthenticated = () => {
    if (userLogged == 'true') {
        console.log('Logged');
      authWrapper.classList.remove("open");
      authModals.forEach((modal) => modal.classList.remove("active"));
    } else {
      authWrapper.classList.add("open");
      authModals[0].classList.add("active");
    }
  };

  register();
  login();
  logout();
  isAuthenticated();

});
