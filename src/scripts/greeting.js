document.addEventListener('DOMContentLoaded', function() {
    function updateGreeting() {
        const now = new Date();
        const hour = now.getHours();
        let greeting = '¡Hola!';

        if (hour >= 5 && hour < 12) {
            greeting = '¡Buenos días!';
        } else if (hour >= 12 && hour < 19) {
            greeting = '¡Buenas tardes!';
        } else {
            greeting = '¡Buenas noches!';
        }

        document.getElementById('greeting').textContent = greeting;
    }

    updateGreeting();
});
