

document.addEventListener('click',function(e){
            if (e.target && e.target.id== 'btn1') {
              alert("creating and event");
				document.getElementById('create').style.display = "block";

            }
            else if (e.target && e.target.id== 'btn2') {
                // do something here when create event button is clicked
                alert("login or signup!");
            }
			//Function to Hide Popup
			function div_hide(){
			document.getElementById('create').style.display = "none";
			}
        }); // end of document listener



// add java sript of the event handlerers for the events the Modal
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
