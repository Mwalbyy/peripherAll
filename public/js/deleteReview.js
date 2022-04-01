// TODO NEEDS PLANNING
// Script for deleting reviews.
async function deleteFormHandler(event) {
    event.preventDefault();

    // Retrieves the search key in the url into a variable.
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    const response = await fetch("/api/review/" + `${id}`, {
        method: "DELETE",
        body: JSON.stringify({
            id : id,
        }),
        headers: {
            "Content-Type": 'application/json',
        },
    });

    // If response is good, then refresh page to same page once review is submitted.
    if (response.ok) {
        document.location.replace('dashboard/');
    // If not, give response error number.
    } else {
        alert(response.statusText);
    }
};

document.querySelector(".delete-review-btn").addEventListener('click', deleteFormHandler);