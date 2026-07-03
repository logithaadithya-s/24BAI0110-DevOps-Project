// ==========================
// COUNTDOWN TIMER
// ==========================

const eventDate = new Date("December 15, 2026 09:00:00").getTime();

const timer = document.getElementById("timer");

if (timer) {

    setInterval(function () {

        const now = new Date().getTime();

        const distance = eventDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));

        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        timer.innerHTML =
            days + " Days " +
            hours + " Hours " +
            minutes + " Minutes " +
            seconds + " Seconds";

        if (distance < 0) {

            timer.innerHTML = "The Symposium Has Started!";

        }

    }, 1000);

}

// ==========================
// SMOOTH SCROLL
// ==========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});

// ==========================
// REGISTRATION FORM
// ==========================

const form = document.querySelector("form");

if (form) {

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        alert("Registration Successful!\n\nThank you for registering for VIT Tech Symposium 2026.");

        form.reset();

    });

}

// ==========================
// CARD HOVER EFFECT
// ==========================

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-10px) scale(1.03)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0px) scale(1)";

    });

});

// ==========================
// NAVBAR SHADOW ON SCROLL
// ==========================

window.addEventListener("scroll", function () {

    const header = document.querySelector("header");

    if (window.scrollY > 50) {

        header.style.boxShadow = "0px 5px 15px rgba(0,0,0,0.3)";

    } else {

        header.style.boxShadow = "none";

    }

});

// ==========================
// PAGE LOADED
// ==========================

window.onload = function () {

    console.log("VIT Tech Symposium Website Loaded Successfully.");

};