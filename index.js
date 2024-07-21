const button = document.querySelectorAll('.color');
const body = document.querySelector('body');

// looping on button

button.forEach(function(btn) {
    btn.addEventListener('click' , function(e) {
        if (e.target.id === 'grey') {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'white') {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'blue') {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'yellow') {
            body.style.backgroundColor = e.target.id;
        }
    });
});