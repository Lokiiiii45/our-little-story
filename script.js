/* =========================
   PAGE NAVIGATION
========================= */
const TRACKER_URL = "https://script.google.com/macros/s/AKfycbwEFAvkXebIOf0pI9T_NY0TOkfHdrVFlWgt44vzRgk9jrPc80pgs0bl0QrhbXgw_aEs/exec";

function trackEvent(eventName) {
    fetch(`${TRACKER_URL}?event=${encodeURIComponent(eventName)}`)
        .catch(error => console.log("Tracking error:", error));
}

trackEvent("Website Opened");

function goToPage(pageNumber) {

    // Hide every page
    document.querySelectorAll(".page").forEach(page => {
        page.style.display = "none";
    });

    // Find selected page
    const selectedPage = document.getElementById(
        "page" + pageNumber
    );

    // Show selected page
    if (selectedPage) {
        selectedPage.style.display = "flex";
    }

}


/* =========================
   PAGE 9 - YES
========================= */

function dateYes() {

    const response =
        document.getElementById("date-response");

    const datePicker =
        document.getElementById("date-picker");


    if (response) {

        response.innerHTML =
            "Yesss! ❤️<br>" +
            "You just made me smile. 🥹❤️<br>" +
            "Now let's choose our date. 📅🌹";

    }


    if (datePicker) {

        datePicker.style.display = "block";

    }

}


/* =========================
   PAGE 9 - MAYBE
========================= */

function dateMaybe() {

    const response =
        document.getElementById("date-response");


    if (response) {

        response.innerHTML =
            "I'll take that as a cute little 'maybe'... 👀❤️<br>" +
            "I'll wait patiently. 🌹";

    }

}


/* =========================
   CONFIRM DATE
========================= */

function confirmDate() {

    const day =
        document.getElementById("date-day").value;

    const month =
        document.getElementById("date-month").value;

    const year =
        document.getElementById("date-year").value;

    const time =
        document.getElementById("date-time").value;

    const result =
        document.getElementById("confirmed-date");


    // Check whether everything is selected
    if (!day || !month || !year || !time) {

        result.innerHTML =
            "Please choose the complete date ❤️";

        return;

    }
trackEvent(`Date Selected: ${day} ${month} ${year} at ${time}`);

    // Show final confirmation
    result.innerHTML =
        `It's a date! ❤️<br><br>
        📅 ${day} ${month} ${year}<br>
        ⏰ ${time}<br><br>
        I can't wait to see you. 🌹❤️`;

}


/* =========================
   START WEBSITE
========================= */

document.addEventListener("DOMContentLoaded", function () {

    // Always start from Page 1
    goToPage(1);

});
function goToPage(pageNumber) {

    document.querySelectorAll(".page").forEach(page => {
        page.style.display = "none";
    });

    const selectedPage = document.getElementById(
        "page" + pageNumber
    );

    if (selectedPage) {
        selectedPage.style.display = "flex";

        if (pageNumber === 9) {
            selectedPage.scrollTop = 0;
        }
    }
}