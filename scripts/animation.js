// HOME PAGE ANIMATION
document.addEventListener("DOMContentLoaded", () => {
    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.2,
    };

    const animateOnScroll = (entries, observer) => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                entry.target.classList.add("animate");
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(animateOnScroll, observerOptions);

    const heroText = document.querySelector(".hero-text");
    if(heroText) observer.observe(heroText);

    const visitUs = document.querySelector(".visit-us");
    if(visitUs) observer.observe(visitUs);

    const cards = document.querySelectorAll(".featured-card");
    cards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.15}s`;
        observer.observe(card);
    });
});

// PRODUCT PAGE ANIMATION
document.addEventListener("DOMContentLoaded", () => {
    const productCards = document.querySelectorAll(".product-card");

    productCards.forEach(card => {
        card.style.opacity = "0";
        card.style.transform = "scale(0.8)";
    });

    const animateProducts = (entries, observer) => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                productCards.forEach((card, index) => {
                    card.style.transition = "transform 0.5s ease, opacity 0.5s ease";
                    card.style.transitionDelay = `${index * 0.15}s`;
                    card.style.opacity = "1";
                    card.style.transform = "scale(1)";
                });
                observer.disconnect();
            }
        });
    };

    const options = { threshold: 0.3 };
    const observer = new IntersectionObserver(animateProducts, options);
    productCards.forEach(card => observer.observe(card));
});

// TESTIMONIAL PAGE ANIMATION
document.addEventListener("DOMContentLoaded", () => {
    const testimonialCards = document.querySelectorAll(".testimonial-card");

    testimonialCards.forEach(card => {
        card.style.opacity = "0";
        card.style.transform = "translateY(2rem)";
    });

    const animateTestimonials = (entries, observer) => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                testimonialCards.forEach((card, index) => {
                    card.style.transition = "transform 0.5s ease, opacity 0.5s ease";
                    card.style.transitionDelay = `${index * 0.15}s`;
                    card.style.opacity = "1";
                    card.style.transform = "translateY(0)";
                });
                observer.disconnect();
            }
        });
    };

    const options = { threshold: 0.3 };
    const observer = new IntersectionObserver(animateTestimonials, options);
    testimonialCards.forEach(card => observer.observe(card));
});

// ABOUT PAGE ANIMATION
document.addEventListener("DOMContentLoaded", () => {
    const aboutSection = document.querySelector("#about");
    const aboutImage = aboutSection.querySelector(".about-img");
    const aboutText = aboutSection.querySelector(".about-details");

    aboutImage.style.transform = "scale(0.98)";
    aboutText.style.opacity = "0";
    aboutText.style.transform = "translateY(2rem)";
    aboutText.style.transition = "opacity 0.6s ease, transform 0.6s ease";

    const observer = new IntersectionObserver(
        (entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    aboutImage.style.transition = "transform 0.6s ease";
                    aboutImage.style.transform = "scale(1)";
                    aboutText.style.opacity = "1";
                    aboutText.style.transform = "translateY(0)";
                    obs.disconnect();
                }
            });
        },
        { threshold: 0.3 }
    );

    observer.observe(aboutSection);
});

// BLOG PAGE ANIMATION
document.addEventListener("DOMContentLoaded", () => {
    const blogCards = document.querySelectorAll("#blog .blog-card");

    blogCards.forEach(card => {
        card.style.opacity = "0";
        card.style.transform = "translateY(2rem)";
        card.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    });

    const observer = new IntersectionObserver(
        (entries, obs) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.opacity = "1";
                        entry.target.style.transform = "translateY(0)";
                    }, index * 150);
                    obs.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.3 }
    );

    blogCards.forEach(card => observer.observe(card));
});

// CONTACT PAGE ANIMATION
document.addEventListener("DOMContentLoaded", () => {
    const contactElements = document.querySelectorAll("#contact .contact-message, #contact .message-form, #contact .contact-img-container");

    contactElements.forEach(el => {
        el.style.opacity = "0";
        el.style.transform = "translateY(2rem)";
        el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    });

    const observer = new IntersectionObserver(
        (entries, obs) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.opacity = "1";
                        entry.target.style.transform = "translateY(0)";
                    }, index * 200);
                    obs.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.3 }
    );

    contactElements.forEach(el => observer.observe(el));
});
