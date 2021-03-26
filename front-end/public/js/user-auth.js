$(function () {
    const authSwitchLinks = document.querySelectorAll('.switch');
    const authModals = document.querySelectorAll('.auth .modal');
    const authWrapper = document.querySelector('.auth');
    const apiBaseUrl = 'http://localhost:8000/';
    const errorDiv = $('.error');
    const registerForm = $('form#register');
    const loginForm = $('form#login');


    // toggle auth modals
    authSwitchLinks.forEach(link => {
        link.addEventListener('click', () => {
            authModals.forEach(modal => modal.classList.toggle('active'));
        });
    });

    const register = () => {
        registerForm.on('submit', function (e) {
            e.preventDefault();
            const registerBtn = e.target[2];
            registerBtn.disabled = true;
    
            const userData = {
                "email": $('#email-register').val(),
                "password": $('#password-register').val()
            };
    
            $.ajax({
                type: "POST",
                url: `${apiBaseUrl}auth/create`,
                data: userData,
                dataType: "json",
                success: function (response) {
                    console.log('success: ', response);
    
                    if(response.Error)
                    {
                        errorDiv.addClass('show');
                        errorDiv.text(response.Error);

                        toggleDisable(registerBtn);
                        // Hide error Div after 10 secs
                        hideErrorDiv();

                    }else {
                        errorDiv.removeClass('show'); 
                    }
                },
                error: function (response) { console.log('error: ', response); }
            });
    
        });
    }

    const login = () => {
        loginForm.on('submit', function (e) {
            e.preventDefault();
            const loginBtn = e.target[2];
            loginBtn.disabled = true;
    
            const userData = {
                "email": $('#email-login').val(),
                "password": $('#password-login').val()
            };
    
            $.ajax({
                type: "POST",
                url: `${apiBaseUrl}auth/login`,
                data: userData,
                dataType: "json",
                success: function (response) {
                    console.log('success: ', response);
    
                    if(response.Error)
                    {
                        errorDiv.addClass('show');
                        errorDiv.text(response.Error);
                        
                        toggleDisable(loginBtn);

                        // Hide error Div after 10 secs
                        hideErrorDiv();
                        
                    }else {
                        errorDiv.removeClass('show'); 
                    }
                },
                error: function (response) { console.log('error: ', response); }
            });
    
        });
    }

    const hideErrorDiv = () => {

        setTimeout(() => {
            errorDiv.removeClass('show');
            errorDiv.text('');
        }, 10000);
    }

    const toggleDisable = (btn) => {
        setTimeout(() => {
            btn.disabled = false;
        }, 1800);
    }

    register();
    login();


});