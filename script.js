document.addEventListener('DOMContentLoaded', function () {
    // Set default event date to next New Year's Eve
    const nextYear = new Date().getFullYear() + 1;
    const defaultDate = `${nextYear}-01-01T00:00`;
    document.getElementById('eventDate').value = defaultDate;

    // Format the displayed date
    const eventDate = new Date(defaultDate);
    document.getElementById('currentDate').textContent = formatDate(eventDate);

    let countdownInterval;
    let targetDate = eventDate;

    // Start the countdown
    startCountdown();

    // Set event button click handler
    document.getElementById('setEvent').addEventListener('click', function () {
        const eventName = document.getElementById('eventName').value;
        const dateTime = document.getElementById('eventDate').value;

        if (!eventName || !dateTime) {
            alert('Please enter both event name and date/time');
            return;
        }

        targetDate = new Date(dateTime);

        if (targetDate <= new Date()) {
            alert('Please select a future date and time');
            return;
        }

        document.getElementById('currentEvent').textContent = eventName;
        document.getElementById('currentDate').textContent = formatDate(targetDate);

        // Restart the countdown with new date
        clearInterval(countdownInterval);
        startCountdown();
    });

    function startCountdown() {
        countdownInterval = setInterval(updateCountdown, 1000);
        updateCountdown(); // Initial call
    }

    function updateCountdown() {
        const now = new Date();
        const timeRemaining = targetDate - now;

        if (timeRemaining <= 0) {
            clearInterval(countdownInterval);
            document.getElementById('days').textContent = '00';
            document.getElementById('hours').textContent = '00';
            document.getElementById('minutes').textContent = '00';
            document.getElementById('seconds').textContent = '00';

            // Add flashing animation to celebrate
            document.querySelectorAll('.countdown-value').forEach(el => {
                el.classList.add('flashing');
            });

            return;
        }

        // Remove flashing if it was added
        document.querySelectorAll('.countdown-value').forEach(el => {
            el.classList.remove('flashing');
        });

        // Calculate time units
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        // Update display
        document.getElementById('days').textContent = days.toString().padStart(2, '0');
        document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
        document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');

        // Update progress bar
        const totalTime = targetDate - new Date(targetDate.getFullYear(), 0, 1);
        const elapsedTime = now - new Date(targetDate.getFullYear(), 0, 1);
        const progressPercent = (elapsedTime / totalTime) * 100;
        document.getElementById('progress').style.width = `${Math.min(progressPercent, 100)}%`;
    }

    function formatDate(date) {
        const options = {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        };
        return date.toLocaleDateString('en-US', options);
    }
});