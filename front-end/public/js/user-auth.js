$(function () {
    const authSwitchLinks = document.querySelectorAll('.switch');
    const authModals = document.querySelectorAll('.auth .modal');
    const authWrapper = document.querySelector('.auth');
    const apiBaseUrl = 'http://localhost:8000/';

    // toggle auth modals
    authSwitchLinks.forEach(link => {
        link.addEventListener('click', () => {
            authModals.forEach(modal => modal.classList.toggle('active'));
        });
    });

    $('form#register').on('submit', function (e) {
        event.preventDefault();

        const userData = {
            "email": $('#email').val(),
            "password": $('#password').val()
        };

        $.ajax({
            type: "POST",
            url: `${apiBaseUrl}auth/create`,
            data: userData,
            dataType: "json",
            success: function (response) {
                console.log('success: ', response);
            },
            error: function (response) { console.log('error: ', response); }
        });

    });
});