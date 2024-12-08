document.getElementById('switch-to-signup').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('login-form').classList.add('hidden');
    document.getElementById('signup-form').classList.remove('hidden');
});

document.getElementById('switch-to-login').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('signup-form').classList.add('hidden');
    document.getElementById('login-form').classList.remove('hidden');
});

//Manda pra home

document.getElementById('backhome-btn').addEventListener('click', function () {
    window.location.href = '/home';
});