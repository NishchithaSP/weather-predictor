document.addEventListener('DOMContentLoaded', function () {
    const weatherText = document.getElementById('weather-text');
    const weatherButton = document.getElementById('weather-button');
    const loadingSpinner = document.getElementById('loading-spinner');
    const result = document.getElementById('result');
    const dateDayElement = document.getElementById('date-day'); // Get the date-day element

    // Function to get the current date and day
    function getCurrentDateAndDay() {
        const currentDate = new Date();
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        return currentDate.toLocaleDateString('en-US', options);
    }

    // Display the current date and day
    dateDayElement.textContent = getCurrentDateAndDay();

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
