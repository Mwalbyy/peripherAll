// *Testing 5 star review javascript.
const container = document.querySelector('.rating');
const items = container.querySelectorAll('.rating-item')

container.onclick = e => {
    const elClass = e.target.classList;
// change the rating if the user clicks on a different star
        if (!elClass.contains('active')) {
            items.forEach( // reset the active class on the star
            item => item.classList.remove('active')
     );
        console.log(e.target.getAttribute("data-rate"));

        elClass.add('active'); // add active class to the clicked star
    }
};