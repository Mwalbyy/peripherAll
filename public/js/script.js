function dropDown() {
    document.getElementById('dropDownId').classList.toggle("show")
    document.getElementById('caret-drop').classList.toggle("caretRotate")
}
window.onclick = function(event) {
    if (!event.target.matches('.dropDownBtn')) {
      const dropDowns = document.getElementsByClassName("dropdown");
      let i;
      for (i = 0; i < dropDowns.length; i++) {
        const openDropdown = dropDowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }