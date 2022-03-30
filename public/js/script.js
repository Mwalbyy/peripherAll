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
  