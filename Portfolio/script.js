document.documentElement.classList.add("scroll-reveal-enabled");

document.addEventListener("DOMContentLoaded", () => {
    const revealSelectors = [
        ".section-heading",
        ".education-title",
        ".education .slider-container",
        ".about-title",
        ".about-content > p",
        ".experience-title",
        ".experience-card",
        ".projects-title",
        ".project-card",
        ".skills-title",
        ".skill-card",
        ".section-title",
        ".certificate-card",
        ".contact-title",
        ".contact-subtitle",
        ".contact-card"
    ];

    const revealElements = document.querySelectorAll(revealSelectors.join(","));
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const compactViewport = window.matchMedia("(max-width: 1024px)").matches;

    revealElements.forEach((element, index) => {
        element.classList.add("scroll-reveal-pending");
        element.style.setProperty("--reveal-delay", `${(index % 4) * 120}ms`);
    });

    const showElement = (element) => {
        element.classList.remove("scroll-reveal-pending");

        if (reduceMotion) {
            element.style.removeProperty("--reveal-delay");
            return;
        }

        element.classList.add("scroll-reveal-active");

        const finishReveal = (event) => {
            if (
                event.target !== element ||
                event.animationName !== "scrollRevealUp" ||
                event.pseudoElement
            ) {
                return;
            }

            element.classList.remove("scroll-reveal-active");
            element.style.removeProperty("--reveal-delay");
            element.removeEventListener("animationend", finishReveal);
        };

        element.addEventListener("animationend", finishReveal);
    };

    if (reduceMotion || !("IntersectionObserver" in window)) {
        revealElements.forEach(showElement);
        return;
    }

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) {
                    return;
                }

                showElement(entry.target);
                observer.unobserve(entry.target);
            });
        },
        {
            threshold: compactViewport ? 0.08 : 0.15,
            rootMargin: compactViewport
                ? "0px 0px -3% 0px"
                : "0px 0px -8% 0px"
        }
    );

    revealElements.forEach((element) => observer.observe(element));
});
