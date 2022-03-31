async function submitFormHandler(event) {
    event.preventDefault();

    const text = document.querySelector('#review-entry').value.trim();


    const response = await fetch("/api/review", {
        method: "POST",
        body: JSON.stringify({
            text,
            user_id:1,
            stars:4,
            product_id:1,
        }),
        headers: {
            "Content-Type": 'application/json',
        },
    });

    if (response.ok) {
        document.location.replace('/api/product/1');
    } else {
        alert(response.statusText);
    }
};

document.querySelector("#new-review-form").addEventListener('submit', submitFormHandler);