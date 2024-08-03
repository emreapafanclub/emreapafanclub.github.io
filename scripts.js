document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('success-message').textContent = 'Kayolduğun için teşekkürler ' + document.getElementById('name').value + ' !';
});

