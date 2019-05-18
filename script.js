document.addEventListener('click',function(e){

    if (e.target && e.target.id== 'btn1') {

    	document.getElementById('create').style.display = "block";

    }
    
    else if (e.target && e.target.id== 'btn2') {

        alert("connecting to database!");

        // do something here when login button is clicked
        let formData = new FormData();
        formData.append('indicator', 'testconnection');

        return fetch('35.196.158.3/accessDatabase.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            //body: JSON.stringify(JSON_DATA),
            body: formData,
            mode: 'no-cors'
        })
        .then((res) => res.json())
        .then((response) => {
            console.log(response);
            //document.getElementById("div2").innerHTML = "<h1>Exams Need Grading</h1><br>" + response.ankit + "<br><button id='gradeexam' class=\"btn\" type=\"button\">View Exam</button><br<br><br><br>";
        }); // end of fetch

    }

    //Function to Hide Popup
    function div_hide(){
        document.getElementById('create').style.display = "none";
    }


    }); // end of document listener
