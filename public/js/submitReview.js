
// Script for submitting reviews.
async function submitFormHandler(event) {
    event.preventDefault();

    // Calling the inputs from submit-review.handlebars.
    const stars = document.querySelector('#rating-entry').value.trim(); // Variable for rating input.
    const text = document.querySelector('#review-entry').value.trim(); // Variable for review input.

    // Retrieves the search key in the url into a variable.
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];
git 
    const response = await fetch("/api/review", {
        
        method: "POST",
        
        body: JSON.stringify({
            // TODO: Make user_id dynamic.
            // user_id: 2,
            text,
            stars,
            product_id: id,
        }),
        headers: {
            "Content-Type": 'application/json',
        },
    });

    // If response is good, then refresh page to same page once review is submitted.
    if (response.ok) {
        document.location.replace('/api/product/' + `${id}`);
    // If not, give response error number.
    } else {
        alert(response.statusText);
    }
};

document.querySelector("#new-review-form").addEventListener('submit', submitFormHandler);