// profile image
var app = {
    imageHandler:function() {
        $("#upload").on('change', function() {
            //alert("alert");
            readUrl();
        });
        function readUrl (){
            var file = $("#upload")[0].files[0];
            //console.log(file);
            //reader interprets the file selected
            var reader = new FileReader();
                //console.log(reader.result);
            reader.onloadend = function (){
                //console.log(reader.result);
                $("#picture_preview").attr("src", reader.result);
                //$("#picture_preview")[0].src = "" + reader.results;
                //console.log($("#picture_preview"));
                //console.log(reader.result);
            }
            if(file){
                reader.readAsDataURL(file);
            }
        }
    }//end of imageHandler

}

app.imageHandler();

$("[data-toggle=popover]").popover({
    html: true, 
    content: function() {
        return $('#popover-content').html();
    }
});

// profile image end

    




// accordion
var acc = document.getElementsByClassName("__accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
        panel.style.maxHeight = null;
    } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        } 
    });
}
// end

// typed writer

document.addEventListener('DOMContentLoaded', function(){

    Typed.new("#typed", {
        stringsElement: document.getElementById('typed-strings'),
        typeSpeed: 100,
        backDelay: 600,
        backSpeed: 100,
        loop: true,
        contentType: 'html', // or text
        // defaults to null for infinite loop
        loopCount: null,
       
    });

});

// end

//for upload images

$(document).ready(function() {
  if (window.File && window.FileList && window.FileReader) {
    $("#files").on("change", function(e) {
      var files = e.target.files,
        filesLength = files.length;
      for (var i = 0; i < filesLength; i++) {
        var f = files[i]
        var fileReader = new FileReader();
        fileReader.onload = (function(e) {
          var file = e.target;
          $("<span class=\"pip\">" +
            "<img class=\"imageThumb\" src=\"" + e.target.result + "\" title=\"" + file.name + "\"/>" +
            "<br/><span class=\"remove\">Remove image</span>" +
            "</span>").insertAfter("#files");
          $(".remove").click(function(){
            $(this).parent(".pip").remove();
          });
          
          // Old code here
          /*$("<img></img>", {
            class: "imageThumb",
            src: e.target.result,
            title: file.name + " | Click to remove"
          }).insertAfter("#files").click(function(){$(this).remove();});*/
          
        });
        fileReader.readAsDataURL(f);
      }
    });
  } else {
    alert("Your browser doesn't support to File API")
  }
});

function myClicked(){
    document.getElementById('open').style.display ="block";
}
function myRemove(){
    document.getElementById('open').style.display ="none";

}

//end 




    





// register form validation2

function checkPass()
{
//Store the password field objects into variables ...
var pass1 = document.getElementById('pass1');
var pass2 = document.getElementById('pass2');
//Store the Confimation Message Object ...
var message = document.getElementById('confirmMessage');
//Set the colors we will be using ...
var goodColor = "#66cc66";
var badColor = "#ff6666";
//Compare the values in the password field 
//and the confirmation field
    if(pass1.value == pass2.value){
    //The passwords match. 
    //Set the color to the good color and inform
    //the user that they have entered the correct password 
    pass2.style.backgroundColor = goodColor;
    message.style.color = goodColor;
    message.innerHTML = "Passwords Match"
    }else{
    //The passwords do not match.
    //Set the color to the bad color and
    //notify the user.
    pass2.style.backgroundColor = badColor;
    message.style.color = badColor;
    message.innerHTML = "Password Do Not Match!"
    }
} 



