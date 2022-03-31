async function submitFormHandler(event) {
    event.preventDefault();

    const title = document.querySelector('input[name = "review-title"]').value.trim();
    const description = document.querySelector('input[name = "review-description"]').value.trim();

    const response = await fetch("/api/review", {
        method: "Post",
        body: JSON.stringify({
            title,
            description,
        }),
        headers: {
            "Content-Type": 'application/json',
        },
    });

    if (response.ok) {
        document.location.replace('/review');
    } else {
        alert(response.statusText);
    }
};

document.querySelector("#new-review-form").addEventListener('submit', submitFormHandler);