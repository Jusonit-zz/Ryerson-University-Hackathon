
// add java sript of the event handlerers for the events the Modal
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

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

function login(form) {
    var ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function() {
        if (ajax.readyState == 4 && ajax.status == 200) {
            var data = JSON.parse(this.responseText);
            var database = data.ID;
            if (database == 1) {
				alert("SUCCESSFUL");
            } else if (database == 0) {
                alert("INVALID USERNAME AND PASSWORD");
            }
            return;
        }
    }
    ajax.open("POST", "middle.php", true);
    ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	console.log(form.username.value);
	console.log(form.password.value);
    ajax.send("request_id=LOGIN" + "&username=" + form.username.value + "&password=" + form.password.value);
}
