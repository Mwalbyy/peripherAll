// Script for deleting reviews.
async function deleteFormHandler(event) {
    event.preventDefault();

    // Retrieves the search key in the url into a variable.
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    const response = await fetch("/api/product/" + `${id}`, {
        method: "DELETE",
        body: JSON.stringify({
            id: id,
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

//TODO
document.querySelector("#new-review-form").addEventListener('submit', submitFormHandler);