const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
    const trigger = window.innerHeight * 0.85;

    sections.forEach(section => {
        const top = section.getBoundingClientRect().top;

        if (top < trigger) {
            section.classList.add("active");
        }
    });
});

const videoContainer = document.querySelector('.certificates-background-video');
    const certificatesSection = document.querySelector('#certificates');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                videoContainer.style.opacity = '1';
            } else {
                videoContainer.style.opacity = '0';
            }
        });
    }, {
        threshold: 0.3
    });

    observer.observe(certificatesSection);
