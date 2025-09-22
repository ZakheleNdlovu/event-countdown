# Event Countdown Timer

A stylish, modern, and responsive web application that allows you to count down to your special events. Set a custom event name and date, and watch the seconds tick away in a visually appealing interface.

![Event Countdown Screenshot](screenshot.png) 
*(Note: You'll need to create a `screenshot.png` of your application for the image to display.)*

## Features

- **Custom Events**: Easily set the name and date/time for any future event.
- **Live Countdown**: Real-time countdown timer displaying remaining days, hours, minutes, and seconds.
- **Default Event**: Defaults to a countdown for the next New Year's Eve on first load.
- **Progress Bar**: A visual progress bar that shows how much time has passed since the beginning of the target year.
- **Responsive Design**: The layout adapts gracefully to desktop, tablet, and mobile screen sizes.
- **Sleek UI**: A modern design with a glassmorphism effect, gradient text, and smooth animations.
- **Completion Animation**: The countdown numbers flash when the event time is reached.

## Technologies Used

- **HTML5**: For the structure and content of the application.
- **CSS3**: For styling, including Flexbox, Grid, animations, and responsive design.
- **JavaScript (ES6+)**: For the countdown logic, DOM manipulation, and user interactions.

## How to Use

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/event-countdown.git
    ```

2.  **Navigate to the project directory:**
    ```bash
    cd event-countdown
    ```

3.  **Open `index.html` in your browser:**
    Simply open the `index.html` file in any modern web browser to start using the application.

## Setting an Event

1.  **Enter Event Name**: Type the name of your event into the "Event Name" input field.
2.  **Select Date & Time**: Click on the "Event Date & Time" input to open a date-time picker and select your desired future date and time.
3.  **Set Countdown**: Click the "Set Countdown" button. The timer and event details will update immediately.

## File Structure

```
event_countdown/
├── index.html      # The main HTML file
├── style.css       # All styles for the application
├── script.js       # The JavaScript logic for the countdown
└── README.md       # Project information
```

## Future Improvements

- Allow users to save multiple events (using Local Storage).
- Add sound notifications when the countdown finishes.
- Let users customize the background or theme.
