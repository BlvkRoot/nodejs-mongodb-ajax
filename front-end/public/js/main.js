const requestModal = document.querySelector('.new-request');
const requestLink = document.querySelector('.add-request');

requestLink.addEventListener('click', () => requestModal.classList.add('open'));

requestModal.addEventListener('click', (event) => {
    if(event.target.classList.contains('new-request'))
        requestModal.classList.remove('open')
});


