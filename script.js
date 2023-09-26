document.addEventListener('DOMContentLoaded', function () {
    const weatherText = document.getElementById('weather-text');
    const weatherButton = document.getElementById('weather-button');
    const loadingSpinner = document.getElementById('loading-spinner');
    const result = document.getElementById('result');

    weatherButton.addEventListener('click', function () {
        weatherText.style.display = 'none';
        weatherButton.style.display = 'none';
        loadingSpinner.style.display = 'block';

        setTimeout(function () {
            loadingSpinner.style.display = 'none';
            result.style.display = 'block';
        }, 3000); // 3 seconds timeout
    });
});
