function dropDown() {
    document.getElementById('dropDownId').classList.toggle("show")
    document.getElementById('caret-drop').classList.toggle("caretRotate")    
  }

function loginDrop() {
  document.getElementById('dropDownLoginId').classList.toggle("show")
}
  // window.onclick = function(event) {
  //   if (!event.target.matches('.dropDownBtn')) {
  //     document.getElementById('dropDownId').classList.toggle("show")
  //     for (let i = 0; i < dropDowns.length; i++) {
  //       const openDropdown = dropDowns[i];
  //       if (openDropdown.classList.contains('show')) {
  //         openDropdown.classList.remove('show');
  //       }
  //     }
  //   }
  // }
  let slideIndex = 1;
  showSlides(slideIndex);
  
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
  }