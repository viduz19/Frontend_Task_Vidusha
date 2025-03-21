document.addEventListener("DOMContentLoaded", function () {
    const stats = document.querySelectorAll(".stat-box h2");
    
    stats.forEach(stat => {
        let startValue = 0;
        let endValue = parseInt(stat.textContent);
        let duration = 1000;
        let increment = endValue / (duration / 16);
        
        let counter = setInterval(() => {
            startValue += increment;
            if (startValue >= endValue) {
                stat.textContent = endValue;
                clearInterval(counter);
            } else {
                stat.textContent = Math.floor(startValue);
            }
        }, 16);
    });
});


