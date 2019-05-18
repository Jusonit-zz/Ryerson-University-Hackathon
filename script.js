document.addEventListener('click',function(e){
            if (e.target && e.target.id== 'btn1') {

                
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
