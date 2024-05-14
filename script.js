document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
                observer.unobserve(entry.target); // Stop observing once the animation has started
            }
        });
    }, {
        threshold: 0.1 // Adjust this value as needed
    });

    const targetElements = document.querySelectorAll('.RightSideImage');
    targetElements.forEach(target => {
        target.style.animationPlayState = 'paused'; // Initially pause the animation
        observer.observe(target);
    });
});