function validatephone(phone) {
    var maintainplus = '';
    var numval = phone.value
    if ( numval.charAt(0)=='+' )
    {
    var maintainplus = '';
    }
    curphonevar = numval.replace(/[\\A-Za-z!"£$%^&\,*+_={};:'@#~,.Š\/<>?|`¬\]\[]/g,'');
    phone.value = maintainplus + curphonevar;
    var maintainplus = '';
    phone.focus;
}
// validates text only


function Validate(txt) {
    txt.value = txt.value.replace(/[^a-zA-Z-'\n\r.]+/g, '');
}

// validates password only
function pValidate(pass1) {
    pass1.value = pass1.value.replace(/[^a-zA-Z0-9-]+/g, '');
}

// validates password only
function pValidate(pass2) {
    pass2.value = pass2.value.replace(/[^a-zA-Z0-9-]+/g, '');
}

// validate email
function email_validate(email)
{
    var regMail = /^([_a-zA-Z0-9-]+)(\.[_a-zA-Z0-9-]+)*@([a-zA-Z0-9-]+\.)+([a-zA-Z]{2,3})$/;

    if(regMail.test(email) == false)
    {
        document.getElementById("status").innerHTML    = "<span class='warning'>Email address is not valid yet.</span>";
    }
    else
    {
        document.getElementById("status").innerHTML = "<span class='valid'>Thanks, you have entered a valid Email address!</span>"; 
    }

};

//Registration form validation2

   


//only number

$(document).ready(function () {
  //called when key is pressed in textbox
  $("#phone").keypress(function (e) {
     //if the letter is not digit then display error and don't type anything
     if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
        //display error message
        $("#errmsg").html("Numbers Only").show().fadeOut("slow");
               return false;
    }
   });
});
// end



// validate form
function validatepj() {

    // project validation

     // div 1

    if (document.myform.fullname.value == "") {
        $("#First-Div").css("display", "block");
        $("#Second-Div").css("display", "none");
        alert("Please provide your first name, last name");
        document.myform.fullname.focus();

        return false;
    }

    if (document.myform.email.value == "") {
        $("#First-Div").css("display", "block");
        $("#Second-Div").css("display", "none");
        alert("Please provide your email");
        document.myform.email.focus();
        return false;
    }
    

    if (document.myform.phone.value == "") {
        $("#First-Div").css("display", "block");
        $("#Second-Div").css("display", "none");
        alert("Please provide your phone Number");
        document.myform.phone.focus();
        return false;
    }

    // div 2

    if (document.myform.pkaddres.value == "") {
        $("#Second-Div").css("display", "block");
        $("#First-Div").css("display", "none");
        alert("Please provide your Pickup Address");
        document.myform.pkaddres.focus();
        return false;
    }

    

    if (document.myform.daddress.value == "") {
        $("#Second-Div").css("display", "block");
        $("#First-Div").css("display", "none");
        alert("Please tell us about your project");
        document.myform.daddress.focus();
        return false;
    }

    if (document.myform.datep.value == "") {
        $("#Second-Div").css("display", "block");
        $("#First-Div").css("display", "none");
        alert("Please select date to be delivered");
        document.myform.datep.focus();
        return false;
    }

    if (document.myform.timepicker1.value == "") {
        $("#Second-Div").css("display", "block");
        $("#First-Div").css("display", "none");
        alert("Please select time to be delivered");
        document.myform.timepicker1.focus();
        return false;
    }

    if (document.myform.files.value == "") {
        $("#Second-Div").css("display", "block");
        $("#First-Div").css("display", "none");
        alert("Please please provide picture of your goods");
        document.myform.files.focus();
        return false;
    }

    

    
    // return(true);
}


// end





function showNextForm() {
    $("#First-Div").css("display", "none");
    $("#Second-Div").css("display", "block");
};

function showNextForm1() {
    $("#Second-Div").css("display", "none");
    $("#Third-Div").css("display", "block");
};

function showNextForm2() {
    $("#Third-Div").css("display", "none");
    $("#Five-Div").css("display", "block");
};

function showNextForm3() {
    $("#Forth-Div").css("display", "none");
    $("#Five-Div").css("display", "block");
};

// previous 
function showPrevForm() {
    $("#Second-Div").css("display", "none");
    $("#First-Div").css("display", "block");
    $("#Forth-Div").css("display", "none");
};

function showPrevForm1() {
    $('#Third-Div').css("display", "none");
    $('#Second-Div').css("display", "block");
    $('#First-Div').css("display", "none");
    $("#Five-Div").css("display", "none");
    $("#Forth-Div").css("display", "none");
};

function showPrevForm2() {
    $("#Forth-Div").css("display", "block");
    $("#Third-Div").css("display", "none");
     $("#Five-Div").css("display", "none");
};


function showPrevForm3() {
    var ownerType = $('.__selectind').val();
    if (ownerType === 'developer') {
        $('#First-Div').css("display", "none");
        $('#Second-Div').css("display", "none");
        $('#Forth-Div').css("display", "none");
        $("#Five-Div").css("display", "none");
        $("#Third-Div").css("display", "block");
    }else if(ownerType === 'designer'){
        $('#Third-Div').css("display", "none");
        $('#Second-Div').css("display", "none");
        $('#First-Div').css("display", "none");
        $("#Five-Div").css("display", "none");
        $("#Forth-Div").css("display", "block");
    }
};


//date picker script
 $('.datepicker').datepicker({
     weekStart:1,
     format: 'dd-mm-yyyy',
     color: '#f0842d'
 });
 //end

 // time picker script
 $('#timepicker1').timepicki();
 // end

     

     




// end



