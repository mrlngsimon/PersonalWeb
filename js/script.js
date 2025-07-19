const dots = document.querySelectorAll('.dot');
const sections = document.querySelectorAll('.section');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            dots.forEach(dot => {
                dot.classList.toggle('active', dot.getAttribute('href').slice(1) === id);
            });
        }
    });
}, {threshold: 0.6});

sections.forEach(section => observer.observe(section));