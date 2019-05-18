// users must have an accoutn

var hasAccount = false;

document.addEventListener('click',function(e){

            if (e.target && e.target.id== 'btn1') {

              if ( !hasAccount){
                alert("You must have an account before you can create a event");
              }

              else{
                alert("creating and event");
                window.location.replace("RUHack-master\RUHack-master\formEvent.html");
          document.getElementById('create').style.display = "block";


              }

            }
            else if (e.target && e.target.id== 'btn2') {
                // do something here when create event button is clicked
                hasAccount = true;
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

// for the second buttons

var btn2 = document.getElementById("myBtn2");
// When the user clicks on the button, open the modal
btn.onclick = function() {

  modal.style.display = "block";
}

btn2.onclick = function(){

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

function login(form) {
    var ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function() {
        if (ajax.readyState == 4 && ajax.status == 200) {
            var data = JSON.parse(this.responseText);
            var database = data.role;
            if (database == 1) {
                hasAccount = true;
            } else if (database == 0) {
                alert("INVALID USERNAME AND PASSWORD");
            }
            return;
        }
    }
    ajax.open("POST", "index.php", true);
    ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    ajax.send("request_id=LOGIN" +
        "&username=" + form.username.value +
        "&password=" + form.password.value);
}
