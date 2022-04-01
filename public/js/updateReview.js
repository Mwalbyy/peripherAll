// Script for updating reviews.
async function updateFormHandler(event) {
    event.preventDefault();

    // Calling the inputs from edit-update-review.handlebars.
    const stars = document.querySelector('#rating-entry').value.trim(); // Variable for rating input.
    const text = document.querySelector('#review-entry').value.trim(); // Variable for review input.

    // Retrieves the search key in the url into a variable.
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    const response = await fetch("/api/review/" +  `${id}`, {
        method: "PUT",
        body: JSON.stringify({
            // TODO: Make user_id dynamic.
            id: id,
            text,
            stars,
        }),
        headers: {
            "Content-Type": 'application/json',
        },
    });

    // If response is good, then refresh page to same page once review is submitted.
    if (response.ok) {
        document.location.replace('/dashboard/');
    // If not, give response error number.
    } else {
        alert(response.statusText);
    }
};

document.querySelector(".update-review-form").addEventListener('submit', updateFormHandler);