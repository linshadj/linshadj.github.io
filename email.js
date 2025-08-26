function handleFormSubmit(event) {
    event.preventDefault(); // Prevent default form submission

    const isValid = validateForm();

    if (isValid) {
        sendMail(); // Only send mail if validation passes
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("subject").value = "";
        document.getElementById("message").value = "";

    }
    
}



function validateForm() {
    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var subject = document.getElementById("subject").value.trim();
    var message = document.getElementById("message").value.trim();

    var errname = document.getElementById("err-name");
    var erremail = document.getElementById("err-email");
    var errsub = document.getElementById("err-subject");
    var errmss = document.getElementById("err-message");

    // Clear previous errors
    errname.textContent = "";
    erremail.textContent = "";    
    errsub.textContent = "";
    errmss.textContent = "";

    let isValid = true;

    // Username Validation
    if (name === "") {
        errname.textContent = "Username is required.";
        isValid = false;
    } else if (!/^[a-zA-Z][a-zA-Z0-9_]{1,19}$/.test(name)) {
        errname.textContent = "Name must start with a letter and be 2–20 characters long (letters, numbers, underscores).";
        isValid = false;
    }

    // Email Validation
    if (email === "") {
        erremail.textContent = "Email is required.";
        isValid = false;
    } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
        erremail.textContent = "Enter a valid email address.";
        isValid = false;
    }

    if (subject===""){
        errsub.textContent = "Subject is required.";
        isValid = false;
    }else if(!/^.{4,}$/.test(subject)){
        errsub.textContent = "Enter atleast 4 letter";
        isValid = false;
    }

    // Message validation
    if(message === ""){
        errmss.textContent = "Message is required.";
        isValid = false;
    }else if(!/^.{5,}$/.test(message)){
        errmss.textContent = "Enter atleast 5 letter";
        isValid = false;
    }

    // Stop form submission if invalid
    return isValid;
}


function sendMail(){
    

    let params = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        subject : document.getElementById("subject").value,
        message : document.getElementById("message").value,
    }
    emailjs.send("service_bxefvij","template_agu2ztg",params).then(showSuccess());

}

function showSuccess() {
    Swal.fire({
      title: 'Email Sent!',
      text: 'Your data has been saved.',
      icon: 'success',
      confirmButtonText: 'OK'
    });
  }