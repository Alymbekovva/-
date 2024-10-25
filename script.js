document.getElementById('registrationForm').addEventListener('submit', function (e) {
    e.preventDefault();
    
    let name = document.getElementById('name').value.trim();
    let email = document.getElementById('email').value.trim();
    let age = document.getElementById('age').value;
    let comments = document.getElementById('comments').value.trim();
    let errorMessages = document.getElementById('errorMessages');
    
    errorMessages.innerHTML = '';
    let isValid = true;

    if (name === '') {
        errorMessages.innerHTML += '<p>Пожалуйста, введите имя.</p>';
        isValid = false;
    }

    if (email === '') {
        errorMessages.innerHTML += '<p>Пожалуйста, введите email.</p>';
        isValid = false;
    }

    if (age === '' || age < 18 || age > 99) {
        errorMessages.innerHTML += '<p>Пожалуйста, введите возраст от 18 до 99.</p>';
        isValid = false;
    }

    if (isValid) {
        alert('Форма успешно отправлена!');
        this.reset();
    }
});
